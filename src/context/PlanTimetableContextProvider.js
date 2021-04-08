import React, { useState, useRef, useEffect, useContext } from "react";
import { data } from "../components/testData.js";
import { appointments } from "../shares/appointments";
const PlanTimetableContext = React.createContext();

function PlanTimetableContextProvider({ children }) {
  const [userDefinedTimeSlots, saveUserDefinedTimeSlots] = useState(
    sessionStorage.getItem("userDefinedTimeSlots")
      ? JSON.parse(sessionStorage.getItem("userDefinedTimeSlots")).map((item) =>
          item.map((date) => new Date(date))
        )
      : []
  );
  //   [
  //   // [new Date("March 1, 2021 10:15:00"), new Date("March 1, 2021 12:15:00")], //each item is an array of start time and end time of a slot
  // ]
  const setUserDefinedTimeSlots = (timeslots) => {
    saveUserDefinedTimeSlots(timeslots);
    sessionStorage.setItem("userDefinedTimeSlots", JSON.stringify(timeslots));
  };

  const [courseDivs, saveCourseDivs] = useState(
    sessionStorage.getItem("courseDivs")
      ? JSON.parse(sessionStorage.getItem("courseDivs"))
      : []
  );
  // {
  //           course: tempCourse,
  //           currentIdx: currentIdxVar,
  //           isIndexFixed: false,
  //         },
  const setCourseDivs = (courseDivsVar) => {
    saveCourseDivs(courseDivsVar);
    sessionStorage.setItem("courseDivs", JSON.stringify(courseDivsVar));
  };
  const [allowClashCC, saveAllowClashCC] = useState(
    sessionStorage.getItem("allowClashCC")
      ? JSON.parse(sessionStorage.getItem("allowClashCC"))
      : []
  );
  const setAllowClashCC = (allowClashCCVar) => {
    saveAllowClashCC(allowClashCCVar);
    sessionStorage.setItem("allowClashCC", JSON.stringify(allowClashCCVar));
  };

  const [currentTimeTablePage, setCurrentTimeTablePage] = useState(1);
  const [combinations, saveCombinations] = useState(
    sessionStorage.getItem("combinations")
      ? JSON.parse(sessionStorage.getItem("combinations"))
      : [{}]
  ); //timetable combinations
  const setCombinations = (combinationsVar) => {
    saveCombinations(combinationsVar);
    sessionStorage.setItem("combinations", JSON.stringify(combinationsVar));
  };

  //combinations = [{coursecode:index,...},...] each item is a combination of course indexes
  const [occupiedTimeSlots, setOccupiedTimeSlots] = useState([]); //appointment format(react scheduler)
  const [isPlanClicked, setIsPlanClicked] = useState(false);
  // const [isPageChanged, setIsPageChanged] = useState(false);

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

  //2 scenarios: plan or change index
  const courseDivToApps = (tempCourseDiv, idx, idxStr) => {
    let returnAppointments = [];
    if (isPlanClicked) {
      const tempIndex = tempCourseDiv.course.index.find(
        (item) => item.index_number === idxStr
      );
      const tempCDs = [...courseDivs];
      tempCDs[idx].currentIdx = tempIndex;
      setCourseDivs(tempCDs);

      if (tempIndex) {
        returnAppointments = tempIndex.lesson.map((lesson) => {
          return {
            ...lesson,
            title: tempCourseDiv.course.courseCode,
            id: Math.random().toString(36).substr(2, 9),
            startDate: convertToDate(lesson.day, lesson.start),
            endDate: convertToDate(lesson.day, lesson.end),
            courseDivID: idx + 1,
          };
        });
      }
    } else if (
      tempCourseDiv.currentIdx !== undefined &&
      Object.keys(tempCourseDiv.currentIdx).length !== 0
    ) {
      returnAppointments = tempCourseDiv.currentIdx.lesson.map((lesson) => {
        return {
          ...lesson,
          title: tempCourseDiv.course.courseCode,
          id: Math.random().toString(36).substr(2, 9),
          startDate: convertToDate(lesson.day, lesson.start),
          endDate: convertToDate(lesson.day, lesson.end),
          courseDivID: idx + 1,
        };
      });
    }

    return returnAppointments;
  };

  const courseDivToApps2 = (tempCourseDiv, idx, idxStr) => {
    let returnAppointments = [];
    if (idxStr !== "") {
      const tempIndex = tempCourseDiv.course.index.find(
        (item) => item.index_number === idxStr
      );
      const tempCDs = [...courseDivs];
      tempCDs[idx].currentIdx = tempIndex;
      setCourseDivs(tempCDs);

      if (tempIndex) {
        returnAppointments = tempIndex.lesson.map((lesson) => {
          return {
            ...lesson,
            title: tempCourseDiv.course.courseCode,
            id: Math.random().toString(36).substr(2, 9),
            startDate: convertToDate(lesson.day, lesson.start),
            endDate: convertToDate(lesson.day, lesson.end),
            courseDivID: idx + 1,
          };
        });
      }
    }

    return returnAppointments;
  };

  const convertCombinationtoApps = (CNI) => {
    let apps = [];
    let idx = 0;
    for (const key in CNI) {
      const courseDiv = courseDivs.find(
        (item) => item.course.courseCode === key
      );

      apps.push(...courseDivToApps(courseDiv, idx, CNI[key]));

      idx += 1;
    }
    if (isPlanClicked) {
      setIsPlanClicked(false);
    }
    // if (isPageChanged) setIsPageChanged(false);
    // console.log(apps);
    return apps;
  };

  const convertCombinationtoApps2 = (CNI) => {
    let apps = [];
    let idx = 0;
    for (const key in CNI) {
      const courseDiv = courseDivs.find(
        (item) => item.course.courseCode === key
      );

      apps.push(...courseDivToApps2(courseDiv, idx, CNI[key]));

      idx += 1;
    }

    // console.log(apps);
    return apps;
  };

  useEffect(() => {
    // console.log("useeffect2")
    const combination = {
      ...combinations[currentTimeTablePage - 1],
    };
    // console.log(combination);
    const tempOTS = convertCombinationtoApps(combination);
    setOccupiedTimeSlots(tempOTS);
  }, [combinations]);

  useEffect(() => {
    // console.log("useeffect1")
    const combination = {
      ...combinations[currentTimeTablePage - 1],
    };
    // console.log(combination);
    const tempOTS = convertCombinationtoApps2(combination);

    setOccupiedTimeSlots(tempOTS);
  }, [currentTimeTablePage]);

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
    setIsPlanClicked,
    // setIsPageChanged,
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
