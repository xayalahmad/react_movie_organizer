import React, { useEffect } from "react";
import config from "../config.json";
import styled from "./favListİtem.css";


const   FavListItem = ({ id, poster, title, year }) => {

  return (
    <>
    <div className="favlistContainer">
    
      <a href={config.moviesUrl + id + "/"} target="_blank">
        <img className="favİtemİmg" src={poster} alt=""/>
      </a>
      <p className="favItemTitle">
        {title}
      </p>
      <p className="favItemYear">{year}</p>
    </div>
    </>
  );
};

export default FavListItem;
