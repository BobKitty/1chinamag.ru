<template>
    <ul class="catalog__list" v-if="products.length > 0">
      <ProductItem v-for="product in products" :key="product.code" :product="product"/>
    </ul>
    <h2 class="catalog__list_none" v-else>Ничего не найдено :(</h2>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>

<style>
.catalog__list_none {
  display: block;
  padding: 100px 0;
  text-align: center;
}
</style>
