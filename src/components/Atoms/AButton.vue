<template>
  <component
    :is="isType"
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

const allowedVariants = ['white', 'primary', 'secondary']
const allowedSizes = ['sm', 'md', 'lg']
const allowedTags = ['button', 'a', 'ALink', 'nuxt-link', 'router-link']

export default Vue.extend({
  name: 'AtomButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    actived: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => allowedVariants.includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => allowedSizes.includes(value),
    },
    tag: {
      type: String,
      default: 'button',
      validator: (value) => allowedTags.includes(value),
    },
    href: {
      required: true,
      validator: (prop) => typeof prop === 'string' || prop === null,
    },
    type: {
      required: true,
      validator: (prop) => typeof prop === 'string' || prop === null,
    },
  },
  computed: {
    computedType() {
      return this.tag === 'button'
        ? this.type
        : this.tag === 'input'
        ? 'submit'
        : null
    },
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
      return [
        'button',
        {
          'button--white': this.variant === 'white',
          'button--primary': this.variant === 'primary',
          'button--secondary': this.variant === 'primary',
          'button--sm': this.size === 'sm',
          'button--lg': this.size === 'lg',
          'button--md': this.size === 'md',
          'button--block': this.block,
          'button--disabled': this.disabled,
          'button--actived': this.actived,
          'button--outline': this.outline,
        },
      ]
    },
    isType() {
      return this.href ? 'ALink' : 'button'
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
