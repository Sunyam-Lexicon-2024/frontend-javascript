import React, { ReactElement, useState } from "react"
import ItemListDisplay from "./ItemListDisplay"
import ListItem from "./ListItem"
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	Input,
	Alert,
} from "@mui/material"

export default function ToDo() {
	const [itemToAdd, setItemToAdd] = useState("")
	const [itemList, setItemList] = useState([] as ReactElement[])
	const [itemCount, setItemsCount] = useState(0)
	const [error, setError] = useState(false)

	function updateItemToAdd(event: React.ChangeEvent) {
		event.preventDefault()

		let target = event.target as HTMLInputElement
		setItemToAdd(target.value)
	}

	function addItemToList(event: React.FormEvent) {
		event.preventDefault()
		console.log((event.target as HTMLFormElement).value)
		if (itemToAdd == "") {
			setError(true)
			return
		}
		itemList.push(
			<ListItem
				name={itemToAdd}
				id={itemList.length + 1}
			/>
		)
		setItemList(itemList)
		setItemsCount(itemList.length)
	}

	return (
		<Container
			maxWidth="xxl"
			sx={{
				display: "flex",
				flexFlow: "row",
				maxHeight: 500,
				width: "100vw",
				position: "relative",
				overflow: "hidden",
				top: 70,
			}}>
			{error ? (
				<Box
					onClick={() => setError(false)}
					sx={{
						justifySelf: "center",
						position: "absolute",
						height: "100%",
						width: "100vw",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 9999,
					}}>
					<Alert
						variant="filled"
						severity="error">
						A value must be provided for an item
					</Alert>
				</Box>
			) : null}
			<Box>
				<Card sx={{ m: 1, maxWidth: 500, height: "fit-content" }}>
					<CardContent>
						This list tool allows you add items to a list, mark them as
						purchased and/or delete them.
					</CardContent>
				</Card>
				<form
					onSubmit={(event) => {
						addItemToList(event)
					}}>
					<FormControl sx={{ m: 2, display: "flex", flexFlow: "column" }}>
						<Input
							type="text"
							placeholder="enter new item"
							value={itemToAdd}
							onChange={(event) => updateItemToAdd(event)}
						/>
						<Button
							sx={{ m: 1 }}
							variant="contained"
							type="submit">
							Add item to list
						</Button>
					</FormControl>
				</form>
			</Box>
			<Container sx={{ overflow: "auto" }}>
				<ItemListDisplay
					itemCount={itemCount}
					itemList={itemList}
				/>
			</Container>
		</Container>
	)
}
