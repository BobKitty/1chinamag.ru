<template>
  <ul class="colors" :class="{'colors--black': typeInput === 'radio'}">
    <li class="colors__item" v-for="color in colorArr" :key="color">
      <label class="colors__label">
        <input class="colors__radio sr-only" :type="typeInput" :value="color"
               :name="color" v-model="currentArr"
               @change="getCurrentArr">
        <span class="colors__value" :style="{'background-color': color}">
              </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['colorArr', 'typeInput', 'currentColors'],
  data() {
    return {
      currentArr: [],
    };
  },
  methods: {
    getCurrentArr() {
      this.$emit('update:currentColors', this.currentArr);
    },
  },
  watch: {
    currentColors(value) {
      this.currentArr = value;
    },
  },
};
</script>
