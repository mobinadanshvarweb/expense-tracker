import { Link } from "react-router-dom";
import Icon from "./Icon";

const Header = () => {
  return (
    <Link
      to="/account"
      className="w-full flex justify-between items-center  shadow-lg mb-2 p-3"
    >
      <Icon height={37} width={37} src="/icon/account.svg" />
      <img
        src="/logo/logo3.webp"
        alt=""
        className="w-10 h-10 rounded-full object-fill cursor-pointer"
      />
    </Link>
  );
};

export default Header;
