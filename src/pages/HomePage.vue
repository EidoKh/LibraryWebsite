<template>
    <HomeHero />
    <div class="container mx-auto px-6 mt-12">
        <CategoriesSection title="الفئات المقترحة" :categories="categories" />
        <div
            class="
                text-right
                mt-1
                duration-500
                text-lg text-orange-500
                hover:text-orange-600 hover:text-xl
            "
        >
            <router-link :to="{ name: 'categories' }">كل الفئات</router-link>
        </div>
        <books-section
            section_title="الأكثر إعجابا"
            :books="most_liked_books"
        /><br />
        <books-section
            section_title="الأكثر طلبا"
            :books="most_liked_books"
        /><br />
        <books-section section_title="كتب جديدة" :books="most_liked_books" />
    </div>
    <router-link :to="{ name: 'books', props: { someUnrelatedVar: 'arabic' } }"
        >Places</router-link
    >
</template>
<script setup>
import HomeHero from '../components/HomeHero.vue'
import BooksSection from '../components/BooksSection.vue'
import CategoriesSection from '../components/CategoriesSection.vue'
import useCategories from '../composables/categories'
import useBooks from '../composables/books'
import { onMounted } from '@vue/runtime-core'
const { getRecommendedCategories, categories } = useCategories()
const { getMostLikedBooks, most_liked_books } = useBooks()
onMounted(() => {
    getRecommendedCategories()
    getMostLikedBooks()
})
</script>