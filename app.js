const calcular = () => {
  const balance = parseFloat(document.getElementById("balance").value);
  const people = parseFloat(document.getElementById("people").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  let percentage = tip / 100;

  let totalPeople = balance / people;

  let total = totalPeople + percentage;

  return (result.innerHTML = "El total de cada persona a pagar es: " + total);
};

const create = () => {
    const create = parseInt(document.getElementById("createCant").value)
    const container = document.getElementById("container")

    for(let i = 0; i < create ; i++){
        let input = document.createElement("input")
        input.type = "number"
        input.placeholder = `Cuenta de persona nro ${i+1}`
        input.classList.add("input")
        input.id = "balance"

        container.appendChild(input)
    }


}