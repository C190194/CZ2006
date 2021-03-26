import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { Button, Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
  import ShareTimetableComponent from "./ShareTimetableComponent";

class PlannerCalendarComponent extends Component {
  constructor(props) {
    super(props);

  this.toggleNav = this.toggleNav.bind(this);
  this.toggleModal = this.toggleModal.bind(this);
  this.handleLogin = this.handleLogin.bind(this);

  this.state = {
      isNavOpen: false,
      isModalOpen: false
  };
}

toggleNav() {
  this.setState({
    isNavOpen: !this.state.isNavOpen
  });
}

toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

handleLogin(event) {
  this.toggleModal();
  alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
  event.preventDefault();

}

  formatDate(date) {
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

  AppointmentContent = (data) => {
    return (
      <Appointments.AppointmentContent
        data={data}
        type={"vertical"}
        formatDate={this.formatDate}
        durationType={"null"}
        recurringIconComponent={this.props}
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
        <Row>
          <div className="col-9" />
          <Button className="col-3" outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Share Timetable</Button>

        </Row>

        <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}  fade={false} >
          <ModalHeader toggle={this.toggleModal}><h2>Share Timetable</h2></ModalHeader>
          <ModalBody class="modal fade bd-example-modal-lg">
            <ShareTimetableComponent />
          </ModalBody>
        </Modal>

      </Container>
    );
  }
}

export default PlannerCalendarComponent;
