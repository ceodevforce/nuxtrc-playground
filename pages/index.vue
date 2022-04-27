<script setup>
// const { loading, kids, fetchKidsData } = useBucket()
const loading = ref(false)
const { data, pending, error, refresh } = await useAsyncData(
  'course',
  () => $fetch('/api/class')
)
const results = reactive(data)

console.log(results)

const client = useSupabaseClient()

definePageMeta({
  title: 'Playground',
  layout: "default"
})
</script>
<template>
  <main>
    <h1>Home: {{ results.message}}</h1>
    <div v-for="item in data">
      <p>Cousework</p>
    </div>
  </main>
</template>