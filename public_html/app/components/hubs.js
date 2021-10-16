import { state } from '../state.js'

export const HubsComponent = () => {

	const hubs = [
		{ id: 'london', label: 'London', icon: 'gb', coords: [-0.127758, 51.507351] },
		{ id: 'paris', label: 'Paris', icon: 'fr', coords: [2.352222, 48.856613] },
		{ id: 'oslo', label: 'Oslo', icon: 'no', coords: [10.752245, 59.913868] },
		{ id: 'rotterdam', label: 'Rotterdam', icon: 'nl', coords: [4.477733, 51.924419] },
		{ id: 'dublin', label: 'Dublin', icon: 'ie', coords: [-6.267490, 53.344101] },
	]


	// events go here...
	const onClick = hub => {
		state({ ...state(), hub })
		return m.route.set('/loading')
	}


	return {
		view: () =>
			m('.hub', 
				m('h4', 'Which hub did you have in mind?'),
				hubs.map(hub =>
				m('.hub__location', { onclick: () => onClick(hub) },
					m(`img[src="/icons/gif/${hub.icon}.gif"]`),
					m('span', hub.label),
				),
			))
	}
}
