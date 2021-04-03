import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function AllowClashCheckBoxesComponent({
  tempAllowClashCC,
  setTempAllowClashCC,
  courseDivs,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    if (event.target.checked && !tempAllowClashCC.includes(event.target.name)) {
      setTempAllowClashCC([...tempAllowClashCC, event.target.name]);
    } else if (
      !event.target.checked &&
      tempAllowClashCC.includes(event.target.name)
    ) {
      const tempState = tempAllowClashCC.filter(
        (item) => item != event.target.name
      );
      setTempAllowClashCC(tempState);
    }
  };

  return (
<<<<<<< Updated upstream
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Allow Clash</FormLabel>
      <FormGroup>
        {courseDivs.map((courseDiv) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={tempAllowClashCC.includes(
                    courseDiv.course.courseCode
                  )}
                  onChange={handleChange}
                  name={courseDiv.course.courseCode}
                />
              }
              label={courseDiv.course.courseCode}
            />
          );
        })}
      </FormGroup>
    </FormControl>
=======
    <>
      <h4>Allow Clash</h4>

      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Allow Clash</FormLabel> */}
        <FormGroup>
          {courseDivs.map((courseDiv) => {
            return (
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
    </>
>>>>>>> Stashed changes
  );
}
