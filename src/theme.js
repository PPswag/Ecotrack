import { createTheme } from "@mui/material";
import Inter from "./fonts/Inter.ttf";

export const theme = createTheme({
	typography: {
		fontFamily: "Inter, Arial",
		fontSize: 20,
	},
	palette: {
		primary: {
			light: "#757ce8",
			main: "#020303",
			dark: "#002884",
			contrastText: "#fff",
		},
		secondary: {
			light: "#ff7961",
			main: "#f44336",
			dark: "#ba000d",
			contrastText: "#000",
		},

		background: {
			white: "#ECF0F3",
		},
	},
	components: {
		transparentButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === "contained" &&
						ownerState.color === "primary" && {
							backgroundColor: "transparent",
							color: "#00000",
						}),
				}),
			},
		},
	},
});
