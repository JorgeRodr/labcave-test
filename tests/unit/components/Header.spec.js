import { createLocalVue, mount } from '@vue/test-utils';
import Header from '../../../src/components/Header.vue';

describe('MovieList', () => {
  const wrapper = mount(Header);
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('should emit event', () => {
    const evt = {
      preventDefault: jest.fn(),
    };
    wrapper.vm.onSubmit(evt);
  });
});
