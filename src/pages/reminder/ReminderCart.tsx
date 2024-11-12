import React from "react";
import { ReminderCartProps } from "../../type/reminder-cart";
import Icon from "../../components/Icon";
import clsx from "clsx";
const ReminderCart: React.FC<ReminderCartProps> = ({
  name,
  selected,
  amount,
  // date,
  description,
  counterparty,
}) => {
  return (
    <div className="p-3 shadow-lg flex gap-2 flex-col w-full bg-[#f8f8f7] rounded-lg shadow-easy">
      <div className="w-full justify-end flex">
        {selected.length > 0 && (
          <span
            className={clsx(
              "rounded-3xl w-fit px-3 border flex items-center font-bold text-darky font-sm",
              {
                "bg-easy": selected === "Claim",
                "bg-[#ba8b8bbe] text-[#551717]": selected === "Debt",
                "bg-gray-400": selected !== "Claim" && selected !== "Debt",
              }
            )}
          >
            {selected}
          </span>
        )}
      </div>
      <div className="w-full flex gap-1 items-center text-darky text-sm">
        <span className="font-bold text-sm">Name:</span>
        {name}
      </div>
      <div className="flex flex-col w-full text-darky">
        <span className="font-bold text-sm">Description:</span>
        {description.length > 0 && (
          <span className="w-full bg-zinc-50 px-1 py-1 rounded text-xs">
            {description}
          </span>
        )}
      </div>
      <div className="w-full flex gap-1 items-center text-darky text-sm">
        <span className="font-bold text-sm">Amount:</span>
        {amount}
      </div>
      {/* <div>{date}</div> */}
      <div className="w-full flex gap-1 items-center text-darky text-sm">
        <span className="font-bold text-sm">Counterparty:</span>
        {counterparty}
      </div>
      <div className="w-full flex gap-1 items-center text-darky text-sm">
        <span className="font-bold text-sm">Due date:</span>
        {}
      </div>
      <span className="w-full h-[0.7px] bg-darky my-2"></span>
      <div className="flex justify-between">
        <span className="text-[#3C3D37] text-sm  font-bold cursor-pointer flex items-center gap-1">
          <Icon height={20} width={20} src="/icon/edit.svg" />
          Edit
        </span>
        <span className="text-[#800000] text-sm  font-bold cursor-pointer flex items-center gap-1">
          <Icon height={20} width={20} src="/icon/delete.svg" />
          Delete
        </span>
      </div>
      <div className="w-full flex"></div>
    </div>
  );
};

export default ReminderCart;
