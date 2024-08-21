import { Router } from "express";
import { getBooks, getBookById, createBook, putBook, deleteBooks, deleteBookById } from "../controllers/books.controller.js";
import { verifyToken } from "../middlewares/users.middleware.js";

const router = Router();

router.get("/books", getBooks);
router.get("/books/:bookId", getBookById);
router.post("/create-book",verifyToken, createBook);
router.put("/update-book/:bookId", putBook);
router.delete("/books", deleteBooks);
router.delete("/delete-book/:bookId", deleteBookById);

export default router;