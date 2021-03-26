import React, { useState, useRef, useEffect, useContext } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import MoreOptionsComponent from "../components/MoreOptionsComponent";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";

import {
  PlanTimetableContextProvider,
  usePlanTimetable,
} from "../context/PlanTimetableContextProvider";

import appointments from "../shares/today-appointments";

export default function PlanTimetable() {
  const [timetablesState, setTimetablesState] = useState({
    timeTables: [
      { page: 1, occupiedTimeSlots: [appointments[0], appointments[1]] },
      {
        page: 2,
        occupiedTimeSlots: [appointments[0], appointments[2]],
      },
    ],
    currentTimeTablePage: 1,
  });

  // const [userDefinedTimeSlots, setUserDefinedTimeSlots] = useState([
  //   [new Date("March 1, 2021 11:13:00"), new Date("March 1, 2021 12:13:00")], //each item is an array of start time and end time of a slot
  //   [new Date("March 2, 2021 9:13:00"), new Date("March 1, 2021 11:13:00")],
  //   [new Date("March 3, 2021 5:13:00"), new Date("March 1, 2021 11:13:00")],
  // ]);

  // const [];

  //Backend: addTimetables
  // const addTimeTables = (tempTimeTables) => {
  //   //currentTimeTablePage set to 1 as default when new timetables added
  //   setTimetablesState({ timeTables: tempTimeTables, currentTimeTablePage: 1 });
  // };

  const updateTimeTablePageNum = (tempPage) => {
    setTimetablesState((prevTimetablesState) => ({
      ...prevTimetablesState,
      currentTimeTablePage: tempPage,
    }));
  };

  return (
    <PlanTimetableContextProvider>
      <div className="container">
        <div className="row">
          <div className="page-title col-12">
            <b>Course Planner</b>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
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
                timetablesState.timeTables[
                  timetablesState.currentTimeTablePage - 1
                ].occupiedTimeSlots
              }
            />
          </div>
        </div>
      </div>
    </PlanTimetableContextProvider>
  );
}
