
<template>
    <div>
        <PageHero
            :component_title="
                slug === 'english'
                    ? 'الكتب ألأنكليزية'
                    : slug === 'arabic'
                    ? 'الكتب العربية'
                    : slug === 'kurdish'
                    ? 'الكتب الكردية'
                    : 'جميع الكتب'
            "
            @set_search="setValueToSearch($event)"
        />
        <div class="container mx-auto px-6 my-12">
            <div v-if="books.length" class="grid grid-cols-5 gap-4 my-2">
                <div v-for="book in books" :key="book">
                    <div
                        class="
                            bg-white
                            rounded-xl
                            overflow-hidden
                            shadow-xl
                            hover:scale-105 hover:shadow-2xl
                            transform
                            duration-500
                            cursor-pointer
                        "
                    >
                        <div class="p-4">
                            <h1
                                class="
                                    mt-4
                                    text-lg
                                    font-bold
                                    hover:underline
                                    cursor-pointer
                                "
                            >
                                {{ book.title }}
                            </h1>
                            <p class="mt-2 font-sans text-gray-700">
                                {{ book.author }}
                            </p>
                        </div>
                        <div class="relative">
                            <img
                                class="w-full h-96"
                                :src="
                                    APP_URL +
                                    '/images/books_images/' +
                                    book.book_image
                                "
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <h2 class="text-xl">ليس هناك نتائج مطابقة</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { config } from '../../config'
import { onMounted, watch } from 'vue'
import useBooks from '../../composables/books'
import PageHero from '../../components/PageHero.vue'
export default {
    components: { PageHero },
    props: {
        slug: {
            default: '',
            type: String,
        },
    },
    setup(props) {
        const { getBooks, books } = useBooks()
        onMounted(() => {
            getBooks(props.slug)
        })
        watch(
            () => props.slug,
            () => {
                getBooks(props.slug)
            }
        )
        function setValueToSearch(word) {
            getBooks(props.slug, word)
        }
        return { books, setValueToSearch, APP_URL: config.APP_URL }
    },
}
</script>
<style>
.box {
    background-color: #1e1e26;
    border-radius: 10px;
    box-shadow: 2px 10px 12px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 20px 10px;
}
.model {
    height: 350px;
    max-height: 100%;
    max-width: 100%;
}
.details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
}
.details p {
    font-family: calibri;
    font-weight: bold;
    color: #6a6a74;
    text-align: center;
    margin-top: 20px;
}
.marvel {
    color: #32323e;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: bebas kai;
    font-size: 25px;
}
.logo {
    height: 60px;
}
.box:hover {
    background-color: #17171d;
    transform-style: preserve-3d;
    transform: scale(1.02);
    transition: all ease 0.3s;
}
.box:hover .marvel {
    color: #c0292b;
    transition: all ease 0.5s;
}
/*--responsive for mobile phone--*/
@media (max-width: 720px) {
    .box {
        width: 94%;
        height: 500px;
    }
    .model {
        height: 250px;
    }
    .details p {
        font-size: 16px;
        width: 250px;
    }
}
</style>