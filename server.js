const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getBooks,
  createBook,
  getBook,
  deleteBook,
  patchBook,
  putBook,
} = require("./controllers/bookControllers");



// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

app.get("/", (req, res) => res.send("API Running!"));
// GET a single blog
app.get("/api/books/:id", getBook);
// DELETE a blog
app.delete("/api/books/:id", deleteBook);
// Update blog using PATCH
app.patch("/api/books/:id", patchBook);
// Update blog using PUT
app.put("/api/books/:id", putBook);
// Add a new blog
app.post("/api/books", createBook);
// GET all blogs
app.get("/api/books", getBooks);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
