const modal = document.getElementById('modal');
const button = document.getElementById('button');

button.onclick = () => handleCalculate();
modal.onclick = () => closeModal();

function handleCalculate() {
  const origin = document.getElementById('origin').value;
  const destiny = document.getElementById('destiny').value;
  const time = document.getElementById('time').value;
  const plan = document.getElementById('plan').value;

  fetch('http://localhost:3333/v1/calculate?' + new URLSearchParams({
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
    document.getElementById('withPlan').innerHTML = `R$ ${data.withPlan}`;
    document.getElementById('withoutPlan').innerHTML = `R$ ${data.withoutPlan}`;
  } else {
    document.getElementById('withPlan').innerHTML = '-';
    document.getElementById('withoutPlan').innerHTML = '-';
  }

  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
