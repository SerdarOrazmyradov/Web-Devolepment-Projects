<template>
  <div>
    <NavBar />

    <Swiper />
    
      <Categories />
    <Statistics/>
    <LastProducts/>
    <SpecialOffers/>
    <TrendProducts/>
    <ContactUs/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Swiper from "../components/Swiper.vue";
import Categories from "../components/Categories.vue";
import Statistics from "../components/Statistics.vue";
import LastProducts from "../components/LastProducts.vue";
import SpecialOffers from "../components/SpecialOffers.vue";
import TrendProducts from "../components/TrendProducts.vue";
import ContactUs from "../components/ContactUs.vue";

export default {
  components: {
    NavBar,
    Swiper,
    Categories,
    Statistics,
    LastProducts,
    SpecialOffers,
    TrendProducts,
    ContactUs
  },
  setup() {},
};
</script>