<template>
  <div id="app">
    <Logo/>
    <Prices/>
    <Footer/>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Footer from './components/Footer.vue'
import Prices from './components/Prices.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Footer,
    Prices
  }
}
</script>

<style>
:root {
  --bg-color: rgba(255, 255, 255, 0.9);
  --main-color: #819b6f; 
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-image: url('./assets/background.jpg');
  min-height: 100vh;
}
</style>
