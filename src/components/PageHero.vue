<template>
    <header>
        <div
            class="w-full bg-center bg-cover h-96"
            style="background-image: url(/library.jpg)"
        >
            <div
                class="
                    flex
                    items-center
                    justify-center
                    w-full
                    h-full
                    bg-gray-900 bg-opacity-50
                "
            >
                <div class="text-center container mx-auto px-6 lg:w-1/2">
                    <h1
                        class="
                            text-2xl
                            font-semibold
                            text-white
                            uppercase
                            lg:text-3xl
                            mb-4
                        "
                    >
                        {{ component_title }}
                    </h1>
                    <!-- component 

                    <div
                        class="
                            flex
                            items-center
                            w-full
                            mx-auto
                            bg-white
                            rounded-r-lg rounded-l-3xl
                        "
                    >
                        <div class="w-full">
                            <input
                                v-model="search"
                                type="search"
                                class="
                                    w-full
                                    px-4
                                    py-1
                                    text-gray-800
                                    rounded-full
                                    focus:outline-none
                                "
                                placeholder="بحث"
                                @input="$emit('set_search', search)"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="
                                    flex
                                    items-center
                                    bg-blue-500
                                    justify-center
                                    w-12
                                    h-12
                                    text-white
                                    rounded-l-lg
                                "
                                :class="
                                    search.length > 0
                                        ? 'bg-purple-500'
                                        : 'bg-gray-500 cursor-not-allowed'
                                "
                                :disabled="search.length == 0"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    -->
                    <div class="relative mt-6 max-w-lg mx-auto">
                        <span
                            class="
                                absolute
                                inset-y-0
                                left-0
                                pl-3
                                flex
                                items-center
                            "
                        >
                            <svg
                                class="h-5 w-5 text-gray-500"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>

                        <input
                            v-model="search"
                            type="search"
                            class="
                                w-full
                                border
                                rounded-md
                                pl-10
                                pr-4
                                py-2
                                focus:border-blue-500
                                focus:outline-none
                                focus:shadow-outline
                            "
                            placeholder="بحث"
                            @input="$emit('set_search', search)"
                        />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { ref } from 'vue'
export default {
    props: {
        component_title: {
            type: String,
            default: 'Header',
        },
    },
    emits: ['set_search'],
    setup() {
        let search = ref('')

        return { search }
    },
}
</script>