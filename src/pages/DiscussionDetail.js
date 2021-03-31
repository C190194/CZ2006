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
import CircularSlider from "@fseehawer/react-circular-slider";

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

function DiscussionDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <div key={props.course.id} className="mt-1">
          <Card tag="li">
            <Media body className="ml-5">
              <div className="row">
                <div className="col-8">
                  <Media heading className="course-detail-courseCode row">
                    <b>{props.course.courseCode}</b>
                  </Media>
                  <Media heading className="course-detail-courseName row">
                    {props.course.name}
                  </Media>
                </div>
                <div className="col-3">
                  <p className="row mt-2">Usefulness:</p>
                  <p className="row mt-2">Easiness:</p>
                  <p className="row mt-2">Time Investment:</p>
                </div>
                <div className="col-1">
                  <div className="row mb-1">
                    <CircularSlider
                      width={60}
                      dataIndex={props.course.usefulness}
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
                    <div className="rating">{props.course.usefulness} </div>
                  </div>
                  <div className="row mb-1">
                    <CircularSlider
                      width={60}
                      dataIndex={props.course.easiness}
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
                    <div className="rating">{props.course.easiness} </div>
                  </div>
                  <div className="row mb-1">
                    <CircularSlider
                      width={60}
                      dataIndex={props.course.timeinvestment}
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
                    <div className="rating">{props.course.timeinvestment} </div>
                  </div>
                </div>
                <Media className="col-1">{props.course.rating}</Media>
              </div>
              <p>{props.course.description}</p>
            </Media>
          </Card>
        </div>
      </div>
      <div className="m-1">
        <div className="row"></div>
        {/* {comments} */}
        <RenderComments comments={props.comments} />
      </div>
    </div>
  );
}

export default DiscussionDetail;

function valuetext(value) {
  return `${value}°C`;
}

function CommentForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usefulness, setUsefulness] = useState(5);
  const [timeinvestment, setTimeinvestment] = useState(5);
  const [easiness, setEasiness] = useState(5);

  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  function handleSubmit(values) {
    alert(
      " Usefulness: " +
        usefulness +
        " Easiness: " +
        easiness +
        "Time Investment " +
        timeinvestment +
        " Comment: " +
        values.comment
    );
  }

  return (
    <div>
      <Modal size="lg" isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row htmlFor="usefulness" className="mt-2">
              <Typography className="col-4" id="usefulness-slider" gutterBottom>
                Usefulness:
              </Typography>
              <Slider
                value={usefulness}
                onChange={(event, newVal) => {
                  setUsefulness(newVal);
                }}
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
                value={easiness}
                onChange={(event, newVal) => {
                  setEasiness(newVal);
                }}
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
                value={timeinvestment}
                onChange={(event, newVal) => {
                  setTimeinvestment(newVal);
                }}
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

      <Button outline onClick={toggleModal}>
        <span className="fa fa-pencil fa-lg"></span>Submit Comment
      </Button>
    </div>
  );
}
