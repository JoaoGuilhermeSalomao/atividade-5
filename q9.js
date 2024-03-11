class SomadorDeNotas { // cria o somador
    constructor() {
      this.total = 0;
    }
  
    adicionarNota(nota) { //soma as notas
      this.total += nota;
    }
  
    verOTotal() { // exibe o valor total
      console.log(`O total das notas é: ${this.total}`);
    }
}
  
const somador = new SomadorDeNotas();

// adiciona as notas
somador.adicionarNota(10); // nota 1
somador.adicionarNota(6.5); // nota 2
somador.adicionarNota(3); // nota 3
   
somador.verOTotal(); // chama o valor total das notas somadas