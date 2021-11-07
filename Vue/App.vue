<template>
  <div>
    <h2>{{message}}</h2>
    <button>按钮</button>
    <div class = 'color1'>你好呀! Vue</div>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue"

export default {
  name: "app",
  components: {
    Cpn
  },
  data () {
    return {
      message: "你好呀! Vue"
    }
  }
}
</script>

<style>
  body {
    background-color: green;
  }
</style>