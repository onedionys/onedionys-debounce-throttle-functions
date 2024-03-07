const { debounce, throttle } = require('../src/debounceThrottle');
const assert = require('assert');

describe('Debounce and Throttle Functions', () => {
    describe('debounce', () => {
        it('should debounce the function', (done) => {
            let counter = 0;
            const debouncedFunc = debounce(() => {
                counter++;
            }, 100);
            debouncedFunc();
            debouncedFunc();
            debouncedFunc();
            setTimeout(() => {
                assert.strictEqual(counter, 1);
                done();
            }, 200);
        });
    });

    describe('throttle', () => {
        it('should throttle the function', (done) => {
            let counter = 0;
            const throttledFunc = throttle(() => {
                counter++;
            }, 100);
            throttledFunc();
            throttledFunc();
            throttledFunc();
            setTimeout(() => {
                assert.strictEqual(counter, 1);
                done();
            }, 200);
        });
    });
});
