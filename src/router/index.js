import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/HomePage.vue'
import BooksIndex from '../pages/books/BooksIndex.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/books/:lang',
        name: 'books',
        component: BooksIndex,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
