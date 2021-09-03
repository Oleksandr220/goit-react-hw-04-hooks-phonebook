import React from "react";
import "./Conteiner.css";
import PropTypes from "prop-types";

const Conteiner = ({ title, children }) => {
  return (
    <div className="conteiner">
      <h2 className="conteiner__title">{title}</h2>
      <div>{children}</div>
    </div>
  );
};

Conteiner.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Conteiner;
