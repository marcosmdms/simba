# 🏦 S.I.M.B.A

**S.I.M.B.A** é um simulador bancário desenvolvido em **TypeScript**, com o objetivo de praticar conceitos fundamentais de programação, lógica e manipulação de dados.

O sistema permite realizar operações bancárias básicas diretamente pelo navegador, utilizando `prompt()`, `alert()` e `confirm()` como interface.

## 🚀 Funcionalidades

* 👤 Identificação do usuário
* 💰 Consulta de saldo
* 💵 Depósito
* 💸 Saque
* 📋 Visualização do extrato
* ❌ Cancelamento de operações
* ⚠️ Validação de valores
* 🚫 Validação de saldo insuficiente
* 🚪 Encerramento do sistema

## 🛠️ Tecnologias

* **TypeScript**
* **JavaScript**
* **HTML5**
* **Browser API**

## 📚 Conceitos praticados

Este projeto foi desenvolvido como exercício prático para estudar conceitos importantes de TypeScript e JavaScript, como:

* Variáveis com `let` e `const`
* Tipagem estática
* Tipos `string`, `number` e `boolean`
* Arrays e objetos
* Funções
* Arrow Functions / funções tradicionais
* Condicionais `if / else`
* Estrutura `switch`
* Operador ternário
* Operador lógico `||`
* Conversão de tipos com `+`
* Loops com `while`
* Loops com `for`
* `prompt()`
* `alert()`
* `confirm()`
* Manipulação de objetos
* Type Union
* Tipagem de arrays
* Controle de fluxo
* Validação de dados

## 💻 Como funciona

Ao iniciar o sistema, o usuário informa seu nome:

```text
Digite seu nome:
```

Em seguida, o sistema apresenta o menu principal:

```text
Selecione uma operação:

1. Consultar
2. Depositar
3. Sacar
4. Extrato
5. Sair
```

### 1. Consultar saldo

Exibe o saldo atual da conta.

```text
Saldo atual: R$ 500
```

### 2. Depositar

Solicita um valor para depósito e atualiza o saldo.

O sistema também registra a operação no extrato.

### 3. Sacar

Solicita um valor para saque e verifica se existe saldo suficiente.

Caso o valor seja maior que o saldo disponível:

```text
Saldo insuficiente.
```

### 4. Extrato

Exibe as operações realizadas e o saldo após cada operação.

Exemplo:

```text
Extrato

Depósito: R$ 500 | saldo: R$500
Saque: R$ 100 | saldo: R$400
Depósito: R$ 200 | saldo: R$600
```

### 5. Sair

Encerra o sistema e exibe uma mensagem de despedida.

```text
Foi um prazer atendê-lo.
```

## 📂 Estrutura esperada

Uma estrutura simples para o projeto pode ser:

```text
simba/
│
├── index.html
├── app.ts
├── app.js
└── README.md
```

> O arquivo `.ts` precisa ser compilado para JavaScript antes de ser executado diretamente pelo navegador, caso você não esteja utilizando uma ferramenta de build que faça essa conversão automaticamente.

## ▶️ Executando o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Acesse a pasta

```bash
cd simba
```

### 3. Compile o TypeScript

Caso o TypeScript esteja instalado:

```bash
tsc app.ts
```

Isso irá gerar o arquivo JavaScript correspondente.

### 4. Abra o projeto

Abra o `index.html` no navegador.

## 🧠 Objetivo do projeto

O S.I.M.B.A foi criado principalmente como um **projeto de prática em TypeScript**, utilizando uma aplicação simples para exercitar conceitos de programação.

O foco não está em criar um sistema bancário real, mas em transformar conceitos estudados em uma aplicação funcional.

## 🔮 Possíveis melhorias

Algumas funcionalidades que podem ser implementadas futuramente:

* [ ] Interface gráfica com HTML e CSS
* [ ] Substituir `alert()` e `prompt()` por uma interface própria
* [ ] Formatação monetária com `Intl.NumberFormat`
* [ ] Persistência dos dados com `localStorage`
* [ ] Data e hora das operações
* [ ] Identificação das operações com um ID
* [ ] Extrato em formato de tabela HTML
* [ ] Separação do código em módulos
* [ ] Classes para representar conta e operações
* [ ] Testes automatizados
* [ ] Responsividade
* [ ] Backend e banco de dados

## 📌 Status

🚧 **Em desenvolvimento**

Projeto desenvolvido para fins de **estudo e prática de TypeScript/JavaScript**.

---

## 👨‍💻 Autor

**Marcos Davi**

Projeto desenvolvido durante os estudos de desenvolvimento web e TypeScript.
