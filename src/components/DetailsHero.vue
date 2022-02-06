<template>
    <header>
        <div
            class="w-full bg-center bg-cover h-96"
            :style="'background-image: url(' + component_bg + ');'"
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
                <div class="text-center w-full sm:w-1/3">
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
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    props: {
        component_title: {
            type: String,
            default: '',
        },
        component_bg: {
            type: String,
        },
    },
}
</script>