const assert = require('assert').strict

class FirstTest {
    myFirstTest() {
        return () => {
            assert.ok(true)
        }
    }
}

module.exports = FirstTest