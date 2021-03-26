import React, { useState, useRef, useEffect, useContext } from "react";
import { data } from "../components/testData.js";
import { appointments } from "../shares/appointments";
const PlanTimetableContext = React.createContext();

function PlanTimetableContextProvider({ children }) {
  const [userDefinedTimeSlots, setUserDefinedTimeSlots] = useState([
    [new Date("March 1, 2021 10:15:00"), new Date("March 1, 2021 12:15:00")], //each item is an array of start time and end time of a slot
  ]);

  const [courseDivs, setCourseDivs] = useState([]);
  const [allowClashCC, setAllowClashCC] = useState([]);
  const [timetablesState, setTimetablesState] = useState({
    timeTables: [
      {
        page: 1,
        occupiedTimeSlots: [appointments[0], appointments[1]],
        cNIdx: {},
      }, //cNIdx is courses and index
      {
        page: 2,
        occupiedTimeSlots: [appointments[0], appointments[2]],
        cNIdx: {},
      },
    ],
    currentTimeTablePage: 1,
  });

  useEffect(() => {
    let tempState = { ...timetablesState };

    for (let i = 0; i < courseDivs.length; i++) {
      tempState.timeTables[tempState.currentTimeTablePage - 1].cNIdx[
        courseDivs[i].course.courseCode
      ] = courseDivs[i].currentIdx.index_number;
    }
    setTimetablesState(tempState);
  }, [courseDivs]);

  //update coursedivs based on the page number
  // useEffect(() => {
  //   let tempCourseDivs = [...courseDivs];

  //   const setCurrentIdx = (courseStr, indexStr) => {
  //     if (courseDivs.length != 0) {
  //       const tempCD = [...courseDivs];
  //       const tempCDidx = tempCD.findIndex(
  //         (item) => item.courseCode === courseStr
  //       );

  //       // console.log(tempCDidx);

  //       if (tempCDidx !== -1) {
  //         const tempIdx = tempCD[tempCDidx].course.index.findIndex(
  //           (item) => item.index_number === indexStr
  //         );
  //         tempCD[tempCDidx].currentIdx =
  //           tempCD[tempCDidx].course.index[tempIdx];
  //         setCourseDivs(tempCD);
  //       }
  //     }
  //   };

  //   let tempCNIdx =
  //     timetablesState.timeTables[timetablesState.currentTimeTablePage - 1]
  //       .cNIdx;

  //   for (let key in tempCNIdx) {
  //     setCurrentIdx(key, tempCNIdx[key]);
  //   }

  //   // setCourseDivs
  //   // tempState.timeTables[tempState.currentTimeTablePage - 1];
  // }, [timetablesState.currentTimeTablePage]);

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
    timetablesState,
    setTimetablesState,
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
