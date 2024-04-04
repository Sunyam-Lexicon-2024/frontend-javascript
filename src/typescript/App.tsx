import React, { useState } from "react"
import Footer from "./Footer"
import Navigation from "./Navigation"
import BishBosh from "./BishBosh/BishBosh"
import ToDoList from "./ToDo/ToDoList"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./theme"

function App() {
	const [bishBoshActive, setBishBosh] = useState(true)
	const [toDoActive, setToDo] = useState(true)

	function toggleComponent(event: React.MouseEvent) {
		switch ((event.target as HTMLElement).textContent) {
			case "Bish Bosh 2.0":
				setBishBosh(true)
				setToDo(false)
				break
			case "To Do List":
				setBishBosh(false)
				setToDo(true)
				break
		}
	}

	let content

	if (bishBoshActive) {
		content = <BishBosh />
	} else if (toDoActive) {
		content = <ToDoList />
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navigation loadComponent={(event) => toggleComponent(event)} />
			{content}
			<Footer />
		</ThemeProvider>
	)
}

export default App
