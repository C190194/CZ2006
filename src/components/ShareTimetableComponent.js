import React, { useState } from "react";
// import { DropdownButton, Dropdown } from "react-bootstrap";
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
import { FormatColorResetOutlined } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

export default function ShareTimetableComponent(props) {
  const { combinationslength, currentTimeTablePage } = props;
  const pages = [];
  for (let i = 0; i < combinationslength; i++) {
    pages.push(i + 1);
  }

  const [selectedPage, setSelectedPage] = useState(currentTimeTablePage);

  const [state, setState] = useState({ isNavOpen: false, isModalOpen: false });

  function toggleModal() {
    setState({
      ...state,
      isModalOpen: !state.isModalOpen,
    });
  }

  // function handleLogin(event) {
  //   toggleModal();
  //   alert(
  //     "Username: " +
  //       username.value +
  //       " Password: " +
  //       password.value +
  //       " Remember: " +
  //       remember.checked
  //   );
  //   event.preventDefault();
  // }

  function subShareTimetableComponent() {
    return (
      <div className="share-timetable">
        <p>Choose a timetable page to share</p>
        <FormControl
        //  className={classes.formControl} disabled={isIndexFixed}
        >
          <InputLabel htmlFor="page-native-simple">Page</InputLabel>
          <Select
            value={selectedPage}
            // value={indexes.indexOf(currentIdx)}
            native
            onChange={(event) => setSelectedPage(event.target.value)}
            // className={classes.selectEmpty}
          >
            <option key={0} value={currentTimeTablePage}>
              Current Timetable page
            </option>
            {pages.map((page) => {
              return (
                <option key={page} value={page}>
                  {page}
                </option>
              );
            })}
            {/* {indexes.map((tempVar, index) => {
              return (
                <option key={index} value={index}>
                  {tempVar.index_number}
                </option>
              );
            })} */}
          </Select>
        </FormControl>
      </div>
    );
  }

  return (
    <>
      <Button outline onClick={toggleModal}>
        <span className="fa fa-sign-in fa-lg"></span> Share Timetable
      </Button>
      <Modal
        size="lg"
        isOpen={state.isModalOpen}
        toggle={toggleModal}
        fade={false}
      >
        <ModalHeader toggle={toggleModal}>
          <h2>Share Timetable</h2>
        </ModalHeader>
        <ModalBody class="modal fade bd-example-modal-lg">
          {subShareTimetableComponent()}
          <Button>Share</Button>
        </ModalBody>
      </Modal>
    </>
  );
}
