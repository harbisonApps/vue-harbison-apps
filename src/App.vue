<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer" color="secondary"
      app width="200"
    >
      <v-list dense shaped>
        <NavDrawer />
        <v-list-item color="white" dark class="headline" to="/contact">
          <v-list-item-action>
            <v-icon>mdi-email-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Free Consult</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item color="white" dark>
          <v-list-item-content>
            <a href='https://ko-fi.com/E1E01LQUA' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
          </v-list-item-content>
        </v-list-item>
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
       to="/contact"
        text
        >Free Consultation
        <!-- <v-icon class="ml-1">mdi-email-outline</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <v-container> -->
        <router-view/>
      <!-- </v-container> -->
      <!-- <div class="text-center">
        <v-bottom-sheet class="mb-6" v-model="sheet" scrollable inset width="350">
          <v-sheet class="text-center" height="600px" >
            <div class="mx-3 pt-2">
              <div class="title">Fill this out and I will get back to you as soon as possible
              </div>
              <v-form name="contact" data-netlify="true"
                data-netlify-honeypot="bot-field" action="/" method="POST"
                @submit.prevent="submitForm"
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <input type="hidden" name="bot-field" />
                <v-text-field name="name" v-model="form.name" ref="name"
                  :rules="nameRules" autofocus aria-placeholder="Your name is required"
                  label="Name" required
                ></v-text-field>
                <v-text-field name="email" v-model="form.email"
                  :rules="emailRules" ref="email" aria-placeholder=""
                  label="E-mail" required
                ></v-text-field>
                <v-text-field name="phone" v-model="form.phone"
                  :rules="phoneRules" ref="phone"
                  label="Phone"
                ></v-text-field>
                <v-select name="subject" class="body-1" v-model="form.request" :items="form.items" ref="request"
                  :rules="[v => !!v || 'A subject is required']"
                  label='Please contact me' required aria-placeholder="A subject is required"
                  ></v-select>
                <v-textarea name="message" v-model="form.comment"
                  label="Message" rows="3"
                ></v-textarea>
                <v-btn class="mr-4" outlined color="error" @click="sheet = !sheet"
                  >close
                </v-btn>
                <v-btn outlined color="warning" class="mr-4" @click="reset"
                  >reset
                </v-btn>
                <v-btn color="success" type="submit"
                  > Send
                </v-btn>
              </v-form>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </div> -->
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Nav/Navbar'
import NavDrawer from '@/components/Nav/NavDrawer'
// import swal from 'sweetalert'
export default {
  name: 'App',
  components: {
    Navbar, NavDrawer
  },
  data: () => ({
  //   show: true,
  //   valid: true,
    drawer: false
  //   sheet: false,
  //   form: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     request: null,
  //     items: [
  //       'I`m looking for a new VueJs webapp',
  //       'I`m looking for a new static website',
  //       'I have a question',
  //       'I have a problem'
  //     ],
  //     comment: ''
  //   },
  //   nameRules: [
  //     v => !!v || 'Name is required',
  //     v => (v && v.length >= 3) || 'Name must be more than 3 characters'
  //   ],
  //   emailRules: [
  //     v => !!v || 'E-mail is required',
  //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  //   ],
  //   phoneRules: [
  //     v => /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(v) || 'Please enter a valid phone number'
  //   ]
  })
  // methods: {
  //   encode (data) {
  //     return Object.keys(data)
  //       .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  //       .join('/')
  //   },
  //   submitForm () {
  //     this.$refs.form.validate()

  //     if (this.$refs.form.hasError) {
  //       swal('Required', 'name:  email: and subject: are required', 'error')
  //     } else {
  //       this.handleSubmit()
  //     }
  //   },
  //   handleSubmit () {
  //     fetch('/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //       body: this.encode({
  //         'form-name': 'contact',
  //         name: this.form.name,
  //         email: this.form.email,
  //         phone: this.form.phone,
  //         request: this.form.request.toString(),
  //         message: this.form.message
  //       })
  //     })
  //       .then(() => {
  //         swal('Thank you', 'I will contact you as soon as possible', 'success')
  //         this.sheet = false
  //         this.reset()
  //       })
  //       .catch(() => {
  //         swal('', 'Something went wrong, please try again', 'error')
  //       })
  //   },
  //   reset () {
  //     this.$refs.form.reset()
  //   }
  // }
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
