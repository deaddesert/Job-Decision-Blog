// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from  'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Carousel3d from 'vue-carousel-3d';
import VueSwiper from 'vue-awesome-swiper';
import VueMq from 'vue-mq';
import {store} from './Data Central/store.js';

import apolloProvider from './ApolloVue/vue-apollo.js'

export  const bus= new Vue();


library.add(faSearch)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faBars)
library.add(faTimes)
library.add(faLock)
library.add(faUser)
library.add(faEnvelope)
library.add(faGraduationCap)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueMq,{ 
	breakpoints:{
		mobile:450,
		tablet:900,
		laptop:1250
	}

});





Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  apolloProvider: apolloProvider,
  components: { App },
  template: '<App/>'
});


