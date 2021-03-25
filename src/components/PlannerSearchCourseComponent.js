import React, { useState, useRef, useEffect } from "react";
import "./PlannerSearchCourseStyle.css";
import { Button } from "reactstrap";
import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

function Dropdown({
  options,
  label,
  prompt,
  value,
  onChange,
  // addCourseDivFunc,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const [tempOption, setTempOption] = useState({});

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
          {/* <div className="selected-value" ref={ref}>{value ? value.name : prompt}</div> */}
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
                // setTempOption(option);
                //addCourseDivFunc(option, {});
              }}
            >
              {option[label]}
            </div>
          ))}
        </div>
      </div>
      {/* <Button
        onClick={() => {
          addCourseDivFunc(tempOption, {});
        }}
      > */}
      {/* ADD COURSE
      </Button> */}
    </div>
  );
}

export default function PlannerSearchCourseComponent() {
  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);
  const planTimetableContext = usePlanTimetable();
  const courseDivs = planTimetableContext.courseDivs;
  const setCourseDivs = planTimetableContext.setCourseDivs;

  const addCourseDiv = (tempCourse, currentIdxVar) => {
    if (typeof tempCourse === "object" && tempCourse !== null) {
      // const tempCourseDivs = [...courseDivs];

      if (
        !courseDivs.some((e) => e.course.courseCode === tempCourse.courseCode)
      ) {
        // tempCourseDivs.push({ course: tempCourse, currentIdx: currentIdxVar });
        setCourseDivs((prevCourseDivs) => [
          ...prevCourseDivs,
          { course: tempCourse, currentIdx: currentIdxVar },
        ]);
      } else {
        alert("The selected course was added before!");
      }
    } else {
      alert("Please select a course before adding!");
    }
  };
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
        setData(myJson.slice(409, 609));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("Dropdown rerender");
  });

  return (
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
        addCourseDivFunc={addCourseDiv}
      />
      <Button
        onClick={() => {
          addCourseDiv(value, {});
        }}
      >
        ADD COURSE
      </Button>
    </div>
  );
}
