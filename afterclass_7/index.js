// nombre del alumna/o-preentrega
const URL = `https://fakestoreapi.com/products`;
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
// Titulo: data.titulo
// fetch(URL)
//   .then((response) => response.json())
//   then((data) => {
//     console.log(data);
//   });

fetchData(URL)


titulo
npm install 

GET produsts
npm start GET 