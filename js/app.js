// Cálculo para una cuenta compartida entre varias personas
const calcular = () => {
  const balance = parseFloat(document.getElementById("balance").value);
  const people = parseInt(document.getElementById("people").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  // Validación básica
  if (isNaN(balance) || isNaN(people) || isNaN(tip) || people <= 0) {
    result.innerHTML = "Por favor ingrese valores válidos.";
    return;
  }

  let percentage = tip / 100;
  let propina = balance * percentage;
  let totalCuenta = propina + balance;
  let total = totalCuenta / people;

  result.innerHTML = `El total de cada persona a pagar es: $${total.toFixed(
    2
  )}`;
};

// Cálculo para cuentas separadas
const create = () => {
  const container = document.getElementById("container");
  const balances = [];

  const create = parseInt(document.getElementById("createCant").value);

  // Validación básica para crear cuentas
  if (isNaN(create) || create <= 0) {
    alert("Ingrese una cantidad válida de personas.");
    return;
  }

  // Creación dinámica de inputs para cada persona
  for (let i = 0; i < create; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.placeholder = `Cuenta de persona nro ${i + 1}`;
    input.classList.add("input-balance");
    container.appendChild(input);
  }

  const tip = document.createElement("input");
  tip.type = "number";
  tip.placeholder = "Porcentaje de la propina";
  tip.id = "tip";
  tip.classList.add("input-tip");
  container.appendChild(tip);

  const button = document.createElement("button");
  button.textContent = "Calcular";
  button.classList.add("button");
  container.appendChild(button);

  button.addEventListener("click", () => {
    const inputs = container.querySelectorAll(".input-balance");

    inputs.forEach((input) => {
      let value = parseFloat(input.value);
      if (!isNaN(value)) {
        balances.push(value);
      }
    });

    if (balances.length === create) {
      calculate(balances, tip.value);
    } else {
      alert("Por favor ingrese todos los valores de las cuentas.");
    }
  });
};

// Cálculo de la propina y total para cada persona
const calculate = (balances, tip) => {
  let resultArray = [];
  const result = document.getElementById("result-2");
  let percentage = parseFloat(tip) / 100;

  // Validación básica de tip
  if (isNaN(percentage) || percentage < 0) {
    result.innerHTML = "Por favor ingrese un porcentaje válido de propina.";
    return;
  }

  let propinas = balances.map((value) => value * percentage);
  resultArray = balances.map((v, i) => v + propinas[i]);

  result.innerHTML = "";
  resultArray.forEach((elemento, index) => {
    const li = document.createElement("li");
    li.textContent = `Cuenta a pagar de la persona ${
      index + 1
    } es = $${elemento.toFixed(2)}`;
    result.appendChild(li);
  });
};
