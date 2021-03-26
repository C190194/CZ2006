import React, { Component, useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Dropdown from "./PlannerSearchCourseComponent";
import { data } from "./testData.js";
import MUIButton from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import CloseIcon from "@material-ui/icons/Close";
import FlagIcon from "@material-ui/icons/Flag";
import { Button } from "reactstrap";
import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

import "./ComponentsStyle.css";
import "./PlannerSearchCourseStyle.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

// export default ShareTT;
const getCourse = () => {
  var i;
  for (i = 0; i < data.length; i++) {
    if (data[i].courseCode === "CZ2006") {
      return data[i];
    }
  }
};

const customCourse = getCourse();

const CourseDiv = function (props) {
  const { course, currentIdx, deleteElement, updateCurrentIdx } = props;
  const classes = useStyles();
  const courseCode = course.courseCode;
  const [index_is_fixed, set_index_is_fixed] = useState(false);
  const indexes = course.courseDetails.index;

  return (
    <div
      className="row"
      style={{ border: "2px solid grey", borderRadius: "5px" }}
    >
      <div className="row">
        <div className="col-4">{courseCode}</div>
        <div className="col-3">
          <MUIButton
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<CloseIcon />}
            onClick={deleteElement}
            style={{ width: "40px", minWidth: "40px" }}
          ></MUIButton>
        </div>
        <div className="col-3">
          <MUIButton
            variant={index_is_fixed ? "contained" : "outlined"}
            color="primary"
            className={classes.button}
            startIcon={<FlagIcon />}
            onClick={() => {
              set_index_is_fixed(!index_is_fixed);
            }}
            style={{ width: "40px", minWidth: "40px" }}
          ></MUIButton>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <FormControl
            className={classes.formControl}
            disabled={index_is_fixed}
          >
            <InputLabel htmlFor="index-native-simple">Index</InputLabel>
            <Select
              value={indexes.indexOf(currentIdx)}
              native
              onChange={updateCurrentIdx}
              className={classes.selectEmpty}
            >
              <option aria-label="None" value=""></option>
              {indexes.map((tempVar, index) => {
                return (
                  <option key={index} value={index}>
                    {tempVar.index_number}
                  </option>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

function PlannerIndexComponent({ addCourseDiv }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = useState(null);

  return (
    <div className="row" style={{ width: 200 }}>
      {/* <Dropdown options={countries} prompt="Select countries..." options={countries} value={value} onChange={val => setValue(val) }/> */}
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
    </div>
  );
}

export default function ShareTimetable() {
  const planTimetableContext = usePlanTimetable();
  const courseDivs = planTimetableContext.courseDivs;
  const setCourseDivs = planTimetableContext.setCourseDivs;
  //method to add course(div)
  const addCourseDiv = (tempCourse, currentIdxVar) => {
    if (typeof tempCourse === "object" && tempCourse !== null) {
      const tempCourseDivs = [...courseDivs];

      if (
        !tempCourseDivs.some(
          (e) => e.course.courseCode === tempCourse.courseCode
        )
      ) {
        tempCourseDivs.push({ course: tempCourse, currentIdx: currentIdxVar });
        setCourseDivs(tempCourseDivs);
      } else {
        alert("The selected course was added before!");
      }
    } else {
      alert("Please select a course before adding!");
    }
  };

  //Backend: this method will retrieve all course indexes then call backend method to return timetables
  //if clash then give a error message
  const planCourse = (temp_course_indexes) => {
    console.log(temp_course_indexes);
    // console.log(temp_course_indexes[0].index_number);
  };

  const updateCurrentIdx = (event, idx) => {
    const tempCourseDivs = [...courseDivs];
    if (event.target.value !== "") {
      tempCourseDivs[idx].currentIdx =
        tempCourseDivs[idx].course.courseDetails.index[event.target.value];
    } else {
      tempCourseDivs[idx].currentIdx = {};
    }

    // console.log(tempCourseDivs[idx].currentIdx.index_number);

    planCourse(
      tempCourseDivs.reduce((filtered, tempCourseDiv) => {
        if (Object.keys(tempCourseDiv.currentIdx).length !== 0) {
          filtered.push(tempCourseDiv.currentIdx);
        }
        return filtered;
      }, [])
    );

    //ifstatement
    setCourseDivs(tempCourseDivs);
  };

  const deleteElement = (idx) => {
    const tempCourseDivs = [...courseDivs];
    // console.log(courseDivs[idx]);
    // console.log(courseDivs[idx].course);
    tempCourseDivs.splice(idx, 1);
    setCourseDivs(tempCourseDivs);
  };

  return (
    <>
      <PlannerIndexComponent
        addCourseDiv={addCourseDiv}
      ></PlannerIndexComponent>
      {courseDivs.map((courseDiv, idx) => {
        return (
          <CourseDiv
            key={idx}
            course={courseDiv.course}
            currentIdx={courseDiv.currentIdx}
            deleteElement={() => deleteElement(idx)}
            updateCurrentIdx={(event) => updateCurrentIdx(event, idx)}
          />
        );
      })}
      <Button
        className="btn-warning"
        onClick={() => addCourseDiv(customCourse, {})}
      >
        Plan
      </Button>
    </>
  );
}
