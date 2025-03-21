import {
  createBookService,
  getAllBooksService,
  getBookByIdService,
  updateBookService,
  deleteBookService,
} from "../models/bookModel.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createBook = async (req, res, next) => {
  const { title, author, price, quantity, genre, description, published_year } = req.body;
  try {
    const newBook = await createBookService(title, author, price, quantity, genre, description, published_year);
    handleResponse(res, 201, "Livro criado com sucesso", newBook);
  } catch (err) {
    next(err);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await getAllBooksService();
    handleResponse(res, 200, "Livros encontrados com sucesso", books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (req, res, next) => {
  try {
    const book = await getBookByIdService(req.params.id);
    if (!book) return handleResponse(res, 404, "Livro não encontrado");
    handleResponse(res, 200, "Livro encontrado com sucesso", book);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  const { title, author, price, quantity, genre, description, published_year } = req.body;
  try {
    const updatedBook = await updateBookService(req.params.id, title, author, price, quantity, genre, description, published_year);
    if (!updatedBook) return handleResponse(res, 404, "Livro não encontrado");
    handleResponse(res, 200, "Livro atualizado com sucesso", updatedBook);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const deletedBook = await deleteBookService(req.params.id);
    if (!deletedBook) return handleResponse(res, 404, "Livro não encontrado");
    handleResponse(res, 200, "Livro deletado com sucesso", deletedBook);
  } catch (err) {
    next(err);
  }
};