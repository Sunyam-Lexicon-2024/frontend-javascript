import "@/sass/app-style.scss"
import React, { useState } from "react"
import Navigation from "./Navigation"
import Footer from "./Footer"
import BishBosh from "./BishBosh"
import ToDoList from "./ToDoList"

export default function App() {
	const [pageTitle, setPageTitle] = useState("Bish Bosh 2.0")
	const [bishBoshActive, setBishBosh] = useState(true)
	const [todoActive, setTodo] = useState(false)

	function toggleComponent(event: React.MouseEvent) {
		switch ((event.target as HTMLElement).textContent) {
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
				loadComponent={(event) => toggleComponent(event)}
				pageTitle={pageTitle}
			/>
			<div>{content}</div>
			<Footer />
		</>
	)
}
