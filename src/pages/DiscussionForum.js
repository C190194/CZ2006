import React, { Component, useState } from "react";
import { Media, Card } from "reactstrap";
import DiscussionDetail from "./DiscussionDetail";
// import { COURSES } from "./discussionData";
import { Link } from "react-router-dom";
import "./pageStyle.css";
import CircularSlider from "@fseehawer/react-circular-slider";

function DiscussionForum(props) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // courses: COURSES,
  //     selectedCourse: null,
  //   };
  // }

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const topRatedCourse = props.courses.map((course) => {
    return (
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
    );
  });

  return (
    <div className="container">
      <div className="page-title col-12">
        <b>Discussion Forum</b>
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

// class Discuss extends Component {

// }

// export default Discuss;
