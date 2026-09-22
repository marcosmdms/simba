let repeat = true;
let balance = 0;
const statement: {
  operation: "Depósito" | "Saque";
  amount: number;
  balance: number;
}[] = [];

const utility = {
  cancel: function () {
    const response = confirm("Deseja realmente cancelar?");

    if (!response) return response;

    alert("Operação cancelada.");
    return response;
  },
  parse: function (value: string | any) {
    if (value === "") {
      alert("Informe um valor.");
      return false;
    } else if (!(value > 0)) {
      alert("Digite um valor válido.");
      return false;
    }

    return true;
  },
};

const operations = {
  check: function () {
    alert("Saldo atual: R$ " + balance);
  },
  deposit: function (): void {
    const amount = prompt("Digite o valor do depósito:");

    if (amount === null) {
      const response = utility.cancel();

      if (!response) operations.deposit();

      return;
    }

    const parsed = utility.parse(amount);

    if (!parsed) operations.deposit();

    balance += +amount;
    operations.check();

    statement[statement.length] = {
      operation: "Depósito",
      amount: +amount,
      balance,
    };
  },
  cashout: function (): void {
    const amount = prompt("Digite o valor do saque:");

    if (amount === null) {
      const response = utility.cancel();

      if (!response) operations.cashout();

      return;
    }

    const parsed = utility.parse(amount);

    if (!parsed) operations.cashout();

    if (+amount > balance) {
      alert("Saldo insuficiente.");
      return operations.cashout();
    }

    balance -= +amount;
    operations.check();

    statement[statement.length] = {
      operation: "Saque",
      amount: +amount,
      balance,
    };
  },
  statement: function () {
    let message = "Extrato\n\n";

    for (let i = 0; i < statement.length; i++) {
      message +=
        statement[i].operation +
        ": R$ " +
        statement[i].amount +
        " | saldo: R$" +
        statement[i].balance +
        "\n";
    }

    alert(message);
  },
  exit: function () {
    alert("Foi um prazer atendê-lo.");
    repeat = false;
  },
  invalid: function () {
    alert("Operação inválida.");
  },
};

function run() {
  const username = prompt("Digite seu nome:");

  if (username === null) {
    const response = utility.cancel();

    if (response === false) run();

    return;
  }

  //const parseName = username ? username : "usuário";
  const parseName = username || "usuário";

  alert("Olá, " + parseName + "! Bem vindo ao Simba.");

  while (repeat) {
    const operation = prompt(
      "Selecione uma operação:\n\n1. Consultar\n2. Depositar\n3. Sacar\n4. Extrato\n5. Sair\n"
    );

    if (operation === null) {
      const response = utility.cancel();

      if (!response) continue;

      return;
    }

    const parsed = utility.parse(operation);

    if (!parsed) continue;

    switch (+operation) {
      case 1:
        operations.check();
        break;
      case 2:
        operations.deposit();
        break;
      case 3:
        operations.cashout();
        break;
      case 4:
        operations.statement();
        break;
      case 5:
        operations.exit();
        break;
      default:
        operations.invalid();
    }
  }
}

run();
