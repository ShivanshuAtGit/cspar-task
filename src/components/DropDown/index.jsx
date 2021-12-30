import React from "react";
import { TiArrowSortedDown } from "@react-icons/all-files/ti/TiArrowSortedDown";
import { TiArrowSortedUp } from "@react-icons/all-files/ti/TiArrowSortedUp";
import "./style.css";

const DropDown = ({ open, label, list, handleDown, name, className }) => {
  return (
    <div class={`dropdown ${className}`}>
      <button class="dropBtn" onClick={handleDown} name={name}>
        <span>{label}</span>
        {open ? (
          <TiArrowSortedUp fontSize={22} />
        ) : (
          <TiArrowSortedDown fontSize={22} />
        )}
      </button>
      <div class={`dropdown-content ${open ? "show" : "hide"}`}>
        {list.map((item) => (
          <div key={item}>
            <label class="container">
              {item}
              <input type="radio" name="radio" />
              <span class="checkmark">
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
