<template>
  <div>
    <Tips :errorRows="errorRows" />
    <Code :errorRows="errorRows" :code="code" />
  </div>
</template>

<script>
import Tips from "./tips/tips";
import Code from "./code/codeSpace";
import axios from "axios";
import "../../mock/mock.js";
export default {
  name: "Index",
  components: {
    Tips,
    Code,
  },
  data() {
    return {
      errorRows: [],
      code: "",
    };
  },
  created() {
    // 获取接口数据
    axios
      .get("/code")
      .then((res) => {
        if (res.status == 200) {
          const { code, err_line_number_list } = res.data;
          this.errorRows = err_line_number_list;
          this.code = code;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
</style>
