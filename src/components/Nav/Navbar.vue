<template>
  <nav color="primary" class=" ml-5 py-2 d-none d-sm-flex">
    <v-spacer></v-spacer>
        <v-btn title="Harbison Apps Home page" large class="mr-2 pa-3" to="/" text>
          Home
        </v-btn>
        <v-btn title="About Harbison Apps page" large class="mr-2 pa-3" to="/about" text>
          About
        </v-btn>
        <v-btn title="Services I provide page" large class="mr-2 pa-3" to="/services" text>
          Services
        </v-btn>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
.v-btn--text:focus{
  background-color: #fff;
  color: #304455
}
</style>
