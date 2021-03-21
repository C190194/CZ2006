import React, { useState, useEffect, useContext } from "react";
import "resize-observer-polyfill/dist/ResizeObserver.global";
import {
  TimeGridScheduler,
  classes,
  DefaultEventRootComponent,
  Schedule,
} from "@remotelock/react-week-scheduler";
import "@remotelock/react-week-scheduler/index.css";
// import "@remotelock/react-week-scheduler/in;
// import EventRoot from "./EventRoot";
// React.forwardRef()
import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

import DeleteIcon from "@material-ui/icons/Delete";
// import Tippy from "@tippy.js/react";
// import demoClasses from "./index.module.scss";

// const EventRoot = React.forwardRef<any, EventRootProps>(function EventRoot(
//   { handleDelete, disabled, ...props },
//   ref,
// ) {
//   return (
//     <Tippy
//       arrow
//       interactive
//       isEnabled={!disabled}
//       hideOnClick={false}
//       className={demoClasses.tooltip}
//       content={
//         <button disabled={disabled} onClick={handleDelete}>
//           <DeleteIcon className={demoClasses.icon} />
//           Delete
//         </button>
//       }
//     >
//       <DefaultEventRootComponent
//         handleDelete={handleDelete}
//         disabled={disabled}
//         {...props}
//         ref={ref}
//       />
//     </Tippy>
//   );
// });

// const classes1 = classes;
// interface EventRootProps = {
//   className: string,
//   classes: classes1,
//   style: React.CSSProperties,
//   cellIndex: number,
//   rangeIndex: number,
//   isActive: boolean,
//   disabled: boolean,
//   handleDelete(): void,
// };
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
        width: "95vw",
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
        // eventRootComponent={EventRoot}
        visualGridVerticalPrecision={15}
        verticalPrecision={15}
        cellClickPrecision={60}
      />
    </div>
  );
}
