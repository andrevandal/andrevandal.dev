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
import vModel from '@/mixins/vModel.vue'

export default Vue.extend({
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

  &:focus {
    @apply outline-none;
  }

  &-box {
    @apply relative inline-block w-10;

    height: 0.4em;
  }

  &-inner {
    @apply block top-auto bottom-0 delay-150 duration-150;

    margin-top: -0.4em;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &,
    &::after,
    &::before {
      @apply absolute transition-transform ease-in-out duration-150 bg-oceangreen-600 rounded-lg;

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
      transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
        transform 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &::after {
      bottom: -0.625em;
      top: -1.25em;
      transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
        opacity 0.1s linear;
    }
  }
  &.actived {
    .hamburger-inner {
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, -0.625em, 0) rotate(-45deg);
      &::before {
        top: 0;
        transition: top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s,
          transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s;
        transform: rotate(-90deg);
      }
      &::after {
        top: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          opacity 0.1s linear 0.22s;
        opacity: 0;
      }
    }
  }
}
</style>
