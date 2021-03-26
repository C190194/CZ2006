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

  const displayCurrentTTpage = () => {
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
        let returnAppointments = tempCourseDiv.currentIdx.lesson.map(
          (lesson) => {
            return {
              ...lesson,
              title: tempCourseDiv.course.courseCode,
              id: Math.random().toString(36).substr(2, 9),
              startDate: convertToDate(lesson.day, lesson.start),
              endDate: convertToDate(lesson.day, lesson.end),
              courseDivID: idx + 1,
            };
          }
        );

        return returnAppointments;
      }
      return [];
    };

    const convertCNItoApps = (CNI) => {
      let apps = [];
      let idx = 0;
      for (const key in CNI) {
        const courseDiv = courseDivs.find(
          (item) => item.course.courseCode === key
        );
        // console.log("--debug--");
        // console.log("count");
        console.log("--debug--");
        console.log(courseDiv);
        apps.push(...courseDivToApps(courseDiv, idx));
        idx += 1;
      }
      // console.log("--debug--");
      // console.log(apps);
      // console.log("--debug--");
      return apps;
    };

    const CNI = {
      ...timetablesState.timeTables[timetablesState.currentTimeTablePage - 1]
        .cNIdx,
    };

    let tempTT = [...timetablesState.timeTables];
    tempTT[
      timetablesState.currentTimeTablePage - 1
    ].occupiedTimeSlots = convertCNItoApps(CNI);
    setTimetablesState(
      { ...timetablesState, timeTables: tempTT }
      //   (prevState) => {
      //   let tempTT = [...prevState.timeTables];
      //   tempTT[
      //     prevState.currentTimeTablePage - 1
      //   ].occupiedTimeSlots = convertCNItoApps(CNI);
      //   return {
      //     ...prevState,
      //     timeTables: tempTT,
      //   };
      // }
    );
    // console.log("--debug--");
    // console.log(timetablesState);
    // console.log("--debug--");
  };

  // useEffect(() => {
  //   displayCurrentTTpage();
  // }, [timetablesState.currentTimeTablePage]);

  // useEffect(() => {
  //   let tempState = { ...timetablesState };

  //   for (let i = 0; i < courseDivs.length; i++) {
  //     tempState.timeTables[tempState.currentTimeTablePage - 1].cNIdx[
  //       courseDivs[i].course.courseCode
  //     ] = courseDivs[i].currentIdx.index_number;
  //   }
  //   setTimetablesState(tempState);
  // }, [courseDivs]);

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
    displayCurrentTTpage,
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
