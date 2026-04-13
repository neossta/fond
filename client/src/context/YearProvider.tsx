import React, { useState } from "react";
import { YearContext } from "./YearContext";

export const YearProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [year, setYear] = useState(2025);

  return (
    <YearContext.Provider value={{ year, setYear }}>
      {children}
    </YearContext.Provider>
  );
};