
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue'), meta: 'Shopping List' },
      { path: 'list', component: () => import('pages/List.vue'), meta: 'Seções' },
      { path: 'cart', component: () => import('pages/Cart.vue'), meta: 'Carrinho' },
      { path: 'products/:id', component: () => import('pages/Products.vue'), meta: 'Produtos' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../pages/Error404.vue')
  })
}

export default routes
