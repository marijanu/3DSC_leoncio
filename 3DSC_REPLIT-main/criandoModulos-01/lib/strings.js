const meuNome = 'Bil';
 function imprimeNome(){
   console.log(`meu nome é ${meuNome}`);
 }

// exportação imediata
export function caixaAlta(nome){
  return nome.toUpperCase();
}

// exportação posterior de valores
export function caixaBaixa(nome){
  return nome.toLowerCase();
}

// exportação posterior de funções
export {meuNome, imprimeNome}