import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import appointments from "../shares/today-appointments";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";
import { Button } from "reactstrap";
import MUIButton from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
}));

function ToggleButtonNotEmpty(props) {
  const { setWeekView } = props;
  const [week, setWeek] = React.useState("currentweek");

  const handleWeek = (event, newWeek) => {
    if (newWeek !== null) {
      console.log(newWeek);
      setWeek(newWeek);
      if (newWeek === "currentweek") {
        setWeekView(0);
      } else {
        setWeekView(1);
      }
    }
  };

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6}>
        <div className={classes.toggleContainer}>
          <ToggleButtonGroup
            value={week}
            exclusive
            onChange={handleWeek}
            aria-label="text alignment"
          >
            <ToggleButton value="currentweek" aria-label="left aligned">
              Current Week
            </ToggleButton>
            <ToggleButton value="nextweek" aria-label="justified">
              Next Week
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Grid>
    </Grid>
  );
}

const GetTimetableData = function (props) {
  const { selectedICSfile, deleteElement, chooseICSfile, idx } = props;

  return (
    <Paper
      elevation={5}
      style={{
        // width: "180px",
        // overflowWrap: "break-word",
        wordWrap: "break-word",
      }}
    >
      <h5>{"Timetable" + (idx + 1)}</h5>
      <MUIButton
        variant="outlined"
        color="secondary"
        startIcon={<CloseIcon />}
        onClick={deleteElement}
        style={{ width: "40px", minWidth: "40px" }}
      ></MUIButton>
      <input type="file" name="file" accept=".ics" onChange={chooseICSfile} />
      <p>{selectedICSfile.fileName || "No file chosen"}</p>
    </Paper>
  );
};

