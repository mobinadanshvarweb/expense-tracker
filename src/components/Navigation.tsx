import { Link } from "react-router-dom";
import { NavigationProps } from "../type/navigation";
import Icon from "./Icon";

const Navigation: React.FC<NavigationProps> = ({
  text,
  icon,
  isActive,
  path,
}) => {
  return (
    <Link
      to={path}
      className={`text-sm lg:text-xl cursor-pointer py-1  w-1/4 text-lightorangy rounded flex justify-center items-center gap-1 ${
        isActive ? "bg-darkorangy" : ""
      }`}
    >
      <Icon height={17} src={icon} width={17} />
      {text}
    </Link>
  );
};

export default Navigation;
