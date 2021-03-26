import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./ComponentsStyle.css";

function ShareTimetableComponent() {
  return (
    <div>
      <div className="share-timetable">
        <p>Choose a timetable to share</p>
        <DropdownButton id="dropdown-basic-button" title="Select a timetable">
          <Dropdown.Item class="dropdown" href="#/action-1">Timetable 1</Dropdown.Item>
          <Dropdown.Item class="dropdown" href="#/action-2">Timetable 2</Dropdown.Item>
          <Dropdown.Item class="dropdown" href="#/action-3">Timetable 3</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
}

export default ShareTimetableComponent;
