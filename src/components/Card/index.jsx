import React from "react";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { BsHeart } from "@react-icons/all-files/bs/BsHeart";
import "./style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-image-block">
        <img className="card-image" src="image/pic3.jpg" />
      </div>
      <div className="card-content-section">
        <div className="card-content">
          <p className="card-time-p">
            Mon, 25 March 19 at 11AM <span>2 min read</span>
          </p>
          <h4 className="card-description">
            A Guide to UK universities ranking top in medical studies
          </h4>
          <p className="card-time-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, hic
            repudiandae. Obcaecati vitae nisi dolore rerum beatae rem non cum.
            Aliquam molestiae voluptas ut possimus iste? Laborum neque sed vero.
          </p>
        </div>
        <div className="card-read-section">
          <div className="read-more-tag">
            <p> Read more</p>
          </div>
          <div>
            <FiShare2 className="icon-style" />
            <BsHeart className="icon-style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
