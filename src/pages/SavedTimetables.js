import React, { useState, useEffect } from "react";

export default function SavedTimetables() {
  useEffect(() => {
    console.log("retrieve saved time tables");
  }, []);

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
  ];

  const redirectToPlan = () => {
    console.log("halo");
  };

  return dummy.map((item) => {
    return <a onClick={redirectToPlan}>{item.timetableID}</a>;
  });
}
