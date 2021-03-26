import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./ComponentsStyle.css";
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

export default class ShareTimetableComponent extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  subShareTimetableComponent() {
    return (
      <div>
        <div className="share-timetable">
          <p>Choose a timetable to share</p>
          <DropdownButton id="dropdown-basic-button" title="Select a timetable">
            <Dropdown.Item class="dropdown" href="#/action-1">
              Timetable 1
            </Dropdown.Item>
            <Dropdown.Item class="dropdown" href="#/action-2">
              Timetable 2
            </Dropdown.Item>
            <Dropdown.Item class="dropdown" href="#/action-3">
              Timetable 3
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <Row>
          <div className="col-9" />
          <Button className="col-3" outline onClick={this.toggleModal}>
            <span className="fa fa-sign-in fa-lg"></span> Share Timetable
          </Button>
        </Row>

        <Modal
          size="lg"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          fade={false}
        >
          <ModalHeader toggle={this.toggleModal}>
            <h2>Share Timetable</h2>
          </ModalHeader>
          <ModalBody class="modal fade bd-example-modal-lg">
            {this.subShareTimetableComponent()}
          </ModalBody>
        </Modal>
      </>
    );
  }
}
