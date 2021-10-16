export const MapComponent = () => {



	return {
		// this hook is run when the component has been placed on the DOM
		oncreate: () => {
			const map = new ol.Map({
        target: 'map__view',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
		},

		view: () =>
			m('.map',
				m('.map__content', 'Please select your nearest place for training...'),
				m('.map__view[id=map__view]')
			)
	}
}