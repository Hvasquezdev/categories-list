<template>
  <div
    class="v-spinner"
    :style="{
      color: color,
    }"
  >
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "#727272",
    },
  },
});
</script>

<style>
.v-spinner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.v-spinner div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: currentColor;
  border-radius: 50%;
  animation: v-spinner 1.2s linear infinite;
}
.v-spinner div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.v-spinner div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.v-spinner div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.v-spinner div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.v-spinner div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.v-spinner div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.v-spinner div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.v-spinner div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.v-spinner div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.v-spinner div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.v-spinner div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.v-spinner div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes v-spinner {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>
