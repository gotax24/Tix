const calcular = () => {
  const balance = parseFloat(document.getElementById("balance").value);
  const people = parseFloat(document.getElementById("people").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  let percentage = tip / 100;

  let propina = balance * percentage;

  let totalCuenta = propina + balance;

  let total = totalCuenta / people;

  return (result.innerHTML =
    "El total de cada persona a pagar es: " + total.toFixed(2));
};

//!----------------------------Cuentas separadas------------------------------------------

const create = () => {
  const contenainer = document.getElementById("contenainer");
  const balances = [];

  const create = parseInt(document.getElementById("createCant").value);

  for (let i = 0; i < create; i++) {
    let input = document.createElement("input");

    input.type = "number";
    input.placeholder = `Cuenta de persona nro ${i + 1}`;
    input.classList.add("input");
    contenainer.appendChild(input);
  }

  const tip = document.createElement("input");
  tip.type = "number";
  tip.placeholder = "Porcentaje de la propina";
  tip.id = "tip";
  tip.classList.add("input-tip");
  contenainer.appendChild(tip);

  const button = document.createElement("button");
  button.textContent = "Calcular";
  button.classList.add("button");
  contenainer.appendChild(button);

  button.addEventListener("click", () => {
    balances.length = 0;
    const inputs = contenainer.querySelectorAll(".input");
    inputs.forEach((input) => {
      balances.push(parseFloat(input.value));
    });
    calculate(balances, tip.value);
  });
};

const calculate = (balances, tip) => {
  let resultArray = [];

  const result = document.getElementById("result-2");

  let percentage = parseFloat(tip) / 100;

  let propinas = balances.map((value) => value * percentage);

  resultArray = balances.map((v, i) => v + propinas[i]);

  result.innerHTML = "";
  resultArray.forEach((elemento, index) => {
    const li = document.createElement("li");
    li.textContent =
      `Cuenta a pagar de la persona ${index + 1} es = ` + elemento;
    result.appendChild(li);
  });
};
