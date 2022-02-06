//arguments no sirve para paradigma funcional(map,reduce, filter)
/*function concatenar() {
  let parametros = [];
  for (const key in arguments) {
    parametros.push(arguments[key]);
  }
  string = parametros.join("");
  return string;
} */

// RESUELVE SIN ARGUMENTS CON FUNCTION
/*function concatenar(...acaVanLosStrings) {
  return acaVanLosStrings.join("");
}*/

// RESUELVE SIN ARGUMENTS CON ARROW FUNCTION
const concatenar = (...acaVanLosStrings) => acaVanLosStrings.join("");

/*
RESUELVE USANDO ARGUMENTS

function invocarFunciones() {
  let parametros = [];
  for (const key in arguments) {
    parametros.push(arguments[key]());
  }
  return parametros.join("");
}
*/
// RESUELVE SIN USAR ARGUMENTS
const invocarFunciones = (...acaVanUnMontonDeFunciones) => {
  let string = "";
  acaVanUnMontonDeFunciones.forEach((element) => {
    string += element();
  });
  return string;
};

const creadorDeIncrementos = (num) => {
  let resultado = num;
  return function (n) {
    return resultado + n;
  };
};

const invocacionUnica = (func) => {
  let num = 0;
  return function () {
    if (num < 1) {
      num = func(); //f() incrementa ++ a num
    }
  };
};

/*  LO MISMO RESULTO CON BOOLEANS

function invocacionUnica(funcion) {
  let num = false;
  return function () {
    if (num!) {
      num = true;
      funcion();
    }
  };
}
*/

const objetoConClousure = (contador = 0) => {
  let obj = {
    incremento: function () {
      contador = contador + 1;
      return contador;
    },
    incrementoPor10: function () {
      contador = contador + 10;
      return contador;
    },
    pedirValor: function () {
      return contador;
    },
    cambiarValor: function (nuevo) {
      return (contador = nuevo);
    },
  };
  return obj;
};

const ListaDeFuncionesInvitados = (arreglo, code) => {
  let funcionesInvitados = [];
  for (let i = 0; i < arreglo.length; i++) {
    let indice = arreglo[i];
    arreglo[i] = function (n) {
      if (n === code) {
        return indice;
      } else {
        return "código secreto: invalido";
      }
    };
  }
  funcionesInvitados = arreglo;
  return arreglo;
};

const armarListaDeInvitados = (arreglo, code) => {
  let listaOficial = [];
  for (let i = 0; i < arreglo.length; i++) {
    listaOficial.push(arreglo[i](code));
  }
  return listaOficial;
};
