import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/HomePage.vue'
import BooksIndex from '../pages/books/BooksIndex.vue'
import CategoriesIndex from '../pages/categories/CategoriesIndex.vue'
import CategoryDetails from '../pages/categories/CategoryDetails.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/books/:slug?',
        name: 'books',
        component: BooksIndex,
        props: true,
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoriesIndex,
    },
    {
        path: '/categories/:slug?',
        name: 'category',
        component: CategoryDetails,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
