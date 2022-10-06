
<template>
  <button class="xin_button">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: "XinButton",
};
</script>
<style lang="less">
.xin_button {
  padding: 10px;
  background: #ffffff;
  border: 1px solid red;
}
</style>
