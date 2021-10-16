import { state } from '../state.js'

export const HomeComponent = () => {

	// create the stream that will contain data
	const source = m.stream([])
	const list = m.stream([])
	const selected = m.stream([])


	// only for demo purposes
	m.request('/data/reach.json')
		.then(results => {
			list([])
			source(results)
		})
		.catch(error => console.error(error))


	// methods go here
	const containsReach = (item, reachList) => reachList.some(reachItem => reachItem.id === item.id)


	// events go here
	const onClick = reachItem => {
		const found = selected().some(reach => reach.id === reachItem.id)
		if (found) {
			selected(selected().filter(reach => reach.id !== reachItem.id))
			return
		}

		selected([...selected(), reachItem])
	}

	// when the user clicks "find help"
	const onHelpClick = () => {
		// save the data to the store...
		state({
			...state(),
			reaches: selected()
		})

		// ...and then redirect to the training page
		return m.route.set('/training')
	}

	const onInput = e => {
		const value = e.target.value
		if (value.trim().length < 1) {
			list([])
			return
		}

		list(source().filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
	}


	// return object with view
	return ({
		view: () =>
			m('.home',
				m('.home__search',
					m('label',
						m('span', 'We\'d like help reaching'),
						m('input[type=text]', { oninput: onInput })
					)
				),

				m('.home__list',
					selected().map(reach => m('div', reach.title))
				),

				m('.home__help', 
					(selected().length) ? m('a', { tabindex: 0, onclick: () => onHelpClick() }, 'Find help ', m.trust('&gt')) : '',
				),

				m('.home__result', list().map(item => 
					m('div', 
						{
							class: `${containsReach(item, selected()) ? 'selected' : ''}`,
							onclick: () => onClick(item),
							tabindex: 0,
						},
						item.title
					)
				)),

				m('.home__dunno',
					m('button', 
						m('span', 'I don\'t know.'),
						m('span', 'Help me find needs!!')
					)
				)
			)
	})
}
