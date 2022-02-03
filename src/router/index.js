import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/HomePage.vue'
import BooksIndex from '@/pages/books/BooksIndex'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/books/:id/edit',
        name: 'bookss',
        component: BooksIndex,
        props: true,
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
