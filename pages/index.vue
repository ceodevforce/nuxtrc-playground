<script setup>
const { loading, kids, fetchKidsData } = useBucket()



const { data } = useAsyncData('class', () => $fetch('/api/class'))
console.log(data)
definePageMeta({
  title: 'Playground',
  layout: "default"
})
</script>
<template>
  <main>
    <h1>Home</h1>
  </main>
</template>