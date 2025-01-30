import { ref } from 'vue'

export default function useFetch(url) {
  const result = ref(null)

  fetch(`http://localhost:5000/${url}`)
    .then((res) => res.json())
    .then((data) => (result.value = data.data))

  return { result }
}
