import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { toggleHabit, removeHabbit, type Habit } from "../slice/habit-slice";
import { Box, Button, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DeleteIcon from "@mui/icons-material/Delete"


const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);

  const today = new Date().toISOString().split("T")[0];

  const getStreak = (habit: Habit) => {
    let streak = 0;
    const currentDate = new Date();

    while (true) {
        const dateString = currentDate.toISOString().split("T")[0];

        if (habit.completedDates.includes(dateString)) {
            streak++;
            currentDate.setDate(currentDate.getDate() - 1);
        } else {
            break;
        }
    }
    return streak;
  } 

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid xs={12} sm={6}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{textTransform: "capitalize"}}>
                {habit.frequency}
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={12} sm={6}>
            <Box sx={{display: "flex", justifyContent: "flex-end", gap: 1}}>
                <Button
                    variant="outlined"
                    color={
                        habit.completedDates.includes(today)
                        ? "success" 
                        : "primary"
                    }
                    startIcon={<CheckCircleIcon />}
                    onClick={() => {
                        dispatch(toggleHabit({id: habit.id, date: today}))
                    }}
                >{habit.completedDates.includes(today) 
                    ? "Completed"
                    : "Mark Completed"}
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => dispatch(removeHabbit({ id: habit.id, date: today }))}
                >
                    Remove
                    
                </Button>
            </Box>
          </Grid>
          <Box
            sx={{mit: 2}}
          >
            <Typography variant="body2">
                Current Streak: {getStreak(habit)} days
            </Typography>
            <LinearProgress
                variant="determinate"
                value={(getStreak(habit) / 30) * 100}
                sx={{mt: 1}}
            />
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
