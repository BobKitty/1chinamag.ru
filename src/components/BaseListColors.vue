<template>
  <ul class="colors" :class="{'colors--black': typeInput === 'radio'}">
    <li class="colors__item" v-for="color in colorArr" :key="color">
      <label class="colors__label">
        <input class="colors__radio sr-only" :type="typeInput" :value="color"
               :name="color" v-model="currentColor"
               @change="$emit('changeColor', currentColor)">
        <span class="colors__value" :style="{'background-color': color}">
              </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['colorArr', 'typeInput'],
  data() {
    return {
      currentColor: [],
    };
  },
};
</script>
