
import fsExtra from 'fs-extra'
import { uploadImageToCloudinary } from '../utils/cloudinary.js'
import Book from '../models/book.model.js'

const transformBook = (book) => {
  return {
    id: book._id,
    bookTitle: book.bookTitle,
    bookAuthor: book.bookAuthor,
  }
}

const getBooks = async (_request, response) => {
  const books = await Book.find()
  console.log({books})
  response.json({message: 'Books list', 
  data: books.map((book) => transformBook(book)), 
  meta: {
    totalBooks: books.length
  }})
}


const getBookById = async (request, response) => {
  const {bookId} = request.params 

  const book = await Book.findById(bookId)

  response.json({
  message: 'Book found', 
  data: transformBook(book)})
}

const createBook = async  (request, response) => {
    console.log(request.body)
    const {bookTitle, bookAuthor} = request.body
    let image = {}

    if(request?.files?.bookImage){
        const {bookImage} = request.files
        image = await uploadImageToCloudinary(bookImage.tempFilePath)

        image = {
            publicId: image.public_id,
            Url: image.secure_url
        }
        await fsExtra.remove(bookImage.tempFilePath)
    }
    const newBook = new Book({
        bookTitle,
        bookAuthor,
        image
    })
    const newBookSaved = await newBook.save()
    console.log({newBookSaved})
    console.log(request.files)
    response.json({message: 'Book created', newBookSaved})
    response.send('Book created')
}

const putBook = (request, response) => {
  res.send('Book updated')}
const deleteBooks = (request, response) => {
  res.send('Books deleted')}
const deleteBookById = (req, response) => {
  res.send('Book deleted')}

export { getBooks, getBookById, createBook, putBook, deleteBooks, deleteBookById }
