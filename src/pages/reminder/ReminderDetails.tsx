import { useDispatch, useSelector } from "react-redux";
import Selects from "../../components/Select";
import AddReminder from "./AddReminder";
import AddReminderCategory from "./AddReminderCategory";
import {
  resetReminder,
  setAmount,
  setCounterparty,
  setDescription,
  setName,
} from "../../store/slice/reminder-slice";
import { RootState } from "../../store/store";
import MyDatePicker from "../../components/DatePicker";
import Icon from "../../components/Icon";

const ReminderDetails = ({ setShow }: { setShow: (show: boolean) => void }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.reminder.name);
  const description = useSelector(
    (state: RootState) => state.reminder.description
  );
  const amount = useSelector((state: RootState) => state.reminder.amount);
  const counterparty = useSelector(
    (state: RootState) => state.reminder.counterparty
  );
  return (
    <div
      onClick={() => {
        setShow(false);
      }}
      className="fixed inset-0 w-full h-auto backdrop-blur items-end z-10 p-3  flex justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex flex-col justify-center gap-6 min-h-[90vh] lg:gap-4 bg-lightorangy p-3 rounded-lg w-full max-w-lg box-border"
      >
        <div className="w-full flex justify-between">
          <span
            onClick={() => {
              dispatch(resetReminder());
            }}
          >
            <Icon height={20} width={20} src="/icon/refresh.svg" />
          </span>
          <span
            onClick={() => {
              setShow(false);
            }}
            className="flex "
          >
            <Icon height={20} width={20} src="/icon/close.svg" />
          </span>
        </div>

        <input
          type="text"
          placeholder="Reminder Name"
          className="w-full outline-none border bg-[#cfdee3ab] border-darky p-2 rounded-lg text-darky"
          value={name}
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Descrption"
          className="w-full outline-none border bg-[#cfdee3ab] border-darky p-2 rounded-lg text-darky"
          value={description}
          onChange={(e) => {
            dispatch(setDescription(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Amount"
          className="w-full outline-none border bg-[#cfdee3ab] border-darky p-2 rounded-lg text-darky"
          value={amount}
          onChange={(e) => {
            dispatch(setAmount(e.target.value));
          }}
        />
        <input
          type="text"
          placeholder="Counterparty"
          className="w-full outline-none border bg-[#cfdee3ab] border-darky p-2 rounded-lg text-darky"
          value={counterparty}
          onChange={(e) => {
            dispatch(setCounterparty(e.target.value));
          }}
        />
        <Selects />
        <AddReminderCategory />
        <MyDatePicker />
        <AddReminder />
      </div>
    </div>
  );
};

export default ReminderDetails;
