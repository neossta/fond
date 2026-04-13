import { createContext } from "react";

interface YearContextType {
  year: number;
  setYear: (year: number) => void;
}

export const YearContext = createContext<YearContextType>({
  year: 2025,
  setYear: () => {console.log('setYear called without provider')},
});