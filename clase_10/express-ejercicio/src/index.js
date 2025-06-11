import express from "express";
import path from "path";
import url from "url";

const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.get("/api", (req, res) => {
  res.json({ message: "Hola soy json" });
});

app.listen(5000, () => console.log("servidor corriendo"));
