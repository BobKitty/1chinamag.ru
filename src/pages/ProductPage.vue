<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#" @click.prevent="gotoPage('main')">
            Каталог
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="#" @click.prevent="gotoPage('main')">
            {{ category.title }}
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{ product.title }}
          </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img width="570" height="570" :src="currentImg"
               :alt="product.title">
        </div>
        <ul class="pics__list" v-if="product.colors.length > 1">
          <li class="pics__item" v-for="colors in product.colors" :key="colors.id">
            <a href="" class="pics__link pics__link--current">
              <img width="98" height="98" :src="colors.img"
                   :alt="product.title">
            </a>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.code }}</span>
        <h2 class="item__title">
          {{ product.title }}
        </h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <b class="item__price">
              {{ product.price | numberFormat}} ₽
            </b>

            <fieldset class="form__block">
              <legend class="form__legend">Цвет:</legend>
              <BaseListColors :color-arr="productColors"
                              :current-color.sync="currentColor"/>
            </fieldset>

            <fieldset class="form__block" v-if="false">
              <legend class="form__legend">Объемб в ГБ:</legend>

              <ul class="sizes sizes--primery">
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio"
                           name="sizes-item" value="32">
                    <span class="sizes__value">
                      32gb
                    </span>
                  </label>
                </li>
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio"
                           name="sizes-item" value="64">
                    <span class="sizes__value">
                      64gb
                    </span>
                  </label>
                </li>
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio"
                           name="sizes-item" value="128" checked="">
                    <span class="sizes__value">
                      128gb
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар"
                        @click="countDec"
                        :disabled="countItems <= 1">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" value="1" name="count" v-model="countItems">

                <button type="button" aria-label="Добавить один товар"
                        @click="countInc">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button class="button button--primery" type="submit">
                В корзину
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">
              Описание
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Характеристики
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Гарантия
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Оплата и доставка
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            Навигация GPS, ГЛОНАСС, BEIDOU Galileo и QZSS<br>
            Синхронизация со смартфоном<br>
            Связь по Bluetooth Smart, ANT+ и Wi-Fi<br>
            Поддержка сторонних приложений<br>
          </p>

          <a href="#">
            Все характеристики
          </a>

          <h3>Что это?</h3>

          <p>
            Wahoo ELEMNT BOLT GPS – это велокомпьютер, который позволяет оптимизировать свои
            велотренировки, сделав их максимально эффективными. Wahoo ELEMNT BOLT GPS
            синхронизируется с датчиками по ANT+, объединяя полученную с них информацию.
            Данные отображаются на дисплее, а также сохраняются на смартфоне. При этом на
            мобильное устройство можно установить как фирменное приложение, так и различные
            приложения сторонних разработчиков. Велокомпьютер точно отслеживает местоположение,
            принимая сигнал с целого комплекса спутников. Эта информация позволяет смотреть уже
            преодоленные маршруты и планировать новые велопрогулки.
          </p>

          <h3>Дизайн</h3>

          <p>
            Велокомпьютер Wahoo ELEMNT BOLT очень компактный. Размеры устройства составляют
            всего 74,6 x 47,3 x 22,1 мм. что не превышает габариты смартфона. Корпус гаджета
            выполнен из черного пластика. На обращенной к пользователю стороне расположен
            дисплей диагональю 56 мм. На дисплей выводятся координаты и скорость, а также
            полученная со смартфона и синхронизированных датчиков информация: интенсивность,
            скорость вращения педалей, пульс и т.д. (датчики не входят в комплект поставки).
            Корпус велокомпьютера имеет степень защиты от влаги IPX7. Это означает, что устройство
            не боится пыли, а также выдерживает кратковременное (до 30 минут) погружение в воду
            на глубину не более 1 метра.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
import BaseListColors from '@/components/BaseListColors.vue';

export default {
  props: ['pageParams'],
  components: { BaseListColors },
  data() {
    return {
      productColors: [],
      currentColor: '',
      currentImg: '',
      countItems: 1,
    };
  },
  filters: {
    numberFormat,
  },
  created() {
    this.currentImg = this.product.image;

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
  computed: {
    product() {
      return products.find((product) => product.code === this.pageParams.id);
    },
    category() {
      return categories.find((category) => category.id === this.product.categoryId);
    },
  },
  methods: {
    gotoPage,
    countInc() {
      this.countItems += 1;
    },
    countDec() {
      this.countItems -= 1;
    },
  },
};
</script>
