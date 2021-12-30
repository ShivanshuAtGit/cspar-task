import React from "react";
import { MdHome } from "@react-icons/all-files/md/MdHome";
import "./style.css";

const Header = () => {
  return (
    <ul class="nav">
      <li>
        <a class="active" href="#home">
          <MdHome style={{ fontSize: 35 }} />
        </a>
      </li>
      <li>
        <a href="#">Browse University</a>
      </li>
      <li>
        <a href="#">Browse Course</a>
      </li>
      <li>
        <a href="#">Browse Services</a>
      </li>
      <li>
        <a href="#">Events</a>
      </li>
      <li>
        <a href="#">Blog &amp; News</a>
      </li>
    </ul>
  );
};

export default Header;
