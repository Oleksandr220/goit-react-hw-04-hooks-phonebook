import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="filter__input"
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
