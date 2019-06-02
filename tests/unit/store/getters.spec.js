import { getters } from '../../../src/store/getters';

describe('Getters', () => {
  test('is object', () => {
    expect(typeof getters).toBe('object');
  });
});
