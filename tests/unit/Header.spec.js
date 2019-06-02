import { createLocalVue, mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("MovieList", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Header);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
