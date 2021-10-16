/**
 * [Intercultural Hub UI]
 * Developer: Sho Carter-Daniel
 * Technology: MithrilJS
 * Link: https://mithril.js.org/
 */
import { state } from './state.js';

import { HomeComponent } from './components/home.js'
import { HubsComponent } from './components/hubs.js'
import { LoadingComponent } from './components/loading.js'
import { LocationComponent } from './components/location.js'
import { MapComponent } from './components/map.js'
import { MapViewComponent } from './components/map-view.js'
import { TrainingComponent } from './components/training.js'


const root = document.getElementById('root')
m.route(root, '/', {
	'/': HomeComponent,
  '/hubs': HubsComponent,
  '/loading': LoadingComponent,
  '/location': LocationComponent,
  '/map': MapComponent,
  '/results': {
    view: () =>
      m('.result',
        m('.result__content', 'This will show us the content we selected'),
        // m('pre', { style: { background: '#f1f1f1', font: '14px courier' } }, JSON.stringify(state(), null, 2)), 
        m(MapViewComponent, { coords: state()?.hub?.coords })
      )
  },
  '/training': TrainingComponent,
})
