<template>
  <div
    class="film-card"
    v-bind:style="efeitoClick"
    v-on:click="clickEfeito()"
    v-on:mouseout="removeClickEfeito()"
  >
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
  data() {
    return {
      efeitoClick: null,
    };
  },
  methods: {
    clickEfeito: function () {
      this.efeitoClick='transform: scale(1.9); margin-right: 110px;';
    },
    removeClickEfeito: function () {
      this.efeitoClick=null;
    },
  },
};
</script>

<style>
</style>
