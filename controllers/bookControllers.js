const Book = require("../models/bookModel");

// Create a new book
const createBook = async (req, res) => {
  try {
    const { title, author, publisher } = req.body;
    if (!title || !author || !publisher) {
      return res
        .status(400)
        .json({ error: "All fields (title, author, publisher) are required" });
    }

    const newBook = new Book({ title, author,publisher });
    const savedBook = await newBook.save();

    res.status(201).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all book
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single book by ID
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a book by ID
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single book by ID
const patchBook = async (req, res) => {
  try {
    const book = await Book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single book by ID
const putBook = async (req, res) => {
  try {
    const book = await Book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  patchBook,
  putBook,
};