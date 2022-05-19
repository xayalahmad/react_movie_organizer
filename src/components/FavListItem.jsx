import React, { useEffect } from "react";

const FavListItem = ({ id, poster, title, year }) => {

  return (
    <>
      <a href={"https://www.imdb.com/title/" + `${id}` + "/"} target="_blank">
        <img src={poster} alt="" style={{ width: "50px" }} />
      </a>
      <p>
        {title} --- {id}
      </p>
      <p>{year}</p>
    </>
  );
};

export default FavListItem;
