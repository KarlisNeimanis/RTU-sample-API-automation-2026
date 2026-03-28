import { getBooks } from '../../steps/Books/get_books.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    generateTestData()
})


it('List Books', () => {
    describe('Read book Data - List books', () => {
        getBooks()
    })
})