import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./ComponentsStyle.css";

import Dropdown from "./PlannerSearchCourseComponent";
//import countries from "./countries.json";
import {data} from "./testData.js";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function PlannerIndexComponent() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [value, setValue] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container">
      <div style={{ width: 200 }}>
        {/* <Dropdown options={countries} prompt="Select countries..." options={countries} value={value} onChange={val => setValue(val) }/> */}
        <Dropdown  prompt="Select courses..." id="courseCode" label="courseCode" options={data} value={value} onChange={val => setValue(val) }/>
      </div>

      <div>
        <FormControl className={classes.formControl}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default PlannerIndexComponent;
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
