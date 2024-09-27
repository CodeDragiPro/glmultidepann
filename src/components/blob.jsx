import React from "react";
import ".././index.css";

const Blob = ({ image }) => {
  return <div class="blob" style={{ backgroundImage: `url(${image})` }}></div>;
};

export default Blob;
