import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeMovie } from "../feautures/favListSlice";
import { addFavID } from "../feautures/apiSlice";
import { addFavListName } from "../feautures/listNameSlice";
import api from "../api";
import { Link } from "react-router-dom";
import "./Favourites.css";
import { setDisable } from "../feautures/saveToggle";

function  Favorites() {
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  const apiID = useSelector((state) => state);

  const [listName, setListName] = useState("Example List");
  const handleSave = async (e) => {
    await api
      .save({
        title: listName,
        movies: favs,
      })
      .then((d) => {
        dispatch(addFavID(d.id));
        dispatch(addFavListName(listName));
        dispatch(setDisable());
      })      
  };

  return (
    <div className="favorites mt-4">
      <input
        placeholder="New list name: "
        className="favorites__name rounded"
        defaultValue="Example List"
        onChange={(e) => setListName(e.target.value)}
      />
      <ul className="list-group">
        {favs.map((f) => (
          <li key={f.id} className="list-group-item">
            {f.title} {f.year}
            <button
              type="button"
              className="delBtn"
              onClick={() => {
                dispatch(removeMovie({ id: f.id }));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {apiID.api 
      ?
       <Link to= {`/favorite/${apiID.api}`} >Go to List</Link> :
       <button onClick={handleSave} className="favorites__save rounded" >Save</button>
      }
    </div>
  );
}

export default Favorites;
