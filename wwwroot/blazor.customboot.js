"use strict";

Blazor.start({
    // Keep retrying each 2 seconds for a year (!).
    // (This is, in effect, an infinite number of retries.)
    reconnectionOptions: { maxRetries: 15768000, retryIntervalMilliseconds: 2000 },
});
