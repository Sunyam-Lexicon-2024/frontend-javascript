import React, { useState } from "react"
import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	FormControl,
	FormLabel,
	Slider,
} from "@mui/material"

export default function BishBosh() {
	const [bishNumber, setBishNumber] = useState(1)
	const [boshNumber, setBoshNumber] = useState(1)
	const [bishBoshRows, setBishBoshRows] = useState(5)

	function logBishBosh(event: React.MouseEvent): void {
		event.preventDefault()
		for (let index = 1; index <= bishBoshRows; index++) {
			let output: string
			if (index % bishNumber == 0 && index % boshNumber == 0) {
				output = "bish-bosh"
			} else if (index % bishNumber == 0) {
				output = "bish"
			} else if (index % boshNumber == 0) {
				output = "bosh"
			} else {
				output = index.toString()
			}
			console.log(output)
		}
	}

	async function displayBishBosh(event: React.MouseEvent) {
		event.preventDefault()
		let textField = document.getElementById("bish-bosh-text-display")
		textField!.innerHTML = ""
		for (let index = 1; index <= bishBoshRows; index++) {
			await new Promise((resolve, _) => {
				setTimeout(resolve, 500)
			})
			let output: string
			if (index % bishNumber == 0 && index % boshNumber == 0) {
				output = "bish-bosh"
			} else if (index % bishNumber == 0) {
				output = "bish"
			} else if (index % boshNumber == 0) {
				output = "bosh"
			} else {
				output = index.toString()
			}
			let outputElem = document.createElement("p") as HTMLParagraphElement
			outputElem.textContent = output
			textField?.appendChild(outputElem)
		}
	}

	return (
		<Container
			sx={{
				m: 1,
				position: "fixed",
				display: "flex",
				flexFlow: {
					xs: "column",
					sm: "row",
				},
				height: "90vh",
				width: "100vw",
				justifyContent: "stretch",
				overflowY: "hidden",
			}}>
			<Card sx={{ m: 1, height: "fit-content" }}>
				<CardContent>
					This number sequence generator takes a <strong>Bish</strong> number, a{" "}
					<strong>Bosh</strong> number and resolves the modulo(%) of each for a
					number of iterations defined by the Bish Bosh Row value (5-100)
				</CardContent>
			</Card>
			<Box sx={{ m: 1, p: 1}}>
				<form>
					<FormControl>
						<FormLabel>
							Bish Number: <strong>{bishNumber}</strong>
						</FormLabel>
						<Slider
							name="bish-number"
							id="bish-number"
							min={1}
							max={20}
							value={bishNumber}
							onChange={(event) =>
								setBishNumber(
									Number.parseInt((event.target as HTMLFormElement).value)
								)
							}
						/>
						<FormLabel>
							Bosh Number: <strong>{boshNumber}</strong>
						</FormLabel>
						<Slider
							name="bosh-number"
							id="bosh-number"
							min={1}
							max={20}
							value={boshNumber}
							onChange={(event) =>
								setBoshNumber(
									Number.parseInt((event.target as HTMLFormElement).value)
								)
							}
						/>
						<FormLabel>
							Bish Bosh Rows: <strong>{bishBoshRows}</strong>
						</FormLabel>
						<Slider
							name="bish-bosh-rows"
							id="bish-bosh-rows"
							min={5}
							max={100}
							value={bishBoshRows}
							onChange={(event) =>
								setBishBoshRows(
									Number.parseInt((event.target as HTMLFormElement).value)
								)
							}
						/>

						<Button
							variant="contained"
							sx={{ color: "black", m: 1 }}
							onClick={(event) => displayBishBosh(event as React.MouseEvent)}>
							Bish Bosh!
						</Button>
						<Button
							variant="contained"
							sx={{ color: "black", m: 1 }}
							onClick={(event) => logBishBosh(event as React.MouseEvent)}>
							Console.log(Bish Bosh!)
						</Button>
					</FormControl>
				</form>
			</Box>
			<Card
				sx={{
					m: 0,
					p: 0,
					overflowY: "auto",
					width: "100%",
					height: {
						xs: 50,
						sm: 250,
						md: "fit",
					},
					display: "flex",
					justifyContent: "center",
				}}>
				<Box id="bish-bosh-text-display"></Box>
			</Card>
		</Container>
	)
}
