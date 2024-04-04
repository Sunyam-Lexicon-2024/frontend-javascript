import { createTheme } from "@mui/material/styles"
import { yellow, blue } from "@mui/material/colors"

declare module "@mui/material/styles" {
	interface Palette {
		link: Palette["primary"]
	}

	interface PaletteOptions {
		link?: PaletteOptions["primary"]
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: yellow[500],
		},
		secondary: {
			main: "#000",
		},
		link: {
			main: blue[700],
		},
	},
	breakpoints: {
		values: {
			xs: 0, // phone
			sm: 600, // tablets
			md: 900, // small laptop
			lg: 1200, // desktop
			xl: 1536, // large screens
		},
	},
})
