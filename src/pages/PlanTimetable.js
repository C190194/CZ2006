import React from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import './PlanTimetable.css'

function Planner() {
  return (
    <div className="container">
      <div className="row">
        <div className= "planner-title col-12">
          <b>Course Planner</b>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <PlannerIndexComponent />
        </div>
        <div className="col-10">
          <PlannerCalendarComponent />
        </div>
      </div>
    </div>
  );
}

export default Planner;
