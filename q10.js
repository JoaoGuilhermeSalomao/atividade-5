class Funcionario {
    constructor(nome, idade, salarioBase) {
      this.nome = nome;
      this.idade = idade;
      this.salarioBase = salarioBase;
    }
  
    // Este método calcula o salário total do funcionário. Para cada tipo de funcionário, o cálculo será diferente.
    calcularSalario() {
    }
}
  
class Professor extends Funcionario { // definição de professor
    constructor(nome, idade, salarioBase, disciplina, horasAula) {
        super(nome, idade, salarioBase);
        this.disciplina = disciplina;
        this.horasAula = horasAula;
    }
  
    calcularSalario() { // calculo de salário
      const valorHoraAula = 75;
      const salarioProfessor = this.horasAula * valorHoraAula;
  
      const salarioTotal = this.salarioBase + salarioProfessor;
  
      console.log(`O salário do professor ${this.nome} é: R$ ${salarioTotal.toFixed(2)}. Ele da aula de ${this.disciplina}. `);
    }
}
 // dados de cada professor
const professor1 = new Professor("Rennanderson", 39, 2000, "Física", 20);
const professor2 = new Professor("Marcelo", 37, 2200, "Educação Física", 15);
  
// exibição dos dados e salário de cada professor
professor1.calcularSalario();
professor2.calcularSalario();