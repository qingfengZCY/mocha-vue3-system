import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/comp',
    name: 'comp',
    meta: {
      title: 'components',
      icon: 'ep-goods',
      order: 3
    },
    redirect: '/comp/table',
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {
          title: 'table'
        },
        redirect: '/comp/table/basic',
        children: [
          {
            path: 'basic',
            name: 'basicTable',
            meta: {
              title: 'basicTable'
            },
            component: () => import('~/views/comp/table/basicTable/index.vue')
          },
          {
            path: 'seniorSearch',
            name: 'seniorSearch',
            meta: {
              title: 'seniorSearch'
            },
            component: () => import('~/views/comp/table/seniorSearchTable/index.vue')
          },
          {
            path: 'acrossTable',
            name: 'acrossTable',
            meta: {
              title: 'accrossTable'
            },
            component: () => import('~/views/comp/table/acrossTable/index.vue')
          }
        ]
      },
      {
        path: 'form',
        name: 'form',
        meta: {
          title: 'form'
        },
        children: [
          {
            path: 'basic',
            name: 'basicForm',
            meta: {
              title: 'basicForm'
            },
            component: () => import('~/views/comp/form/BasicForm.vue')
          }
        ]
      },
      {
        path: 'upload',
        name: 'upload',
        meta: {
          title: 'upload',
          permiss: '6',
          icon: 'ep-upload'
        },
        component: () => import(/* webpackChunkName: "upload" */ '~/views/comp/upload/upload.vue')
      },
      {
        path: 'icon',
        name: 'icon',
        meta: {
          title: 'icons',
          permiss: '10',
          icon: 'ep-sunrise'
        },
        component: () => import(/* webpackChunkName: "icon" */ '~/views/feat/icons/index.vue')
      },
      {
        path: 'svg',
        name: 'svg',
        meta: {
          title: 'svg',
          permiss: '10',
          icon: 'ep-sunrise'
        },
        component: () => import(/* webpackChunkName: "icon" */ '~/views/comp/svg/index.vue')
      },
      {
        path: 'canvas',
        name: 'canvas',
        meta: {
          title: 'canvas',
          permiss: '10'
        },
        component: () => import(/* webpackChunkName: "icon" */ '~/views/comp/canvas/index.vue')
      }
    ]
  }
]

export default routes
