import express from "express";
import { createBook, getAllBooks, getBookById, updateBook, deleteBook } from "../controllers/bookController.js";
import { validateBook } from "../middlewares/inputValidator.js";

const router = express.Router();

// Definindo as rotas do crud de livros 
router.post("/book", validateBook, createBook);
router.get("/book", getAllBooks);
router.get("/book/:id", getBookById);
router.put("/book/:id", validateBook, updateBook);
router.delete("/book/:id", deleteBook);

export default router;