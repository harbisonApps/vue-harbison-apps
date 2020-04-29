<template>
  <div id="success" class="mx-auto text-center">
    <h1>
      <q-icon></q-icon>
    </h1>
    <h1>You're Awesome! Thank you for your submission!</h1>
    <router-link to="/">
      <v-btn x-large color="success" @click="$router.go(-2)">Back</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubmitSuccess'

}
</script>

<style scoped>

</style>
