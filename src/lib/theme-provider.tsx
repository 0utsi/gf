import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: [
			"Mulish",
			"Segoe UI",
			"Roboto",
			"Helvetica Neue",
			"Arial",
			"sans-serif",
			"Segoe UI Symbol",
		].join(","),
	},
	palette: {
		primary: {
			main: "#f26852",
		},
		secondary: {
			main: "#1e3a8a",
		},
	},
});

export default theme;
