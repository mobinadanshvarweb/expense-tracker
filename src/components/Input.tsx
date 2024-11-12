import { InputProps } from "../type/input";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  classname,
  value,
  onchange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`w-full outline-none border bg-[#cfdee3ab] border-darky p-2 rounded-lg text-darky ${classname}`}
      onChange={onchange}
    />
  );
};

export default Input;
