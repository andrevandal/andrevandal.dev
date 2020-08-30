<template>
  <transition name="slide-fade-right">
    <ul class="menu" :class="{ actived: value }">
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/" @click.native="change"
          >/início</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/usos" @click.native="change"
          >/usos</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/sobre" @click.native="change"
          >/sobre</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/blog" @click.native="change"
          >/blog</nuxt-link
        >
      </li>
      <li class="menu-item">
        <nuxt-link class="menu-link" to="/contato" @click.native="change"
          >/contato</nuxt-link
        >
      </li>
    </ul>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import vModel from '@/mixins/vModel.vue'

export default Vue.extend({
  mixins: [vModel],
})
</script>

<style lang="postcss">
.menu {
  @apply absolute top-0 right-0 left-0 bg-gray-200 z-10 pt-40 flex flex-col h-full max-h-screen min-h-screen;
  &-item {
    @apply inline-flex  w-full mx-auto px-4;
  }
  &-link {
    @apply py-4 text-gray-800 font-bold text-2xl flex items-center justify-start;

    &::before,
    &::after {
      @apply w-4 h-4 block;

      content: ' ';
      mask-size: cover;
    }
    &::before {
      @apply bg-bluewood-600 mr-4;

      mask: url('/images/arrow-left.svg') no-repeat 100% 100%;
    }
    &::after {
      @apply bg-oceangreen-600 ml-4;

      mask: url('/images/arrow-right.svg') no-repeat 100% 100%;
      mask-size: cover;
    }
    &:hover {
      &::after,
      &::before {
        @apply transition ease-in-out duration-200;

        transform: scaleX(-1);
      }
    }
  }
}
@screen sm {
  .menu-item {
    @apply max-w-screen-sm px-8;
  }
}

@screen md {
  .menu-item {
    @apply max-w-screen-md;
  }
}
@screen lg {
  .menu-item {
    @apply max-w-screen-lg px-16;
  }
}
@screen xl {
  .menu-item {
    @apply max-w-screen-xl px-20;
  }
}

.slide-fade-right {
  &-enter,
  &-leave-to {
    @apply transform scale-y-0 opacity-0;
  }

  &-enter-to,
  &-leave {
    @apply transform opacity-100 scale-100;
  }

  &-enter-active,
  &-leave-active {
    @apply transition ease-linear duration-300 origin-top-right;
  }
}
</style>
