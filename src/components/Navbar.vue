<template>
    <div class="">
        <div>
            <nav
                id="nav"
                class="
                    fixed
                    inset-x-0
                    top-0
                    flex flex-row
                    justify-between
                    z-10
                    text-indigo-200
                    bg-transparent
                "
            >
                <div class="p-4">
                    <div class="tracking-widest text-2xl font-bold">
                        <router-link
                            class="
                                transition
                                duration-500
                                hover:text-indigo-500
                            "
                            :to="{
                                path: '/',
                            }"
                            >المكتبة</router-link
                        >
                    </div>
                </div>
                <!-- Nav Items Working on Tablet & Bigger Sceen -->
                <div
                    class="
                        p-4
                        hidden
                        md:flex
                        flex-row
                        justify-between
                        font-bold
                    "
                >
                    <div
                        v-for="(link, index) in links"
                        :key="index"
                        class="
                            mx-4
                            text-lg
                            border-b-2 border-transparent
                            hover:border-b-2 hover:border-indigo-300
                            transition
                            duration-500
                        "
                    >
                        <label class="cursor-pointer" @click="goToUrl(link)">{{
                            link.label
                        }}</label>
                    </div>
                </div>
                <!-- Burger Nav Button on Mobile -->
                <div
                    id="nav-open"
                    class="p-4 md:hidden"
                    @click="isOpen = !isOpen"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-menu"
                    >
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>
            </nav>
            <div
                v-show="isOpen"
                id="nav-opened"
                class="
                    fixed
                    left-0
                    right-0
                    bg-white
                    mx-2
                    mt-16
                    rounded-br rounded-bl
                    shadow
                    z-10
                "
            >
                <div class="p-2 divide-y divide-gray-600 flex flex-col">
                    <div
                        v-for="(link, index) in links"
                        :key="index"
                        class="p-2 font-semibold hover:text-indigo-700"
                    >
                        <label class="cursor-pointer" @click="goToUrl(link)">{{
                            link.label
                        }}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
const router = useRouter()

let isOpen = ref(false)
const links = reactive([
    { label: 'العربية', name: 'books', slug: 'arabic' },
    { label: 'الإنكليزية', name: 'books', slug: 'english' },
    { label: 'كوردي', name: 'books', slug: 'kurdish' },
    { label: 'كل الكتب', name: 'books', slug: '' },
    { label: 'الفئات', name: 'categories', slug: '' },
])
function goToUrl(link) {
    router.push({
        name: link.name,
        params: { slug: link.slug },
    })
}
</script>
