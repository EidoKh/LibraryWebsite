import { ref } from 'vue'
import axios from 'axios'
import { config } from '../../src/config'

export default function useAuthors() {
    const authors = ref([])
    const author = ref([])
    const author_books = ref([])
    const errors = ref('')

    const getAuthors = async (keyword = '') => {
        let response = await axios.get(
            `${config.APP_URL}/api/all-authors?search=${keyword}`
        )
        authors.value = response.data.data
    }
    const getAuthor = async (slug) => {
        let response = await axios.get(
            `${config.APP_URL}/api/all-authors/${slug}`
        )
        console.log(response.data.data)
        author.value = response.data.data
    }
    const getAuthorBooks = async (author_id) => {
        let response = await axios.get(
            `${config.APP_URL}/api/author_books/${author_id}`
        )
        author_books.value = response.data.data
    }

    return {
        authors,
        author,
        errors,
        getAuthors,
        getAuthor,
        getAuthorBooks,
        author_books,
    }
}
