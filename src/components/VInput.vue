<template>
  <div class="v-input">
    <input
      class="input"
      :type="inputType"
      :value="value"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script lant="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },

  methods: {
    onInput({ target }) {
      this.$emit("input", target.value);
    },
  },
});
</script>

<style>
.v-input {
  border: 1px solid var(--gray);
  border-radius: 24px;
  color: var(--primary);
}

.v-input .input {
  width: 100%;
  height: 100%;
  padding: 8px 16px;
  border: none;
  border-radius: inherit;
  color: currentColor;
  outline: none;
  font-size: 16px;
  line-height: 18px;
}
</style>
