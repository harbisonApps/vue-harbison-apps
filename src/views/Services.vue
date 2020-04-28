<template>
  <div id="services" class="">
    <section class="masthead" role="img" aria-label="Laptop">
      <h1 class="h1-masthead">Services</h1>
      <v-btn color="accent" class="mx-2" large @click="$vuetify.goTo('#vuejs', options)">{ When a hero comes along }</v-btn>
    </section>
    <div class="text-center pa-2 mt-1">
      <h1 title="Services - Harbison Apps">Services - Harbison Apps</h1>
    </div>
    <div class="text-center pa-2 mt-1 mx-sm-6">
      <p class="font-weight-light title pa-2">
        From dynamic web apps and static sites, to adding features to your website; I will give
        what you need to improve your web presence.
      </p>
    </div>

    <div id="vuejs" class=" mx-4 mt-6 mb-12">
      <v-row>
        <v-expansion-panels focusable popout>
          <v-expansion-panel id="vue">
            <v-expansion-panel-header>
              <v-img class="ma-1" contain height="50" width="50" src="@/assets/logo.png"/>
              <v-spacer></v-spacer>
              <h2 class="text-center vue">VueJs</h2>
              <v-spacer></v-spacer>
              <p class="subtitle-2 ma-1 d-none d-sm-flex">
                Vue (pronounced like view) is a progressive javascript framework for
                building user applications.
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="title d-sm-none ">
                Vue (pronounced /vjuː/, like view) is a progressive javascript framework for
                building user applications.
              </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel id="quasar">
            <v-expansion-panel-header>
              <v-img class="float-left ma-1" contain height="50" width="50" src="@/assets/quasar_logo.png"/>
              <v-spacer></v-spacer>
              <h2 class="text-center mr-2 quasar">Quasar</h2>
              <v-spacer></v-spacer>
              <p class="subtitle-2 ma-1 ml-2 d-none d-sm-flex">
                Quasar (pronounced ˈkweɪ.zɑɹ') is a licensed open-source
                project based on VueJs framework.
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="title d-sm-none mx-n1">
                Quasar (pronounced ˈkweɪ.zɑɹ') is an MIT licensed open-source
                project based on the Vue.js framework.
              </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel id="nuxt">
            <v-expansion-panel-header>
              <v-img class="float-left ma-1" contain height="50" width="50" src="@/assets/nuxt_logo.png"/>
              <v-spacer></v-spacer>
              <h2 class="text-center mr-2 nuxt">Nuxt</h2>
              <v-spacer></v-spacer>
              <p class="subtitle-2 ma-1 ml-2 d-none d-sm-flex">
                Nuxt is another project based on the VueJs framework, with a powerful modular architecture.
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p class="title d-sm-none mx-n1">
                Nuxt is another project based on the VueJs framework, with a powerful modular architecture.
              </p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <div class="text-center mt-6 mb-12">
      <v-card to="/" color="secondary" raised elevation="8" dark class="mx-auto" max-width="350">
        <v-card-text>
          <div class="display-1">Services I Provide</div>
        </v-card-text>
        <v-card-actions>
          <v-icon>mdi-code-braces</v-icon>
          <!-- <v-btn to="/" text class="title font-italic" color="white">
            Learn More
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
  data () {
    return {
      tab: null,
      duration: 1000,
      offset: 15,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings)
    }
  },
  computed: {
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    }
  }
}
</script>
<style scoped>

.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 82vh; /* if you don't want it to take up the full screen, reduce this number */
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
  font-size: 1.3rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.button-masthead:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
.free-consult-card{
  min-width: 300px;
  max-width: 350px;
  height: 150px;
}
p {
  text-indent: 10px;
  color: black;
}
li{
  list-style: none;
  color: #327a5a;
  font-size: 18px;
}
h4{
  color: #304455;
}
.vue{
  color: #327a5a;
}
.quasar{
  color: #1976d2;
}
.nuxt{
  color: #304455;
}
.js{
  color: #e2b913;
}
.html{
  color: #dc512a
}
/* .v-card-border{
  border: #327a5a 1px solid;
} */
.v-tab{
  width: 140px;
}

@media screen and (max-width: 770px) {
  .masthead{
    height: 77vh;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(48,68,85,0.65) 100%), url(../assets/laptop-md.jpg) no-repeat center center scroll;
  }
  .h1-masthead {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 425px) {
  .masthead{
    height: 42vh;
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
