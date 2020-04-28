<template>
  <div>
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
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" link to="/services">
            <v-list-item-action>
              <v-icon>mdi-code-braces</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Services</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item color="white" dark class="headline" link to="/help">
            <v-list-item-action>
              <v-icon>mdi-help</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Help</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </div>
</template>

<script>
export default {
  name: 'NavDrawer'
}
</script>

<style lang="scss" scoped>

</style>
