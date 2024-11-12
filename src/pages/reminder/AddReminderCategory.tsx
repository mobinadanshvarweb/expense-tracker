import { useState } from "react";
import Input from "../../components/Input";
import SwitchButton from "../../components/SwitchButton";
import { setCategories, setCategory } from "../../store/slice/reminder-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const AddReminderCategory = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.reminder.category);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-2 text-darky">
      <div className="font-bold text-lg items-center w-full flex justify-between">
        Add a category
        <span className="flex items-center">
          <SwitchButton enabled={enabled} onChange={setEnabled} />
        </span>
      </div>

      {enabled && (
        <>
          <span className="flex w-full h-[1px] bg-darky my-2"></span>
          <Input
            placeholder="Category Name"
            type="text"
            value={category}
            onchange={(e: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setCategory(e.target.value));
            }}
          />

          <button
            onClick={() => {
              dispatch(setCategories());
            }}
            className="px-5 py-1 rounded bg-darky text-white w-fit"
          >
            Add
          </button>
        </>
      )}
    </div>
  );
};

export default AddReminderCategory;
