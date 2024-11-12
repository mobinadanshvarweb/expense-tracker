import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input";
import Selects from "../../components/Select";
import AddReminder from "./AddReminder";
import AddReminderCategory from "./AddReminderCategory";
import { setDescription, setName } from "../../store/slice/reminder-slice";
import { RootState } from "../../store/store";

const ReminderDetails = ({ setShow }: { setShow: (show: boolean) => void }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.reminder.name);
  const description = useSelector(
    (state: RootState) => state.reminder.description
  );
  return (
    <div
      onClick={() => {
        setShow(false);
      }}
      className="fixed inset-0 z-10 p-3 overflow-hidden flex justify-center items-start" // استفاده از overflow-hidden
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col gap-4 bg-lightorangy p-3 rounded-lg w-full max-w-lg box-border"
      >
        <Input
          placeholder="Name"
          type="text"
          value={name}
          onchange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <Input
          placeholder="Description"
          value={description}
          type="text"
          onchange={(e) => {
            dispatch(setDescription(e.target.value));
          }}
        />
        <Selects />
        <AddReminderCategory />
        <AddReminder />
      </div>
    </div>
  );
};

export default ReminderDetails;
