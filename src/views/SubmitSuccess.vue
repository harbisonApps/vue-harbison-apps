<template>
  <div id="success" class="mx-auto text-center">
    <v-icon class="display-2 pt-4" color="success">mdi-check-circle</v-icon>
    <h2>You're Awesome! Thank you for your submission!</h2>
    <v-btn x-large color="success" @click="$router.go(-2)">Back</v-btn>
  </div>
</template>

<script>
export default {
  name: 'SubmitSuccess'

}
</script>

<style scoped>

</style>
