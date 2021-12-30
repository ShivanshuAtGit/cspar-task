import React, { useState } from "react";
import DropDown from "../DropDown";
import "./style.css";

const list = [
  "Business",
  "UK University",
  "New Student Rules",
  "Immigration",
  "Visa Process",
  "UK Course",
];

const LeftComponent = () => {
  const initialValues = {
    topics: false,
    category: false,
  };
  const [dropDown, setDropDown] = useState(initialValues);
  const handleDropDowns = (e) => {
    const { name } = e.currentTarget;
    setDropDown((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <div className="left-block">
      <p className="result-count">Total Result Found : 156</p>
      <DropDown
        label="Popular Topics"
        className="dropdown-block"
        open={dropDown.topics}
        handleDown={handleDropDowns}
        list={list}
        name="topics"
      />
      <DropDown
        label="Category"
        className="dropdown-block"
        open={dropDown.category}
        handleDown={handleDropDowns}
        list={list}
        name="category"
      />
    </div>
  );
};

export default LeftComponent;
