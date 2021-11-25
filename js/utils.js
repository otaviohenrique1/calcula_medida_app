export function templateCalculo({ parametro1, parametro2, parametro3 }) {
  let parametro1Valor = parametro1;
  let parametro2Valor = parametro2.toFixed(2);
  let parametro3Valor = (Math.round(parametro3)).toFixed(2);
  let texto = `${parametro1Valor} -> ${parametro2Valor} -> ${parametro3Valor}`;
  return texto;
}

export function CalculaMedida({ campoA, campoB, campoC }) {
  let resultado = ((campoB * campoC) / campoA);
  let texto = templateCalculo({
    parametro1: campoC,
    parametro2: resultado,
    parametro3: resultado
  });
  return texto;
}

export function CalculaTeoremaPitagoras({ hipotenusa, catetoA, catetoB }) {
  let texto = '';
  if (hipotenusa === 0) {
    texto = calculoHipotenusa({ catetoA, catetoB });
  } else if (catetoA === 0) {
    texto = calculoCatetoA({ hipotenusa, catetoB });
  } else if (catetoB === 0) {
    texto = calculoCatetoB({ hipotenusa, catetoA });
  }
  return texto;
}

function calculoHipotenusa({ catetoA, catetoB }) {
  let titulo = 'Hipotenusa';
  let resultado = Math.sqrt((Math.pow(catetoA, 2) + Math.pow(catetoB, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  return texto;
}

function calculoCatetoA({ hipotenusa, catetoB }) {
  let titulo = 'Cateto A';
  let resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoB, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  return texto;
}

function calculoCatetoB({ hipotenusa, catetoA }) {
  let titulo = 'Cateto B';
  let resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoA, 2)));
  let texto = templateCalculo({
    parametro1: titulo,
    parametro2: resultado,
    parametro3: resultado
  });
  return texto;
}

export function CalculaPerimetroCirculo({ valor }) {
  let resultado = (2 * Math.PI * valor);
  let texto = templateCalculo({
    parametro1: valor,
    parametro2: resultado,
    parametro3: resultado
  });
  return texto;
}

export const ajudaPerimetroCirculo = [
  {
    titulo: 'Formula:',
    lista: [
      'p = 2 * pi * r'
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Perimetro => p',
      'pi => 3,1415...',
      'Raio => r',
    ],
  },
];

export const ajudaCalculaMedida = [
  {
    titulo: 'Formula:',
    lista: [
      'a -------- b',
      'c -------- x',
      'x = (b*c)/a',
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Resultado => x',
      'Campo A => a',
      'Campo B => b',
      'Campo C => c',
    ],
  },
];

export const ajudaTeoremaPitagoras = [
  {
    titulo: 'Formulas:',
    lista: [
      'Calculo da Hipotenusa =>',
      'h = r2(p2(ca) + p2(cb))',
      'Calculo do Cateto A =>',
      'ca = r2(p2(h) - p2(cb))',
      'Calculo do Cateto B =>',
      'cb = r2(p2(h) - p2(ca))',
    ],
  },
  {
    titulo: 'Legenda:',
    lista: [
      'Raiz 2 (Raiz Quadrada) => r2',
      'Potencia 2 (Quadrado) => p2',
      'Hipotenusa => h',
      'Cateto A => ca',
      'Cateto B => cb'
    ],
  },
];
