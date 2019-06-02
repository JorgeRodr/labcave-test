import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vue from 'vue';
import MovieCard from '../../../src/components/MovieCard.vue';

global.console = {
  ...global.console,
  warn: jest.fn(),
};

describe('MovieCard', () => {
  const movie = {
    id: '1',
    title: 'Star Wars',
    overview: 'Test',
    poster_path: 'test.jpg',
  };
  Vue.use(Vuetify);
  test('is a Vue instance', () => {
    const wrapper = mount(MovieCard, {
      propsData: {
        movie,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
