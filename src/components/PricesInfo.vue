<template>
  <div class="nota">
    <p>
      <strong>
        <i18n path="other" tag="label" for="other-link">
          <a :href="$t('other-link')" target="_blank">{{ $t("other-form") }}</a>
        </i18n>
      </strong>
    </p>
    <p>
      <strong
        ><small>{{ $t("note") }}</small></strong
      >
    </p>
  </div>
</template>

<style scoped>
.nota {
  float: left;
  width: 100%;
  font-size: 1.1em;
  color: #fff !important;
  text-shadow: 2px 2px 3px #222;
}

a {
    color: white;
}
</style>