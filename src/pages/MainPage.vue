<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        {{ countProducts }} товара
      </span>
    </div>

    <div class="content__catalog">

      <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo"
                     :category-id.sync="filterCategoryId" :color-id.sync="filterColorsId"
                     :arr-colors="productsColorsAll"/>

      <section class="catalog">

        <ProductList :products="products"/>

        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>

      </section>

    </div>
  </main>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorsId: '',

      productsColorsAll: [],

      page: 1,
      productsPerPage: 6,
    };
  },
  created() {
    for (let i = 0; i < products.length; i += 1) {
      if (products[i].colors[0].color !== 'default') {
        for (let j = 0; j < products[i].colors.length; j += 1) {
          this.productsColorsAll.push(products[i].colors[j].color);
        }
      }
    }
    this.productsColorsAll = this.unique(this.productsColorsAll);
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts
          .filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts
          .filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId > 0) {
        filteredProducts = filteredProducts
          .filter((product) => product.categoryId === this.filterCategoryId);
      }

      if (this.filterColorsId.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          let isTrue = false;
          if (product.colors[0].color !== 'default') {
            for (let i = 0; i < product.colors.length; i += 1) {
              if (product.colors[i].color === this.filterColorsId) {
                isTrue = true;
                break;
              }
            }
          }
          return isTrue;
        });
      }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
  methods: {
    unique(arr) {
      const result = {
        arr: [],
      };

      for (let i = 0; i < arr.length; i += 1) {
        if (!result.arr.includes(arr[i])) {
          result.arr.push(arr[i]);
        }
      }

      return result.arr;
    },
  },
};
</script>
