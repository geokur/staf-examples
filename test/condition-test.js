const assert = require('assert').strict

class ConditionTest {
    beforeEach() {
        this.db = new Map()
        this.db.set('value1', 1)
    }
    hasEntryTest() {
        return () => {
            const hasEntry = this.db.has('value1')
            assert.ok(hasEntry)
        }
    }
    hasNoEntryTest() {
        return () => {
            const hasEntry = this.db.has('value1')
            assert.strictEqual(hasEntry, false)
        }
    }
    afterEach({ testResult }) {
        if (testResult instanceof Error) {
            this.db.clear()
        }
    }
}

module.exports = ConditionTest