<template>
  <div class="error-tips">
    共有{{ errorRows.length }}处错误，位于第{{ errorRows.join("、") }}行。
  </div>
</template>

<script>
export default {
  name: "tips",
  props: {
    errorRows: Array,
  },
};
</script>

<style scoped>
.error-tips {
  background-color: rgb(255, 242, 241);
  width: 100%;
  height: 60px;
  font-size: 30px;
  color: rgb(132, 23, 39);
  font-weight: 600;
}
</style>