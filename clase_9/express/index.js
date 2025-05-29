import express from "express";
const PORT = 5000;
const app = express();

// routes
app.get("/", (req, res) => {
  res.status(200);
  res.send("hello from simple server :)");
});
app.get("/nosotros", (req, res) => {
  res.status(200).send("NOSOTROS");
});

// listeners
app.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`);
});
