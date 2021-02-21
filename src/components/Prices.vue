<template>
  <main>
    <h1>{{ $t("title") }}</h1>
    <div class="filters">
      <v-select
        class="style-chooser"
        label="name"
        :options="region"
        :placeholder="$t('filters.region')"
        :reduce="(region) => region.id"
        v-model="selectedRegion"
      ></v-select>
      <v-select
        class="style-chooser"
        label="name"
        :options="currency"
        :placeholder="$t('filters.currency')"
        :reduce="(currency) => currency.id"
        v-model="selectedCurrency"
        @input="setSelected"
      ></v-select>
      <v-select
        class="style-chooser"
        label="name"
        :options="units"
        :placeholder="$t('filters.units')"
        :reduce="(units) => units.id"
        v-model="selectedUnits"
      />
    </div>
    <div class="container">
      <PriceBox type="Starter" />
      <PriceBox v-for="plan in plans" :type="plan" :key="plan" :api="api"/>
      <PriceBox type="Other" />
    </div>
    <div class="nota">
      <p>
        <strong>
          <i18n path="other" tag="label" for="other-link">
            <a :href="$t('other-link')" target="_blank">{{
              $t("other-form")
            }}</a>
          </i18n>
        </strong>
      </p>
      <p>
        <strong
          ><small>{{ $t("note") }}</small></strong
        >
      </p>
    </div>
  </main>
</template>

<script>
import PriceBox from "./PriceBox.vue";
export default {
  name: "Prices",
  components: {
    PriceBox,
  },
  data: function () {
    return {
      api: "https://app.satagro.pl/api/plans/?plan=Professional&units=metric",
      plans: ["Professional", "Premium"],
      region: [
        { name: this.$t("countries.czech"), id: "CZ" },
        { name: this.$t("countries.lithuania"), id: "LT" },
        { name: this.$t("countries.poland"), id: "PL" },
        { name: this.$t("countries.slovakia"), id: "SK" },
      ],
      currency: [
        { name: "Kč", id: "CZK" },
        { name: "€", id: "EUR" },
        { name: "zł", id: "PLN" },
      ],
      units: [
        { name: this.$t("units.metric"), id: "3" },
        { name: this.$t("units.imperial"), id: "4" },
      ],
      selectedRegion: this.$t("countries.poland"),
      selectedCurrency: "PLN",
      selectedUnits: this.$t("units.metric"),
    };
  },
  methods: {
    setSelected(value) {
      console.log(value);
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

.filters {
  display: flex;
  justify-content: center;
  flex-basis: 100px;
  flex-wrap: wrap;
}

.filters > * {
  flex-grow: 1;
  min-width: 10em;
  max-width: 20em;
  margin: 0 0.5em;
}

.style-chooser >>> .vs__search::placeholder,
.style-chooser >>> .vs__dropdown-toggle,
.style-chooser >>> .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser >>> .vs__clear,
.style-chooser >>> .vs__open-indicator {
  fill: #394066;
}
</style>
