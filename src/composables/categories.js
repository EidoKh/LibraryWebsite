import { ref } from 'vue'
import axios from 'axios'
import { config } from '../../src/config'

export default function useCategories() {
    const categories = ref([])
    const category = ref([])
    const errors = ref('')

    const getCategories = async (keyword = '') => {
        let response = await axios.get(
            `${config.APP_URL}/api/all-categories?search=${keyword}`
        )
        categories.value = response.data.data
    }
    const getRecommendedCategories = async () => {
        let response = await axios.get(
            config.APP_URL + '/api/random-categories'
        )
        categories.value = response.data.data
    }
    const getCategory = async (slug) => {
        let response = await axios.get(
            `${config.APP_URL}/api/all-categories/${slug}`
        )
        category.value = response.data.data[0]
    }

    return {
        categories,
        category,
        errors,
        getCategories,
        getRecommendedCategories,
        getCategory,
    }
}
