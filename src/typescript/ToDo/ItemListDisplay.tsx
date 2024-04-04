import { ReactElement } from "react"
import { Box } from "@mui/material"

export default function ItemListDisplay({ itemList }: any) {
	const items = itemList.map((item: ReactElement) => (
		<Box key={`item-${item.props.id}`}> {item}</Box>
	))

	return <Box>{items}</Box>
}
