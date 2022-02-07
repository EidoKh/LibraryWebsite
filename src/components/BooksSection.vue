<template>
    <div class="my-12">
        <div>
            <h1
                id="all-category"
                class="text-right text-5xl text-gray-600 my-4"
            >
                {{ section_title }}
            </h1>
        </div>
        <div
            class="
                grid grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-6
                my-2
            "
        >
            <div v-for="book in books" :key="book">
                <!-- <div class=" bg-gray-100 flex items-center justify-center"> -->
                <router-link
                    :to="{
                        name: 'book',
                        params: {
                            slug: book.slug,
                        },
                    }"
                >
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
                        <div class="p-4">
                            <!-- <span
                                  class="
                    bg-red-500
                    py-2
                    px-4
                    text-sm
                    font-semibold
                    text-white
                    rounded-full
                    cursor-pointer
                                  "
                                  >-30% Sale</span
                                > -->
                            <h1
                                class="
                                    mt-4
                                    text-lg
                                    font-bold
                                    cursor-pointer
                                    h-16
                                "
                            >
                                {{ book.title }}
                            </h1>
                            <p class="mt-2 font-sans text-gray-700">
                                {{ book.author }}
                            </p>
                            <h1 class="mt-4 text-lg font-bold cursor-pointer">
                                {{ book.price + ' د.ع ' }}
                            </h1>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { config } from '../../src/config'
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
    setup() {
        let APP_URL = config.APP_URL
        return { APP_URL }
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