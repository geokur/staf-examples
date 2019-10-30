const assert = require('assert').strict

class RetryTest {
    zeroRetryTest(testProperties) {
        testProperties.retry = 0
        return () => {
            assert.ok(true)
        }
    }
    oneRetryTest(testProperties) {
        testProperties.retry = 1
        return () => {
            assert.ok(false)
        }
    }
}

module.exports = RetryTest