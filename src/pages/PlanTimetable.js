import React, { useState, useRef, useEffect, useContext } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import MoreOptionsComponent from "../components/MoreOptionsComponent";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";
import PlannerSearchCourseComponent from "../components/PlannerSearchCourseComponent";

import {
  PlanTimetableContextProvider,
  usePlanTimetable,
} from "../context/PlanTimetableContextProvider";

import "./PlanTimetable.css";
import { appointments } from "../shares/appointments";

function PlanTimetableContextConsumer() {
  // const [timetablesState, setTimetablesState] = useState({
  //   timeTables: [
  //     { page: 1, occupiedTimeSlots: [appointments[0], appointments[1]] },
  //     {
  //       page: 2,
  //       occupiedTimeSlots: [appointments[0], appointments[2]],
  //     },
  //   ],
  //   currentTimeTablePage: 1,
  // });
  const planTimetableContext = usePlanTimetable();

  const timetablesState = planTimetableContext.timetablesState;
  const setTimetablesState = planTimetableContext.setTimetablesState;
  const displayCurrentTTpage = planTimetableContext.displayCurrentTTpage;

  //Backend: addTimetables
  // const addTimeTables = (tempTimeTables) => {
  //   //currentTimeTablePage set to 1 as default when new timetables added
  //   setTimetablesState({ timeTables: tempTimeTables, currentTimeTablePage: 1 });
  // };

  const updateTimeTablePageNum = (tempPage) => {
    // console.log(tempPage);

    setTimetablesState({
      ...timetablesState,
      currentTimeTablePage: tempPage,
    });
    // console.log(timetablesState);
    // displayCurrentTTpage();
  };

  // const courseDivs = planTimetableContext.courseDivs;
  // const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // function convertToDate(day, time) {
  //   return new Date(
  //     2021,
  //     2,
  //     dayNames.indexOf(day) + 1,
  //     parseInt(time.slice(0, time.length - 2)),
  //     parseInt(time.slice(time.length - 2, time.length))
  //   );
  // }

  // const courseDivsToAppointments = (tempCourseDivs) => {
  //   let returnAppointments = [];

  //   tempCourseDivs.map((item, idx) => {
  //     if (item.currentIdx.lesson) {
  //       returnAppointments = [
  //         ...returnAppointments,
  //         ...item.currentIdx.lesson.map((lesson) => {
  //           return {
  //             ...lesson,
  //             title: item.course.courseCode,
  //             id: Math.random().toString(36).substr(2, 9),
  //             startDate: convertToDate(lesson.day, lesson.start),
  //             endDate: convertToDate(lesson.day, lesson.end),
  //             courseDivID: idx + 1,
  //           };
  //         }),
  //       ];
  //     }
  //   });

  //   return returnAppointments;
  // };

  // useEffect(() => {
  //   let newTimetablesState = { ...timetablesState };
  //   newTimetablesState.timeTables[
  //     timetablesState.currentTimeTablePage - 1
  //   ].occupiedTimeSlots = courseDivsToAppointments(courseDivs);
  //   setTimetablesState(newTimetablesState);
  // }, [courseDivs]);

  // useEffect(() => {}, [timetablesState.currentTimeTablePage]);

  return (
    <div className="container">
      <div className="row">
        <div className="planner-title col-12">
          <b>Course Planner</b>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <PlannerSearchCourseComponent />
          <PlannerIndexComponent />
        </div>
        <div className="col-10">
          <div className="row justify-content-md-center" align="center">
            <MoreOptionsComponent />
            <SelectTimetablePageComponent
              timetablesState={timetablesState}
              updateTimeTablePageNum={updateTimeTablePageNum}
            />
          </div>
          <PlannerCalendarComponent
            timeTableData={
              []
              // [timetablesState.timeTables[
              //   timetablesState.currentTimeTablePage - 1
              // ].occupiedTimeSlots]
            }
          />
        </div>
      </div>
    </div>
  );
}

export default function PlanTimetable() {
  return (
    <PlanTimetableContextProvider>
      <PlanTimetableContextConsumer />
    </PlanTimetableContextProvider>
  );
}
