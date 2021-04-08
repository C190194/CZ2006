import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SavedTimetables() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log("retrieve saved time tables");
    // console.log(history);
    console.log(location);

    if (location.state) {
      console.log("state exists");
    }
  }, []);

  const classes = useStyles();

  const dummy = [
    {
      timetableID: "1617704070595",
      courseSelected: {
        AAA08B: "39676",
      },
      fixedTimeSlots: [
        [
          new Date("2021-03-03T01:15:00.000Z"),
          new Date("2021-03-03T02:15:00.000Z"),
        ],
      ],
      courseFixed: {},
      courseClashAllowed: [],
    },
    {
      timetableID: "1617776472165",
      courseSelected: {
        CZ1016: "10061",
        AAA18G: "39652",
      },
      fixedTimeSlots: [
        [
          new Date("2021-03-03T03:45:00.000Z"),
          new Date("2021-03-03T04:45:00.000Z"),
        ],
      ],
      courseFixed: {
        AAA18G: "39652",
      },
      courseClashAllowed: ["CZ1016"],
    },
  ];

  const redirectToPlan = () => {
    console.log("halo");
  };

  return (
    <div className="container">
      <div className="row">
        {dummy.map((item) => (
          <div className="col-4">
            <Link
              to={{
                pathname: location.state ? "/findcommon" : "/planner",
                state: item,
              }}
            >
              <Paper elevation={5} style={{ height: "200px" }}>
                <h5>{new Date(parseInt(item.timetableID)).toString()}</h5>
                <p>{JSON.stringify(item.courseSelected)}</p>
              </Paper>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
