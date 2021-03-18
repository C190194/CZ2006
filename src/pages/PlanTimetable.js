import React, { Component } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import PlannerIndexComponent from "../components/PlannerIndexComponent";
import MoreOptionsComponent from "../components/MoreOptionsComponent";
import "./PlanTimetable.css";

import Paper from "@material-ui/core/Paper";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
// import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
import appointments from "../shares/today-appointments";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default class PlanTimetable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTables: [
        { page: 1, occupiedTimeSlots: [appointments[0], appointments[1]] },
        {
          page: 2,
          occupiedTimeSlots: [appointments[0], appointments[2]],
        },
      ],
      currentTimeTablePage: 1,
    };
  }

  //Backend: addTimetables
  addTimeTables = (tempTimeTables) => {
    //currentTimeTablePage set to 1 as default when new timetables added
    this.setState({ timeTables: tempTimeTables, currentTimeTablePage: 1 });
  };

  updateTimeTablePageNum = (tempPage) => {
    this.setState({ currentTimeTablePage: tempPage });
  };

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
      <div className="container">
        <div className="row">
          <div className="planner-title col-12">
            <b>Course Planner</b>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <PlannerIndexComponent />
          </div>
          <div className="col-10">
            <div className="container">
              <div className="row justify-content-md-center" align="center">
                <MoreOptionsComponent />
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-page-native-simple">
                    Page
                  </InputLabel>
                  <Select
                    native
                    value={this.state.currentTimeTablePage}
                    onChange={(event) => {
                      this.updateTimeTablePageNum(event.target.value);
                    }}
                    label="Page"
                  >
                    {Array.from(
                      { length: this.state.timeTables.length },
                      (x, i) => (
                        <option value={i + 1}>{i + 1}</option>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <PlannerCalendarComponent
                timeTableData={
                  this.state.timeTables[this.state.currentTimeTablePage - 1]
                    .occupiedTimeSlots
                }
              />
            </div>

            {/* <div className="col">
              <Paper>
                <Scheduler
                  data={
                    this.state.timeTables[this.state.currentTimeTablePage - 1]
                      .occupiedTimeSlots
                  }
                  height={660}
                >
                  <WeekView startDayHour={8} endDayHour={19} />
                  <Appointments
                    appointmentContentComponent={this.AppointmentContent}
                  />
                </Scheduler>
              </Paper>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
