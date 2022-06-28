<template>
  <div class="container">
    <ol>
      <li
        v-for="(item, index) in codeList"
        :key="index"
        :class="{ active: errorRows.indexOf(index + 1) > 0 }"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "codeSpace",
  props: {
    errorRows: Array,
    code: String,
  },
  computed: {
    codeList() {
      return this.code.split("\n");
    },
  },
};
</script>

<style scoped>
.active {
  background-color: rgb(207, 144, 117);
}
</style>