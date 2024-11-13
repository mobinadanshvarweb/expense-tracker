import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSignUp } from "../../store/slice/sign-up-slice";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

  const handleSingUp = () => {
    const existingUser = storedUsers.find(
      (u: { username: string }) => u.username === user.username
    );

    if (user.username === "" || user.password === "") {
      setError("Please fill in both fields!");
    } else if (existingUser) {
      setError("Username already exists!");
    } else {
      const newUser = { username: user.username, password: user.password };
      storedUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(storedUsers));

      setError(null);

      dispatch(setSignUp(newUser));
      setUser({ username: "", password: "" });
      navigate("/reminder");
    }
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
            value={user.username}
            placeholder="USER NAME"
            className={clsx(
              "p-2 bg-[#defbeb] focus:bg-lightorangy outline-none rounded-lg border border-darkorangy w-full text-darky",
              {
                "border-2 border-red-600": error !== null,
              }
            )}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            placeholder="PASSWORD"
            className={clsx(
              "p-2 bg-[#e9ffef] focus:bg-lightorangy outline-none rounded-lg border border-darkorangy w-full text-darky",
              {
                "border-2 border-red-600": error !== null,
              }
            )}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {error && <span className="text-red-600">{error}</span>}
        </div>
        <button
          onClick={handleSingUp}
          className={clsx(
            "w-full py-3 rounded-lg flex justify-center items-center text-darky bg-darkorangy font-bold"
          )}
        >
          Sign Up
        </button>

        <Link to={"/login"} className="underline w-fit text-easy">
          Already have account? LOGIN
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
