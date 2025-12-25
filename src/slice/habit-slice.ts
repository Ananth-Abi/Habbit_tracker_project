import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],

}

const habitSlice = createSlice({
    name: "habits",
    initialState,
    // We'll hve the actions here in the reducer
    reducers: {
        addHabit: (state, action: PayloadAction<{name: string, frequency: "daily" | "weekly"}>) => {
            const newHabit: Habit = {
                id: crypto.randomUUID(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString()
            }

            state.habits.push(newHabit);
        },
        toggleHabit: (
            state,
            action: PayLoadAction<{id: string; date: string}>
        ) => {
            const habit = state.habits.find((h) => h.id === action.payLoad.id);

            if (habit) {
                const index = habit.completedDates.indexOf(action.payLoad.date);
                if (index > -1) {
                    habit.completedDates.splice(index, 1);
                } else {
                    habit.completedDates.push(action.payLoad.date);
                }
            }
        },
    }
})

export const {addHabit} = habitSlice.actions;

export default habitSlice.reducer;