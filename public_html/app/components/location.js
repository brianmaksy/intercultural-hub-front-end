import { state } from '../state.js';

export const LocationComponent = () => {
	const locations = [
		{ id: 'virtually', label: 'Virtually' },
		{ id: 'hub', label: 'At a Hub' },
		{ id: 'nearme', label: 'Near Me' },
		{ id: 'church', label: 'At a church' },
	];
	

	return {
		view: () => 
			m('.location',
				m('h4', 'Where?'),
				locations.map(location => 
					m('p', 
						{
							onclick: () => {
								state({ ...state(), location })
								switch (location.id) {
									case 'nearme':
										return m.route.set('map');
									case 'hub':
										return m.route.set('/hubs');
										// return m.route.set('/map')
									default:
										throw new Error('Invalid option selected.');
								}
							}
						},
						location.label
					)
				)
			)
	}
}