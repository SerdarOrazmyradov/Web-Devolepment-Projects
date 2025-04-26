import bodyParser from "body-parser";
import express from "express";
import pg from "pg";
import axios from "axios";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book notes",
  password: "serdar090704",
  port: 5432,
});
db.connect();

let items = [
  {
    title: "vhfhcdmdlkf",
    author: "cjccmvf",
    start_time: "fvojiv",
    end_time: "vev",
    notes: "fpeovp",
  },
];
async function getAllItems() {
  const result = await db.query("select * from book_notes order by id asc");
  items = result.rows;
  return items;
}

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://covers.openlibrary.org/b/id/12547191.json"
    );
    items = await getAllItems();
    // console.log(result.data,'sss');
    
    res.render("index.ejs", {
      items: items,
      content: JSON.stringify(result.data),
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});
app.get("/edit", async (req, res) => {
  res.render("add_book.ejs");
});
app.get("/delete", async (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on a port 3000");
});
