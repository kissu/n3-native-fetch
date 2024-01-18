<template>
  <button @click="tryTest">call dat server route</button>
</template>

<script setup>
const { data: test, refresh: testRefresh } = await useFetch('/api/netlify-context')

async function tryTest() {
  await testRefresh()
  console.log('test function', test)
}
</script>
