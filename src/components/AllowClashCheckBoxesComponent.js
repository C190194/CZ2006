import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import { usePlanTimetable } from "../context/PlanTimetableContextProvider";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function AllowClashCheckBoxesComponent(props) {
  const planTimetableContext = usePlanTimetable();
  const courseDivs = planTimetableContext.courseDivs;
  const allowClashCC = planTimetableContext.allowClashCC;
  const setAllowClashCC = planTimetableContext.setAllowClashCC;

  const classes = useStyles();

  // const [state, setState] = React.useState({
  //   gilad: true,
  //   jason: false,
  //   antoine: false,
  // });
  const [state, setState] = React.useState(allowClashCC);

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(allowClashCC)) {
      props.setcChangeIsMade(false);
    } else {
      props.setcChangeIsMade(true);
    }
  }, [state]);

  useEffect(() => {
    setAllowClashCC(state);
  }, [props.isChangeSaved]);

  const handleChange = (event) => {
    // setState([...state, [event.target.name]: event.target.checked });
    if (event.target.checked && !state.includes(event.target.name)) {
      setState([...state, event.target.name]);
    } else if (!event.target.checked && state.includes(event.target.name)) {
      const tempState = state.filter((item) => item != event.target.name);
      setState(tempState);
    }
    //  props.setcChangeIsMade(true);
  };

  // const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <div className="row">
        <h4>Allow Clash</h4>
      </div>
      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Allow Clash</FormLabel> */}
        <FormGroup>
          {courseDivs.map((courseDiv) => {
            return (
              <div className="row">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.includes(courseDiv.course.courseCode)}
                      onChange={handleChange}
                      name={courseDiv.course.courseCode}
                    />
                  }
                  label={courseDiv.course.courseCode}
                />
              </div>
            );
          })}
          {/* <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          /> */}
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}
