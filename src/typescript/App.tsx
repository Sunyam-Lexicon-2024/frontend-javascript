import "@/sass/app-style.scss"
import { useState } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import BishBosh from "./BishBosh"
import ToDoList from "./ToDoList"

export default function App() {
	const [todoActive, setTodo] = useState(true)
	const [bishBoshActive, setBishBosh] = useState(true)
	const [pageTitle, setPageTitle] = useState("Bish Bosh 2.0")

	function toggleComponent(e: any) {
		switch (e.target.textContent) {
			case "Bish Bosh 2.0":
				setBishBosh(true)
				setTodo(false)
				setPageTitle("Bish Bosh 2.0")
				break
			case "To Do List":
				setBishBosh(false)
				setTodo(true)
				setPageTitle("To Do List")
				break
		}
	}

	let content

	if (bishBoshActive) {
		content = <BishBosh />
	} else if (todoActive) {
		content = <ToDoList />
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
