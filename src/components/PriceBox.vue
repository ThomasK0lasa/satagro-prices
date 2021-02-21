<template>
  <fragment>
    <div class="box-white box-center" v-if="loading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="box-white" v-if="plan">
      <h2>{{ $t("offer." + type + "-title") }}</h2>
      <h3>
        {{ getCurrency }}<small>{{ getUnits }}</small>
      </h3>
      <span class="mobile-hidden">
        <i18n :path="'offer.' + type + '-desc'" tag="p" class="test">
          <br />
        </i18n>
      </span>
      <p class="bottom">
        <a class="btn-green" :href="$t('offer.' + type + '-link')">{{
          $t("offer." + type + "-btn")
        }}</a>
      </p>
    </div>
    <div class="box-white" v-if="!api">
      <h2>{{ $t("offer." + type + "-title") }}</h2>
      <h3>{{ $t("offer." + type + "-price") }}</h3>
      <span class="mobile-hidden">
        <i18n :path="'offer.' + type + '-desc'" tag="p" class="test">
          <br />
        </i18n>
      </span>
      <p class="bottom">
        <a class="btn-green" :href="$t('offer.' + type + '-link')">{{
          $t("offer." + type + "-btn")
        }}</a>
      </p>
    </div>
    <div class="box-white box-center" v-if="error">
      <p>Error!</p>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "PriceBox",
  data: function () {
    return {
      loading: false,
      plan: null,
      details: null,
      error: null,
      planUnits: this.units,
    };
  },
  props: ["type", "api", "currency", "units", "region"],
  created: function () {
    if (this.api) {
      this.getPlan();
    }
  },
  computed: {
    getCurrency: function () {
      console.log("computing currency");
      return `${this.details.yearly_rate} ${this.details.currency_symbol} `;
    },
    getUnits: function () {
      return this.details.units_system == 3
        ? this.$t("offer.hectare") + "/" + this.$t("offer.year")
        : this.$t("offer.acre") + "/" + this.$t("offer.year");
    },
  },
  watch: {
    region: function () {
      this.getDetails();
    },
    currency: function () {
      this.getDetails();
    },
    units: function () {
      this.getDetails();
    },
  },
  methods: {
    getPlan: function () {
      this.loading = true;
      fetch(this.$parent.api + "?plan=" + this.type)
        .then((res) => (res = res.json()))
        .then((res) => {
          this.plan = res;
          this.getDetails();
          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          console.error(err);
        });
    },
    getDetails: function () {
      console.log(this.region);
      console.log(this.currency);
      console.log(this.units);
      const [result] = this.plan.filter((el) => {
        return (
          el.units_system === this.units &&
          el.currency === this.currency &&
          el.region === this.region
        );
      });
      console.log(result);
      this.details = result;
    },
  },
};
</script>

<style scoped>
.box-white {
  background-color: rgba(255, 255, 255, 0.95);
  width: 18.5em;
  height: 23em;
  margin: 1em;
  font-weight: normal;
  display: inline-grid;
  position: relative;
}

.box-center {
  display: flex;
  align-items: center;
  justify-content: center;
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
  .box-white {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 10em;
  }

  .box-center {
    display: flex;
  }

  .mobile-hidden {
    visibility: hidden;
    display: none;
  }
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid var(--main-color);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>