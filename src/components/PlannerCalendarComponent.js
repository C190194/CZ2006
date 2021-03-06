import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import RoomIcon from "@material-ui/icons/Room";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { resourcesData } from "./resources";
// import "./calendar.css";
// import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

export default function PlannerCalendarComponent(props) {
  // const planTimetableContext = usePlanTimetable();

  // const timetablesState = planTimetableContext.timetablesState;
  // const displayCurrentTTpage = planTimetableContext.displayCurrentTTpage;

  let resources = [
    {
      fieldName: "courseDivID",
      title: "Course",
      instances: resourcesData,
    },
  ];

  function formatDate(date) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + " " + monthNames[monthIndex] + " " + year;
  }

  // const currentDate = "2021-03-02";

  const AppointmentContent = (data) => {
    return (
      <Appointments.AppointmentContent
        data={data}
        type={"vertical"}
        formatDate={formatDate}
        durationType={"null"}
        recurringIconComponent={props}
      >
        <div>
          <div style={{ fontSize: "13px" }}>{data.data.title}</div>
          <div style={{ fontSize: "11px" }}>{data.data.type}</div>
          <div style={{ fontSize: "11px" }}>{data.data.group}</div>
          <div style={{ fontSize: "11px" }}>{data.data.location}</div>
          <div style={{ fontSize: "11px" }}>{data.data.remarks}</div>
        </div>
      </Appointments.AppointmentContent>
    );
  };

  const AppoinmentTooltipContent = ({
    children,
    appointmentData,
    classes,
    ...restProps
  }) => {
    return (
      <AppointmentTooltip.Content
        {...restProps}
        appointmentData={appointmentData}
      >
        <Grid container alignItems="center">
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <GroupIcon />
          </Grid>
          <Grid item xs={10}>
            <span>{appointmentData.group}</span>
          </Grid>
          <Grid item xs={2} style={{ textAlign: "center" }}>
            <RoomIcon />
          </Grid>
          <Grid item xs={10}>
            <span>{appointmentData.location}</span>
          </Grid>
        </Grid>

        {appointmentData.remarks !== "" ? (
          <div>
            <Grid container alignItems="center">
              <Grid item xs={2} style={{ textAlign: "center" }}>
                <ScheduleIcon />
              </Grid>
              <Grid item xs={10}>
                <span>{appointmentData.remarks}</span>
              </Grid>
            </Grid>
          </div>
        ) : (
          ""
        )}
      </AppointmentTooltip.Content>
    );
  };

  // const TimeScaleLayout = () => {
  //   return <WeekView.TimeScaleLayout height={20} />;
  // };
  // displayCurrentTTpage();
  return (
    <Paper>
      <div
      // className="calendar"
      >
        <Scheduler
          data={props.timeTableData}
          firstDayOfWeek={1}
          // style={{ height: 400 }}
        >
          <ViewState currentDate={props.currentDate} />
          <WeekView
            startDayHour={8}
            endDayHour={22}
            // timeScaleLayoutComponent={TimeScaleLayout}
          />
          <Appointments appointmentContentComponent={AppointmentContent} />
          <AppointmentTooltip
            showCloseButton
            contentComponent={AppoinmentTooltipContent}
          />
          <Resources data={resources} mainResourceName="courseDivID" />
        </Scheduler>
      </div>
    </Paper>
  );
}
