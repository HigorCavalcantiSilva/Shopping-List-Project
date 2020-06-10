<template>
  <q-page class="flex flex-center">
  <div>
    <img
      style="width: 180px; margin-left: 50%; transform: translate(-50%); margin-top: 15px"
      alt="Cart Logo"
      src="~assets/cart.png"
    >
    <div style="text-align: center;">
      <h3>Controle de Compras</h3>
      <h6 style="margin-bottom: 0">Cansado de esquecer de algo quando vai ao supermercado?</h6>
      <h6 style="margin-top: 0">Esse app vai te ajudar para que isso não aconteça!😉</h6>
    </div>
  </div>
  </q-page>
</template>

<script>
var db1 = localStorage.getItem('sections')
var db2 = localStorage.getItem('products')
if ((db1 === '' || db1 === null || db1 === undefined) && (db2 === '' || db2 === null || db2 === undefined)) {
  var secs = [
    { id: '1', name: 'ALIMENTOS' },
    { id: '2', name: 'BEBIDAS' },
    { id: '3', name: 'CEREAIS/PÓ' },
    { id: '4', name: 'MATERIAL DE LIMPEZA' },
    { id: '5', name: 'MATERIAL DE HIGIENE' },
    { id: '6', name: 'FRIOS/LATICÍNIOS' },
    { id: '7', name: 'FRUTAS' },
    { id: '8', name: 'VERDURAS/LEGUMES' }
  ]
  var prods = [
    { id: '1', idi: '1', name: 'CARNE' },
    { id: '2', idi: '1', name: 'FRANGO' },
    { id: '3', idi: '1', name: 'LINGUIÇA' },
    { id: '4', idi: '1', name: 'PEIXE' },
    { id: '5', idi: '1', name: 'ARROZ' },
    { id: '6', idi: '1', name: 'FEIJÃO' },
    { id: '54', idi: '1', name: 'SARDINHA' },
    { id: '55', idi: '1', name: 'ATUM' },
    { id: '56', idi: '1', name: 'MILHO' },
    { id: '57', idi: '1', name: 'ERVILHA' },
    { id: '58', idi: '1', name: 'LEITE CONDENSADO' },
    { id: '59', idi: '1', name: 'AZEITE DE OLIVA' },
    { id: '85', idi: '1', name: 'ALHO' },
    { id: '15', idi: '1', name: 'SALSICHA' },
    { id: '7', idi: '1', name: 'MACARRÃO' },
    { id: '8', idi: '1', name: 'PÃO' },
    { id: '9', idi: '1', name: 'PIZZA' },
    { id: '10', idi: '2', name: 'REFRIGERANTE' },
    { id: '11', idi: '2', name: 'ÁGUA' },
    { id: '12', idi: '2', name: 'SUCO' },
    { id: '13', idi: '2', name: 'CERVEJA' },
    { id: '53', idi: '2', name: 'LEITE' },
    { id: '14', idi: '2', name: 'VINHO' },
    { id: '16', idi: '3', name: 'ACHOCOLATADO' },
    { id: '17', idi: '3', name: 'SUCRILHOS' },
    { id: '18', idi: '3', name: 'FARINHA DE TRIGO' },
    { id: '19', idi: '3', name: 'BOLO' },
    { id: '20', idi: '3', name: 'FAROFA' },
    { id: '21', idi: '3', name: 'AÇUCAR' },
    { id: '22', idi: '3', name: 'SAL' },
    { id: '23', idi: '3', name: 'AVEIA' },
    { id: '24', idi: '3', name: 'ORÉGANO' },
    { id: '25', idi: '4', name: 'DETERGENTE' },
    { id: '26', idi: '4', name: 'SABÃO EM PÓ' },
    { id: '27', idi: '4', name: 'SABÃO' },
    { id: '28', idi: '4', name: 'DESINFETANTE' },
    { id: '29', idi: '4', name: 'AMACIANTE' },
    { id: '30', idi: '4', name: 'ÁGUA SANITÁRIA(QBOA)' },
    { id: '31', idi: '4', name: 'SACO DE LIXO' },
    { id: '32', idi: '4', name: 'BOMBRIL' },
    { id: '33', idi: '4', name: 'BALDE' },
    { id: '34', idi: '4', name: 'VASSOURA' },
    { id: '35', idi: '4', name: 'RODO' },
    { id: '36', idi: '4', name: 'FLANELA' },
    { id: '40', idi: '4', name: 'ESPONJA' },
    { id: '37', idi: '5', name: 'CREME DENTAL' },
    { id: '38', idi: '5', name: 'ESCOVA DE DENTE' },
    { id: '39', idi: '5', name: 'SHAMPOO' },
    { id: '41', idi: '5', name: 'PAPEL HIGIÊNICO' },
    { id: '42', idi: '5', name: 'CONDICIONADOR' },
    { id: '43', idi: '5', name: 'PERFUME' },
    { id: '44', idi: '5', name: 'DESODORANTE' },
    { id: '45', idi: '5', name: 'PENTE' },
    { id: '46', idi: '6', name: 'QUEIJO' },
    { id: '47', idi: '6', name: 'PRESUNTO' },
    { id: '48', idi: '6', name: 'MORTADELA' },
    { id: '49', idi: '6', name: 'PEITO DE PERU' },
    { id: '50', idi: '6', name: 'MANTEIGA' },
    { id: '51', idi: '6', name: 'IOGURTE' },
    { id: '52', idi: '6', name: 'REQUEIJÃO' },
    { id: '60', idi: '7', name: 'MAÇÃ' },
    { id: '61', idi: '7', name: 'UVA' },
    { id: '62', idi: '7', name: 'PERA' },
    { id: '63', idi: '7', name: 'BANANA' },
    { id: '64', idi: '7', name: 'ACEROLA' },
    { id: '65', idi: '7', name: 'AMEIXA' },
    { id: '66', idi: '7', name: 'ABACATE' },
    { id: '67', idi: '7', name: 'ABACAXI' },
    { id: '68', idi: '7', name: 'CAQUI' },
    { id: '69', idi: '7', name: 'JACA' },
    { id: '70', idi: '7', name: 'MELÃO' },
    { id: '71', idi: '7', name: 'MELANCIA' },
    { id: '72', idi: '7', name: 'LARANJA' },
    { id: '73', idi: '7', name: 'PÊSSEGO' },
    { id: '74', idi: '7', name: 'GOIABA' },
    { id: '75', idi: '7', name: 'LIMÃO' },
    { id: '76', idi: '8', name: 'ALFACE' },
    { id: '77', idi: '8', name: 'AGRIÃO' },
    { id: '78', idi: '8', name: 'COUVE-FLOR' },
    { id: '79', idi: '8', name: 'BRÓCOLIS' },
    { id: '80', idi: '8', name: 'TOMATE' },
    { id: '81', idi: '8', name: 'CEBOLA' },
    { id: '82', idi: '8', name: 'PIMENTÃO' },
    { id: '83', idi: '8', name: 'BATATA' },
    { id: '84', idi: '8', name: 'BATATA-DOCE' },
    { id: '86', idi: '1', name: 'ÓLEO' }
  ]

  localStorage.setItem('sections', JSON.stringify(secs))
  localStorage.setItem('products', JSON.stringify(prods))
  localStorage.setItem('cart', '[]')
}
export default {
  name: 'PageIndex',
  page: 'Shopping List'
}
</script>
