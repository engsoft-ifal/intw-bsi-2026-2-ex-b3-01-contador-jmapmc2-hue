// 1. Selecionar
const total = document.querySelector('#total');
const btnSomar = document.querySelector('#somar');
const btnZerar = document.querySelector('#zerar');

// Estado inicial
let contador = 0;
total.textContent = contador;

// 2. Ouvir e 3. Alterar
btnSomar.addEventListener('click', () => {
  contador++;
  total.textContent = contador;
});

btnZerar.addEventListener('click', () => {
  contador = 0;
  total.textContent = contador;
});
