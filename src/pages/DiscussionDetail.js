import React, { Component, useState } from "react";
import {
  Media,
  Card,
  CardHeader,
  CardBody,
  Button,
  Label,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Control, LocalForm, Errors } from "react-redux-form";
import "./pageStyle.css";

function RenderComments({ comments /*, postComment, dishId */ }) {
  if (comments != null) {
    return (
      <Card className="comment-card">
        <CardHeader className="comment-header">
          <div className="row">
            <h4 className="col-9">Comments</h4>
            <CommentForm
              className="col-3"
              courseId={comments.courseId} /*postComment={postComment}*/
            />
          </div>
        </CardHeader>
        {/* <CardBody> */}
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <Card className="ml-2 mr-2 mt-2">
                  <p className="ml-4">
                    <b>{comment.author} </b>
                  </p>

                  <p className="ml-5">{comment.comment}</p>
                </Card>
              </li>
            );
          })}
        </ul>
        {/* </CardBody> */}
      </Card>
    );
  } else return <div></div>;
}

class DiscussionDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const comments = this.props.comments.map((comment) => (
    //   <div>
    //     <div key={comment.id}>
    //       <Card className="ml-2 mt-3">
    //         <p className="ml-4">
    //           <b>{comment.author} </b>
    //         </p>

    //         <p className="ml-5">{comment.comment}</p>
    //       </Card>
    //     </div>
    //     <CommentForm dishId={comment.courseId} /*postComment={postComment}*/ />
    //   </div>
    // ));

    return (
      <div className="container">
        <div className="row">
          <div key={this.props.course.id} className="mt-1">
            <Card tag="li">
              <Media body className="ml-5">
                <div className="row">
                  <Media heading className="col-11">
                    <b>{this.props.course.courseCode}</b>
                  </Media>
                  <Media className="col-1">{this.props.course.rating}</Media>
                </div>
                <Media heading>{this.props.course.name}</Media>
                <p>{this.props.course.description}</p>
              </Media>
            </Card>
          </div>
        </div>
        <div className="m-1">
          <div className="row"></div>
          {/* {comments} */}
          <RenderComments comments={this.props.comments} />
        </div>
      </div>
    );
  }
}

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function valuetext(value) {
  return `${value}°C`;
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  // handleSubmit(values) {
  //   console.log("Current state is: " + JSON.stringify(values));
  //   this.toggleModal();
  //   this.props.postComment(
  //     this.props.courseId,
  //     values.rating,
  //     values.author,
  //     values.comment
  //   );
  // }

  handleSubmit(values) {
    alert(
      "Easiness:" +
      values.rating +
        " Usefulness: " +
        document.getElementById("usefulness").value +
        "Time Investment " +
        document.getElementById("timeinvestment").value +
        " Comment: " +
        values.comment
    );
  }

  render() {
    return (
      <div>
        <Modal
          size="lg"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row classname="form-group">
                <Label htmlfor="rating" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>

              <Row htmlFor="usefulness" className="mt-2">
                <Typography
                  className="col-4"
                  id="usefulness-slider"
                  gutterBottom
                >
                  Usefulness:
                </Typography>
                <Slider
                  model=".usefulness"
                  id="usefulness"
                  name="usefulness"
                  className="col-7"
                  defaultValue={5}
                  getAriaValueText={valuetext}
                  aria-labelledby="usefulness-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks={true}
                  min={0}
                  max={10}
                />
              </Row>

              <Row htmlFor="easiness" className="mt-2">
                <Typography className="col-4" id="easiness-slider" gutterBottom>
                  Easiness:
                </Typography>
                <Slider
                  model=".easiness"
                  id="easiness"
                  name="easiness"
                  className="col-7"
                  defaultValue={5}
                  getAriaValueText={valuetext}
                  aria-labelledby="easiness-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks={true}
                  min={0}
                  max={10}
                />
              </Row>

              <Row htmlFor="timeinvestment" className="mt-2">
                <Typography
                  className="col-4"
                  id="timeinvestment-slider"
                  gutterBottom
                >
                  Time Investment:
                </Typography>
                <Slider
                  model=".timeinvestment"
                  id="timeinvestment"
                  name="timeinvestment"
                  className="col-7"
                  defaultValue={5}
                  getAriaValueText={valuetext}
                  aria-labelledby="timeinvestment-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks={true}
                  min={0}
                  max={10}
                />
              </Row>

              <Row classname="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    rows="6"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>

        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span>Submit Comment
        </Button>
      </div>
    );
  }
}

export default DiscussionDetail;
