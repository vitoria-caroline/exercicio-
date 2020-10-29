let saldo = 1000;
const DEPOSITO = "deposito";
const SAQUE = "saque";
const SALDO = "saldo";

function banco (operacao, valor){
  switch (operacao) {
    case DEPOSITO:
        deposito (valor);    
      break;
    case SAQUE:
        saque(valor);
      break;
    case SALDO:
        seuSaldo(saldo);
      break;
    default:
      return console.log("Operação inválida.")
  }
}

function deposito(valor){
  novoSaldo = saldo + valor;
  console.log("Saldo: $" + saldo + "  Depósito de $" + valor + "  Deposito realizado com sucesso!    Saldo atual: $" + novoSaldo);
  saldo = novoSaldo;
}

function saque(valor){
  if (valor > saldo){
    console.log("Você não pode sacar este valor")
  }else{
  novoSaldo = saldo - valor;
  console.log("Saldo: $" + saldo + "  Saque de $"+ valor + " Saque realizado com sucesso!   Saldo atual: $" + novoSaldo);
  saldo = novoSaldo;
  }
}

function seuSaldo (saldo){
console.log("Seu saldo atual é: $" + saldo);
}


console.log(banco(DEPOSITO,400));
console.log(banco(SAQUE,1000));
console.log(banco(SALDO));