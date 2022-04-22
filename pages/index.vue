<script setup>
const { loading, kids, fetchKidsData } = useBucket()
console.log(loading)
console.log('Kids Array', kids)
definePageMeta({
  title: 'Playground',
  layout: "admin"
})
</script>
<template>
  <main>
    <h1>Home</h1>
  </main>
</template>