<template>
  <div>
    <h2 class = "color">{{message}}</h2>
    <button>按钮</button>
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
  color {
    color: green,
  }
</style>