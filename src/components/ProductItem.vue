<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="currentImg" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price }} ₽
    </span>

    <BaseListColors :color-arr="productColors"
                    :current-color.sync="currentColor"
                    :is-radio-black-border="true"/>
  </li>
</template>

<script>
import BaseListColors from '@/components/BaseListColors.vue';

export default {
  components: {
    BaseListColors,
  },
  props: ['product'],
  data() {
    return {
      currentImg: this.product.image,
      productColors: [],
      currentColor: '',
    };
  },
  created() {
    for (let i = 0; i < this.product.colors.length; i += 1) {
      this.productColors.push(this.product.colors[i].color);
    }
  },
  watch: {
    currentColor(value) {
      this.currentImg = this.product.colors
        .filter((colorObj) => colorObj.color === value)[0].img;
    },
  },
};
</script>
