import express from "express";
import path from "path";
import url from "url";

// SSR
// SERVER SIDE RENDERING
// settings
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middlewares
app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));
const rootDir = path.join(__dirname, "public");
// routes

// servidor sirve archivos
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: rootDir });
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: rootDir });
});
// api rest
app.get("/usuarios", (req, res) => {
  res.send("Hola");
});

// listener
app.listen(5000, () => console.log("servidor corriendo"));
