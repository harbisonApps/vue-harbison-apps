<template>
  <div id="contact" class="mx-auto text-center">
    <h1>Contact</h1>
    <h3>Fill this out and I will get back to you as soon as possible</h3>
    <v-form class="column pt-3 px-6 mx-auto justify-center contact-form" name="contact" data-netlify="true"
      data-netlify-honeypot="bot-field" method="POST"
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
      <!-- <v-btn class="mr-4" outlined color="error" @click="sheet = !sheet"
        >close
      </v-btn> -->
      <v-btn outlined color="warning" class="mr-4" @click="reset"
        >reset
      </v-btn>
      <v-btn color="success" type="submit"
        > Send
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'ContactView',
  data () {
    return {
      show: true,
      valid: true,
      form: {
        name: '',
        email: '',
        phone: '',
        request: null,
        items: [
          'I`m looking for a new VueJs webapp',
          'I`m looking for a new static website',
          'I have a question',
          'I have a problem'
        ],
        comment: ''
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be more than 3 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phoneRules: [
        v => /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(v) || 'Please enter a valid phone number'
      ]
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('/')
    },
    submitForm () {
      this.$refs.form.validate()

      if (this.$refs.form.hasError) {
        swal('Required', 'name:  email: and subject: are required', 'error')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': 'contact',
          name: this.form.name,
          email: this.form.email,
          phone: this.form.phone,
          request: this.form.request.toString(),
          message: this.form.message
        })
      })
        .then(() => {
          this.reset()
          this.$router.push('thankyou')
        })
        .catch(() => {
          swal('', 'Something went wrong, please try again', 'error')
        })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
.contact-form{
  max-width: 500px;
}
</style>
