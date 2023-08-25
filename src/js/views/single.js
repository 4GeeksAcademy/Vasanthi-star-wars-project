import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [dataProps, setDataProps] = useState({})
	const fetchProps = async () => {
		await actions.fetchEachStarWar(params.name, params.id)
		setDataProps(store.starWar)
	}
	useEffect(() => {
		fetchProps()
	}, [])
	console.log(dataProps);

	function keyFormat(key) {
		const arr = key.split('_');
		let str = []
		arr.forEach(element => {
			str.push(element.charAt(0).toUpperCase() + element.slice(1))
		});
		return str.join(' ')
	}

	const propEL = Object.keys(dataProps?.properties || {})?.map((key) => {
		if (key == 'created' || key == 'edited' || key == 'url') {
			return null
		}
		return (<li key={key}>{keyFormat(key)}: {dataProps?.properties[key]}</li>)
	})
	return (
		<div className="d-flex justify-content-center align-items-center">
			<div>

				<div className="card mb-3 container-fuild" style={{ maxWidth: "540px" }}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src={`https://starwars-visualguide.com/assets/img/${params.name == 'people' ? 'characters' : params.name}/${params.id}.jpg`}
								onError={({ target }) => {
									target.onerror = null;
									target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
								}}
								className="card-img-top img-fluid"
								alt={params.name} />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{dataProps?.properties?.name}</h5>
								<p className="card-text">{dataProps?.description}</p>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<ul className="text-light">
					{propEL}
				</ul>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
