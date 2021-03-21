import React, { useState, useRef, useEffect, useContext } from "react";
import { data } from "../components/testData.js";

const PlanTimetableContext = React.createContext();

function PlanTimetableContextProvider({ children }) {
  const [userDefinedTimeSlots, setUserDefinedTimeSlots] = useState([
    [new Date("March 1, 2021 10:15:00"), new Date("March 1, 2021 12:15:00")], //each item is an array of start time and end time of a slot
  ]);

  const [courseDivs, setCourseDivs] = useState([]);
  const [allowClashCC, setAllowClashCC] = useState([]);

  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  //   const value = { state, dispatch };
  const value = {
    userDefinedTimeSlots,
    setUserDefinedTimeSlots,
    courseDivs,
    setCourseDivs,
    allowClashCC,
    setAllowClashCC,
  };
  return (
    <PlanTimetableContext.Provider value={value}>
      {children}
    </PlanTimetableContext.Provider>
  );
}
function usePlanTimetable() {
  const context = React.useContext(PlanTimetableContext);
  if (context === undefined) {
    throw new Error(
      "usePlanTimetable must be used within a PlanTimetableContextProvider"
    );
  }
  return context;
}
export { PlanTimetableContextProvider, usePlanTimetable };
