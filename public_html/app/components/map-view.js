import { state } from './../state.js';


export const MapViewComponent = vnode => ({

	// this hook is run when the component has been placed on the DOM
	oncreate: () => {
		const map = new ol.Map({
      target: 'map-view-component',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat(vnode.attrs.coords),
        zoom: 9
      })
    });
	},

	view: () => m('.map-view-component[id="map-view-component"]')

})