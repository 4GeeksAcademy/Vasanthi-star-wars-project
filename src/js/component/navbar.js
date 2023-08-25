import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { TrashIcon } from '@heroicons/react/24/outline';
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	function deleteFav(id) {
		actions.deleteFavItem(id)
	}
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 yellow-color">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={store.favorites.length === 0}>
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							store?.favorites?.length > 0 && store?.favorites?.map((item) => {
								return (<li key={item.uid}><span className="w-100">{item.name}</span>
									<span>
										<TrashIcon className="delete-icon" onClick={() => deleteFav(item.uid)} />
									</span>
								</li>)
							})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
