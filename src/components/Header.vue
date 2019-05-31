<template>
  <div class="header">
    <div class="header__search">
      <input type="text" placeholder="Search a movie and press enter">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.header {
  grid-area: h;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  &__search {
    width: 100%;
    input {
      border: none;
      height: 10vh;
      outline: none;
      font-size: 26px;
      width: 20%;
    }
  }
}
</style>
