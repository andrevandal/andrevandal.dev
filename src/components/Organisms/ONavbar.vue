<template>
  <nav class="navbar">
    <MContainer items="center" justify="between">
      <ALogo title="Navegar até a Página Inicial" />
      <AHamburguer v-model="openned" class="relative z-20" />
      <LazyMMenu v-show="openned" v-model="openned" :items="menuItems" />
    </MContainer>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ONavbar',
  data: () => ({
    openned: false,
    menuItems: [
      { to: '/', title: '/início' },
      { to: '/categorias', title: '/categorias' },
      { to: '/uso', title: '/uso' },
      { to: '/sobre', title: '/sobre' },
      { to: '/contato', title: '/contato' },
    ],
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
}
</style>
