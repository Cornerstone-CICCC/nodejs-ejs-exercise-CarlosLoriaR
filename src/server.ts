// This is your server file :)
import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("Missing port!");
}

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

// Static files
app.use(express.static(path.join(__dirname, "../dist/public")));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
