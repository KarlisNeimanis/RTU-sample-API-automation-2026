import { getBooks } from '../../steps/books/Books.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    generateTestData()
})


it('List Books', () => {
    describe('Read book Data - List books', () => {
        getBooks()
    })
})