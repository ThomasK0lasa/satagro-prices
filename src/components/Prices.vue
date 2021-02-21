<template>
  <main>
    <h1>{{ $t("title") }}</h1>
    <div class="container">
      <PriceBox type="starter"/>
      <PriceBox type="pro"/>
      <PriceBox type="premium"/>
      <PriceBox type="other"/>
    </div>
    <div class="nota">
      <p>
        <strong>
          <i18n path="other" tag="label" for="other-link">
            <a :href='$t("inne-link")' target="_blank">{{ $t("other-formularz") }}</a>
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
</style>
