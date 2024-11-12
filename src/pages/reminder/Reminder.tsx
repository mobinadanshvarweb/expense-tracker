import { useState } from "react";
import ReminderDetails from "./ReminderDetails";
import ReminderList from "./ReminderList";

const Reminder = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full h-full">
      <ReminderList />
      {show && <ReminderDetails setShow={setShow} />}
      <span
        onClick={() => {
          setShow(!show);
        }}
        className="fixed bottom-20 left-[50%] translate-x-[-50%]  flex justify-center items-center px-4 py-2 bg-darkorangy text-darky rounded-3xl font-bold"
      >
        Set Reminder
      </span>
    </div>
  );
};

export default Reminder;
