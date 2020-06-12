import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/list.vue'
import Create from '../views/create.vue'
import Edit from '../views/edit.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/list'
  },
  {
    path: '/articles/create',
    name: 'create',
    component: Create
  },
  {
    path: '/articles/list',
    name: 'list',
    component: List
  },
  {
    path: '/articles/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router
