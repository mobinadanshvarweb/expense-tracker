import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { resetReminder, setReminder } from "../../store/slice/reminder-slice";

const AddReminder = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.reminder.name);
  const description = useSelector(
    (state: RootState) => state.reminder.description
  );
  const selected = useSelector((state: RootState) => state.reminder.selected);
  const amount = useSelector((state: RootState) => state.reminder.amount);
  const counterparty = useSelector(
    (state: RootState) => state.reminder.counterparty
  );
  const date = useSelector((state: RootState) => state.reminder.date);
  const reminder = useSelector((state: RootState) => state.reminder.reminder);
  return (
    <button
      onClick={() => {
        dispatch(
          setReminder([
            ...reminder,
            {
              id: Math.random().toLocaleString(),
              name: name,
              description: description,
              amount: amount,
              counterparty: counterparty,
              selected: selected,
              date: date,
            },
          ])
        );
        dispatch(resetReminder());
      }}
      className="w-full rounded-lg py-2 font-bold bg-darky flex justify-center items-center text-lightorangy"
    >
      Add Reminder
    </button>
  );
};

export default AddReminder;
