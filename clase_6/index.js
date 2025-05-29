// console.log('calentar el agua');
// console.log('preparar el mate');
// console.log('disfrutar el mate');

// console.log("pila de platos");

// setTimeout(() => {
//   console.log("plato re sucio");
// }, 0);//ms 1000ms = 1s
// setTimeout(() => {
//   console.log("fin de pila de platos");
// },0);

// console.log("Fin de proceso");

//promesas
function taskAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let random = Math.random();
      if (random < 0.5) {
        resolve("Tarea resuelta");
      } else {
        reject(new Error("Tarea no resulta"));
      }
    }, 3000);
  });
}

// const resultFulfilled = taskAsync().then((response) => {
//   console.log(response);
// });
// // console.log(resultFulfilled);

// const resultRejected = taskAsync().catch((err) => {
//   console.log(err);
// });

// console.log(resultRejected);
const devolverPrenda = (respuesta) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (respuesta == "si") {
        resolve("SI gracias por por prestame la campera, ya te llevo");
      } else {
        reject("Uh no me acuerdo, no la tengo");
      }
    }, 3000);
  });
};

console.log("Hola, te acordas la campera que te preste el sabado?");

// devolverPrenda("si")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => console.log("Dale gracias"));

//   async/await
async function solicitarPrenda(respuesta) {
  try {
    const response = await devolverPrenda(respuesta);
    console.log(response);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Dale gracias");
  }
}

solicitarPrenda("no");


