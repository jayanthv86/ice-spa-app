import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from '@/components/Error'
import Promo from '@/components/Promo'
import Profile from '@/components/Profile'
import LoginForm from '@/components/LoginForm'
import Admin from '@/components/Admin'
import Registration from '@/components/Registration'
import LoginOkta from '@/components/LoginOkta'
import { validateAccess, logout, redirect, redirectOkta, loginOkta } from '../auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //Public pages
    { path: '*', redirect: '/home'}, //redirect to make sure you land in a page
    { path: '/home', component: Home}, //home page
    { path: '/loginform', component: LoginForm},
    { path: '/error', component: Error},
    //Private pages (displayed only user access is validated)
    { path: '/premium-promos', beforeEnter: validateAccess, component: Promo},
    { path: '/profile', beforeEnter: validateAccess, component: Profile},
    //Functions without page
    { path: '/login', component: loginOkta },
    { path: '/logout', component: logout },
    { path: '/redirect', component: redirect },//calls redirect() to extract tokens
    { path: '/admin', beforeEnter: validateAccess, component: Admin},
    { path: '/registration', component: Registration },
    { path: '/loginOkta', component: LoginOkta },
    //{ path: '/applications', component: Application }
  ]
})
