import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import AboutView from "@/views/about/AboutView.vue";
import ContactsView from "@/views/contacts/ContactsView.vue";
import DeliveryView from "@/views/delivery/DeliveryView.vue";
import ServicesView from "@/views/services/ServicesView.vue";

const routerNames = {
    HomeView: HomeView,
    AboutView: AboutView,
    DeliveryView:DeliveryView,
    ServicesView: ServicesView,
    ContactsView: ContactsView,
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: routerNames.HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: routerNames.AboutView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: routerNames.ContactsView
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: routerNames.DeliveryView
    },
    {
      path: '/services',
      name: 'services',
      component: routerNames.ServicesView
    }
  ]
})

export default router
