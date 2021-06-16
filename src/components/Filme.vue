<template>
  <div class="film-card">
    <div class="film-card__media">
      <img class="film-card__img" v-bind:src="imagem" alt="" />
    </div>
    <div class="film-card__details">
      <div class="film-card__title">{{ titulo }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["titulo", "imagem"],
};
</script>

<style>
</style>
