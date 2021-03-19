import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Container, Row, Col } from "reactstrap";
import appointments from "../shares/today-appointments";

class PlannerCalendarComponent extends Component {
  constructor(props) {
    super(props);
  }

  AppointmentContent = (data) => {
    return (
      <Appointments.AppointmentContent data={data}>
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

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Paper>
              <Scheduler data={this.props.timeTableData} height={660}>
                <WeekView startDayHour={8} endDayHour={22} />
                <Appointments
                  appointmentContentComponent={this.AppointmentContent}
                />
              </Scheduler>
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PlannerCalendarComponent;
