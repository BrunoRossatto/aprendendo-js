// Listar todos os números pares de 1 até 1000.
function listarPares() {
  for (let i = 6; i <= 1000; i = i + 6) {
    console.log(i);
  }
}

// listarPares()

// Testa se o número é primo
function ePrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function listarPrimos(numMax) {
  for (let i = 2; i <= numMax; i = i + 1) {
    if (ePrimo(i)) {
      console.log(i);
    }
  }
}

listarPrimos(97);
