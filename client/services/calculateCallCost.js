const modal = document.getElementById('modal');
const button = document.getElementById('button');

// const baseUrl = 'http://localhost:3333' <- use quando for rodar localmente;
const baseUrl = 'https://falemais-danilo.herokuapp.com';

button.onclick = () => handleCalculate();
modal.onclick = () => closeModal();

function handleCalculate() {
  button.innerHTML = 'Calculando...';
  button.style.cursor = 'not-allowed';

  const origin = document.getElementById('origin').value;
  const destiny = document.getElementById('destiny').value;
  const time = document.getElementById('time').value;
  const plan = document.getElementById('plan').value;

  if(origin === "" || destiny === "" || time === "0" || time === "" || plan === "") {
    alert('Preencha todos os campos!');

    button.innerHTML = 'Calcular';
    button.style.cursor = 'pointer';

    return;
  }

  fetch(`${baseUrl}/api/v1/calculate?` + new URLSearchParams({
    origin,
    destiny,
    time,
    plan,
  }))
    .then(response => response.json())
    .then(data => {
      openModal(data);
    });
}

function openModal(data) {
  if(!data.message) {
    const withPlan = data.withPlan.toFixed(2).replace('.', ',');
    const withoutPlan = data.withoutPlan.toFixed(2).replace('.', ',');

    document.getElementById('withPlan').innerHTML = `R$ ${withPlan}`;
    document.getElementById('withoutPlan').innerHTML = `R$ ${withoutPlan}`;
  } else {
    document.getElementById('withPlan').innerHTML = '-';
    document.getElementById('withoutPlan').innerHTML = '-';
  }

  button.innerHTML = 'Calcular';
  button.style.cursor = 'pointer';

  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
