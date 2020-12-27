<template>
  <button
    :aria-controls="controls"
    :aria-expanded="`${value}`"
    :class="{ actived: value }"
    type="button"
    aria-label="Toggle navigation"
    class="hamburger"
    @click="change"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import vModel from '@/mixins/vModel'

export default Vue.extend({
  name: 'AtomHamburguer',
  mixins: [vModel],
  props: {
    label: {
      type: String,
      default: 'Toggle navigation',
    },
    controls: {
      type: String,
      default: 'navbar_collapse',
    },
  },
})
</script>

<style lang="postcss">
.hamburger {
  @apply inline-block bg-transparent border-0 outline-none overflow-visible w-10 h-10;

  &-box {
    @apply relative inline-block w-10;

    height: 0.4em;
  }

  &-inner {
    @apply block top-auto bottom-0 delay-150 duration-150;

    margin-top: -0.4em;
    transition: background-color 0.1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.1s;

    &,
    &::after,
    &::before {
      @apply absolute bg-oceangreen-600 rounded-lg;

      width: 2.5em;
      height: 0.4em;
    }
    &::after,
    &::before {
      @apply block;

      content: '';
    }

    &::before {
      top: -0.625em;
      transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.1s,
        transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.15s;
    }

    &::after {
      bottom: -0.625em;
      transition: bottom 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.1s,
        transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.15s;
    }
  }
  &.actived {
    .hamburger-inner {
      background-color: transparent;
      &::before {
        top: 0;
        transform: rotate(-45deg);
      }
      &::after {
        bottom: 0;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
