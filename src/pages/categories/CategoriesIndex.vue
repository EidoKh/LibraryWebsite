<template>
    <!-- component -->
    <div>
        <page-hero
            component_title="كل الفئات"
            @set_search="setValueToSearch($event)"
        />
        <div class="container mx-auto px-6 my-12">
            <categories-section :categories="categories" />
        </div>
        <!-- <div class="container mx-auto px-6 mt-12">
            <div>
                <div class="grid grid-cols-3 gap-4 my-2">
                    <div
                        v-for="category in categories"
                        :key="category"
                        class="relative overflow-hidden rounded"
                        style="height: 256px"
                    >
                        <a
                            class="st-link"
                            href="https://tourexpect.com/tour-packages/?location_id=10987"
                        >
                            <img
                                class="
                                    h-full
                                    w-full
                                    rounded
                                    block
                                    max-w-full
                                    brightness-75
                                    ease-in
                                    duration-300
                                    hover:scale-105
                                "
                                :src="
                                    APP_URL +
                                    '/images/categories_images/' +
                                    category.category_image
                                "
                            />
                        </a>
                        <div class="h-full">
                            <div
                                class="absolute top-1/2 left-1/2 text-center"
                                style="transform: translate(-50%, -50%)"
                            >
                                <a
                                    href="https://tourexpect.com/tour-packages/?location_id=10987"
                                    class="text-xl font-bold text-white"
                                >
                                    {{ category.category_name }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import PageHero from '../../components/PageHero.vue'
import CategoriesSection from '../../components/CategoriesSection.vue'
import useCategories from '../../composables/categories'
import { config } from '../../config'
export default {
    components: { PageHero, CategoriesSection },
    setup() {
        const { getCategories, categories } = useCategories()
        onMounted(() => {
            getCategories()
        })
        function setValueToSearch(word) {
            getCategories(word)
        }
        return { categories, APP_URL: config.APP_URL, setValueToSearch }
    },
}
</script>