import Vue from 'vue'
import App from './App.vue'



Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})

$(function(){
   $('[data-toggle="popover"]').popover();
  })

  $(document).ready(function(){
    $('.carousel').carousel( {
      interval: 2000
    })
  } );
