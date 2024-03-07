/**
 * Debounces a function, ensuring it is not called more often than specified by the wait interval.
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The time in milliseconds to wait before invoking the function.
 * @returns {Function} - The debounced function.
 */
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

/**
 * Throttles a function, ensuring it is not called more often than specified by the wait interval.
 * @param {Function} func - The function to throttle.
 * @param {number} wait - The time in milliseconds to wait before allowing another invocation.
 * @returns {Function} - The throttled function.
 */
function throttle(func, wait) {
    let throttling = false;
    return function (...args) {
        const context = this;
        if (!throttling) {
            func.apply(context, args);
            throttling = true;
            setTimeout(() => {
                throttling = false;
            }, wait);
        }
    };
}

module.exports = { debounce, throttle };
