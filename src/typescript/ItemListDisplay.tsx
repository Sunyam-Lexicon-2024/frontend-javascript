import { ReactElement } from "react"

export default function ItemListDisplay({ itemList, itemCount }: any) {
	const items = itemList.map((item: ReactElement) => (
		<div key={`item-${item.props.id}`}> {item}</div>
	))

	return <div id="item-list-display">{items}</div>
}
