<template>
  <div class="v-img-wrapper">
    <v-spinner v-if="isLoading" color="#fff" />
    <img
      class="v-img"
      :src="imgSrc"
      :alt="alt"
      loading="lazy"
      @load="onImgLoad"
      @error="onImgError"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VSpinner from '@/components/VSpinner.vue';

export default Vue.extend({
  props: {
    alt: {
      type: String,
      required: true,
    },

    src: {
      type: String,
      required: true,
    },
  },

  components: {
    VSpinner,
  },

  data() {
    return {
      imgSrc: "",
      isLoading: true,
    };
  },

  created() {
    this.imgSrc = this.src;
  },

  methods: {
    onImgLoad() {
      this.isLoading = false;
    },
    onImgError() {
      this.imgSrc = `https://resources.plerk.io/category/default.png`;
    },
  },
});
</script>

<style>
.v-img-wrapper {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.v-img {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.v-img-wrapper .v-spinner {
  position: absolute;
}
</style>
