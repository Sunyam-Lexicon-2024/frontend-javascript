import { useState } from "react"
import Icon from "@mdi/react"
import { mdiDeleteForever, mdiCheckCircleOutline } from "@mdi/js"

type ItemProps = {
	name: string
	id: number
}

const ListItem = ({ name, id }: ItemProps) => {
	const [deleted, setDeleted] = useState(false)
	const [disabled, setDisabled] = useState(false)

	let content

	if (!deleted) {
		content = (
			<div
				className="list-item"
				key={id}>
				{disabled ? (
					<p className="item-disabled">
						Item: <strong>{name}</strong>
					</p>
				) : (
					<p>
						Item: <strong>{name}</strong>
					</p>
				)}
				<div>
					<button onClick={() => setDeleted(true)}>
						<Icon
							path={mdiDeleteForever}
							size={1}
						/>
					</button>
					<button onClick={() => setDisabled(!disabled)}>
						<Icon
							path={mdiCheckCircleOutline}
							size={1}
						/>
					</button>
				</div>
			</div>
		)
	} else {
		content = null
	}

	return content
}

export default ListItem
