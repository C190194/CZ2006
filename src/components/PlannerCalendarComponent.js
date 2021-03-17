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
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Paper>
              <Scheduler data={appointments} height={660}>
                <WeekView startDayHour={9} endDayHour={19} />
                <Appointments />
              </Scheduler>
            </Paper>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PlannerCalendarComponent;
