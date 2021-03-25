import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Container, Row, Col } from "reactstrap";
import { ViewState } from "@devexpress/dx-react-scheduler";
import { resourcesData } from "./resources";
import "./calendar.css";

// import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

export default function PlannerCalendarComponent(props) {
  // const planTimetableContext = usePlanTimetable();
  // const courseDivs = planTimetableContext.courseDivs;

  // useEffect(() => {
  //   if (courseDivs[0]) {
  //     const s = courseDivs[0].currentIdx.lesson;
  //     console.log(s);
  //   }
  // }, [courseDivs]);
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

  const currentDate = "2021-03-02";

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

  // const TimeScaleLayout = () => {
  //   return <WeekView.TimeScaleLayout height={20} />;
  // };

  return (
    <Container>
      <Row>
        <Col>
          <Paper>
            <div
            // className="calendar"
            >
              <Scheduler
                data={props.timeTableData}
                firstDayOfWeek={1}
                // style={{ height: 400 }}
              >
                <ViewState currentDate={currentDate} />
                <WeekView
                  startDayHour={8}
                  endDayHour={22}
                  // timeScaleLayoutComponent={TimeScaleLayout}
                />
                <Appointments
                  appointmentContentComponent={AppointmentContent}
                />
                <AppointmentTooltip showCloseButton />
                <Resources data={resources} mainResourceName="courseDivID" />
              </Scheduler>
            </div>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}
