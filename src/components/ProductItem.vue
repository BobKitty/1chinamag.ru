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

    <ul class="colors colors--black">
      <li class="colors__item" v-for="itemColor in product.colors" :key="itemColor.color"
          v-show="itemColor.color !== 'default'">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="itemColor.color"
                 :name="product.code"
                 @click="changeImgColor(itemColor.img)">
          <span class="colors__value" :style="{'background-color': itemColor.color}">
              </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      currentImg: this.product.image,
    };
  },
  methods: {
    changeImgColor(img) {
      this.currentImg = img;
    },
  },
};
</script>
