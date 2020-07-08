<template>
  <header class="main-header">
    <h1 class="main-header__title">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      title: 'Hello 👋🏼!!! This is a Roistat frontend test task!!',
    };
  },
};
</script>

<style scoped>
.main-header {
  margin: 30px 0;
}
.main-header__title {
  margin: 0 auto;
  max-width: 200vh;
  text-align: center;
  color: #038cd5;
  font-size: 36px;
}
</style>

