import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin, setLoginError } from "../../store/slice/login-slice";
import { RootState } from "../../store/store";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت به صفحه home
  const loginError = useSelector((state: RootState) => state.login.loginError);
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    if (loginUser.username === "" || loginUser.password === "") {
      dispatch(setLoginError("Please fill in both fields"));
    } else {
      dispatch(setLogin(loginUser)); // در اینجا درخواست می‌کنیم که لاگین شود
    }
    if (!loginError && loginUser.username && loginUser.password) {
      // وقتی که لاگین موفق بود، به صفحه‌ی home ریدایرکت می‌شه
      navigate("/home");
    }
  };

  // بررسی و نمایش خطا
  const handleError = (error: string) => {
    if (error) {
      return <span className="text-red-500">{error}</span>;
    }
    return null;
  };

  return (
    <div className="w-full min-h-screen flex  bg-darky justify-center items-center">
      <div className="w-[90%] flex flex-col gap-6 justify-center items-center">
        <h1 className="text-darkorangy font-extrabold  w-full text-3xl flex justify-center items-center">
          Expense Tracker
        </h1>
        <div className="flex flex-col w-full gap-2">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="USER NAME"
            className="p-2 bg-[#defbeb] focus:bg-lightorangy outline-none rounded-lg border border-darkorangy w-full text-darky"
            onChange={(e) => {
              setLoginUser({ ...loginUser, username: e.target.value });
              dispatch(setLoginError("")); // خطا را پاک می‌کنیم
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            className="p-2 bg-[#e9ffef] focus:bg-lightorangy outline-none rounded-lg border border-darkorangy w-full text-darky"
            onChange={(e) => {
              setLoginUser({ ...loginUser, password: e.target.value });
              dispatch(setLoginError("")); // خطا را پاک می‌کنیم
            }}
          />
        </div>
        {handleError(loginError)} {/* نمایش خطا */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg flex justify-center items-center text-darky bg-darkorangy font-bold"
        >
          Login
        </button>
        <Link to={"/signup"} className="underline w-fit text-easy">
          Don't have account? SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default Login;
