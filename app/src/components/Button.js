import React, { Fragment } from "react";

function Button(props) {
  return (
    <Fragment>
      <button type={props.type} onClick={props.onClick}>{props.label}</button>
    </Fragment>
  );
}

export default Button;
