import React from "react";
import { TiArrowSortedDown } from "@react-icons/all-files/ti/TiArrowSortedDown";
import { TiArrowSortedUp } from "@react-icons/all-files/ti/TiArrowSortedUp";
import "./style.css";

const DropDown = ({ open, label, list, handleDown, name, className }) => {
  return (
    <div className={`dropdown ${className}`}>
      <button className="dropBtn" onClick={handleDown} name={name}>
        <span>{label}</span>
        {open ? (
          <TiArrowSortedUp fontSize={22} />
        ) : (
          <TiArrowSortedDown fontSize={22} />
        )}
      </button>
      <div className={`dropdown-content ${open ? "show" : "hide"}`}>
        {list.map((item) => (
          <div key={item}>
            <label className="container">
              {item}
              <input type="radio" name="radio" />
              <span className="checkmark">
                <span className="checkmark-border"></span>
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
