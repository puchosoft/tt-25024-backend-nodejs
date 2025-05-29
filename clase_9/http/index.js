const http = require("http");
const fs = require("fs");
const PORT = 5000;
// console.log(http);
const config = (req, res) => {
    const user = {
      nombre: "Javier",
      apellido: "While",
    };
    
    const html = fs.readFileSync("./index.html", "utf-8");
  res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Type", "application/json");//"Content-Type":"el tipo de contenido"

  res.end(JSON.stringify(user));
};

const server = http.createServer(config);

// listener

server.listen(PORT, () => {
  console.log(`Servidor corriendo el puerto ${PORT}`);
});
