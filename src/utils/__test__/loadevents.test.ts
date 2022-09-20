import { beforeLoad, afterLoad } from '../loadevents';

describe('loadEvents', () => {
  it('should return an object with beforeLoad', () => {
    expect(beforeLoad).toBeInstanceOf(Function);
  });

  it('should return an object with afterLoad', () => {
    expect(afterLoad).toBeInstanceOf(Function);
  });
});
