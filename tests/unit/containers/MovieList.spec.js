import { createLocalVue, mount } from "@vue/test-utils";
import MovieList from "../../../src/containers/MovieList.vue";
import store from "../../../src/store";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Vue from "vue";

describe("MovieList", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  Vue.use(Vuetify);

  const wrapper = mount(MovieList, {
    localVue,
    store
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("should call search", () => {
    wrapper.vm.search();
  });
});
