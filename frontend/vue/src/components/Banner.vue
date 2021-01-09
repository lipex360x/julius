<template>
  <div>
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Banner',

  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style scoped>
.container {
  padding: 40px 10px;
  color: white;
  font-size: 80%;
  font-family: "padrao";
}
</style>