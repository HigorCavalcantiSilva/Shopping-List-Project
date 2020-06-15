<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          {{ $route.meta }}
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
          class="text-grey-8 bg-grey-4"
        >
          O que você quer fazer?
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <div style="position: absolute; bottom: 0; width: 100%;">
        <img style="width: 80px; margin-left: 50%; transform: translate(-50%)" src="../LOGO.png" alt="Logotipo">
        <p style="text-align: center" class="text-grey-6">App Version 2.0</p>
      </div>
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
