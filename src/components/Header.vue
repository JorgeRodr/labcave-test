<template>
  <div class="header">
    <div class="header__search">
      <form @submit="onSubmit">
        <input v-model="value" type="text" placeholder="Search a movie and press enter">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      value: null,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$emit('submitted', this.value);
    },
  },
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
      text-align: center;
      width: 20%;

      @media screen and (min-width: 650px) and (max-width: 1024px) {
        width: 50%;
      }
      @media screen and (max-width: 650px) {
        width: 100%;
        font-size: 20px;
      }
    }
    input:focus::-webkit-input-placeholder {
      color: transparent;
    }
    input:focus:-moz-placeholder {
      color: transparent;
    } /* FF 4-18 */
    input:focus::-moz-placeholder {
      color: transparent;
    } /* FF 19+ */
    input:focus:-ms-input-placeholder {
      color: transparent;
    } /* IE 10+ */
  }
}
</style>
