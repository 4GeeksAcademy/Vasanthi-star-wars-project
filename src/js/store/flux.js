const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			vehicles: [],
			properties: {},
			starWar: {},
			favorites: []
		},
		actions: {
			InitialLoading: () => {
				getActions().fetchPeople();
				getActions().fetchPlanets();
				getActions().fetchVehicles();
			},
			fetchPeople: async () => {
				const res = await fetch('https://www.swapi.tech/api/people')
				const data = await res.json()
				const updateResults = []
				data.results.forEach((el) => {
					updateResults.push({ ...el, favorite: false })
				})
				setStore({ peoples: updateResults })
			},
			fetchPlanets: async () => {
				const res = await fetch('https://www.swapi.tech/api/planets')
				const data = await res.json()
				const updateResults = []
				data.results.forEach((el) => {
					updateResults.push({ ...el, favorite: false })
				})
				setStore({ planets: updateResults })

			},
			fetchVehicles: async () => {
				const res = await fetch('https://www.swapi.tech/api/vehicles')
				const data = await res.json()
				const updateResults = []
				data.results.forEach((el) => {
					updateResults.push({ ...el, favorite: false })
				})
				setStore({ vehicles: updateResults })
			},

			fetchEachStarWar: async (name, id) => {
				const res = await fetch(`https://www.swapi.tech/api/${name}/${id}`)
				const data = await res.json()
				setStore({ starWar: data.result })
			},
			setFavorites: (item, fav) => {
				const store = getStore()
				if (fav) {
					const updateFavs = store.favorites.filter((el) => el.uid != item.uid)
					setStore({ favorites: updateFavs })
				} else {
					const updateFavs = [...store.favorites, { ...item, favorite: !fav }]
					setStore({ favorites: updateFavs })
				}
			},
			deleteFavItem: (id) => {
				const store = getStore()
				const updateFavs = store.favorites.filter((el) => el.uid != id)
				setStore({ favorites: updateFavs })
			}
		}
	};
};

export default getState;
