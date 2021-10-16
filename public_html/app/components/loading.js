export const LoadingComponent = () => {

	// mock a fake scenario of loading...
	setTimeout(() => m.route.set('/results'), 2000);

	return {
		view: () => m('.loading',
			m('p', 'Loading...')
		)
	}
}
