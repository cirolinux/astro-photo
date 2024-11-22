
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'deep', component: () => import('pages/PageDeepSky.vue') },
      { path: 'planetary', component: () => import('pages/PagePlanetary.vue') },
      { path: 'camere', component: () => import('pages/PageCamere.vue') },
      { path: 'telescope', component: () => import('pages/PageTelescope.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
