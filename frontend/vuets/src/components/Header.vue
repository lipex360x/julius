<template>
  <div>
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  props: {
    msg: {
      type: String,
      default: 'Hello Header'
    }
  }
})

</script>

<style scoped>
.container {
  padding: 40px 0;
  color: white;
  font-size: 80%;
  font-family: "negrito";
}
</style>
