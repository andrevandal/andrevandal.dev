<template>
  <header class="header">
    <div class="container">
      <nuxt-link title="Navegar até a Página Inicial" class="logo" to="/">
        <Logo />
      </nuxt-link>
      <AtomsHamburger />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/assets/images/logo.svg?inline'

export default Vue.extend({
  components: {
    Logo,
  },
})
</script>

<style lang="postcss">
.header {
  @apply flex justify-center py-16;
  .container {
    @apply flex justify-between items-center;
  }
  .logo {
    @apply w-24 h-24;
  }
}
</style>
