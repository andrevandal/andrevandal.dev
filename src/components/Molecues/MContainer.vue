<template>
  <div
    :class="[
      'container',
      {
        'container--justify-between': justify === 'between',
        'container--items-center': items === 'center',
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    justify: {
      type: String,
      default: 'between',
      validator: (value) => ['between'].includes(value),
    },
    items: {
      type: String,
      default: 'center',
      validator: (value) => ['center'].includes(value),
    },
  },
})
</script>

<style lang="postcss">
.container {
  @apply flex;
  &--justify-between {
    @apply justify-between;
  }
  &--items-center {
    @apply items-center;
  }
}
</style>
