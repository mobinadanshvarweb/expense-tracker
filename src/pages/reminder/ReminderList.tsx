import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ReminderCart from "./ReminderCart";

const ReminderList = () => {
  const reminder = useSelector((state: RootState) => state.reminder.reminder);
  console.log(reminder, "rem");

  return (
    <div className="p-3 border w-full">
      {reminder.map((remind) => {
        return <ReminderCart key={remind.name} />;
      })}
    </div>
  );
};

export default ReminderList;
