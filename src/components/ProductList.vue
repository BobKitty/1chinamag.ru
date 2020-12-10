<template>
    <ul class="catalog__list">
      <li class="catalog__item" v-for="(product, index) in products" :key="index">
        <a class="catalog__pic" href="#">
          <img :src="product.image" :alt="product.title">
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
          <li class="colors__item">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA"
                     checked="">
              <span class="colors__value" style="background-color: #73B6EA;">
              </span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
              <span class="colors__value" style="background-color: #8BE000;">
              </span>
            </label>
          </li>
          <li class="colors__item">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
              <span class="colors__value" style="background-color: #222;">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <!--      <li class="catalog__item">-->
      <!--        <a class="catalog__pic" href="#">-->
      <!--          <img src="img/toothbrush.jpg" srcset="img/toothbrush@2x.jpg 2x"
                      alt="Название товара">-->
      <!--        </a>-->

      <!--        <h3 class="catalog__title">-->
      <!--          <a href="#">-->
      <!--            Ультразвуковая зубная щётка Playbrush Smart Sonic-->
      <!--          </a>-->
      <!--        </h3>-->

      <!--        <span class="catalog__price">-->
      <!--          5 660 ₽-->
      <!--        </span>-->

      <!--        <ul class="colors colors&#45;&#45;black">-->
      <!--          <li class="colors__item">-->
      <!--            <label class="colors__label">-->
      <!--              <input class="colors__radio sr-only" type="radio" name="color-2"
                          value="#F0F0F0"
                          checked="">-->
      <!--              <span class="colors__value" style="background-color: #F0F0F0;">-->
      <!--              </span>-->
      <!--            </label>-->
      <!--          </li>-->
      <!--          <li class="colors__item">-->
      <!--            <label class="colors__label">-->
      <!--              <input class="colors__radio sr-only" type="radio" name="color-2"
      value="#8BE000">-->
      <!--              <span class="colors__value" style="background-color: #8BE000;">-->
      <!--              </span>-->
      <!--            </label>-->
      <!--          </li>-->
      <!--          <li class="colors__item">-->
      <!--            <label class="colors__label">-->
      <!--              <input class="colors__radio sr-only" type="radio" name="color-2"
      value="#73B6EA">-->
      <!--              <span class="colors__value" style="background-color: #73B6EA;">-->
      <!--              </span>-->
      <!--            </label>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </li>-->
    </ul>
</template>
<script>
export default {
  props: ['products'],
};
</script>
