import { useApp, userRoutes, dashboardRoutes, defineOptions, AeriaMain } from 'waltz-ui'
import waltzPtbr from '@waltz-ui/i18n-ptbr'

import '@waltz-ui/ui/style.css'
import 'aeria-app-layout/style.css'
import './style/main.css'
import './style/main.less'
import './pages/search.vue'

import { AuthWall } from 'aeria-app-layout'
import DashboardLayout from './pages/_dashboard.vue'

const options = defineOptions({
  component: AeriaMain,
  dashboardComponent: DashboardLayout,
  routes: [
    userRoutes(() => AuthWall),
    dashboardRoutes(() => DashboardLayout),
  ],
  i18n: {
    locale: 'pt_BR',
    messages: {
      pt_BR: waltzPtbr
    }
  },
  menuSchema: [
    '/dashboard/pizza',
    '/dashboard/user',
    '/dashboard/animal',
    '/dashboard/person',
    '/dashboard/checkin',
    '/dashboard/geolocation',
    

  ]
})

useApp(options).then((app) => {
  app.mount()
})
