import { ref } from 'vue'
import axios from 'axios'
import { config } from '../config'

export default function useBooks() {
    const most_liked_books = ref([])
    const book = ref([])
    const errors = ref('')

    const getMostLikedBooks = async () => {
        let response = await axios.get(config.APP_URL + '/api/most-liked')
        most_liked_books.value = response.data.data
    }

    return {
        most_liked_books,
        book,
        errors,
        getMostLikedBooks,
    }
}
