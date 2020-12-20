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
                    :current-colors.sync="currentColors"
                    :type-input="'radio'"/>
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
      currentColors: [],
    };
  },
  created() {
    for (let i = 0; i < this.product.colors.length; i += 1) {
      this.productColors.push(this.product.colors[i].color);
    }
  },
  watch: {
    currentColors(value) {
      this.currentImg = this.product.colors
        .filter((colorObj) => colorObj.color === value)[0].img;
    },
  },
};
</script>
