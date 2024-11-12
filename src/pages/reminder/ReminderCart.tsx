import React from "react";
import { ReminderCartProps } from "../../type/reminder-cart";

const ReminderCart: React.FC<ReminderCartProps> = ({
  name,
  selected,
  amount,
  // date,
  description,
  counterparty,
}) => {
  return (
    <div className="p-3 shadow-lg flex flex-col w-full">
      <div>{name}</div>
      <div>{selected}</div>
      <div>{amount}</div>
      {/* <div>{date}</div> */}
      <div>{description}</div>
      <div>{counterparty}</div>
    </div>
  );
};

export default ReminderCart;
