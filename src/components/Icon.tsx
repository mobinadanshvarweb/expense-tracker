import { IconProps } from "../type/icon";

const Icon: React.FC<IconProps> = ({ src, width, height, classname }) => {
  return (
    <img src={src} alt="" width={width} height={height} className={classname} />
  );
};

export default Icon;
