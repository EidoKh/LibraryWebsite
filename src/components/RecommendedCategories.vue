<template>
    <div>
        <div>
            <h1
                id="all-category"
                class="text-right text-5xl text-gray-600 my-4"
            >
                الفئات المقترحة
            </h1>
        </div>
        <div class="grid grid-cols-3 gap-4 my-2">
            <div
                class="relative overflow-hidden rounded"
                style="height: 256px"
                v-for="category in categories"
                :key="category"
            >
                <router-link
                    :to="{ name: 'category', params: { slug: category.id } }"
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
                    <div class="h-full">
                        <div
                            class="absolute top-1/2 left-1/2 text-center"
                            style="transform: translate(-50%, -50%)"
                        >
                            <label class="text-xl font-bold text-white">
                                {{ category.category_name }}
                            </label>
                        </div>
                    </div></router-link
                >
            </div>
            <!--  -->
        </div>
    </div>
</template>
<script >
import { config } from '../../src/config'
export default {
    props: {
        categories: {
            default: null,
            type: Array,
        },
    },
    setup() {
        let APP_URL = config.APP_URL
        return { APP_URL }
    },
}
</script>
 