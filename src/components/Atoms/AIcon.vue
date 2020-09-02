<template>
  <svg-icon
    :class="computedClass"
    :name="name"
    :title="title"
    :desc="description"
  />
</template>

<script lang="ts">
import Vue from 'vue'

const allowedSizes = ['sm', 'md', 'lg']

export default Vue.extend({
  name: 'AtomIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => allowedSizes.includes(value),
    },
  },
  computed: {
    computedClass() {
      return [
        'icon',
        {
          'icon--sm': this.size === 'sm',
          'icon--lg': this.size === 'lg',
          'icon--md': this.size === 'md',
        },
      ]
    },
  },
})
</script>

<style lang="postcss">
.icon {
  @apply fill-current;
  &--sm {
    @apply w-2 h-2;
  }
  &--md {
    @apply w-4 h-4;
  }
  &--lg {
    @apply w-8 h-8;
  }
}
</style>
