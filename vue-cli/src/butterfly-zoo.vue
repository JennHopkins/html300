<template>
  <div id="app">
    <img src="./assets/logo.png">

    <section :style={'background-image':'url(https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}>
          <div style="url('https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');" class="zoo-size zoo-cover">
        <header id="header-color">
          <h1>Welcome to The World of Butterflies</h1>
          <h2>Your sources for all things buttery that fly</h2>
        </div>
        <mbd-navbar color="#eb34e5">
          <mdb-navbar-brand href="https://mdbootstrap.com/">
      Our Menu
      <img src="https://image.flaticon.com/icons/png/512/13/13148.png" width="30" class="d-inline-block align-top" alt="black butterfly icon">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="App.vue" active>Home</mdb-nav-item>
        <mdb-nav-item href="butterfly-blog.vue">Butterfly Blog</mdb-nav-item>
        <mdb-nav-item href="butterfly-faq.vue">Butterfly FAQs</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
        </header>

        <main>
          <d-card> <!--card for content-->
            <d-card-body title="Butterfly Museum" subtitle="Please come and explore and learn, discover or laze among the divine.">

             <p class="blue--text text--lighten-1">All Things Bright and Beautiful</p>

          <carousel :data="data"></carousel>


          <div id="slider">
            <transition-group tag="div" :name="transitionName" class="slides-group">
              <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <p>I'm {{slides[current].className}}!</p>
              </div>
            </transition-group>
            <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
              &#10094;
            </div>
            <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
              &#10095
            </div>
          </div>




        <div id="zoo-slides" class="carousel slide" data-ride="carousel">

          <!--carousel wrap-->
          <div class="carousel-inner">
            <div class="carousel-item active">
                  <img data-toggle="tooltip" data-placement="right" title="the Bombay Blue Beret" src="https://images.unsplash.com/photo-1576031450181-9fcab802bb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80" alt="blue butterfly on leaf" class="img-fluid  d-block w-100 h-100">
            </div>
            <div class="carousel-item">
              <img data-toggle="tooltip" data-placement="right" title="the Tree Cleaver" src="https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="dark orange butterfly on pink flower" class="img-fluid d-block w-100 h-100">
           </div>
           <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="Big Bird" src="https://images.unsplash.com/photo-1547990338-943dc0c27796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="yellow butterfly with blue tail" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="Tequila Sunrise" src="https://images.unsplash.com/photo-1538860263234-d5e8282d1ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="black butterfly with bright orange highlights in sunny tree" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="FruitterFlies" src="https://images.unsplash.com/photo-1564293299687-d861e0144b97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="brown and green butterflys walk on a table filled with sliced apples and oranges" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="Bettie Davis's Eyes" src="https://images.unsplash.com/photo-1552757158-788e68d046dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="red butterfly with blue highlights on a yellow flower" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="the Monarch" src="https://images.unsplash.com/photo-1534198634523-ac9ebf960e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="orange monarch butterfly on a pink daisy" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="Flutterbies" src="https://images.unsplash.com/photo-1531062499906-c6dc9747ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="green butterflies walk around table of ornately carved oranges" class="img-fluid d-block w-100 h-100">
          </div>
          <div class="carousel-item">
             <img data-toggle="tooltip" data-placement="right" title="the Desert Nymph" src="https://images.unsplash.com/photo-1580448458187-c9d2c7971317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="black butterfly with red tale on brown rocks" class="img-fluid d-block w-100 h-100">
           </div> <!--carousel-item-->
         </div><!--carousel-inner-->
            <a class="carousel-control-prev" href="#zoo-slides" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
           </a>
           <a class="carousel-control-next" href="#zoo-slides" role="button" data-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="sr-only">Next</span>
           </a>
            </div>  <!--carousel container-->
            <d-card-body>
          </d-card>  <!--card border-->
        </main>
    </section>
  </div>
</template>

<script>
export default {
    data () {

      //stuff for carousel
      var slider = new Vue({
        el: "#slider",
        data: {
          current: 0,
          direction: 1,
          transitionName: "fade",
          show: false,
          slides: [
            { className: "blue" },
            { className: "red" },
            { className: "yellow" }
          ]
        },
        methods: {
          slide(dir) {
            this.direction = dir;
            dir === 1
              ? (this.transitionName = "slide-next")
              : (this.transitionName = "slide-prev");
            var len = this.slides.length;
            this.current = (this.current + dir % len + len) % len;
          }
        },
        mounted() {
          this.show = true;
        }
      });




$(document).ready(function(){
          $('.carousel').carousel( {
          interval: 2000
        })
      } );

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

//the carousel jumps when changes pictures, so this is my fix for that
#zoo-slides {
  border: 2% solid white;
  height: 450px;
  overflow: hidden;
}
//possible background images for image page
//https://images.unsplash.com/photo-1549249061-0433f0b4bdb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
//'https://images.unsplash.com/photo-1553903200-cfc9cb67d661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80


//images for image page
//https://images.unsplash.com/photo-1533048324814-79b0a31982f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80 - done
//https://images.unsplash.com/photo-1576031450181-9fcab802bb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80 - done
//https://images.unsplash.com/photo-1550103685-da83caf1f0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 - done
//https://images.unsplash.com/photo-1547990338-943dc0c27796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done
//https://images.unsplash.com/photo-1538860263234-d5e8282d1ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done
//https://images.unsplash.com/photo-1564293299687-d861e0144b97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 - done
//https://images.unsplash.com/photo-1552757158-788e68d046dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done
//https://images.unsplash.com/photo-1534198634523-ac9ebf960e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done
//https://images.unsplash.com/photo-1531062499906-c6dc9747ce10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done
//https://images.unsplash.com/photo-1580448458187-c9d2c7971317?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 - done


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


  //stuff for the carousel
  @import url("https://fonts.googleapis.com/css?family=Crimson+Text");

  /* FADE IN */
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter {
    opacity: 0;
  }

  /* GO TO NEXT SLIDE */
  .slide-next-enter-active,
  .slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-next-enter {
    transform: translate(100%);
  }
  .slide-next-leave-to {
    transform: translate(-100%);
  }

  /* GO TO PREVIOUS SLIDE */
  .slide-prev-enter-active,
  .slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-prev-enter {
    transform: translate(-100%);
  }
  .slide-prev-leave-to {
    transform: translate(100%);
  }

  /* SLIDES CLASSES */

  .blue {
    background: #4a69bd;
  }

  .red {
    background: #e55039;
  }

  .yellow {
    background: #f6b93b;
  }

  /* SLIDER STYLES */
  body {
    overflow: hidden;
    margin: 0;
    font-size: 50px;
    font-family: "Crimson Text", sans-serif;
    color: #fff;
  }

  #slider {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .slide {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    z-index: 10;
    cursor: pointer;
    border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
  }

  .btn-next {
    left: auto;
    right: 1%;
  }

  .btn:hover {
    transform: scale(1.1);
  }

</style>
