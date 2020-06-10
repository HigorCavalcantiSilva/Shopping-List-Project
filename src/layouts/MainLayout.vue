<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ essentialLinks[0].title }}
        </q-toolbar-title>

        <div>App by Higor Hicker</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          O que você quer fazer?
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Shopping List',
          caption: 'Home Page',
          icon: 'home',
          link: '/#/'
        },
        {
          title: 'Seções de Produtos',
          caption: 'Escolha o que vai comprar',
          icon: 'list',
          link: '/#/list'
        },
        {
          title: 'Meu carrinho',
          caption: 'Vamos as Compras!',
          icon: 'shopping_cart',
          link: '/#/cart'
        }
      ]
    }
  }
}
</script>
