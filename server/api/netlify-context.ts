export default defineEventHandler(async (event) => {
  const urlOrigin = getRequestURL(event).origin
  console.log('🐧🐧🐧 server route event', urlOrigin)

  const netlifyEdgeResponse = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
  return netlifyEdgeResponse
})
