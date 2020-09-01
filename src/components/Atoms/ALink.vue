<template>
  <component
    :is="tag"
    v-bind="computedAttrs"
    :class="computedClass"
    @click="onClick"
    @focus="onFocus"
    @blur="onBlur"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

const allowedTags = ['a', 'nuxt-link', 'router-link']

export default Vue.extend({
  name: 'AtomLink',
  props: {
    tag: {
      type: String,
      default: 'nuxt-link',
      validator: (value) => allowedTags.includes(value),
    },
    href: {
      required: true,
      validator: (prop) => typeof prop === 'string' || prop === null,
    },
  },
  computed: {
    computedAttrs() {
      if (!this.href) return {}
      const href = ((this.href || '') as unknown) as string
      if (/^(http[s]?.*)/.test(href))
        return {
          to: href,
        }
      return {
        href,
      }
    },
    computedClass() {
      return ['link']
    },
  },
  methods: {
    onBlur(e: any) {
      this.$emit('blur', e)
    },
    onFocus(e: any) {
      this.$emit('focus', e)
    },
    onClick(e: any) {
      this.$emit('click', e)
    },
    blur() {
      if (this.$el instanceof HTMLElement) {
        this.$el.blur()
      }
    },
    focus() {
      if (this.$el instanceof HTMLElement) {
        this.$el.focus()
      }
    },
  },
})
</script>
