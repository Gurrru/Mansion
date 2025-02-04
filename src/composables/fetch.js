import { ref, toValue, watchEffect } from 'vue'

export default function useFetch(url) {
  const result = ref(null)
  const error = ref(null)
  watchEffect(async () => {
    result.value = null
    error.value = null
    const urlValue = toValue(url)
    fetch(`http://localhost:5000/${urlValue}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then((data) => (result.value = data.data))
      .catch((data) => (error.value = data))
  })

  return { result, error }
}
