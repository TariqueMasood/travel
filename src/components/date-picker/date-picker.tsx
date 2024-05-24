"use client";

import moment from "moment";
import React, { useState } from "react";

const DateInputComponent: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    setIsValid(isValidDate(newDate));
  };

  function isValidDate(dateString: string): boolean {
    const format = "DD/MM/YYYY";
    const date = moment(dateString, format, true);
    return date.isValid();
  }

  return (
    <div>
      <input
        type="text"
        value={date}
        onChange={handleChange}
        placeholder="DD/MM/YYYY"
      />
      {!isValid && (
        <p style={{ color: "red" }}>
          Invalid date format. Please use DD/MM/YYYY.
        </p>
      )}
    </div>
  );
};

export default DateInputComponent;
