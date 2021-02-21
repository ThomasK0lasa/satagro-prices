<template>
  <main>
    <h1>{{ $t("title") }}</h1>
    <PricesFilters
      @set-region="setRegion"
      @set-currency="setCurrency"
      @set-units="setUnits"
    />
    <div class="container">
      <PriceBox type="Starter" />
      <PriceBox
        v-for="plan in plans"
        :type="plan"
        :key="plan"
        :api="true"
        :region="region"
        :currency="currency"
        v-bind:units="units"
      />
      <PriceBox type="Other" />
    </div>
    <PricesInfo />
  </main>
</template>

<script>
import PriceBox from "./PriceBox.vue";
import PricesInfo from "./PricesInfo.vue";
import PricesFilters from "./PricesFilters.vue";

export default {
  name: "Prices",
  components: {
    PriceBox,
    PricesInfo,
    PricesFilters,
  },
  data: function () {
    return {
      api: "https://satagro-prices-api.herokuapp.com/",
      plans: ["Professional", "Premium"],
      region: "PL",
      currency: "PLN",
      units: 3,
    };
  },
  methods: {
    setRegion(value) {
      this.$i18n.locale = value.toLowerCase();
      this.region = value;
    },
    setCurrency(value) {
      this.currency = value;
    },
    setUnits(value) {
      this.units = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap");

h1 {
  font-family: "Caveat", cursive;
  font-size: 4em;
  color: white;
}

main {
  flex-grow: 1;
}

.container {
  display: flex;
  justify-content: center;
}
</style>
