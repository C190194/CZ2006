import React, { Component, useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./ComponentsStyle.css";

// import Dropdown from "./PlannerSearchCourseComponent";
//import countries from "./countries.json";
import { data } from "./testData.js";

// import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "reactstrap";
// import { courseTimetableData } from "../data/CourseIndexesData";
// import { data } from "../data/data";
// import "./reset.css";
// import "./test.css";
//find a way pass data to plantimetable
import "./PlannerSearchCourseStyle.css";
// import addFunction from "./PlannerIndexComponent";

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

// const convertDictToArr = () => {
//   return Object.keys(courseTimetableData["CSC Y2"].CZ2006.course_indexes);
//   // return [1, 2, 3, 4, 5, 6, 7, 8];
// };

const CourseDiv = function (props) {
  const { course, currentIdx, deleteElement, updateCurrentIdx } = props;
  const classes = useStyles();
  const courseCode = course.courseCode;
  // console.log("Course below:");
  // console.log(course);
  const indexes = course.courseDetails.index;
  // const [courseIdx, setCourseIdx] = React.useState("");

  // const handleChange = (event) => {
  //   setCourseIdx(event.target.value);
  //   // alert(event.target.value);
  //   // courseIdx = event.target.value;
  // };

  return (
    <div
      className="row"
      style={{ border: "2px solid grey", borderRadius: "5px" }}
    >
      <div className="row">
        <div className="col-1">{courseCode}</div>
        <div className="col-1">
          <IconButton className={classes.button} onClick={deleteElement}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <FormControl className={classes.formControl}>
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

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="row" style={{ width: 200 }}>
      {/* <Dropdown options={countries} prompt="Select countries..." options={countries} value={value} onChange={val => setValue(val) }/> */}
      <Dropdown
        prompt="Select courses..."
        id="courseCode"
        label="courseCode"
        options={data}
        value={value}
        onChange={(val) => setValue(val)}
        addCourseDivFunc={addCourseDiv}
      />
    </div>
  );
}

function Dropdown({
  options,
  id,
  label,
  prompt,
  value,
  onChange,
  addCourseDivFunc,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const [tempOption, setTempOption] = useState("");

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
            <div>
              <div
                key={option[id]}
                className={`option ${value === option ? "selected" : null}`}
                onClick={() => {
                  setQuery("");
                  onChange(option);
                  setOpen(false);
                  setTempOption(option);
                  //addCourseDivFunc(option, {});
                }}
              >
                {option[label]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          addCourseDivFunc(tempOption, {});
        }}
      >
        ADD COURSE
      </Button>
    </div>
  );
}

export default class ShareTimetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDivs: [
        // {
        //   course: {
        //     courseCode: "AAA08B",
        //     courseDetails: {
        //       name: "FASHION & DESIGN: WEARABLE ART AS A SECOND SKIN*",
        //       au: " 3.0 AU",
        //       index: [
        //         {
        //           index_number: "39676",
        //           details: [
        //             {
        //               type: "LEC/STUDIO",
        //               group: "L1",
        //               day: "WED",
        //               time: {
        //                 full: "1130-1430",
        //                 start: "1130",
        //                 end: "1430",
        //                 duration: 3,
        //               },
        //               location: "NIE7-02-07",
        //               flag: 0,
        //               remarks: "",
        //             },
        //           ],
        //         },
        //       ],
        //     },
        //   },
        //   currentIdx: {},
        //   tempValue: "",
        // },
        // { courseCode: "cz2007", indexes: [1, 2, 3, 5], currentIdx: null },
        // { courseCode: "row3", indexes: [1, 2, 3, 6], currentIdx: null },
      ],
    };
  }

  //method to add course(div)
  addCourseDiv = (tempCourse, currentIdxVar) => {
    const tempCourseDivs = [
      ...this.state.courseDivs,
      { course: tempCourse, currentIdx: currentIdxVar },
    ];
    this.setState({
      courseDivs: tempCourseDivs,
    });
  };

  //Backend: this method will retrieve all course indexes then call backend method to return timetables
  //if clash then give a error message
  planCourse = (temp_course_indexes) => {
    console.log(temp_course_indexes);
    // console.log(temp_course_indexes[0].index_number);
  };

  updateCurrentIdx = (event, idx) => {
    const tempCourseDivs = [...this.state.courseDivs];
    if (event.target.value !== "") {
      tempCourseDivs[idx].currentIdx =
        tempCourseDivs[idx].course.courseDetails.index[event.target.value];
    } else {
      tempCourseDivs[idx].currentIdx = {};
    }

    // console.log(tempCourseDivs[idx].currentIdx.index_number);

    this.planCourse(
      tempCourseDivs.reduce((filtered, tempCourseDiv) => {
        if (Object.keys(tempCourseDiv.currentIdx).length !== 0) {
          filtered.push(tempCourseDiv.currentIdx);
        }
        return filtered;
      }, [])
    );

    //ifstatement
    this.setState({
      courseDivs: tempCourseDivs,
    });
  };

  deleteElement = (idx) => {
    const tempCourseDivs = [...this.state.courseDivs];
    // console.log(courseDivs[idx]);
    // console.log(courseDivs[idx].course);
    tempCourseDivs.splice(idx, 1);
    this.setState({
      courseDivs: tempCourseDivs,
    });
  };

  setTempValue = (event) => {
    this.setState({ tempValue: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <PlannerIndexComponent
          addCourseDiv={this.addCourseDiv}
        ></PlannerIndexComponent>
        {this.state.courseDivs.map((courseDiv, idx) => {
          return (
            <CourseDiv
              key={idx}
              course={courseDiv.course}
              currentIdx={courseDiv.currentIdx}
              deleteElement={() => this.deleteElement(idx)}
              updateCurrentIdx={(event) => this.updateCurrentIdx(event, idx)}
            />
          );
        })}
        {/* <Button
          className="custombtn"
          onClick={() => this.addCourseDiv(customCourse, {})}
        >
          addCourse
        </Button> */}
        <Button
          className="btn-warning"
          onClick={() => this.addCourseDiv(customCourse, {})}
        >
          Plan
        </Button>
        <div>
          {/* {courseTimetableData["CSC Y2"].CZ2006.course_indexes[10147][0].TYPE} */}
        </div>
      </div>
    );
  }
}

// function PlannerIndexComponent() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState("");
//   const [value, setValue] = useState(null);

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   return (
//     <div className="container">
//       <div style={{ width: 200 }}>
//         {/* <Dropdown options={countries} prompt="Select countries..." options={countries} value={value} onChange={val => setValue(val) }/> */}
//         <Dropdown
//           prompt="Select courses..."
//           id="courseCode"
//           label="courseCode"
//           options={data}
//           value={value}
//           onChange={(val) => setValue(val)}
//         />
//       </div>

//       <div>
//         <FormControl className={classes.formControl}>
//           <Select
//             value={age}
//             onChange={handleChange}
//             displayEmpty
//             className={classes.selectEmpty}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//         </FormControl>
//       </div>
//     </div>
//   );
// }

// export default PlannerIndexComponent;
// <div className="row">
//   <div className="planner-search col-12">
//     <input
//       type="text"
//       placeholder="Search course"
//       name="search"
//       onChange={(event) => {
//         setSearchTerm(event.target.value);
//       }}
//     />
//     {JSONDATA.filter((val) => {
//       if (searchTerm == "") {
//         return val;
//       } else if (
//         val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
//       ) {
//         return val;
//       }
//     }).map((val, key) => {
//       return (
//         <div className="user" key={key}>
//           <option>{val.first_name}</option>
//         </div>
//       );
//     })}
//   </div>
// </div>
