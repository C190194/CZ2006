import React, { Component, useState, useEffect } from "react";
import { Media, Card, Button } from "reactstrap";
import DiscussionDetail from "./DiscussionDetail";
// import { COURSES } from "./discussionData";
import { Link } from "react-router-dom";
import "./pageStyle.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import SearchCourseDropdown from "../components/SearchCourseDropdown";
import { useHistory } from "react-router-dom";

function DiscussionForum(props) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [value, setValue] = useState(null);
  const [data, setData] = useState([]);

  //method to add course(div)
  const getData = () => {
    fetch("output.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        //i only chose 200 courses
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            <Link to={`/discuss/${course.courseCode}`}>
              <Media body className="ml-5">
                <div className="row">
                  <Media heading className="col-9">
                    <b>{course.courseCode}</b>
                  </Media>
                  <div className="col-2">
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
          </Card>
        </div>
      </div>
    );
  });

  const history = useHistory();

  function handleSearchCourse(val) {
    if (val !== null) {
      history.push(`/discuss/${val.courseCode}`);
    }
  }

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
            options={data.map((item) => ({
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
      <div>Top Rated Course</div>
      <div className="row">
        <Media list>{topRatedCourse}</Media>
      </div>
      {selectedCourse && <DiscussionDetail course={selectedCourse} />}
    </div>
  );
}

export default DiscussionForum;
