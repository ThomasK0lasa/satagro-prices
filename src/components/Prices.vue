<template>
  <main>
    <h1>Oferta</h1>
    <div class="container">
      <PriceBox/>
      <PriceBox/>
      <PriceBox/>
    </div>
  </main>
</template>

<script>
import PriceBox from './PriceBox.vue'
export default {
  name: 'Prices',
  components: {
    PriceBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap');

h1 {
  font-family: "Caveat", cursive;
  font-size: 4em;
  color: white
}
main {
  flex-grow: 1;
}
</style>
