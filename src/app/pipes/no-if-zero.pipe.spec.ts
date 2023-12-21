import { NoIfZeroPipe } from './no-if-zero.pipe';

describe('NoIfZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new NoIfZeroPipe();
    expect(pipe).toBeTruthy();
  });
});
