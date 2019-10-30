// Map used to count how many retries each test has already had
const retryCount = new Map()

module.exports = {
    testPath: 'test',
    schedule(tests) {
        const onlyRetryable = tests.filter(test => 'retry' in test.testProperties)
        return onlyRetryable
    },
    analyze(test, result, tests) {
        if (result.testResult instanceof Error) {
            const { testProperties } = test
            let retried = retryCount.has(testProperties) ? retryCount.get(testProperties) : 0
            if (retried < testProperties.retry) {
                retryCount.set(testProperties, ++retried)
                tests.push(test)
            }
        }
    }
}