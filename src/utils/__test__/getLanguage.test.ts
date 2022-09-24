import getLanguage from '../getLanguage';

describe('getLanguage', () => {
  it('should return the language', () => {
    expect(getLanguage()).toBe('en');
  });
});
