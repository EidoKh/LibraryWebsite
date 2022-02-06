<template>
    <HomeHero />
    <div class="container mx-auto px-6 mt-12">
        <recommended-categories :categories="categories" />
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
import HomeHero from '../components/Hero.vue'
import BooksSection from '../components/BooksSection.vue'
import RecommendedCategories from '../components/RecommendedCategories.vue'
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