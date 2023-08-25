import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import StarWarProps from "./starWarProps";
import { HeartIcon } from '@heroicons/react/24/outline'

const Card = (props) => {

  const { store, actions } = useContext(Context)
  const [favIcon, setIcon] = useState(false)
  const setFavIcon = (event, item) => {
    setIcon(!favIcon)
    actions.setFavorites(item, favIcon)
  }
  useEffect(() => {
    if (store.favorites.length == 0) {
      setIcon(false)
    }
  }, [store.favorites])
  return (
    <>
      <div className="card m-2" key={props.item.uid} style={{ minWidth: "18rem" }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/${props.name}/${props.item.uid}.jpg`}
          onError={({ target }) => {
            target.onerror = null;
            target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
          className="card-img-top"
          alt={props.item.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <StarWarProps key={props.item.uid} id={props.item.uid} name={props.name == 'characters' ? 'people' : props.name} className="card-text" />
        </div>
        <div className="card-footer d-flex align-items-center justify-content-center">
          <Link to={`/details/${props.name == 'characters' ? 'people' : props.name}/${props.item.uid}`} className="w-100">
            <span className="btn btn-outline-secondary">Learn More!</span>
          </Link>
          <HeartIcon fill="none" className={favIcon ? 'fav-icon fav-icon-solid' : "fav-icon"} onClick={(event) => setFavIcon(event, props.item)} />
        </div>
      </div>

    </>
  )
}

export default Card