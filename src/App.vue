<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer" color="secondary"
      app width="200"
    >
      <v-list dense shaped>
        <v-list-item color="white" dark>
          <v-list-item-content>
            <v-list-item-title>version 0.5.0</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-group>
          <v-list-item color="white" dark class="headline" link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" link to="/about">
            <v-list-item-action>
              <v-icon>mdi-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" link to="/services">
            <v-list-item-action>
              <v-icon>mdi-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Services</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" link to="/help">
            <v-list-item-action>
              <v-icon>mdi-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" @click="sheet = !sheet">
            <v-list-item-action>
              <v-icon>mdi-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Free Consult</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="accent"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon aria-label="menu button" @click.stop="drawer = !drawer" />
        <v-spacer></v-spacer>
        <v-toolbar-title class="ml-12">Harbison Apps</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-spacer></v-spacer>
      <Navbar/>
      <v-btn title="Schedule your free consultation" large class="mr-1 pa-3 d-none d-sm-flex text--white"
        @click="sheet = !sheet"
        text
        >Free Consultation
        <!-- <v-icon class="ml-1">mdi-email-outline</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" inset width="350">
          <!-- <template v-slot:activator="{ on }">
            <v-btn color="brown" absolute block
              bottom v-on="on" dark x-large
              >
              <v-icon class="mr-3">mdi-email-outline</v-icon>
              Contact Us
            </v-btn>
          </template> -->
          <v-sheet class="text-center" height="650px">
            <div class="ma-3 pt-6">
              <div class="title">Fill this out and I will get back to you as soon as possible
              </div>
              <v-form ref="form"
              v-model="valid"
              lazy-validation
              >
                <v-text-field v-model="name"
                  :rules="nameRules" autofocus
                  label="Name" required
                ></v-text-field>
                <v-text-field v-model="email"
                  :rules="emailRules"
                  label="E-mail" required
                ></v-text-field>
                <v-text-field v-model="phone"
                  :rules="phoneRules"
                  label="Phone" required
                ></v-text-field>
                <v-select v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'A subject is required']"
                  label="Subject" required
                  ></v-select>
                <v-textarea v-model="comment"
                  label="Comment"
                  rows="3"
                ></v-textarea>
                <v-btn class="mr-4" outlined
                  color="error" @click="sheet = !sheet"
                >close
                </v-btn>
                <v-btn outlined color="warning"
                  class="mr-4" @click="reset"
                >reset
                </v-btn>
                <v-btn color="success"
                  @click="submit"
                > Send
                </v-btn>
              </v-form>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    drawer: false,
    sheet: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3) || 'Name must be more than 3 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: [
      'Please contact me',
      'I have a question',
      'I have a comment',
      'I like this site',
      'I dislike this site'
    ],
    comment: ''
  }),
  methods: {
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style scoped>
.v-app-bar__nav-icon:focus{
  background-color: #fff;
  color: #304455
}
.v-btn--text:focus{
  background-color: #fff;
  color: #304455
}
</style>
