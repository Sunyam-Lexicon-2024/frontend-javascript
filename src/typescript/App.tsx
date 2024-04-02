import "@/sass/App.scss"
import { useState } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import BishBosh from "./BishBosh"
import ToDo from "./ToDo"

export default function App() {
	const [todoActive, setTodo] = useState(true)
	const [bishBoshActive, setBishBosh] = useState(true)
	const [pageTitle, setPageTitle] = useState("Bish Bosh 2.0")

	function toggleComponent(e: any) {
		console.debug(e.target.textContent)
		switch (e.target.textContent) {
			case "Bish Bosh 2.0":
				setBishBosh(true)
				setTodo(false)
				setPageTitle("Bish Bosh 2.0")
				break
			case "To Do List":
				setBishBosh(false)
				setTodo(true)
				setPageTitle("To Do")
				break
		}
	}

	let content

	if (bishBoshActive) {
		content = <BishBosh />
	} else if (todoActive) {
		content = <ToDo />
	}

	return (
		<>
			<Navigation
				loadComponent={(e) => toggleComponent(e)}
				pageTitle={pageTitle}
			/>
			<div>{content}</div>
			<Footer />
		</>
	)
}
