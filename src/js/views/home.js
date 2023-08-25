import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import StarWarsList from "../component/starWarsList";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-start m-5">
			<h1 className="yellow-color">Characters</h1>
			<StarWarsList list={store.peoples} name="characters" />
			<h1 className="yellow-color">Planets</h1>
			<StarWarsList list={store.planets} name="planets" />
			<h1 className="yellow-color">Vehicles</h1>
			<StarWarsList list={store.vehicles} name="vehicles" />
		</div>
	)
};

