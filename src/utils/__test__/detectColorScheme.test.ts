import detectColorScheme from '../detectColorScheme';
import { ThemeType } from '../../data/constants';

describe('detectColorScheme', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: (type: string) => {
        return {
          matches: type === '(prefers-color-scheme: dark)',
          addListener: () => {},
          removeListener: () => {},
        };
      },
    });
  });

  it('should return dark theme', () => {
    expect(detectColorScheme()).toBe(ThemeType.DARK);
  });
});
