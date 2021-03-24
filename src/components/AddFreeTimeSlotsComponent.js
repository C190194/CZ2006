import React, { useState, useEffect, useContext } from "react";
import "resize-observer-polyfill/dist/ResizeObserver.global";
import { TimeGridScheduler, classes } from "@remotelock/react-week-scheduler";
import "@remotelock/react-week-scheduler/index.css";
import { EventRoot } from "./EventRoot";
import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

export default function AddFreeTimeSlotsComponent({
  setfChangeIsMade,
  isChangeSaved,
}) {
  // const [schedule, setSchedule] = useState(defaultSchedule);
  const planTimetableContext = usePlanTimetable();
  const initialSchedule = planTimetableContext.userDefinedTimeSlots;
  const setSchedule = planTimetableContext.setUserDefinedTimeSlots;

  const [customSchedule, setCustomSchedule] = useState(initialSchedule);
  function isEqual(a, b) {
    // if length is not equal
    if (a.length != b.length) return "False";
    else {
      // comapring each element of array
      for (var i = 0; i < a.length; i++) if (a[i] != b[i]) return "False";
      return "True";
    }
  }
  useEffect(() => {
    if (JSON.stringify(customSchedule) === JSON.stringify(initialSchedule)) {
      setfChangeIsMade(false);
    } else {
      setfChangeIsMade(true);
    }
    // setfChangeIsMade(true);
    // console.log(schedule);
    // console.log(schedule[0][0].getDay());
    // console.log(schedule[0][0].getHours());
    // console.log(schedule[0][0].getMinutes());

    // for (var key in schedule[0][0]) {
    //   console.log(schedule[0][0][key]);
    // }
  }, [customSchedule]);

  useEffect(() => {
    setSchedule(customSchedule);
  }, [isChangeSaved]);

  return (
    <div
      style={{
        width: "90vw",
        height: "600px",
        "--cell-height": "20px",
        "--cell-width": "50px",
      }}
    >
      <h4>Add Free Time Slots</h4>
      <TimeGridScheduler
        classes={classes}
        style={{ width: "100%", height: "90%" }}
        originDate={new Date("2021-03-01")}
        schedule={customSchedule}
        onChange={setCustomSchedule}
        eventRootComponent={EventRoot}
        visualGridVerticalPrecision={15}
        verticalPrecision={15}
        cellClickPrecision={60}
      />
    </div>
  );
}
