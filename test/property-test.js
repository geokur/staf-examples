const assert = require('assert').strict

class PropertyTest {
    myPositiveTest(properties) {
        properties.type = 'positive'
        return () => {
            assert.ok(true)
        }
    }
    myNegativeTest(properties) {
        properties.type = 'negative'
        return () => {
            assert.ok(false)
        }
    }
}

module.exports = PropertyTest