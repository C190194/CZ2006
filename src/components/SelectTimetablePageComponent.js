import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectTimetablePageComponent({
  combinations,
  currentTimeTablePage,
  updateTimeTablePageNum,
}) {
  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-page-native-simple">Page</InputLabel>
      <Select
        native
        value={currentTimeTablePage}
        onChange={(event) => {
          updateTimeTablePageNum(event.target.value);
        }}
        label="Page"
      >
        {combinations.map((combination, idx) => {
          return (
            <option
              key={Math.random().toString(36).substr(2, 9)}
              value={idx + 1}
            >
              {idx + 1}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
