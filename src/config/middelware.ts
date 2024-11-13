import { User } from "../store/slice/sign-up-slice";

const saveToLocalStorage = (store: any) => (next: any) => (action: any) => {
  const result = next(action); // ادامه دادن به پردازش اکشن

  if (action.type === "signup/setSignUp") {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // بررسی یوزرنیم تکراری
    const existingUser = storedUsers.find(
      (u: User) => u.username === action.payload.username
    );

    if (existingUser) {
      store.dispatch({
        type: "signup/setError",
        payload: "Username already exists!",
      });
    } else {
      storedUsers.push(action.payload);
      localStorage.setItem("users", JSON.stringify(storedUsers));

      // خطا را پاک کنید
      store.dispatch({
        type: "signup/setError",
        payload: null,
      });
    }
  }
  if (action.type === "login/setLogin") {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

    // پیدا کردن کاربر با یوزرنیم
    const existingUser = storedUsers.find(
      (u: User) => u.username === action.payload.username
    );

    // بررسی وجود کاربر
    if (!existingUser) {
      store.dispatch({
        type: "login/setLoginError",
        payload: "User does not exist",
      });
    } else if (existingUser.password !== action.payload.password) {
      // بررسی پسورد
      store.dispatch({
        type: "login/setLoginError",
        payload: "Incorrect password",
      });
    } else {
      // همه چیز درست بود، کاربر لاگین شد
      store.dispatch({
        type: "login/setLoginError",
        payload: "",
      });
      localStorage.setItem("login", JSON.stringify(action.payload));
    }
  }

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

// export default saveToLocalStorage;

// const saveToLocalStorage = (store: any) => (next: any) => (action: any) => {
//   const result = next(action);

//   if (
//     action.type === "reminder/setReminder" ||
//     action.type === "reminder/setCategories"
//   ) {
//     const reminders = store.getState().reminder.reminder;
//     localStorage.setItem("reminders", JSON.stringify(reminders));

//     const categories = store.getState().reminder.categories;
//     localStorage.setItem("categories", JSON.stringify(categories));
//   }

//   return result;
// };

// export default saveToLocalStorage;
