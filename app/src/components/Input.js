import React, { Fragment } from "react";
// Packages
import PropTypes from "prop-types";

function Input(props) {
  return (
    <Fragment>
      <div className={props.divClass || "mb-4"}>
        <label
          class={
            props.labelClass || "block text-gray-700 text-sm font-bold mb-2"
          }
          for={props.for}
        >
          {props.label}
        </label>
        <input
          placeholder={props.placeholder}
          onChange={props.onChange || (() => {})}
          name={props.name}
          type={props.type}
          value={props.value || ""}
          disabled={props.disabled}
          className={
            props.inputClass ||
            "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
        />
        {props.errorMessage !== "" && (
          <p class="text-red-500 text-xs italic">{props.errorMessage}</p>
        )}
      </div>
    </Fragment>
  );
}

Input.propTypes = {
  divClass: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  for: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
