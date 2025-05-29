const http = require("http");
const fs = require("fs");
const PORT = 5000;

const config = (req, res) => {
  let html = "";

  switch (req.url) {
    case "/":
      html = fs.readFileSync("./index.html", "utf-8");
      res.statusCode = 200;

      res.setHeader("Content-Type", "text/html");

      res.end(html);
      break;
    case "/nosotros":
      html = fs.readFileSync("./nosotros.html", "utf-8");
      res.statusCode = 200;

      res.setHeader("Content-Type", "text/html");

      res.end(html);
      break;
    case "/api":
      //   html = fs.readFileSync("./nosotros.html", "utf-8");
      res.statusCode = 200;

      res.setHeader("Content-Type", "application/json");

      res.end(
        JSON.stringify({
          nombre: "Javier",
          apellido: "While",
        })
      );
      break;

    default:
      html = fs.readFileSync("./404.html", "utf-8");
      res.statusCode = 404;

      res.setHeader("Content-Type", "text/html");

      res.end(html);
      break;
  }
};

//Server
const server = http.createServer(config);

// listener

server.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`);
});
