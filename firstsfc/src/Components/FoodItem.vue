<template>
  <div class="Mango">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Mango and Orange',
      message: 'I like Mango and Orange'
    };
  }
};
</script>

<style scoped>
  .Mango {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: red;
  }
</style>