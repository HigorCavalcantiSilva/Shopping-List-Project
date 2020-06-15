<template>

  <q-page class="flex flex-center">
    <q-btn
    style="margin-top: 15px"
    v-go-back=" '/list' "
    color="red"
    label="Voltar para Seções"
    />
    <h5 style="text-align: center">Clique nos produtos para adicioná-los ao carrinho</h5>
    <table class="shadow-5" style="width: 90%; margin-bottom: 30px">
        <thead>
            <tr>
                <th>Produtos</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(section, key) in list" :key="section.id">
              <td v-if="section.idi === id" style="text-align: center"><q-btn @click="addCart(section.id)" class="bg-blue-8" style="width: 100%; color: white"><q-icon name="add_shopping_cart" />{{ section.name }}</q-btn></td>
              <td v-if="section.idi === id" style="width: 30%; text-align: center">
                  <q-btn style="width: 50%" @click="edit(section.id)" color="yellow" glossy text-color="black" push icon="create" />
                  <q-btn style="width: 50%" @click="del(section.id, key)" color="red" glossy text-color="black" push icon="delete" />
              </td>
          </tr>
        </tbody>
    </table>
    <div style="width: 90%; margin-bottom: 20px">
      <q-input v-model="new_product" bottom-slots label="Adicione um produto" counter maxlength="30" dense="dense">
        <template v-slot:before>
          <q-icon name="library_add" />
        </template>

        <template v-slot:hint>
          Não coloque nome/marca de produtos
        </template>

        <template v-slot:append>
          <q-btn @click="add" round dense flat icon="add" />
        </template>
      </q-input>
    </div>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Edite o nome</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="edit_product" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat @click="editc" label="Confirmar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="q-pa-md q-gutter-sm">
      <q-dialog v-model="seamless" seamless position="bottom">
        <q-card style="width: 350px">
          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">Adicionado ao Carrinho</div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>

  </q-page>
</template>

<script>
class Actions {
  constructor (database) {
    this.database = database
  }

  addItem (newItem, idiItem) {
    var list = JSON.parse(localStorage.getItem('products'))
    if (newItem === '') {
      this.save(list)
      return
    }
    const l = list.length === 0 || list[list.length - 1].id == null ? 1 : list[list.length - 1].id
    list.push({ id: l + 1, idi: idiItem, name: newItem })
    this.save(list)
    return l + 1
  }

  repeat (init, end, list, id) {
    for (var c = init; c < end; c++) {
      if (list[c].id === id) {
        break
      }
    }
    return c
  }

  save (list) {
    localStorage.setItem(this.database, JSON.stringify(list))
  }
}
var db = localStorage.getItem('products')
if (db === '' || db === null || db === undefined) {
  db = '[]'
  localStorage.setItem('products', db)
}

export default {
  name: 'PageIndex',
  data: function () {
    const idi = this.$route.params.id
    var dborg = JSON.parse(db)
    var dborgf = []
    for (let a = 0; a < dborg.length; a++) {
      if (parseInt(dborg[a].idi) === parseInt(idi)) {
        dborgf.push(dborg[a])
      }
    }

    dborgf.sort(function (obj1, obj2) {
      return obj1.name < obj2.name ? -1 : (obj1.name > obj2.name ? 1 : 0)
    })

    return {
      id: idi,
      act: new Actions('products'),
      new_product: '',
      edit_product: '',
      c: 0,
      prompt: false,
      seamless: false,
      list: dborgf,
      prod: JSON.parse(localStorage.getItem('products'))
    }
  },
  methods: {
    del: function (id, k) {
      this.c = this.act.repeat(0, this.prod.length, this.prod, id)
      this.prod.splice(this.c, 1)
      this.list.splice(k, 1)
      this.act.save(this.prod)
      // Remover da lista
    },
    edit: function (id) {
      this.c = this.c = this.act.repeat(0, this.list.length, this.list, id)
      this.edit_product = this.list[this.c].name
      this.prompt = true
      // Editar Seção
    },
    editc: function () {
      this.list[this.c].name = this.edit_product.toUpperCase()
      this.act.addItem(this.list, '', '')
    },
    add: function () {
      if (this.new_product !== '') {
        var idis = this.act.addItem(this.new_product.toUpperCase(), this.id)
        this.list.push({ id: idis, idi: this.id, name: this.new_product.toUpperCase() })
        this.new_product = ''
      } else {
        alert('NÃO É POSSÍVEL ADICIONAR UMA SEÇÃO SEM NOME!')
      }
      // Adicionar Seção
    },
    addCart: function (id) {
      for (this.c = 0; this.c < this.list.length; this.c++) {
        if (this.list[this.c].id === id) {
          const cart = JSON.parse(localStorage.getItem('cart'))
          cart.push({ id: id, name: this.list[this.c].name })
          localStorage.setItem('cart', JSON.stringify(cart))
          break
        }
      }
      this.seamless = true
      setTimeout(() => { this.seamless = false }, 1000)
    }
  }
}

</script>
