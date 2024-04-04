import { useState } from "react"
import { CheckCircleOutline, DeleteForever } from "@mui/icons-material"
import { Box, Button, Card } from "@mui/material"

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
			<Card
				sx={{
					display: "flex",
					flexFlow: "column",
					alignItems: "center",
					m: 1,
					p: 1,
				}}
				key={id}>
				{disabled ? (
					<p style={{ color: "rgb(225,225,225)", textDecoration: "line-through" }}>
						Item: <strong>{name}</strong>
					</p>
				) : (
					<p>
						Item: <strong>{name}</strong>
					</p>
				)}
				<Box sx={{ m: 0, p: 0 }}>
					<Button
						variant="contained"
						sx={{ m: 1, p: 1 }}
						onClick={() => setDeleted(true)}>
						<DeleteForever color="secondary" />
					</Button>
					<Button
						variant="contained"
						sx={{ m: 1, p: 1 }}
						onClick={() => {
							console.log(disabled)
							setDisabled(!disabled)
						}}>
						<CheckCircleOutline color="secondary" />
					</Button>
				</Box>
			</Card>
		)
	} else {
		content = null
	}

	return content
}

export default ListItem
