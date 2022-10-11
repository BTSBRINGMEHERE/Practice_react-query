import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function TestComponents() {
	const TEST_API_KEY = `https://api.github.com/repositories/207645083`

	const Example = () => {
		const { isLoading, error, data, isFetching } = useQuery(["repoData"], () =>
			axios.get(`${TEST_API_KEY}`).then((response) => response.data)
		)
		if (isLoading) {
			return "Loading..."
		}
		if (error) {
			return "error..."
		}
	}
	return (
		<>
			<h1>안녕하세요</h1>
			{Example}
		</>
	)
}
