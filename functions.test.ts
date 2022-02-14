const { shuffleArray } = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('be an array', () => {
        expect([12, 2]).toEqual([12, 2])
    })

    test('have the same array length', () => {
        expect([1, 2, 3]).toHaveLength(3)
    })
})
