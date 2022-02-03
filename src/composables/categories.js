import { ref } from 'vue'
import axios from 'axios'
import { config } from '../../src/config'

export default function useCategories() {
    const categories = ref([])
    const category = ref([])
    const errors = ref('')

    const getCategories = async () => {
        let response = await axios.get(
            config.APP_URL + '/api/random-categories'
        )
        categories.value = response.data.data
    }

    return {
        categories,
        category,
        errors,
        getCategories,
    }
}
