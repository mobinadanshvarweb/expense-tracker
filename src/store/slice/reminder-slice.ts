import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reminderCategory } from "../../data/reminder-category";

export interface ReminderState {
  name: string;
  description: string;
  selected: { name: string };
  amount: string;
  counterparty: string;
  category: string;
  date: Date;

  categories: Array<{ name: string }>;
  reminder: Array<{
    id: number;
    name: string;
    description: string;
    amount: string;
    counterparty: string;
    selected: { name: string };
    date: Date;
  }>;
}

const initialState: ReminderState = {
  name: "",
  description: "",
  amount: "",
  counterparty: "",
  selected: { name: "" },
  category: "",
  date: new Date(),
  categories: (() => {
    const storedCategories = JSON.parse(
      localStorage.getItem("categories") || "[]"
    );
    // اگر هیچ داده‌ای نباشه، از reminderCategory استفاده کنیم
    return storedCategories.length > 0
      ? storedCategories
      : [...reminderCategory];
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
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setCounterparty: (state, action) => {
      state.counterparty = action.payload;
    },
    setSelected(state, action: PayloadAction<{ name: string }>) {
      state.selected = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setCategories: (state) => {
      if (state.category.trim() !== "") {
        // بررسی اینکه آیا این دسته قبلاً در دسته‌ها وجود دارد یا خیر
        const categoryExists = state.categories.some(
          (category) => category.name === state.category
        );

        if (!categoryExists) {
          // اگر دسته جدید است، آن را به لیست اضافه کنیم
          state.categories.push({ name: state.category });
          // فقط دسته‌های جدید را در localStorage ذخیره می‌کنیم
          localStorage.setItem("categories", JSON.stringify(state.categories));
        }

        state.category = ""; // پاک کردن ورودی category بعد از افزودن
      }
    },

    setReminder: (state, action) => {
      state.reminder = action.payload;
      localStorage.setItem("reminders", JSON.stringify(state.reminder));
    },
    resetReminder: (state) => {
      state.name = "";
      state.description = "";
      state.amount = "";
      state.counterparty = "";
      state.selected.name = "";
      state.date = new Date();
    },
  },
});

export const {
  setName,
  setDescription,
  setAmount,
  setCounterparty,
  setSelected,
  setCategory,
  setDate,
  setCategories,
  setReminder,
  resetReminder,
} = reminderSlice.actions;

export default reminderSlice.reducer;
