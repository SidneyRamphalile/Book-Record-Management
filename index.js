const express = require("express");
const dotenv = require("dotenv");

const DbConnection = require("./databaseConnection");

const userRouter = require('./routes/users'); // it's not necessary to put the .js file extension
const booksRouter = require("./routes/books");

dotenv.config();

const app = express();

DbConnection();

const PORT = 8081;

app.use(express.json());

// http://localhost:8081/users/
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running :)",
    data: "hey",
  });
});

app.use("/users", userRouter);
app.use("/books", booksRouter);



app.get("*", (req, res) => {
  res.status(404).json({
    message: "This route does not exist",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