export default function FindCommon() {
  const [selectedICSfiles, setSelectedICSfiles] = useState([
    {
      // page: "Timetable" + selectedICSfiles.indexOf(this),
      fileName: "liew.ics",
      fileData: "haha",
      results: [
        [appointments[0], appointments[1]],
        [appointments[0], appointments[2]],
      ],
    },
  ]);

  const [commonFreeTimeSlots, setCommonFreeTimeSlots] = useState([
    [appointments[0]],
    [appointments[0], appointments[2]],
  ]);

  const [weekView, setWeekView] = useState(0); //0-current week , 1-next week
  const [currentPage, setCurrentPage] = useState(1); //1 = index 0

  // sessionStorage.setItem("selectedICSfiles", JSON.stringify(dummyfiles));
  // console.log(JSON.parse(sessionStorage.getItem("selectedICSfiles")));

  const location = useLocation();
  useEffect(() => {
    console.log("find common");
    // console.log(history);
    console.log(location);

    if (location.state) {
      console.log("state exists");
    }
  }, []);

  const deleteElement = (idx) => {
    const tempSelectedICSfiles = [...selectedICSfiles];
    tempSelectedICSfiles.splice(idx, 1);
    setSelectedICSfiles(tempSelectedICSfiles);
  };

  const addTimetable = () => {
    const tempSelectedICSfiles = [
      ...selectedICSfiles,
      {
        fileName: null,
        fileData: null,
        results: [],
      },
    ];
    setSelectedICSfiles(tempSelectedICSfiles);
  };
  const week1 = new Date("2021-01-11T00:00:00Z");
  const week2 = new Date("2021-01-18T00:00:00Z");
  const week3 = new Date("2021-01-25T00:00:00Z");
  const week4 = new Date("2021-02-01T00:00:00Z");
  const week5 = new Date("2021-02-08T00:00:00Z");
  const week6 = new Date("2021-02-15T00:00:00Z");
  const week7 = new Date("2021-02-22T00:00:00Z");
  const recess = new Date("2021-03-01T00:00:00Z");
  const week8 = new Date("2021-03-08T00:00:00Z");
  const week9 = new Date("2021-03-15T00:00:00Z");
  const week10 = new Date("2021-03-22T00:00:00Z");
  const week11 = new Date("2021-03-29T00:00:00Z");
  const week12 = new Date("2021-04-05T00:00:00Z");
  const week13 = new Date("2021-04-12T00:00:00Z");
  const end = new Date("2021-04-19T00:00:00Z");

  const teaching_weeks = [
    week1,
    week2,
    week3,
    week4,
    week5,
    week6,
    week7,
    week8,
    week9,
    week10,
    week11,
    week12,
    week13,
    end,
  ];

  function getWeek() {
    let now = new Date();
    if (recess < now && now < week8) {
      return -1; // Recess week
    } else if (end < now) {
      return 14; // Teaching weeks have ended
    }
    for (let i = 0; i < 13; i++) {
      if (now < teaching_weeks[i]) {
        return i;
        // i = 0 means before week1
      }
    }
  }
  //call backend method
  const submitFiles = () => {
    const reqbody = { icsList: [] };
    reqbody.icsList = selectedICSfiles.map((item) => item.fileData);
    reqbody.week = getWeek();
    // reqbody.week = getCurrentWeek();
    console.log(reqbody);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    axios
      .post("/appointment/get_appointments", reqbody, axiosConfig)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        const tempSelectedICSfiles = [...selectedICSfiles];
        response.data[0].forEach((element, idx) => {
          // console.log(idx);
          tempSelectedICSfiles[idx].results[0] = element;
        });
        response.data[1].forEach((element, idx) => {
          //  console.log(idx);
          tempSelectedICSfiles[idx].results[1] = element;
        });
      });
  };

  //call backend method
  const generateCommonFreeTimeSlots = () => {
    const reqbody = { appointmentList: [[], []] };
    console.log(selectedICSfiles);
    for (let i = 0; i < selectedICSfiles.length; i++) {
      if (selectedICSfiles[i].results.length !== 0) {
        reqbody.appointmentList[0].push(...selectedICSfiles[i].results[0]);
        reqbody.appointmentList[1].push(...selectedICSfiles[i].results[1]);
      }
    }
    // reqbody.appointmentList.push(selectedICSfiles.map((item) => ...[1,2,3]);
    // reqbody.week = getCurrentWeek();
    console.log(reqbody);
  };

  const chooseICSfile = (i, event) => {
    if (event.target.files[0]) {
      const tempSelectedICSfiles = [...selectedICSfiles];
      tempSelectedICSfiles[i].fileName = event.target.files[0].name;
      const reader = new FileReader();
      reader.onload = function (e) {
        // The file's text will be printed here
        // console.log(e.target.result);
        tempSelectedICSfiles[i].fileData = e.target.result;
      };
      reader.readAsText(event.target.files[0]);
      setSelectedICSfiles(tempSelectedICSfiles);
    }
  };
  const updateTimeTablePageNum = (tempPage) => {
    console.log(tempPage);
    setCurrentPage(tempPage);
    // setIsPageChanged(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="planner-title col-12">
          <b>Find Common Time Slots</b>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <h4>Timetables</h4>
          <Button onClick={addTimetable}>Add timetable</Button>
          <br />
          <Button onClick={submitFiles}>Submit files</Button>
          <br />
          <Button onClick={generateCommonFreeTimeSlots}>
            Generate Common Free Time Slots
          </Button>

          {selectedICSfiles.map((item, idx) => {
            return (
              <GetTimetableData
                selectedICSfile={item}
                deleteElement={deleteElement}
                chooseICSfile={chooseICSfile.bind(this, idx)}
                idx={idx}
              />
            );
          })}
        </div>

        <div className="col-10">
          <ToggleButtonNotEmpty
            setWeekView={setWeekView}
          ></ToggleButtonNotEmpty>

          <SelectTimetablePageComponent
            combinations={[
              ...selectedICSfiles,
              { page: "Common Free Time Slots", results: commonFreeTimeSlots },
            ]}
            updateTimeTablePageNum={updateTimeTablePageNum}
          />
          <PlannerCalendarComponent
            timeTableData={
              currentPage !== selectedICSfiles.length + 1
                ? selectedICSfiles[currentPage - 1].results[weekView]
                : commonFreeTimeSlots[weekView]
            }
          />
        </div>
      </div>
    </div>
  );
}
//         <Link
//           to={{
//             pathname: "/savedtimetables",
//             state: "Select a timetable for find common",
//           }}
//         >
//           <Button>go to savedtt</Button>
//         </Link>
