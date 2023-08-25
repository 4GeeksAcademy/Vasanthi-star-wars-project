import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Card from "./card";

const StarWarProps = (props) => {
  const { store, actions } = useContext(Context)
  const [dataProps, setDataProps] = useState({})
  const fetchProps = async () => {
    await actions.fetchEachStarWar(props.name, props.id)
    setDataProps(store.starWar.properties)
  }
  useEffect(() => {
    fetchProps()
  }, [])

  const peopleEl = (
    <>

      <p>Gender: {dataProps?.gender}</p>
      <p>Hair Color: {dataProps?.hair_color}</p>
      <p>Eye Color: {dataProps?.eye_color}</p>
    </>
  )

  const planetsEl = (
    <>
      <p>
        population: {dataProps?.population}
      </p>
      <p>
        terrain: {dataProps?.terrain}
      </p>
    </>
  )

  const vehiclesEl = (
    <p>
      model: {dataProps?.model}
    </p>
  )


  return (
    <>
      {props.name == 'people' && peopleEl}
      {props.name == 'planets' && planetsEl}
      {props.name === 'vehicles' && vehiclesEl}
    </>
  )
}

export default StarWarProps