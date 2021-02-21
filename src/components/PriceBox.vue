<template>
  <div class="box-white">
    <h2>Premium</h2>
    <h3>15 zł <small>ha/rok</small></h3>
    <span class="mobile-hidden">
      <p>
        Wszystkie usługi Professional<br />
        Wysoko rozdzielczy monitoring „Planet”<br />
        Integracja sensorów (IoT, stacje meteo)<br />
        Doradztwo agronomiczne<br />
      </p>
    </span>
    <p class="bottom">
      <a
        id="btn-buy-pre"
        class="btn-green"
        href="https://app.satagro.pl/accounts/signup/?source=LP_pl_premium"
        >Kup teraz</a
      >
    </p>
  </div>
</template>

<style scoped>
.box-white {
  background-color: rgba(255, 255, 255, 0.95);
  width: 18.5em;
  height: 23em;
  margin: 1em;
  font-weight: normal;
  display: inline-grid;
}

h2 {
  font-size: 1.7em;
  margin-top: 1.3em;
  margin-bottom: 0px;
  color: var(--main-color);
}

h3 {
  font-family: "Caveat", cursive;
  font-size: 3em;
  color: var(--main-color);
  margin: 0;
}

p {
  font-size: 0.9em;
  color: var(--main-color);
}

.mobile-hidden {
  visibility: visible;
  display: inline;
}

.btn-green {
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  text-transform: uppercase;
  margin-top: 40px;
  width: 10em;
  background-color: #a4bd8e;
  color: #fff;
  padding: 0.7em 1em 0.7em 1em;
  text-align: center;
}

.btn-green:hover {
  background-color: #819b6f;
  text-decoration: none;
}

@media only screen and (max-width: 756px) {
  .mobile-hidden {
    visibility: hidden;
    display: none;
  }
}
</style>