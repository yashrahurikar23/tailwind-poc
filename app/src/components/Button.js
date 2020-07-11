import React, { Fragment } from "react";
// Packages
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <Fragment>
      {props.loading ? (
        <button
          className={
            props.loadingBtnClass ||
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full rounded focus:outline-none focus:shadow-outline"
          }
        >
          <ClipLoader size={15} color={"#fff"} loading={props.loading} />
        </button>
      ) : (
        <button
          className={
            props.className ||
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          }
          type={props.type}
          onClick={props.onClick}
        >
          {props.label}
        </button>
      )}
    </Fragment>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  labelClass: PropTypes.string,
  for: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.func,
  loadingBtnClass: PropTypes.string,
};

export default Button;
