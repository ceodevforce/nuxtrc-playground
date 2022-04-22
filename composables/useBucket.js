export const useBucket = () => {
    const loading = ref(false)
    const kids = ref([])
    const fetchKidsData = async () => {
        loading.value = true
        // API

        const { data } = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!data) {
            throw new Error()
        }
        kids.value = data
    }

    return {
        loading,
        kids,
        fetchKidsData
    }
}