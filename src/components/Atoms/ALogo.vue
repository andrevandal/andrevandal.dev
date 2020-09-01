<template>
  <nuxt-link :title="title" class="relative z-20 logo" :to="to">
    <component :is="isType" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'

const allowedTypes = ['icon', 'logo']

export default Vue.extend({
  name: 'AtomLogo',
  components: {
    Icon: () => import('@/assets/images/logo/icon.svg?inline'),
    Logo: () => import('@/assets/images/logo/logo.svg?inline'),
  },
  props: {
    type: {
      type: String,
      default: 'icon',
      validator: (value) => allowedTypes.includes(value),
    },
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: '/',
    },
  },
  computed: {
    isType() {
      const type = this.type
      return type.charAt(0).toUpperCase() + type.slice(1)
    },
  },
})
</script>

<style lang="postcss">
.logo {
  @apply w-24 h-24;
}
</style>
