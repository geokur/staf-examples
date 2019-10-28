module.exports = {
    testPath: 'test',
    schedule(tests) {
        const onlyPositive = tests.filter(test => test.testProperties.type === 'positive')
        return onlyPositive
    }
}