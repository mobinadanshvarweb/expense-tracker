import { useState } from "react";
import Icon from "./Icon";
import LogoutHolder from "./LogoutHolder";

const Header = () => {
  const [close, setClose] = useState(false);
  return (
    <div className="w-full flex justify-between items-center  shadow-lg mb-2 p-3">
      <span className="flex flex-col relative flex-1 ">
        <span
          onClick={() => {
            setClose(!close);
          }}
        >
          <Icon height={37} width={37} src="/icon/account.svg" />
        </span>
        {close && (
          <LogoutHolder
            onclick={() => {
              setClose(false);
            }}
          />
        )}
      </span>
      <img
        src="/logo/logo3.webp"
        alt=""
        className="w-10 h-10 rounded-full object-fill cursor-pointer"
      />
    </div>
  );
};

export default Header;
