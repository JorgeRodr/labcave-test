import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Vue from 'vue';
import store from '../../src/store';
import App from '../../src/App.vue';

describe('App', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  Vue.use(Vuetify);

  const wrapper = mount(App, {
    localVue,
    store,
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
