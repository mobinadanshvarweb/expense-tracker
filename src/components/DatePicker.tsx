import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyDatePicker() {
  const savedDate = localStorage.getItem("selectedDate");
  const [startDate, setStartDate] = useState(
    savedDate ? new Date(savedDate) : null
  );

  useEffect(() => {
    if (startDate) {
      localStorage.setItem("selectedDate", startDate.toISOString());
    }
  }, [startDate]);

  return (
    <div className="w-full justify-center flex">
      <DatePicker
        selected={startDate}
        className="flex-1 w-[285px] max-w-xs bg-[#cfdee3ab] flex justify-center p-2 rounded-lg border border-darky"
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
      />
    </div>
  );
}

export default MyDatePicker;
