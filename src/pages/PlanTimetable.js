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

function Dropdown({ options, label, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }

  return (
    <div>
      <div className="dropdown">
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            <input
              type="text"
              ref={ref}
              placeholder={value ? value[label] : prompt}
              value={displayValue()}
              onChange={(e) => {
                setQuery(e.target.value);
                onChange(null);
              }}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={`arrow ${open ? "open" : null}`} />
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {filter(options).map((option) => (
            <div
              key={option.id}
              className={`option ${value === option ? "selected" : null}`}
              onClick={() => {
                setQuery("");
                onChange(option);
                setOpen(false);
              }}
            >
              {option[label]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            <Dropdown
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
