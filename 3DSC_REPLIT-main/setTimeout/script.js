// let n = 0;

// setTimeout(function(){
//    console.log('Executou')                                                                         },5000)




// const intervalo = setInterval(function(){
// console.clear()
//   console.log(Contador: ${n})
// n++
// },1000)


// setTimeout(function(){



//   clearInterval(intervalo)
//   location.href = "https://classroom.google.com/u/0/"

// },5000)

/** RESOLVER

CRIE UMA FUNÇÃO SET INTERVAL QUE RECEBA UMA FUNÇÃO E UM TEMPO DE 3 SEGUNDOS

DENTRO DELA IMPRIMA UM NUMERO RANDOMICO DE 1 A 10
APOS PERCORRIDOS 8s INTERROMPA COM SET TIMEOU

*/


let n = 0;

const intervalo = setInterval(function() {
  console.clear();
  let numeroRandom = Math.floor(Math.random() * 10) + 1;
  console.log(Número aleatorio: ${ numeroRandom });
}, 3000);

setTimeout(function() {
  clearInterval(intervalo);
}, 8000);