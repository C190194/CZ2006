import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectTimetablePageComponent({
  timetablesState,
  updateTimeTablePageNum,
}) {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-page-native-simple">Page</InputLabel>
      <Select
        native
        value={timetablesState.currentTimeTablePage}
        onChange={(event) => {
          updateTimeTablePageNum(event.target.value);
        }}
        label="Page"
      >
        {Array.from({ length: timetablesState.timeTables.length }, (x, i) => (
          <option key={Math.random().toString(36).substr(2, 9)} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
