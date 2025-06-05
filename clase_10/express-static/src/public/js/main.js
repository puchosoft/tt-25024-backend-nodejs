fetch("http://localhost:5000/usuarios")
  .then((res) => res.text())
  .then((data) => {
    console.log(data);
  });
