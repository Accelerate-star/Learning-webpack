const {sum1, sum2} = require( "./mathUtil.js")
console.log(sum1(100, 100))
console.log(sum2(100, 100))
import { name, age, height } from "./info.js"
console.log(name)
console.log(age)
console.log(height)
import("./css/normal.css")
import Vue from "vue"
import app from "./Vue/App.vue"

new Vue({
  el: '#app',
  template: "<app/>",
  components: {
    app
  }
})