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
    <div className="favorites mt-4 border-0 col-md-4 col-12">
      <input
        placeholder="New list name: "
        className="favorites__name rounded"
        defaultValue="Example List"
        onChange={(e) => setListName(e.target.value)}
        disabled={apiID.api}
      />
      <ul className="list-group">
        {favs.map((f) => (
          <li key={f.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">

            {f.title} {f.year}
            <button
              type="button"
              className="delBtn"
              onClick={() => {
                dispatch(removeMovie({ id: f.id }));
              }}
              >
              <i className="fas fa-trash-alt"></i>
            </button>
              </div>
          </li>
        ))}
      </ul>
      {apiID.api 
      ?
       <Link className="text-decoration-none" to= {`/favorite/${apiID.api}`} >
         <div  className="favorites__save rounded col-12">
         Go to List
         </div>
         </Link> :
       <button onClick={handleSave} className="favorites__save rounded" >Save</button>
      }
    </div>
  );
}

export default Favorites;
