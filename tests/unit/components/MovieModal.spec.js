import { mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vue from 'vue';
import MovieModal from '../../../src/components/MovieModal.vue';

global.console = {
  ...global.console,
  warn: jest.fn(),
};

describe('MovieModal', () => {
  const movie = {
    id: '1',
    title: 'Star Wars',
    overview: 'Test',
    poster_path: 'test.jpg',
  };
  Vue.use(Vuetify);
  test('is a Vue instance', () => {
    const wrapper = mount(MovieModal, {
      propsData: {
        msg: movie.overview,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
