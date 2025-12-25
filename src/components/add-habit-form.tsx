import { Box,Button,FormControl,InputLabel,MenuItem,Select,TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { addHabit } from "../slice/habit-slice";

// In typescript
// React.FC ensures that this is function component
const AddHabitForm: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [frequency, setFrequency] = React.useState<"daily" | "weekly">("daily");
  const dispatch = useDispatch<AppDispatch>();
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
        dispatch(addHabit({
            name,
            frequency,
        }));
        setName("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
            }}
        >
            <TextField 
                label="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter habit name"
                fullWidth
            />
            <FormControl>
                <InputLabel>Frequency</InputLabel>
                <Select value={frequency}
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
                Add Habit
            </Button>
        </Box>
    </form>
    );
};

export default AddHabitForm;
