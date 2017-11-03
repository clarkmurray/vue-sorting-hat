import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes
});

// Vue.prototype.houseIndex = 0;
// Vue.prototype.changeHouseIndex = function( newIndex ) { 
//     console.log( 'Vue.prototype.changeHouseIndex' );
//     console.log( 'Vue.prototype.changeHouseIndex - this.houseIndex: ' + this.houseIndex );
//     console.log( 'Vue.prototype.changeHouseIndex - newIndex: ' + newIndex );

//     this.houseIndex = newIndex;
    
//     console.log( 'Vue.prototype.changeHouseIndex - this.houseIndex: ' + this.houseIndex );
// }
// Vue.prototype.getHouseIndex = function() { return this.houseIndex; }

Vue.prototype.$houseIndex = 0;

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})