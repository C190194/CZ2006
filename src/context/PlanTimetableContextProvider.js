import React, { useState, useRef, useEffect, useContext } from "react";
import { data } from "../components/testData.js";
import { appointments } from "../shares/appointments";
const PlanTimetableContext = React.createContext();

function PlanTimetableContextProvider({ children }) {
  const [userDefinedTimeSlots, setUserDefinedTimeSlots] = useState([
    [new Date("March 1, 2021 10:15:00"), new Date("March 1, 2021 12:15:00")], //each item is an array of start time and end time of a slot
  ]);

  const [courseDivs, setCourseDivs] = useState([]);
  // {
  //           course: tempCourse,
  //           currentIdx: currentIdxVar,
  //           isIndexFixed: false,
  //         },
  const [allowClashCC, setAllowClashCC] = useState([]);

  const [currentTimeTablePage, setCurrentTimeTablePage] = useState(1);
  const [combinations, setCombinations] = useState([{}]); //timetable combinations
  const [occupiedTimeSlots, setOccupiedTimeSlots] = useState([]); //appointment format(react scheduler)
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  function convertToDate(day, time) {
    return new Date(
      2021,
      2,
      dayNames.indexOf(day) + 1,
      parseInt(time.slice(0, time.length - 2)),
      parseInt(time.slice(time.length - 2, time.length))
    );
  }

  const courseDivToApps = (tempCourseDiv, idx) => {
    if (Object.keys(tempCourseDiv.currentIdx).length !== 0) {
      let returnAppointments = tempCourseDiv.currentIdx.lesson.map((lesson) => {
        return {
          ...lesson,
          title: tempCourseDiv.course.courseCode,
          id: Math.random().toString(36).substr(2, 9),
          startDate: convertToDate(lesson.day, lesson.start),
          endDate: convertToDate(lesson.day, lesson.end),
          courseDivID: idx + 1,
        };
      });

      return returnAppointments;
    }
    return [];
  };

  const convertCombinationtoApps = (CNI) => {
    let apps = [];
    let idx = 0;
    for (const key in CNI) {
      const courseDiv = courseDivs.find(
        (item) => item.course.courseCode === key
      );
      apps.push(...courseDivToApps(courseDiv, idx));
      idx += 1;
    }
    return apps;
  };

  useEffect(() => {
    const combination = {
      ...combinations[currentTimeTablePage - 1],
    };
    const tempOTS = convertCombinationtoApps(combination);
    setOccupiedTimeSlots(tempOTS);
  }, [combinations, currentTimeTablePage]);

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
    currentTimeTablePage,
    setCurrentTimeTablePage,
    combinations,
    setCombinations,
    occupiedTimeSlots,
    setOccupiedTimeSlots,
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
