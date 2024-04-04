import { Box, Button, Link } from "@mui/material"
import { theme } from "../typescript/theme"

const fgColor = theme.palette.secondary.main
const bgColor = theme.palette.primary.main
const linkColor = theme.palette.link.main

export default function Footer() {
	function setYear() {
		return new Date().getFullYear().toString()
	}
	return (
		<Box
			component={"footer"}
			sx={{
				p: 2,
				height: 25,
				width: "100vw",
				position: "fixed",
				display: "flex",
				alignItems: "center",
				bottom: 0,
				color: fgColor,
				backgroundColor: bgColor,
			}}>
			<span>Designed by
				<Button
					component={Link}
					sx={{ color: linkColor, m: 1, p: 0 }}
					href="https://github.com/suny-am">
					suny-am 
				</Button>
				 {setYear()}
			</span>
		</Box>
	)
}
