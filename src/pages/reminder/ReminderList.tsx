import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ReminderCart from "./ReminderCart";

const ReminderList = () => {
  const reminder = useSelector((state: RootState) => state.reminder.reminder);
  console.log(reminder, "rem");

  return (
    <div className="p-3 border w-full flex flex-col gap-4 mb-40">
      {reminder.map((remind) => {
        return (
          <ReminderCart
            key={remind.id}
            amount={remind.amount}
            counterparty={remind.counterparty}
            description={remind.description}
            name={remind.name}
            selected={remind.selected.name}
          />
        );
      })}
    </div>
  );
};

export default ReminderList;
