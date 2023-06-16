import React from "react";
import { Toolbar, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

export default function Navbar() {
	const theme = useTheme();
	return (
		<Toolbar
			sx={{
				bgcolor: "background.white",
			}}
		>
			<Typography variant='h5' fontWeight='600'
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					EcoTrack
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/profile"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					Profile
				</Link>
			</Typography>
			<Typography
				sx={{
					cursor: "pointer",
					flexGrow: 1,
					"&:hover": {
						color: "#c7d8ed",
					},
					["@media (max-width:2px)"]: {
						paddingBottom: "1rem",
					},
				}}
			>
				<Link
					to="/calculator"
					style={{ textDecoration: "none", color: "#020303" }}
				>
					Calculator
				</Link>
			</Typography>
			<Button href="/login" variant="contained">
        Login
      </Button>
		</Toolbar>
	);
}
