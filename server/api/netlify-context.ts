export default defineEventHandler(async (event) => {
  const urlOrigin = getRequestURL(event).origin
  console.log('🐧🐧🐧 server route event', urlOrigin)
  const netlifyEdgeResponse = await $fetch(`${urlOrigin}/netlify-edge`)
  // console.log('from server route', netlifyEdgeResponse)
  return netlifyEdgeResponse
})
