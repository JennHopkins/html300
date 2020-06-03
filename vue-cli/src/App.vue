<template>
  <div id="app">
<header>


    <p>Here is stuff to see</p>
    <mbd-navbar color="#eb34e5">
      <mdb-navbar-brand href="https://mdbootstrap.com/">
  Our Menu
  <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
  </mdb-navbar-brand>
  <mdb-navbar-toggler>
  <mdb-navbar-nav>
    <mdb-nav-item href="butterfly-zoo.vue" active>Butterfly Museum</mdb-nav-item>
    <mdb-nav-item href="butterfly-blog.vue">Butterfly Blog</mdb-nav-item>
    <mdb-nav-item href="butterfly-faq.vue">Butterfly FAQs</mdb-nav-item>
  </mdb-navbar-nav>
  </mdb-navbar-toggler>
  </mdb-navbar>

</header>

<!--from lesson 7 folder-->
<header>
  <h1>Welcome to the World of Butterflies</h1>
    <p>Your sources for all things buttery that fly</p>


    <div>
     <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="menu">
           <b-navbar-brand href="#">
            Our Menu
             <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
           </b-navbar-brand>
             <b-nav-item href='#'>Butterfly Museum</b-nav-item>
            <b-nav-item href='#'>Butterfly Blog</b-nav-item>
            <b-nav-item href='#'>Butterfly FAQs</b-nav-item>
       </b-navbar-nav>
    </b-collapse>
 </b-navbar>
</div>
</header>





  </div>
</template>

<script>
export default {
  name: 'app',
  data () {


    }
  }



</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

//this guy is for the header
#header-color {
  background: linear-gradient(to right, #05fa46 0%, #05d1fa 100%);
}

//just trying to get my images to stay the same no matter what device
.img-fluid {
  max-width: 100%;
  height: auto;
}



//according to every site I've looked at Bootstrap has no built in way to adjust the sizes of text between devices
//These media queries make up for that
@media (max-width: 500px) {
  p {
    font-size: 10px;
  }

 h1 {
   font-size: 10px;
 }

   #museum-font {
   font-size: 14px;
  }
}

@media (max-width: 700px) {
  p, h1 {
    font-size: 14px;

    #museum-font {
      font-size: 10px;
    }
    #zoo-font {
      font-size: 5px;
    }
  }
}

@media (max-width: 900px) {

 #museum-font {
    font-size: 50px;
  }
  #zoo-font {
    font-size: 30px;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
