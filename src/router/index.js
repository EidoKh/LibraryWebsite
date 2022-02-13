import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '/src/pages/HomePage.vue'
import BooksIndex from '../pages/books/BooksIndex.vue'
import CategoriesIndex from '../pages/categories/CategoriesIndex.vue'
import CategoryDetails from '../pages/categories/CategoryDetails.vue'
import BookDetails from '../pages/books/BookDetails.vue'
import AuthorsIndex from '../pages/authors/AuthorsIndex.vue'
import AuthorDetails from '../pages/authors/AuthorDetails.vue'
import OrderForm from '../pages/forms/OrderForm.vue'
import TestPage from '../pages/auth/Login.vue'

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
        // props: (route) => ({
        //     category_id: route.params.category_id,
        //     slug: route.params.slug,
        // }),
        props: true,
    },
    {
        path: '/book/:slug?',
        name: 'book',
        component: BookDetails,
        // props: (route) => ({
        //     book_id: route.params.book_id,
        //     slug: route.params.slug,
        // }),
        props: true,
    },
    {
        path: '/authors',
        name: 'authors',
        component: AuthorsIndex,
    },

    {
        path: '/authors/:slug?',
        name: 'author',
        component: AuthorDetails,
        // props: (route) => ({
        //     book_id: route.params.book_id,
        //     slug: route.params.slug,
        // }),
        props: true,
    },

    {
        path: '/book/:slug?/order',
        name: 'orderForm',
        component: OrderForm,
        // props: (route) => ({
        //     book_id: route.params.book_id,
        //     slug: route.params.slug,
        // }),
        props: true,
    },
    {
        path: '/test/:slug?',
        name: 'test',
        component: TestPage,
        // props: (route) => ({
        //     book_id: route.params.book_id,
        //     slug: route.params.slug,
        // }),
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
