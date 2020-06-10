<template>
  <q-page class="flex flex-center">
    <h4 style="text-align: center">Partiu Compra!</h4>
    <q-btn @click="init_shop" style="width: 90%; height: 50px" color="green">INICIAR COMPRAS</q-btn>
    <table class="shadow-5" style="width: 90%">
        <thead>
            <tr>
                <th style="width: 5%">Status</th>
                <th>Minha Lista</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in list" :key="key">
              <td style="text-align: center"><q-btn @click="stts(key)" :color="color[key]" glossy text-color="white" push :icon="done[key]" /></td>
              <td style="text-align: center"><q-btn style="width: 100%;" color="blue">{{ item.name }}</q-btn></td>
              <td style="width: 10%; text-align: center">
                  <q-btn style="width: 100%" @click="del_prod(item.id, key)" color="red" glossy text-color="black" push icon="delete" />
              </td>
          </tr>
        </tbody>
    </table>
    <q-btn @click="confirm = true" style="width: 90%; height: 50px" color="red">FINALIZAR COMPRA</q-btn>

    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ msg }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          {{ msg2 }}
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="shop" color="primary" text-color="white" />
          <span class="q-ml-sm">Deseja Finalizar Sua Compra?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Não" color="red" v-close-popup />
          <q-btn @click="finish_shop" flat label="Sim" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
class Cart {
  setDB (dbName) {
    let db = localStorage.getItem(dbName)
    if (db === '' || db === null || db === undefined) {
      db = '[]'
      localStorage.setItem(dbName, db)
    }
  }

  getDB (dbName) {
    return localStorage.getItem(dbName)
  }

  setDoneColor (id, json, db) {
    var li = json
    li[id] = json[id]
    localStorage.setItem(db, JSON.stringify(json))
  }
}

var cart = new Cart()
cart.setDB('cart')
cart.setDB('cart_color')
cart.setDB('cart_done')

var db = cart.getDB('cart')
var dc = cart.getDB('cart_color')
var dd = cart.getDB('cart_done')

var dborg = JSON.parse(db)

dborg.sort(function (obj1, obj2) {
  return obj1.name < obj2.name ? -1 : (obj1.name > obj2.name ? 1 : 0)
})

export default {
  name: 'PageIndex',
  data: function () {
    return {
      color: JSON.parse(dc),
      done: JSON.parse(dd),
      list: dborg,
      i: 0,
      c: 0,
      icon: false,
      confirm: false,
      msg: '',
      msg2: '',
      test: 0
    }
  },
  methods: {
    stts: function (id) {
      if (localStorage.getItem('init_shop') !== '1') {
        this.icon = true
        return
      }
      // var lic, lid = []
      if (this.done[id] !== 'done') {
        this.done[id] = 'done'
        this.color[id] = 'green'
        cart.setDoneColor(id, this.color, 'cart_color')
        cart.setDoneColor(id, this.done, 'cart_done')
      } else {
        this.done[id] = 'clear'
        this.color[id] = 'red'
        cart.setDoneColor(id, this.color, 'cart_color')
        cart.setDoneColor(id, this.done, 'cart_done')
      }
      this.color = JSON.parse(localStorage.getItem('cart_color'))
      this.done = JSON.parse(localStorage.getItem('cart_done'))
    },
    init_shop: function () {
      if (localStorage.getItem('init_shop') === '1') {
        this.msg = 'SUA COMPRA JÁ FOI INICIADA!'
        this.msg2 = ''
        this.icon = true
        return
      }

      if (this.list.length === 0) {
        this.msg = 'INSIRA ITEMS NO CARRINHO ANTES DE INICIAR UMA COMPRA!'
        this.msg2 = ''
        this.icon = true
        return
      }
      localStorage.setItem('init_shop', '1')
      var sel = []
      var don = []
      for (let c = 0; c < this.list.length; c++) {
        sel.push('red')
        don.push('clear')
      }
      localStorage.setItem('cart_color', JSON.stringify(sel))
      localStorage.setItem('cart_done', JSON.stringify(don))
      this.color = JSON.parse(localStorage.getItem('cart_color'))
      this.done = JSON.parse(localStorage.getItem('cart_done'))
    },
    finish_shop: function () {
      this.test = 0
      if (localStorage.getItem('init_shop') !== '1') {
        this.msg = 'NÃO É POSSÍVEL EFETUAR ESSA OPERAÇÃO!'
        this.msg2 = 'Inicie a compra.'
        this.icon = true
        return
      }

      this.color.map(c => {
        if (c === 'red') {
          this.test++
        }
      })

      if (this.test > 0) {
        var r = confirm(`AINDA EXISTEM ${this.test} ITEMS QUE NÃO FORAM MARCADOS. DESEJA CONTINUAR?`)
        if (!r) {
          return
        }
      }

      localStorage.setItem('cart_color', '[]')
      localStorage.setItem('cart_done', '[]')
      this.color = ''
      this.done = ''
      localStorage.setItem('init_shop', '0')
      localStorage.setItem('cart', '[]')
      this.$router.go()
      // Finalizar Compra
    },
    del_prod: function (id, key) {
      for (this.c = 0; this.c < this.list.length; this.c++) {
        if (this.list[this.c].id === id) {
          break
        }
      }
      this.list.splice(this.c, 1)
      this.done.splice(key, 1)
      this.color.splice(key, 1)
      localStorage.setItem('cart', JSON.stringify(this.list))
      localStorage.setItem('cart_done', JSON.stringify(this.done))
      localStorage.setItem('cart_color', JSON.stringify(this.color))
    }
  }
}
</script>
