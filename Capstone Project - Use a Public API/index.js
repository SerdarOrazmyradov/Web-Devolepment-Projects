import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=9e660248835a2e2ad569feeabf0e6c25"
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server running on a port ${port}`);
});
