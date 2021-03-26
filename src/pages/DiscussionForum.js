import React, { Component } from "react";
import { Media, Card } from "reactstrap";
import DiscussionDetail from "./DiscussionDetail";
// import { COURSES } from "./discussionData";
import { Link } from "react-router-dom";
import "./pageStyle.css";

class Discuss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // courses: COURSES,
      selectedCourse: null,
    };
  }

  handleCourseSelect = (course) => {
    this.setState({ selectedCourse: course });
  };

  render() {
    const topRatedCourse = this.props.courses.map((course) => {
      return (
        <div
          key={course.id}
          onClick={() => this.handleCourseSelect(course)}
          className="col-12 mt-1"
        >
          <Card tag="li">
            <Link to={`/discuss/${course.id}`}>
              <Media body className="ml-5">
                <div className="row">
                  <Media heading className="col-11">
                    <b>{course.courseCode}</b>
                  </Media>
                  <Media className="col-1">{course.rating}</Media>
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
        {this.state.selectedCourse && (
          <DiscussionDetail course={this.state.selectedCourse} />
        )}
      </div>
    );
  }
}

export default Discuss;
