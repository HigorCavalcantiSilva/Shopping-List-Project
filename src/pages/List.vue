<template>
  <q-page class="flex flex-center">
    <h5 style="text-align: center">Escolha uma Seção de Produtos</h5>
    <table class="shadow-5" style="width: 90%; margin-bottom: 30px">
        <thead>
            <tr>
                <th>Seções</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="section in list" :key="section.id">
              <td style="text-align: center"><a @click="link(section.id)"><q-btn color="blue" style="width: 100%">{{ section.name }}</q-btn></a></td>
              <td style="width: 30%; text-align: center">
                  <q-btn style="width: 50%" @click="edit(section.id)" color="yellow" glossy text-color="black" push icon="create" />
                  <q-btn style="width: 50%" @click="del(section.id)" color="red" glossy text-color="black" push icon="delete" />
              </td>
          </tr>
        </tbody>
    </table>
    <div style="width: 90%; margin-bottom: 20px">
      <q-input v-model="new_section" bottom-slots label="Adicione uma seção" counter maxlength="12" dense="dense">
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
          <q-input dense v-model="edit_section" autofocus @keyup.enter="prompt = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat @click="editc" label="Confirmar" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
class Actions {
  constructor (database) {
    this.database = database
  }

  addItem (list, newItem) {
    if (newItem === '') {
      this.save(list)
      return
    }
    const l = list.length === 0 || list[list.length - 1].id == null ? 1 : list[list.length - 1].id
    list.push({ id: l + 1, name: newItem })
    this.save(list)
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
var db = localStorage.getItem('sections')
if (db === '' || db === null || db === undefined) {
  db = '[]'
  localStorage.setItem('sections', db)
}

var dborg = JSON.parse(db)

dborg.sort(function (obj1, obj2) {
  return obj1.name < obj2.name ? -1 : (obj1.name > obj2.name ? 1 : 0)
})

export default {
  name: 'PageIndex',
  data: function () {
    return {
      done: '',
      act: new Actions('sections'),
      color: 'red',
      new_section: '',
      edit_section: '',
      c: 0,
      prompt: false,
      list: dborg
    }
  },
  methods: {
    del: function (id) {
      this.c = this.act.repeat(0, this.list.length, this.list, id)
      this.list.splice(this.c, 1)
      this.act.save(this.list)
      // Remover da lista
    },
    edit: function (id) {
      this.c = this.c = this.act.repeat(0, this.list.length, this.list, id)
      this.edit_section = this.list[this.c].name
      this.prompt = true
      // Editar Seção
    },
    editc: function () {
      this.list[this.c].name = this.edit_section.toUpperCase()
      this.act.addItem(this.list, '')
    },
    add: function () {
      if (this.new_section !== '') {
        this.act.addItem(this.list, this.new_section.toUpperCase())
        this.new_section = ''
      } else {
        alert('NÃO É POSSÍVEL ADICIONAR UMA SEÇÃO SEM NOME!')
      }
      // Adicionar Seção
    },
    link: function (id) {
      location.href = `#/products?id=${id}&conf=NO`
      this.$router.go(`#/products?id=${id}&conf=NO`)
    }
  }
}
</script>
