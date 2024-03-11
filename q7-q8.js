// Questão 7
class Animal {
  constructor(nome, idade) {
      this.nome = nome; 
      this.idade = idade; 
  }

  descrever() {
      console.log(`Esse é o ${this.nome} e ele tem ${this.idade} anos.`); // Corrigido aqui
  }
}

//cria os animais
const cachorro = new Animal("cachorro", 7);
const gato = new Animal("gato", 3);

// descrevendo os animais
cachorro.descrever();
gato.descrever();

// Questão 8
// utilizou a classe Animal da questão anterior
class Gato extends Animal { // 
  constructor(nome, idade, cor) {
      super(nome, idade);
      this.cor = cor;
  }

  miar() {
      console.log("miau miau");
  }
}

//cria os animais
const cachorro2 = new Animal("cachorro", 12);
const gato2 = new Gato("gato", 6, "branco"); 

cachorro2.descrever();
gato2.descrever();
gato2.miar(); 
