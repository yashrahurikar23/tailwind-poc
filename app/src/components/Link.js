import React, { Fragment } from "react";
// Packages
import PropTypes from "prop-types";

function Link(props) {
  return (
    <Fragment>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href={props.href}>
        {props.label}
      </a>
    </Fragment>
  );
}

Link.propTypes = { 
  label: PropTypes.string,
  href: PropTypes.string
};

export default Link;
