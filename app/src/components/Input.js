import React, { Fragment } from "react";

function Input(props) {
  return (
    <Fragment>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        value={props.value}
      />
    </Fragment>
  );
}

export default Input;
