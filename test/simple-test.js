const assert = require('assert').strict

class SimpleTest {
    mySimpleTest() {
        return () => {
            assert.ok(true)
        }
    }
}

module.exports = SimpleTest