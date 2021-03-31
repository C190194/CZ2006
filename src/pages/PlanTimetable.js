import React, { useState, useRef, useEffect, useContext } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import MoreOptionsComponent from "../components/MoreOptionsComponent";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";
import SearchCourseDropdown from "../components/SearchCourseDropdown";
import ShareTimetableComponent from "../components/ShareTimetableComponent";

import {
  PlanTimetableContextProvider,
  usePlanTimetable,
} from "../context/PlanTimetableContextProvider";

import "./PlanTimetable.css";

function PlanTimetableContextConsumer(props) {
  const planTimetableContext = usePlanTimetable();

  const combinations = planTimetableContext.combinations;
  const currentTimeTablePage = planTimetableContext.currentTimeTablePage;
  const setCurrentTimeTablePage = planTimetableContext.setCurrentTimeTablePage;
  const occupiedTimeSlots = planTimetableContext.occupiedTimeSlots;
  // const setIsPageChanged = planTimetableContext.setIsPageChanged;
  //Backend: addTimetables
  // const addTimeTables = (tempTimeTables) => {
  //   //currentTimeTablePage set to 1 as default when new timetables added
  //   setTimetablesState({ timeTables: tempTimeTables, currentTimeTablePage: 1 });
  // };
  const updateTimeTablePageNum = (tempPage) => {
    setCurrentTimeTablePage(tempPage);
    // setIsPageChanged(true);
  };

  return (
    <div className="row">
      <div className="col-2">
        <PlannerIndexComponent course={props.course} />
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
  );
}

export default function PlanTimetable() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  //method to add course(div)
  const getData = () => {
    fetch("output.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        //i only chose 200 courses
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Dropdown rerender");
  });
  return (
    <PlanTimetableContextProvider>
      <div className="container">
        <div className="row">
          <div className="planner-title col-12">
            <b>Course Planner</b>
          </div>
          <div className="row" style={{ width: 200 }}>
            <SearchCourseDropdown
              prompt="Select courses..."
              id="courseCode"
              label="courseCode"
              options={data.map((item) => ({
                ...item,
                id: Math.random().toString(36).substr(2, 9),
              }))}
              value={value}
              onChange={(val) => setValue(val)}
            />
          </div>
          <PlanTimetableContextConsumer course={value} />
        </div>
      </div>
    </PlanTimetableContextProvider>
  );
}
