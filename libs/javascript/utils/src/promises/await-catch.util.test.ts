import { AwaitCatch } from './await-catch.util';

describe('AwaitCatch', () => {
  it('should resolve to data', async () => {
    const input = new Promise((resolve) => {
      resolve('yay');
    });

    const expectation = ['yay', null];
    const actual = await AwaitCatch(input);

    expect(actual).toEqual(expectation);
  });

  describe('should resolve to error', () => {
    it('with error provided', async () => {
      const input = new Promise((_, reject) => {
        reject(new Error('not yay'));
      });

      const expectation = [null, new Error('not yay')];
      const actual = await AwaitCatch(input);

      expect(actual).toEqual(expectation);
    });

    it('with primitive provided', async () => {
      const input = new Promise((_, reject) => {
        reject('oh no');
      });

      const expectation = [null, new Error('oh no')];
      const actual = await AwaitCatch(input);

      expect(actual).toEqual(expectation);
    });

    it('without value provided', async () => {
      const input = new Promise((_, reject) => {
        reject(null);
      });

      const expectation = [null, new Error('unknown error occurred')];
      const actual = await AwaitCatch(input);

      expect(actual).toEqual(expectation);
    });

    it('with catching thrown errors', async () => {
      const input = new Promise(() => {
        throw new Error('woopsie');
      });

      const expectation = [null, new Error('woopsie')];
      const actual = await AwaitCatch(input);

      expect(actual).toEqual(expectation);
    });
  });
});
