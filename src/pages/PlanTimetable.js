import React, { useState, useRef, useEffect, useContext } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import MoreOptionsComponent from "../components/MoreOptionsComponent";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";
import PlannerSearchCourseComponent from "../components/PlannerSearchCourseComponent";
import ShareTimetableComponent from "../components/ShareTimetableComponent";

import {
  PlanTimetableContextProvider,
  usePlanTimetable,
} from "../context/PlanTimetableContextProvider";

import "./PlanTimetable.css";
import { appointments } from "../shares/appointments";

function PlanTimetableContextConsumer() {
  const planTimetableContext = usePlanTimetable();

  const combinations = planTimetableContext.combinations;
  const setCombinations = planTimetableContext.setCombinations;
  const currentTimeTablePage = planTimetableContext.currentTimeTablePage;
  const setCurrentTimeTablePage = planTimetableContext.setCurrentTimeTablePage;
  const occupiedTimeSlots = planTimetableContext.occupiedTimeSlots;
  const setOccupiedTimeSlots = planTimetableContext.setOccupiedTimeSlots;

  //Backend: addTimetables
  // const addTimeTables = (tempTimeTables) => {
  //   //currentTimeTablePage set to 1 as default when new timetables added
  //   setTimetablesState({ timeTables: tempTimeTables, currentTimeTablePage: 1 });
  // };
  const updateTimeTablePageNum = (tempPage) => {
    setCurrentTimeTablePage(tempPage);
  };

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
              combinations={combinations}
              currentTimeTablePage={currentTimeTablePage}
              updateTimeTablePageNum={updateTimeTablePageNum}
            />
          </div>
          <PlannerCalendarComponent timeTableData={occupiedTimeSlots} />
          <ShareTimetableComponent />
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
