import React, { useState } from "react"

export default function Test2() {
	const [data, setData] = useState(0)

	return (
		<>
			<main>
				<h2>하버드</h2>
				<section>
					<button onClick={() => setData(data + 1)}>++++</button>
					<button onClick={() => setData(data - 1)}>----</button>
					<article>{data}</article>
				</section>
			</main>
		</>
	)
}
