
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
            <books-section :books="books" />
        </div>
    </div>
</template>

<script>
import { config } from '../../config'
import { onMounted, watch } from 'vue'
import useBooks from '../../composables/books'
import PageHero from '../../components/PageHero.vue'
import BooksSection from '../../components/BooksSection.vue'
export default {
    components: { PageHero, BooksSection },
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