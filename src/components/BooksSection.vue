<template>
    <div class="my-12">
        <div v-if="books.length > 0">
            <div>
                <h1
                    id="all-category"
                    class="text-right text-4xl text-gray-600 my-4"
                >
                    {{ section_title }}
                </h1>
            </div>
            <div
                class="
                    grid grid-cols-1
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-7
                    gap-6
                    my-2
                "
            >
                <div v-for="(book, index) in books" :key="book.id">
                    <!-- <div class=" bg-gray-100 flex items-center justify-center"> -->

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
                            w-5/6
                            sm:w-full
                            md:w-full
                            lg:w-full
                            xl:w-full
                            mx-auto
                        "
                    >
                        <div class="relative">
                            <div class="absolute flex m-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6"
                                    :class="
                                        book.isLiked == true
                                            ? 'text-orange-500'
                                            : 'text-gray-400'
                                    "
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    @click="
                                        likeDislikeThisBook(
                                            book.id,
                                            book.isLiked,
                                            index
                                        )
                                    "
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <label class="text-white mt-1 shadow-sm">{{
                                    book.likes > 0 ? book.likes : ''
                                }}</label>
                            </div>
                            <router-link
                                :to="{
                                    name: 'book',
                                    params: {
                                        slug: book.slug,
                                    },
                                }"
                            >
                                <img
                                    class="
                                        w-full
                                        h-96
                                        sm:h-64
                                        md:h-64
                                        lg:h-64
                                        xl:h-64
                                    "
                                    :src="
                                        APP_URL +
                                        '/images/books_images/' +
                                        book.book_image
                                    "
                                />
                            </router-link>
                        </div>
                        <router-link
                            :to="{
                                name: 'book',
                                params: {
                                    slug: book.slug,
                                },
                            }"
                        >
                            <div class="p-4">
                                <h1
                                    class="
                                        text-base
                                        font-bold
                                        cursor-pointer
                                        h-10
                                    "
                                >
                                    {{ book.title }}
                                </h1>
                                <p class="mt-2 font-sans text-gray-700">
                                    {{ book.author }}
                                </p>
                                <h1
                                    class="
                                        mt-1
                                        bg-slate-200
                                        text-lg
                                        font-bold
                                        rounded
                                        cursor-pointer
                                    "
                                >
                                    {{ book.price + ' د.ع ' }}
                                </h1>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-4xl py-14">لا توجد كُـتب</div>
    </div>
</template>
<script>
import { config } from '../../src/config'
import useBooks from '../composables/books'
export default {
    props: {
        books: {
            type: Array,
        },
        section_title: {
            default: '',
            type: String,
        },
    },
    setup(props) {
        let APP_URL = config.APP_URL
        const { likeDislikeBook, getBooks } = useBooks()
        const likeDislikeThisBook = async (id, isLiked, idx) => {
            try {
                props.books[idx].isLiked = !props.books[idx].isLiked
            } catch (error) {
                console.log(error)
            }
            await likeDislikeBook(id, isLiked)
        }

        return { APP_URL, likeDislikeThisBook }
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