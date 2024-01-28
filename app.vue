<template>
  <button @click="tryTest">call dat server route</button>
  <button @click="serverMiddleware">server route middleware</button>
  <button @click="directFetch">direct fetch</button>
</template>

<script setup>
const { data: test, refresh: testRefresh } = await useFetch('/api/netlify-context')

async function tryTest() {
  await testRefresh()
  console.log('test function', test)
}

async function serverMiddleware() {
  const res = await $fetch('/api/netlify-context')
  console.log('api netlify', res)
}

async function directFetch() {
  const res = await $fetch('/netlify-edge')
  console.log('direct netlify edge', res)
}
</script>
