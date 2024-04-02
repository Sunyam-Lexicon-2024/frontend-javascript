import React from "react"

type ItemProps = {
	name: string
	id: number
}

const ListItem = ({ name, id }: ItemProps) => {
	function togglePurchased() {
		console.log(name)
	}

	function deleteItem(event: React.MouseEvent) {
		event.preventDefault()
		let target = event.target as HTMLDivElement
		target.parentElement!.remove()
	}

	return (
		<div className="list-item" key={id}>
			<p>Item: {name}</p>
			<button onClick={(event) => deleteItem(event)}>delete</button>
			<button onClick={togglePurchased}>Toggle purchased</button>
		</div>
	)
}

export default ListItem
