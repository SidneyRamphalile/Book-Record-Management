const express = require("express");
const { users } = require("./data/users.json");
// const { books } = require("./data/books.json");

const userRouter = require('./routes/users'); // it's not necessary to put the .js file extension
const booksRouter = require("./routes/books");

const app = express();

const PORT = 8081;

app.use(express.json());


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
