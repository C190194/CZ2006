import React, { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Container, Row, Col } from "reactstrap";
import { usePlanTimetable } from "../context/PlanTimetableContextProvider";

export default function PlannerCalendarComponent(props) {
  const planTimetableContext = usePlanTimetable();
  const courseDivs = planTimetableContext.courseDivs;

  useEffect(() => {
    if (courseDivs[0]) {
      const s = courseDivs[0].currentIdx.lesson;
      console.log(s);
    }
  }, [courseDivs]);

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

  return (
    <Container>
      <Row>
        <Col>
          <Paper>
            <Scheduler data={props.timeTableData} height={660}>
              <WeekView startDayHour={8} endDayHour={22} />
              <Appointments appointmentContentComponent={AppointmentContent} />
            </Scheduler>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}
