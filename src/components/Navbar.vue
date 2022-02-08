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
                    bg-transparent
                "
            >
                <div class="p-4">
                    <div class="tracking-widest text-2xl font-bold">
                        <router-link
                            class="transition"
                            :to="{
                                path: '/',
                            }"
                            ><img
                                class="
                                    w-14
                                    rounded-full
                                    duration-500
                                    hover:shadow-2xl hover:w-16
                                "
                                src="/logo.jpg"
                                alt="Orshina"
                        /></router-link>
                    </div>
                </div>
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
                        class="mx-4 text-lg transition"
                    >
                        <router-link
                            class="
                                duration-500
                                cursor-pointer
                                border-b-2 border-transparent
                                text-orange-500
                                hover:text-orange-400
                                hover:border-b-2
                                hover:border-orange-400
                            "
                            :to="{
                                name: link.name,
                                params: { slug: link.slug },
                            }"
                            >{{ link.label }}</router-link
                        >
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
                <div class="p-2 flex flex-col text-right">
                    <div
                        v-for="(link, index) in links"
                        :key="index"
                        class="p-2 font-semibold hover:text-indigo-700"
                    >
                        <label
                            class="cursor-pointer text-orange-500"
                            @click="goToUrl(link)"
                            >{{ link.label }}</label
                        >
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
    { label: 'المؤلفون', name: 'authors', slug: '' },
    { label: 'تجريبي', name: 'test', slug: '' },
])
function goToUrl(link) {
    router.push({
        name: link.name,
        params: { slug: link.slug },
    })
}
</script>
<style>
.router-link-active {
    color: #fb923c !important;
    border-bottom-width: 2px;
    border-color: #fb923c !important;
}
</style>
