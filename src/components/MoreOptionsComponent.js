import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import AddFreeTimeSlotsComponent from "./AddFreeTimeSlotsComponent";
import AllowClashCheckBoxesComponent from "./AllowClashCheckBoxesComponent";

import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          style={{ color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MoreOptionsComponent(props) {
  const [open, setOpen] = useState(false);
  const [changeIsMade, setChangeIsMade] = useState(false);
  const [fchangeIsMade, setfChangeIsMade] = useState(false);
  const [cchangeIsMade, setcChangeIsMade] = useState(false);
  const [isChangeSaved, setIsChangeSaved] = useState(false);
  //have to compare initial and final state to setChangeisMade in handleSaveChanges

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    if (changeIsMade) {
      if (window.confirm("Discard Changes?")) {
        setChangeIsMade(false);
        setOpen(false);
      }
    } else {
      setChangeIsMade(false);
      setOpen(false);
    }
    setIsChangeSaved(false);
  };

  const handleSaveChanges = () => {
    //compare initial state and final state
    setIsChangeSaved(true);
    setChangeIsMade(false);
  };

  useEffect(() => {
    setChangeIsMade(fchangeIsMade || cchangeIsMade);
  }, [fchangeIsMade]);
  useEffect(() => {
    setChangeIsMade(fchangeIsMade || cchangeIsMade);
  }, [cchangeIsMade]);

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        More Options
      </Button>
      <Dialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="lg"
        TransitionComponent={Transition}
      >
        <DialogTitle
          id="moreOptions-dialog-title"
          onClose={handleClose}
          style={{ background: "#16a6df", color: "white" }}
        >
          More Options
        </DialogTitle>
        <DialogContent dividers>
          <div className="container">
            <AddFreeTimeSlotsComponent
              setfChangeIsMade={setfChangeIsMade}
              isChangeSaved={isChangeSaved}
            />

            <div className="row">
              <AllowClashCheckBoxesComponent
                setcChangeIsMade={setcChangeIsMade}
                isChangeSaved={isChangeSaved}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSaveChanges}
            color="primary"
            disabled={!changeIsMade}
            variant={changeIsMade ? "contained" : "outlined"}
          >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
