<template>
  <div id="home" class="">
    <section class="masthead" role="img" aria-label="Laptop">
      <h1 class="h1-masthead">Welcome to Harbison Apps</h1>
      <!-- <v-btn color="accent" class="mx-2" large @click="$vuetify.goTo('#vuejs', options)">{ When a hero comes along }</v-btn> -->
    </section>
    <!-- <div class="text-center pa-2 mt-1">
      <h1 title="Welcome to Harbison Apps"></h1>
    </div>
    <v-img :aspect-ratio="2" contain src="@/assets/laptop.jpg"/> -->
    <div class="text-center pa-2 mt-1">
      <h2>Why I Love Using Vue?</h2>
    </div>
    <div class="mx-sm-6">
      <p class="pa-2 title">Because Vue has learned form the other JavaScript frameworks on the market. Implementing
        their best parts and yet remaining as opinionated as possible. Vue also comes in a variety
        of flavors.
      </p>
      <h3 class="row justify-center">"Flavors, what flavors?"</h3>
      <p class="pa-2 title">One the benefits of using Vue.js is that there are a variety of ways to build web sites and apps.
      </p>
      <div class="row justify-center">
        <ul class="title">
          <li>Development Speed</li>
          <li>Smaller JavaScript Payload</li>
          <li>Versatile</li>
          <li>Reusability</li>
        </ul>
      </div>
      <div class="row justify-center">
        <v-btn class="ml-n3 my-12" color="secondary" x-large to="/services#vuejs"
          >
          <span class="px-2"> Services I Provide</span>
          <v-icon>mdi-code-braces</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
p {
  text-indent: 10px;
}
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: auto;
  background-size: cover;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop.jpg) no-repeat center center scroll;
}

.h1-masthead {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 150px;
}

.button-masthead {
  background: #327a5a;
  border-radius: 10px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button-masthead:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

@media screen and (max-width: 770px) {
  .masthead{
    height: 50vh;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop-md.jpg) no-repeat center center scroll;
  }
  .h1-masthead {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 425px) {
  .masthead{
    height: 30vh;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop-sm.jpg) no-repeat center center scroll;
  }
  .h1-masthead {
    margin-bottom: 50px;
  }
  .button-masthead {
    font-size: 1rem;
    padding: 0.5rem .75rem;
  }
}
</style>
