<template>
  <nav class="navbar">
    <div class="container">
      <nuxt-link
        title="Navegar até a Página Inicial"
        class="relative z-20 logo"
        to="/"
      >
        <Logo />
      </nuxt-link>
      <NavbarHamburguer v-model="openned" class="relative z-20" />
      <LazyNavbarMenu v-if="openned" v-model="openned" />
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '@/assets/images/logo.svg?inline'

export default Vue.extend({
  name: 'TheNavbar',
  components: {
    Logo,
  },
  data: () => ({
    openned: false,
  }),
  head() {
    return {
      bodyAttrs: {
        class: (this.openned && 'overflow-y-hidden') || '',
      },
    }
  },
})
</script>

<style lang="postcss">
.navbar {
  @apply flex justify-center py-16;
  .container {
    @apply flex justify-between items-center;
  }
  .logo {
    @apply w-24 h-24;
  }
}
</style>
