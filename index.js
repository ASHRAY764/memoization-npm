function memoize(fn) {
    const cache = {};  // Object to store computed results

    return function(...args) {

            // Check if the result for the current arguments is already in the cache

         const key = JSON.stringify(args);  // Create a unique key from function arguments
        if (cache[key]) {
            console.log('Returning from cache:', key);  // Log when returning cached value
            return cache[key];  // Return cached value
        }

        // If not cached, call the function and store the result in cache

        const result = fn(...args);
        cache[key] = result;  // Cache the result
        console.log('Computing result for:', key);  // Log when computing a new value
        return result;
    };
}