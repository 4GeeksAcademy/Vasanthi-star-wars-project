import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card";

const StarWarsList = (props) => {
  const { store, actions } = useContext(Context)
  return (
    <>
      <div className="d-flex overflow-auto flex-nowrap">
        {props.list?.map((item, index) => {
          return (
            <Card item={item} name={props.name} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default StarWarsList