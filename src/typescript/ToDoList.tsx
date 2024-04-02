import "@/sass/todo-style.scss"
import React, { ReactElement, useState } from "react"
import ItemListDisplay from "./ItemListDisplay"
import ListItem from "./ListItem"

export default function ToDo() {
	const [itemToAdd, setItemToAdd] = useState("")
	const [itemList, setItemList] = useState([] as ReactElement[])
	const [itemCount, setItemsCount] = useState(0)

	function updateItemToAdd(event: React.ChangeEvent) {
		event.preventDefault()

		let target = event.target as HTMLInputElement
		setItemToAdd(target.value)
	}

	function addItemToList(event: React.FormEvent) {
		event.preventDefault()
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
		<div id="todo-app">
			<form
				onSubmit={(event) => {
					addItemToList(event)
				}}>
				<input
					type="text"
					placeholder="enter new item"
					value={itemToAdd}
					onChange={(event) => updateItemToAdd(event)}
				/>
				<button type="submit">Add item to list</button>
			</form>
			<h2>Item List</h2>
			<ItemListDisplay
				itemCount={itemCount}
				itemList={itemList}
			/>
		</div>
	)
}
