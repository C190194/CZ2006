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
import AddFreeTimeSlotsComponent from "./AddFreeTimeSlotsComponent";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

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

function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.setChangeIsMade(true);
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
    </div>
  );
}

export default function MoreOptionsComponent(props) {
  const [open, setOpen] = useState(false);
  const [changeIsMade, setChangeIsMade] = useState(false);
  //have to compare initial and final state to setChangeisMade

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
  };

  const handleSaveChanges = () => {
    setChangeIsMade(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        More Options
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle id="moreOptions-dialog-title" onClose={handleClose}>
          More Options
        </DialogTitle>
        <DialogContent dividers>
          <AddFreeTimeSlotsComponent />
          <CheckboxesGroup setChangeIsMade={setChangeIsMade} />
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
    </div>
  );
}
