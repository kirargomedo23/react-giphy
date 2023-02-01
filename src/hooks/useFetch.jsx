import { useEffect, useState } from 'react'

export const useFetch = (search, limit, offset) => {
	const urlBase = `https://api.giphy.com/v1/gifs/search?api_key=fA9fGuYLMmM8Djb7TKNLokuAEX9whpno`
	const [data, setData] = useState([])
	const [load, setLoad] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const getData = async () => {
			fetch(`${urlBase}&q=${search}&limit=${limit}&offset=${offset}`)
				.then(response => response.json())
				.then(data => setData(data))
				.catch(err => setError(err.message))
				.finally(() => {
					setLoad(false)
				})
		}

		getData()
		return () => {}
	}, [search, limit, offset])

	return { data, load, error }
}
