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
      timetableID: "1617868015223",
      courseSelected: [
        {
          courseID: "AAA08B",
          indexNum: "39676",
        },
        {
          courseID: "AAA18G",
          indexNum: "39652",
        },
        {
          courseID: "AAA28J",
          indexNum: "39682",
        },
      ],
      fixedTimeSlots: [],
      courseFixed: [
        {
          courseID: "AAA18G",
          indexNum: "39652",
        },
      ],
      courseClashAllowed: [],
    },
    {
      timetableID: "1617869004855",
      courseSelected: [
        {
          courseID: "CZ1007",
          indexNum: "10059",
        },
        {
          courseID: "AAA08B",
          indexNum: "",
        },
        {
          courseID: "CZ1103",
          indexNum: "10064",
        },
      ],
      fixedTimeSlots: [
        [
          new Date("2021-03-02T01:45:00.000Z"),
          new Date("2021-03-02T02:45:00.000Z"),
        ],
        [
          new Date("2021-03-05T03:45:00.000Z"),
          new Date("2021-03-05T04:45:00.000Z"),
        ],
      ],
      courseFixed: [
        {
          courseID: "CZ1103",
          indexNum: "10064",
        },
      ],
      courseClashAllowed: ["AAA08B"],
    },
    // {
    //   timetableID: "1617704070595",
    //   courseSelected: {
    //     AAA08B: "39676",
    //   },
    //   fixedTimeSlots: [
    //     [
    //       new Date("2021-03-03T01:15:00.000Z"),
    //       new Date("2021-03-03T02:15:00.000Z"),
    //     ],
    //   ],
    //   courseFixed: {},
    //   courseClashAllowed: [],
    // },
    // {
    //   timetableID: "1617776472165",
    //   courseSelected: {
    //     CZ1016: "10061",
    //     AAA18G: "39652",
    //   },
    //   fixedTimeSlots: [
    //     [
    //       new Date("2021-03-03T03:45:00.000Z"),
    //       new Date("2021-03-03T04:45:00.000Z"),
    //     ],
    //   ],
    //   courseFixed: {
    //     AAA18G: "39652",
    //   },
    //   courseClashAllowed: ["CZ1016"],
    // },
  ];

  const editeddummy = dummy.map((item) => {
    const courseSelected = {};
    item.courseSelected.forEach((element) => {
      courseSelected[element.courseID] = element.indexNum;
    });
    const courseFixed = {};
    item.courseFixed.forEach((element) => {
      courseFixed[element.courseID] = element.indexNum;
    });

    item.courseSelected = courseSelected;
    item.courseFixed = courseFixed;
    return item;
  });

  const redirectToPlan = () => {
    console.log("halo");
  };

  return (
    <div className="container">
      <div className="row">
        {editeddummy.map((item) => (
          <div className="col-4">
            <Link
              to={{
                pathname: location.state ? "/findcommon" : "/planner",
                state: item,
              }}
            >
              <Paper
                elevation={5}
                style={{ height: "200px", wordWrap: "break-word" }}
              >
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
