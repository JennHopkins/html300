<template>
  <section class="container">
<!--Index or Main Page for the World of Butterflies - page 1-->
<!--header stuff this slot will insert the Butterfly Header component text-->
      <div class="header">
         <slot name="butterfly-header"></slot>
      </div>


<!--nav bar-->
  <div class="nav" style="background-color: #eb34e5;">
    <img src="https://image.flaticon.com/icons/png/512/13/13148.png" class="butter-logo" alt="black butterfly icon">
    <h3>Our Menu</h3>
      <nuxt-link to="/butterfly-zoo" class="butterlinks">Butterfly Museum</nuxt-link>
      <nuxt-link to="/butterfly-blog" class="butterlinks">Buttery Blog</nuxt-link>
       <nuxt-link to="/butterfly-faq" class="butterlinks">Butterfly FAQ</nuxt-link>
    </div>

    </modal>

      <img src="https://images.unsplash.com/photo-1465505041184-f383907cc134?ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80" width="300px" alt="a white butterfly sits on a purple flower">
  </section>
</template>

<script>
//import navBar from '@/components/navBar'
import modal from '@/components/modal'
import {toggle} from '@/components/mixins/toggle';
import butterfly-header from "@/components/butterflyHeader";

export default {
  components: {
    'butterfly-header': butterflyHeader,
    'modal': modal,
    mixins: [toggle]
    //  navBar
  },

}



</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #b8d4fc;
}

.header {
  display: block;
  width: 100%;
  padding: 3%;
  background-color: 08fc3d;
  color: white;
}

.nav {
  background-color: #eb34e5;
  width: 100%;
  padding: 2%;
  color: white;
  }

.butterlinks {
  color: white;
  text-decoration: none;
  padding: 2%;
}

.links {
  padding-top: 15px;
}

</style>
