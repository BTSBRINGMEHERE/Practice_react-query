import TestComponents from "../components/TestComponents"
import { Outlet, Link } from "react-router-dom"

export default function TestPage() {
	return (
		<>
			<TestComponents />
			<Link to="Test1">테스트1</Link> <Link to="Test2">테스트2</Link>{" "}
			<Link to="Test3">테스트3</Link>
			<Outlet />
		</>
	)
}
