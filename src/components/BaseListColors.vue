<template>
  <ul class="colors">
    <li class="colors__item" v-for="color in colorArr" :key="color">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"
               :value="color"
               v-model="computedColor">
        <span class="colors__value" :style="{'background-color': color}">
              </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['colorArr', 'currentColor'],
  computed: {
    computedColor: {
      get() {
        return this.currentColor;
      },
      set(v) {
        this.$emit('update:currentColor', v);
      },
    },
  },
};
</script>
