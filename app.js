function formata_calculo(lista_valores) {
  return lista_valores.join(' -> ');
}

/* --------------Calcula medida-------------- */
const nome = $('#nome');
const campo_a = $('#campo_a');
const campo_b = $('#campo_b');
const campo_c = $('#campo_c');
const resultado_calcula_medida = $('#resultado');
const calcular_calcula_medida = $('#calcular');
const limpar_calcula_medida = $('#limpar');
const ajuda_calcula_medida = $('#ajuda-calcula-medida');

/*
  --Exemplo--
  Nome => Tiger
  Campo A => 119
  Campo B => 200
  Campo C => 1
  Resultado => Tiger -> 1 -> 1.68 -> 2
*/

calcular_calcula_medida.click(function(event) {
  let valor_nome = nome.val();
  let valor_campo_a = campo_a.val();
  let valor_campo_b = campo_b.val();
  let valor_campo_c = campo_c.val();

  let valida_nome = valor_nome === '';
  let valida_campo_a = valor_campo_a === '';
  let valida_campo_b = valor_campo_b === '';
  let valida_campo_c = valor_campo_c === '';

  if (valida_nome || valida_campo_a || valida_campo_b || valida_campo_c) {
    resultado_calcula_medida.html('Campo vazio');
    return;
  }

  let resultado_calculo = calcula_medida(valor_campo_a, valor_campo_b, valor_campo_c);
  resultado_calcula_medida.html(formatador_final(valor_nome, valor_campo_c, resultado_calculo));

  campo_c.val('');
});

limpar_calcula_medida.click(function(event) {
  nome.val('');
  campo_a.val('');
  campo_b.val('');
  campo_c.val('');
  resultado_calcula_medida.html('0.0');
});

ajuda_calcula_medida.click(function(event) {
  $("#modal_ajuda_calcula_medida").modal("show");
});

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

/* --------------Perimetro do circulo-------------- */
const raio = $('#raio');
const resultado_perimetro_circulo = $('#resultado_perimetro_circulo');
const formulario_perimetro_circulo = $('#formulario_perimetro_circulo');
const limpar_perimetro_circulo = $('#limpar_perimetro_circulo');

formulario_perimetro_circulo.submit(function(event) {
  event.preventDefault();
  let valor_raio = raio.val();
  let resultado_calculo = perimetro_circulo(valor_raio);
  resultado_perimetro_circulo.html(resultado_calculo);
});

limpar_perimetro_circulo.click(function(event) {
  raio.val('');
  resultado_perimetro_circulo.html('0.0');
});

function perimetro_circulo(valor) {
  return (2 * Math.PI * valor);
}

/* --------------Teorema de pitagoras-------------- */
const cateto_1 = $('#cateto_1');
const cateto_2 = $('#cateto_2');
const hipotenusa = $('#hipotenusa');
const resultado_teorema_de_pitagoras = $('#resultado_teorema_de_pitagoras');
const formulario_teorema_de_pitagoras = $('#formulario_teorema_de_pitagoras');
const limpar_teorema_de_pitagoras = $('#limpar_teorema_de_pitagoras');

formulario_teorema_de_pitagoras.submit(function(event) {
  event.preventDefault();

  let valor_cateto_1 = cateto_1.val();
  let valor_cateto_2 = cateto_2.val();
  let valor_hipotenusa = hipotenusa.val();
  
  let resultado_calculo = teorema_de_pitagoras({
    hipotenusa: (valor_hipotenusa) ? valor_hipotenusa : 0,
    catetoA: (valor_cateto_1) ? valor_cateto_1 : 0,
    catetoB: (valor_cateto_2) ? valor_cateto_2 : 0,
  });

  resultado_teorema_de_pitagoras.html(resultado_calculo);
});

limpar_teorema_de_pitagoras.click(function(event) {
  cateto_1.val('');
  cateto_2.val('');
  hipotenusa.val('');
  resultado_teorema_de_pitagoras.html('0.0');
});

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
