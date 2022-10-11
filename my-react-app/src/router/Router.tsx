import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestPage from "../pages/TestPage"
import Test1 from "../pages/Test1"
import Test2 from "../pages/Test2"
import Test3 from "../pages/Test3"

export default function Render() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TestPage />}>
						<Route path="Test1" element={<Test1 />} />
						<Route path="Test2" element={<Test2 />} />
						<Route path="Test3" element={<Test3 />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
