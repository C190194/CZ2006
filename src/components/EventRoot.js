// import React, { useState, useEffect, useContext } from "react";

// import DeleteIcon from "@material-ui/icons/Delete";
// import Tippy from "@tippyjs/react";
// import demoClasses from "./tooltipCSS.css";
// // import {
// //   // EventRootProps,
// //   ScheduleType,
// // } from "@remotelock/react-week-scheduler/src/types/";
// import {
//   TimeGridScheduler,
//   classes,
//   DefaultEventRootComponent,
// } from "@remotelock/react-week-scheduler";

// // const EventRootProps = {
// //   className?: string;
// //   classes: ClassNames;
// //   style?: React.CSSProperties;
// //   cellIndex: number;
// //   rangeIndex: number;
// //   isActive: boolean;
// //   disabled?: boolean;
// //   handleDelete(): void;
// // };

// export default function EventRoot(props) {
//   return React.forwardRef((props, ref) => {
//     return (
//       <Tippy
//         arrow
//         interactive
//         // isEnabled={!disabled}
//         hideOnClick={false}
//         className={demoClasses.tooltip}
//         content={
//           // <button disabled={disabled} onClick={handleDelete}>
//           <button>
//             <DeleteIcon className={demoClasses.icon} />
//             Delete
//           </button>
//         }
//       >
//         <DefaultEventRootComponent
//           // handleDelete={handleDelete}
//           // disabled={disabled}
//           {...props}
//           ref={ref}
//         />
//       </Tippy>
//     );
//   });
// }
