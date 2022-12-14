import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function TestComponents() {
	const TEST_API_KEY = `https://api.github.com/repositories/207645083`

	const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
		axios.get(`${TEST_API_KEY}`).then((response) => response.data)
	)

	return (
		<>
			<h1>π«‘ μλνμΈμ</h1>
			<p>π₯Έ {data.name}</p>
			<strong>{data.description}</strong>
		</>
	)
}
