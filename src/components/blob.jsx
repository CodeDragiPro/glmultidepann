import React from "react";
import ".././index.css";

const Blob = ({ image }) => {
  return <div id="blob" style={{ backgroundImage: `url(${image})` }}></div>;
};

export default Blob;
