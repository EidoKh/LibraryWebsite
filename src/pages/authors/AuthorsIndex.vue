<template>
    <div>
        <page-hero
            component_title="كل المؤلفين"
            @set_search="setValueToSearch($event)"
        />
        <div class="container mx-auto px-6 my-12">
            <author-section :authors="authors" />
        </div>
    </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import useAuthors from '../../composables/authors'
import AuthorSection from '../../components/AuthorSection.vue'
import PageHero from '../../components/PageHero.vue'
export default {
    components: { AuthorSection, PageHero },
    setup() {
        const { getAuthors, authors } = useAuthors()
        onMounted(() => {
            getAuthors()
        })
        function setValueToSearch(word) {
            getAuthors(word)
        }
        return { authors, setValueToSearch }
    },
}
</script>