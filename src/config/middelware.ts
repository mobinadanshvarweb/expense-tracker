const saveToLocalStorage = (store: any) => (next: any) => (action: any) => {
  const result = next(action); // ادامه دادن به پردازش اکشن

  // زمانی که اکشن setReminder یا setCategories اجرا می‌شود، داده‌ها را در localStorage ذخیره می‌کنیم
  if (
    action.type === "reminder/setReminder" ||
    action.type === "reminder/setCategories"
  ) {
    const reminders = store.getState().reminder.reminder;
    localStorage.setItem("reminders", JSON.stringify(reminders));

    const categories = store.getState().reminder.categories;
    localStorage.setItem("categories", JSON.stringify(categories));
  }

  return result;
};

export default saveToLocalStorage;
