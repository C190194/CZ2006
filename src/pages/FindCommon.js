import React, { useState } from "react";
import PlannerCalendarComponent from "../components/PlannerCalendarComponent";
import appointments from "../shares/today-appointments";
import SelectTimetablePageComponent from "../components/SelectTimetablePageComponent";
import { Button } from "reactstrap";

export default function FindCommon() {
  const [timetablesState, setTimetablesState] = useState({
    timeTables: [
      {
        page: "Timetable 1",
        occupiedTimeSlots: [appointments[0], appointments[1]],
      },
      {
        page: "Timetable 2",
        occupiedTimeSlots: [appointments[0], appointments[2]],
      },
      {
        page: "Common Time Slots",
        occupiedTimeSlots: [appointments[0], appointments[2]],
      },
    ],
    currentTimeTablePage: 1,
  });

  const [selectedFile1, setSelectedFile1] = useState();
  const [isFile1Picked, setIsFile1Picked] = useState(false);
  const [selectedFile2, setSelectedFile2] = useState();
  const [isFile2Picked, setIsFile2Picked] = useState(false);

  const changeHandler1 = (event) => {
    setSelectedFile1(event.target.files[0]);
    setIsFile1Picked(true);
  };

  const changeHandler2 = (event) => {
    setSelectedFile2(event.target.files[0]);
    setIsFile2Picked(true);
  };

  const handleSubmission = () => {};
  function File1UploadPage() {
    return (
      <div>
        <input type="file" name="file" onChange={changeHandler1} />
        {isFile1Picked ? (
          <div>
            <p>File1name: {selectedFile1.name}</p>
            <p>File1type: {selectedFile1.type}</p>
            <p>Size in bytes: {selectedFile1.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile1.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    );
  }

  function File2UploadPage() {
    return (
      <div>
        <input type="file" name="file2" onChange={changeHandler2} />
        {isFile2Picked ? (
          <div>
            <p>File2name: {selectedFile2.name}</p>
            <p>File2type: {selectedFile2.type}</p>
            <p>Size in bytes: {selectedFile2.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile2.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    );
  }

  const updateTimeTablePageNum = (tempPage) => {
    setTimetablesState((prevTimetablesState) => ({
      ...prevTimetablesState,
      currentTimeTablePage: tempPage,
    }));
  };

  const useSavedTimetable1 = () => {
    //select saved timetables
    const tempttstate = { ...timetablesState };
    const tempTimetables = [...tempttstate.timeTables];
    tempTimetables[0] = {
      ...tempTimetables[0],
      occupiedTimeSlots: [appointments[0], appointments[2]],
    };

    setTimetablesState((prevTimetablesState) => ({
      ...prevTimetablesState,
      timeTables: tempTimetables,
    }));

    // console.log(timetablesState);
  };

  var datatobepassed =
    timetablesState.timeTables[timetablesState.currentTimeTablePage - 1]
      .occupiedTimeSlots;

  //call backend method
  const retrieveSavedTimetable = () => {
    const dummy = { timetableID: Math.random().toString(36).substr(2, 9) };
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
          <div className="row">
            <h4>Timetables</h4>
          </div>
          <div className="row">
            <h5>Timetable 1</h5>
          </div>
          <div className="row">
            <File1UploadPage />
          </div>
          <div className="row">
            <Button onClick={useSavedTimetable1}>Use saved timetable</Button>
          </div>
          <br />
          <div className="row">
            <h5>Timetable 2</h5>
          </div>
          <div className="row">
            <File2UploadPage />
          </div>
          <div className="row">
            <Button>Use saved timetable</Button>
          </div>
        </div>
        <div className="col-10">
          <SelectTimetablePageComponent
            combinations={timetablesState.timeTables}
            updateTimeTablePageNum={updateTimeTablePageNum}
          />
          <PlannerCalendarComponent
            timeTableData={
              timetablesState.timeTables[
                timetablesState.currentTimeTablePage - 1
              ].occupiedTimeSlots
            }
          />
        </div>
      </div>
    </div>
  );
}
