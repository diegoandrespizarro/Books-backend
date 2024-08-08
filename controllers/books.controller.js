const getBooks = (req, resp) => {resp.send('Books list')}
const getBookbyId = (req, resp) => {resp.send('Book details')}
const postBook = (req, resp) => {resp.send('Book created')
console.log(process.env)
}
const putBook = (req, resp ) => {resp.send('Book updated')}
const deleteBooks = (req, resp) => {resp.send('Books deleted')}
const deleteBookById = (req, resp) => {resp.send('Book deleted')}

export { getBooks, getBookbyId, postBook, putBook, deleteBooks, deleteBookById }