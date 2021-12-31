import React from "react";
import Card from "../Card";
import "./style.css";

const RightComponent = () => {
  return (
    <div className="right-block">
      <ul className="mini-nav">
        <li>
          <a href="#">All Blogs</a>
        </li>
        <li>
          <a href="#">Editorial Choice</a>
        </li>
        <li>
          <a href="#" className="active">
            Popular
          </a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
      </ul>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default RightComponent;
