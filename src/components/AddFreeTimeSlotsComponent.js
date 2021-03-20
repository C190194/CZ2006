import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "resize-observer-polyfill/dist/ResizeObserver.global";
import { TimeGridScheduler, classes } from "@remotelock/react-week-scheduler";
import "@remotelock/react-week-scheduler/index.css";

const rangeStrings = [["March 1, 2021 11:13:00", "March 1, 2021 12:13:00"]];

const defaultSchedule = rangeStrings.map((range) =>
  range.map((dateString) => new Date(dateString))
);

export default function App() {
  // console.log("asdasd" + defaultSchedule);
  // console.log(defaultSchedule[0][0].toUTCString());
  const [schedule, setSchedule] = useState(defaultSchedule);

  useEffect(() => {
    console.log(schedule);
    console.log(schedule[0][0].getDay());
    console.log(schedule[0][0].getHours());
    console.log(schedule[0][0].getMinutes());

    for (var key in schedule[0][0]) {
      console.log(schedule[0][0][key]);
    }
  }, [schedule]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "600px",
        "--cell-height": "20px",
        "--cell-width": "50px",
      }}
    >
      <h4>Add Free Time Slots</h4>
      <TimeGridScheduler
        classes={classes}
        style={{ width: "100%", height: "100%" }}
        originDate={new Date("2021-03-01")}
        schedule={schedule}
        onChange={setSchedule}
        visualGridVerticalPrecision={15}
        verticalPrecision={15}
        cellClickPrecision={60}
      />
    </div>
  );
}
