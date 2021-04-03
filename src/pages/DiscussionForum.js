import React, { Component, useState, useEffect } from "react";
import { Media, Card, Button, CardBody } from "reactstrap";
import DiscussionDetail from "./DiscussionDetail";
// import { COURSES } from "./discussionData";
import { Link } from "react-router-dom";
import "./pageStyle.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import SearchCourseDropdown from "../components/SearchCourseDropdown";
import { useHistory } from "react-router-dom";
import { MDBContainer } from "mdbreact";

function DiscussionForum(props) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [value, setValue] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const topRatedCourse = props.courses.map((course) => {
    return (
      <div>
        <div
          key={course.id}
          onClick={() => handleCourseSelect(course)}
          className="col-12 mt-1"
        >
          <Card tag="li">
            <CardBody>
              <Link to={`/discuss/${course.courseCode}`}>
                <Media body className="ml-5">
                  <div className="row">
                    <Media heading className="col-8">
                      <b>{course.courseCode}</b>
                    </Media>
                    <div className="col-3">
                      <p className="row mt-2">Average Rating:</p>
                    </div>
                    <div className="col-1">
                      <div className="row mb-1">
                        <CircularSlider
                          width={60}
                          dataIndex={course.averageRating}
                          label="savings"
                          hideLabelValue={true}
                          verticalOffset="0.5rem"
                          progressSize={8}
                          trackColor="#fffff"
                          progressColorFrom="#228B22"
                          progressColorTo="#39FF14"
                          trackSize={8}
                          min={0}
                          max={10}
                          knobDraggable={false}
                        />
                        <div className="rating">{course.averageRating} </div>
                      </div>
                    </div>
                  </div>
                  <Media heading>{course.name}</Media>
                  <p>{course.description}</p>
                </Media>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  });

  const history = useHistory();

  function handleSearchCourse(val) {
    console.log("Searched");
    if (val !== null) {
      history.push(`/discuss/${val.courseCode}`);
    }
  }
  const scrollContainerStyle = { width: "200px", maxHeight: "400px" };

  return (
    <div className="container">
      <div className="page-title col-12">
        <b>Discussion Forum</b>
      </div>
      <div className="row">
        <div className="col-10">
          <SearchCourseDropdown
            prompt="Select courses..."
            id="courseCode"
            label="courseCode"
            options={props.courses.map((item) => ({
              ...item,
              id: Math.random().toString(36).substr(2, 9),
            }))}
            value={value}
            onChange={(val) => setValue(val)}
          />
        </div>
        <div className="col-2">
          <Button onClick={() => handleSearchCourse(value)}>Search</Button>
        </div>
      </div>
      <div className="row">
        <div className="col-10">Top Rated Course</div>
        <div className="discuss-filter col-2">Filter by School</div>
      </div>
      <div className="row">
        <Media list className="col-10">
          {topRatedCourse}
        </Media>
        {/* <Card className="col-2"> */}
        <MDBContainer className="col-2">
          <div className="scrollbar" style={scrollContainerStyle}>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
            hahahahahahahaah
            <br></br>
          </div>
        </MDBContainer>
        {/* </Card> */}
      </div>
      {selectedCourse && <DiscussionDetail course={selectedCourse} />}
    </div>
  );
}

export default DiscussionForum;
