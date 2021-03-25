import React from "react";
import Tippy from "@tippyjs/react";
import demoClasses from "./tooltipCSS.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { DefaultEventRootComponent } from "@remotelock/react-week-scheduler";
import "tippy.js/dist/tippy.css";

export const EventRoot = React.forwardRef(
  ({ handleDelete, disabled, ...props }, ref) => {
    return (
      <Tippy
        arrow={true}
        interactive
        isEnabled={!disabled}
        hideOnClick={false}
        className={demoClasses.tooltip}
        content={
          <button
            className={demoClasses.tooltipbutton}
            disabled={disabled}
            onClick={handleDelete}
          >
            <DeleteIcon />
            Delete
          </button>
        }
      >
        <DefaultEventRootComponent
          handleDelete={handleDelete}
          disabled={disabled}
          {...props}
          ref={ref}
        />
      </Tippy>
    );
  }
);
