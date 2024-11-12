import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setDescription,
  setName,
  setReminder,
} from "../../store/slice/reminder-slice";

const AddReminder = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.reminder.name);
  const description = useSelector(
    (state: RootState) => state.reminder.description
  );
  const selected = useSelector((state: RootState) => state.reminder.selected);
  const reminder = useSelector((state: RootState) => state.reminder.reminder);
  return (
    <button
      onClick={() => {
        dispatch(
          setReminder([
            ...reminder,
            {
              name: name,
              description: description,
              selected: selected,
            },
          ])
        );
        dispatch(setName(""));
        dispatch(setDescription(""));
        console.log("reminder :", reminder, name, description, selected.name);
      }}
      className="w-full rounded-lg py-2 font-bold bg-darky flex justify-center items-center text-lightorangy"
    >
      Add Reminder
    </button>
  );
};

export default AddReminder;
