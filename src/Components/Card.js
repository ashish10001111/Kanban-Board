
import React from 'react';
import './Card.css';

const Card = ({ id, title, tag, status }) => {
  const imageURL = "https://cdn1.vectorstock.com/i/1000x1000/61/50/avatar-business-man-graphic-vector-9646150.jpg";

  return (
    <div className="cardContainer" style={{ gap: '6px' }}>
      <div className="cardHeading">
        <span style={{ textTransform: "uppercase" }} className='colorgrey'>{id}</span>
        <div className="imageContainer cardImage relative" style={{ width: "30px", height: "30px", position: "relative" }}>
          <img style={{ width: "100%", height: "100%", borderRadius: "50%", position: "absolute", top: 0, right: 0 }} src={imageURL} alt="UserImage" />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 600 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags colorgrey"> ... </div>
        {
          tag?.map((elem, index) => {
            return <div key={index} className="tags colorgrey"> <span>•</span> {elem}</div>
          })
        }
      </div>
    </div>
  );
};

export default Card;
