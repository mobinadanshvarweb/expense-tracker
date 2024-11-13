import { Link } from "react-router-dom";

const LogoutHolder = ({ onclick }: { onclick: () => void }) => {
  return (
    <div
      onClick={onclick}
      className="w-full min-h-screen  absolute top-0 left-0 flex z-10 "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col gap-4 p-5  rounded-lg shadow-2xl h-fit bg-white absolute top-8"
      >
        <Link
          to="/login"
          className="w-full flex justify-center items-center gap-2  cursor-pointer hover:bg-easy duration-300 rounded px-2"
        >
          <span>Log Out</span>
        </Link>
        <span className="flex w-full h-[0.5px] bg-darky"></span>
        <Link
          onClick={onclick}
          to="/account"
          className="w-full flex justify-center items-center gap-2 cursor-pointer hover:bg-easy duration-300 rounded px-2"
        >
          <span>Account</span>
        </Link>
      </div>
    </div>
  );
};

export default LogoutHolder;
