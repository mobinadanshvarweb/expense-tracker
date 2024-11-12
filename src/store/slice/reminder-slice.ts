import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reminderCategory } from "../../data/reminder-category";

export interface ReminderState {
  name: string;
  description: string;
  selected: { name: string };
  category: string;
  categories: Array<{ name: string }>;
  reminder: Array<{
    id: number;
    name: string;
    description: string;
    selected: string;
  }>;
}

const initialState: ReminderState = {
  name: "",
  description: "",
  selected: { name: "" },
  category: "",
  categories: (() => {
    const storedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );

    return [...reminderCategory, ...storedCategories];
  })(),
  reminder: JSON.parse(localStorage.getItem("reminders") || "[]") || [],
};

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setSelected(state, action: PayloadAction<{ name: string }>) {
      state.selected = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setCategories: (state) => {
      if (state.category.trim() !== "") {
        state.categories.push({ name: state.category });
        localStorage.setItem("categories", JSON.stringify(state.categories));
        state.category = "";
      }
    },
    setReminder: (state, action) => {
      state.reminder = action.payload;
      localStorage.setItem("reminders", JSON.stringify(state.reminder));
    },
  },
});

export const {
  setName,
  setDescription,
  setSelected,
  setCategory,
  setCategories,
  setReminder,
} = reminderSlice.actions;

export default reminderSlice.reducer;
