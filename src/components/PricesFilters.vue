<template>
  <div class="filters">
    <v-select
      class="filter"
      label="name"
      :options="region"
      :placeholder="$t('filters.region')"
      :reduce="(region) => region.id"
      :clearable="false"
      v-model="selectedRegion"
      @input="setRegion"
    ></v-select>
    <v-select
      class="filter"
      label="name"
      :options="currency[selectedRegion]"
      :placeholder="$t('filters.currency')"
      :reduce="(currency) => currency.id"
      :clearable="false"
      v-model="selectedCurrency"
      @input="setCurrency"
    ></v-select>
    <v-select
      class="filter"
      label="name"
      :options="units"
      :placeholder="$t('filters.units')"
      :reduce="(units) => units.id"
      :clearable="false"
      v-model="selectedUnits"
      @input="setUnits"
    />
  </div>
</template>

<script>
export default {
  name: "PricesFilters",
  data: function () {
    return {
      region: [
        { name: this.$t("countries.czech"), id: "CZ" },
        { name: this.$t("countries.lithuania"), id: "LT" },
        { name: this.$t("countries.poland"), id: "PL" },
        { name: this.$t("countries.slovakia"), id: "SK" },
      ],
      currency: {
        CZ: [{ name: "Kč", id: "CZK" }],
        LT: [{ name: "€", id: "EUR" }],
        PL: [{ name: "zł", id: "PLN" }],
        SK: [{ name: "€", id: "EUR" }],
      },
      units: [
        { name: this.$t("units.metric"), id: 3 },
        { name: this.$t("units.imperial"), id: 4 },
      ],
      selectedRegion: "PL",
      selectedCurrency: "PLN",
      selectedUnits: 3,
    };
  },
  methods: {
    setRegion(value) {
      this.$emit("set-region", value);
      const currency = this.currency[value][0].id
      this.selectedCurrency = currency;
      this.$emit("set-currency", currency);
    },
    setCurrency(value) {
      this.$emit("set-currency", value);
    },
    setUnits(value) {
      this.$emit("set-units", value);
    },
  },
};
</script>

<style scoped>
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

@media only screen and (max-width: 756px) {
  .filters {
    flex-direction: column;
    align-items: center;
  }
  .filters > * {
    width: 18.5em;
    margin: 0.2em 0;
  }
}

.filter >>> .vs__search::placeholder,
.filter >>> .vs__dropdown-toggle,
.filter >>> .vs__dropdown-menu {
  background: #ffffff;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
  border-radius: 0;
}

.filter >>> .vs__clear,
.filter >>> .vs__open-indicator {
  fill: var(--main-color);
}

.filter >>> .vs__dropdown-option--highlight {
  background: var(--main-color);
  color: #fff;
}
</style>