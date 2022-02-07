import { ref } from 'vue'
import axios from 'axios'
import { config } from '../config'

export default function useBooks() {
    const most_liked_books = ref([])
    const book = ref([])
    const errors = ref('')
    const books = ref([])

    const getMostLikedBooks = async () => {
        let response = await axios.get(config.APP_URL + '/api/most-liked')
        most_liked_books.value = response.data.data
    }
    const getBooks = async (lang = '', keyword = '') => {
        let response = await axios.get(
            `${config.APP_URL}/api/all_books?lang=${lang}&search=${keyword}`
        )
        books.value = response.data.data
    }
    const getCategoryBooks = async (category_id) => {
        let response = await axios.get(
            `${config.APP_URL}/api/category_books/${category_id}`
        )
        books.value = response.data.data
    }
    const getBook = async (slug) => {
        let response = await axios.get(
            `${config.APP_URL}/api/book_details/${slug}`
        )
        book.value = response.data.data[0]
    }

    return {
        most_liked_books,
        book,
        errors,
        getMostLikedBooks,
        getBooks,
        books,
        getCategoryBooks,
        getBook,
    }
}
