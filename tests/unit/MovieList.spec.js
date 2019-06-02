import { mount } from "@vue/test-utils";
import MovieList from "../../src/containers/MovieList.vue";

describe("MovieList", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MovieList);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
