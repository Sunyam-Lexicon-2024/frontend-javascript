import "@/sass/bishbosh-style.scss"
import React, { useState } from "react"

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
		<div id="bish-bosh-app">
			<span className="intro-span">
				This number sequence generator takes a <strong>Bish</strong> number, a{" "}
				<strong>Bosh</strong> number and resolves the modulo(%) of each for a
				number of iterations defined by the Bish Bosh Row value (5-100)
			</span>
			<div id="bish-bosh-container">
				<form>
					<p>Bish Number: {bishNumber}</p>
					<input
						type="range"
						name="bish-number"
						id="bish-number"
						min={1}
						max={20}
						value={bishNumber}
						onChange={(event) =>
							setBishNumber(Number.parseInt(event.target.value))
						}
					/>
					<p>Bosh Number: {boshNumber}</p>
					<input
						type="range"
						name="bosh-number"
						id="bosh-number"
						min={1}
						max={20}
						value={boshNumber}
						onChange={(event) =>
							setBoshNumber(Number.parseInt(event.target.value))
						}
					/>
					<p>Bish Bosh Row Count: {bishBoshRows}</p>
					<input
						type="range"
						name="bish-bosh-rows"
						id="bish-bosh-rows"
						min={5}
						max={100}
						value={bishBoshRows}
						onChange={(event) =>
							setBishBoshRows(Number.parseInt(event.target.value))
						}
					/>
					<div>
						<button
							id="bish-bosh-button"
							onClick={(event) => displayBishBosh(event as React.MouseEvent)}>
							Bish Bosh!
						</button>
					</div>
					<div>
						<button
							id="bish-bosh-button"
							onClick={(event) => logBishBosh(event as React.MouseEvent)}>
							Console.log(Bish Bosh!)
						</button>
					</div>
				</form>
				<div id="bish-bosh-text-display"></div>
			</div>
		</div>
	)
}
