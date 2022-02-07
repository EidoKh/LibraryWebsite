<template>
    <div>
        <details-hero
            :component_title="category.category_name"
            :component_bg="
                APP_URL + '/images/categories_images/' + category.category_image
            "
        />
        <div class="container mx-auto px-6 mt-12">
            <books-section :books="books" />
        </div>
    </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import useCategories from '../../composables/categories'
import useBooks from '../../composables/books'
import DetailsHero from '../../components/DetailsHero.vue'
import { config } from '../../config'
import BooksSection from '../../components/BooksSection.vue'
export default {
    components: { DetailsHero, BooksSection },
    props: {
        slug: {
            default: 'category',
            type: String,
        },
    },
    setup(props) {
        const { getCategory, category } = useCategories()
        const { getCategoryBooks, books } = useBooks()
        onMounted(async () => {
            await getCategory(props.slug)
            getCategoryBooks(category.value.id)
        })
        return { category, APP_URL: config.APP_URL, books }
    },
}
</script>