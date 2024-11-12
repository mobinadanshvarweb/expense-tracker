import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setDate } from "../store/slice/reminder-slice";

function MyDatePicker() {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.reminder.date);

  return (
    <div className="w-full justify-center flex">
      <DatePicker
        selected={new Date(date)}
        className="flex-1 w-[300px] max-w-xs bg-[#cfdee3ab] flex justify-center p-2 rounded-lg border border-darky"
        onChange={(date) => dispatch(setDate(date))}
        dateFormat="yyyy/MM/dd"
        placeholderText="Choose Date"
      />
    </div>
  );
}

export default MyDatePicker;
