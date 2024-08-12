import { Router } from "express";
import { getBooks, getBookbyId, createBook, putBook, deleteBooks, deleteBookById } from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooks);
router.get("/book/:id", getBookbyId);
router.post("/create-book", createBook);
router.put("/update-book/:id", putBook);
router.delete("/books", deleteBooks);
router.delete("/delete-book/:id", deleteBookById);

export default router;