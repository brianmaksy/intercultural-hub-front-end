import { state } from '../state.js'

export const TrainingComponent = () => {

	// set data that is needed to populate page
	const trainingOptions = [
		{ id: 'culture', label: 'Culture' },
		{ id: 'language', label: 'Language' },
		{ id: 'evangelism', label: 'Evangelism' },
		{ id: 'teaching', label: 'Teaching' },
	]
	const trainingFocusses = [
		{ id: 'men', label: 'Men' },
		{ id: 'women', label: 'Women' },
		{ id: 'children', label: 'Children' },
		{ id: 'elderly', label: 'Elderly' },
		{ id: 'foodbanks', label: 'Food Banks' },
	]



	return {
		view: () =>
			m('.training',
				m('h4', 'We\'d like specific training...'),
				m('.training__options', trainingOptions.map(trainingOption =>
					m('div', {
						class: trainingOption.selected ? 'selected' : '',
						onclick: () => trainingOption.selected = !trainingOption.selected,
					}, trainingOption.label)
				)),

				m('p', 'We want to focus on'),
				m('.training__focuses', trainingFocusses.map(trainingFocus =>
					m('div', 
						{
							class: trainingFocus.selected ? 'selected' : '',
							onclick: () => trainingFocus.selected = !trainingFocus.selected
						},
						trainingFocus.label
					)
				)),

				m('.options',
					m('a', {
							class: 'cta',
							onclick: () => {
								state({
									...state(),
									focuses: trainingFocusses.filter(trainingFocus => trainingFocus.selected),
									options: trainingOptions.filter(trainingOption => trainingOption.selected),
								})
								return m.route.set('/location');
							}
						},
						'Next'
					),
					m('a', { onclick: () => m.route.set('location') }, 'Skip')
				),
			)
	}
};
