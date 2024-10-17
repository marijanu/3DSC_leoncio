

const pessoas = [
     { nome: "Luca", sexo: "M"},
     { nome: "Lucas", sexo: "M"},
     { nome: "Laura", sexo: "F"},
     { nome: "Lissa", sexo: "F"},
     {nome: "Lupan", sexo: "M"}
]

const meninas = []
const meninos = []

function filtroPessoas(arrPessoas) {
     if(typeof arrPessoas == "object") {
       for (pessoa of arrPessoas) {
         pessoa.sexo == "F" 
          ? meninas.push(pessoa) 
          : meninos.push(pessoa);
          }        
     } else {
          console.error(arrPessoas);                    
}
     
filtroPessoas(pessoas);



console.log(" --- Meninas ---");
console.log(meninas);
console.log(" --- Meninos ---");
console.log(meninos);