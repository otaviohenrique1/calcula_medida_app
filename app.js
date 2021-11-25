const nome = $('#nome');
const campo_a = $('#campo_a');
const campo_b = $('#campo_b');
const campo_c = $('#campo_c');
const resultado = $('#resultado');
const calcular = $('#calcular');
const limpar = $('#limpar');
const ajuda = $('#ajuda');

/*
  --Exemplo--
  Nome => Tiger
  Campo A => 119
  Campo B => 200
  Campo C => 1
  Resultado => Tiger -> 1 -> 1.68 -> 2
*/

calcular.click(function (event) {
  let valor_nome = nome.val();
  let valor_campo_a = campo_a.val();
  let valor_campo_b = campo_b.val();
  let valor_campo_c = campo_c.val();

  let valida_nome = valor_nome === '';
  let valida_campo_a = valor_campo_a === '';
  let valida_campo_b = valor_campo_b === '';
  let valida_campo_c = valor_campo_c === '';

  if (valida_nome || valida_campo_a || valida_campo_b || valida_campo_c) {
    resultado.html('Campo vazio');
    return;
  }

  let resultado_calculo = calcula_medida(valor_campo_a, valor_campo_b, valor_campo_c);
  resultado.html(formatador_final(valor_nome, valor_campo_c, resultado_calculo));

  campo_c.val('');
});

limpar.click(function (event) {
  nome.val('');
  campo_a.val('');
  campo_b.val('');
  campo_c.val('');
  resultado.html('0.0');
});

ajuda.click(function (event) {
  $("#modal_ajuda").modal("show");
});

function formata_calculo(lista_valores) {
  return lista_valores.join(' -> ');
}

function formatador_final(nome, valor_campo_c, resultado) {
  let lista_valores = [];
  lista_valores[0] = nome;
  lista_valores[1] = parseFloat(valor_campo_c).toString();
  lista_valores[2] = resultado.toFixed(2);
  lista_valores[3] = Math.round(resultado).toFixed(2);
  return formata_calculo(lista_valores);
}


function calcula_medida(campo_a, campo_b, campo_c) {
  // a-b
  // c-x
  // x = (b*c)/a
  return (parseFloat(campo_b) * parseFloat(campo_c)) / parseFloat(campo_a);
}

function perimetro_circulo(valor) {
  return (2 * Math.PI * valor);
}

function teorema_de_pitagoras({ hipotenusa, catetoA, catetoB }) {
  let texto = '';
  let resultado = 0;
  let titulo = '';
  if (hipotenusa === 0) {
    titulo = 'Hipotenusa';
    resultado = Math.sqrt((Math.pow(catetoA, 2) + Math.pow(catetoB, 2)));
    texto = formata_calculo([titulo, resultado]);
  } else if (catetoA === 0) {
    titulo = 'Cateto A';
    resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoB, 2)))
    texto = formata_calculo([titulo, resultado]);
  } else if (catetoB === 0) {
    titulo = 'Cateto B';
    resultado = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoA, 2)))
    texto = formata_calculo([titulo, resultado]);
  }
  return texto;
}
