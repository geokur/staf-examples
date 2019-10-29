const assert = require('assert').strict

class PropertyTest {
    myPositiveTest(testProperties) {
        testProperties.type = 'positive'
        return () => {
            assert.ok(true)
        }
    }
    myNegativeTest(testProperties) {
        testProperties.type = 'negative'
        return () => {
            assert.ok(false)
        }
    }
}

module.exports = PropertyTest