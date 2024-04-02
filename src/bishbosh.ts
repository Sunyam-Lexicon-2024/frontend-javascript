import './style.css'

// iterateBishBosh(100, 3, 4)

const bishNumberInput = document.getElementById("bish-number") as HTMLInputElement,
  boshNumberInput = document.getElementById("bosh-number") as HTMLInputElement,
  bishBoshRowsInput = document.getElementById("bish-bosh-rows") as HTMLInputElement,
  bishBoshButton = document.getElementById("bish-bosh-button") as HTMLButtonElement,
  bishNumberDisplay = document.getElementById("bish-number-display") as HTMLParagraphElement,
  boshNumberDisplay = document.getElementById("bosh-number-display") as HTMLParagraphElement,
  bishBoshRowsDisplay = document.getElementById("bish-bosh-rows-display") as HTMLParagraphElement,
  bishBoshTextDisplay = document.getElementById("bish-bosh-text-display") as HTMLDivElement


[bishNumberInput, boshNumberInput, bishBoshRowsInput].forEach((i: HTMLInputElement) =>
{
  i.addEventListener("change", (event: Event) =>
  {
    event.preventDefault()

    let target = event.target as HTMLInputElement

    switch (target.id)
    {
      case "bish-number":
        bishNumberDisplay.textContent = target.value
        break
      case "bosh-number":
        boshNumberDisplay.textContent = target.value
        break
      case "bish-bosh-rows":
        bishBoshRowsDisplay.textContent = target.value
        break
    }
  })
})

bishNumberDisplay.textContent = bishNumberInput.value
boshNumberDisplay.textContent = boshNumberInput.value
bishBoshRowsDisplay.textContent = bishBoshRowsInput.value

bishBoshButton?.addEventListener("click", (event: MouseEvent) =>
{
  event.preventDefault()

  let bishNumber = Number.parseInt(bishNumberInput.value)
  let boshNumber = Number.parseInt(boshNumberInput.value)
  let bishBoshRows = Number.parseInt(bishBoshRowsInput.value)

  displayBishBosh(bishBoshRows, bishNumber, boshNumber, bishBoshTextDisplay)

})

function delay(time: number)
{
  return new Promise((resolve, _) => setTimeout(resolve, time))
}

async function displayBishBosh(rowCount: number, bishNumber: number, boshNumber: number, displayField: HTMLDivElement)
{
  displayField.innerHTML = ""
  for (let index = 1; index <= rowCount; index++)
  {
    await delay(500)

    let output: string
    if (index % bishNumber == 0 && index % boshNumber == 0)
    {
      output = "bish-bosh"
    }
    else if (index % bishNumber == 0)
    {
      output = "bish"
    }
    else if (index % boshNumber == 0)
    {
      output = "bosh"
    }
    else
    {
      output = index.toString()
    }

    let outputElem = document.createElement("p") as HTMLParagraphElement
    outputElem.textContent = output
    displayField.appendChild(outputElem)
  }
}

function iterateBishBosh(rowCount: number, bishNumber: number, boshNumber: number)
{
  for (let index = 1; index <= rowCount; index++)
  {
    let output: string
    if (index % bishNumber == 0 && index % boshNumber == 0)
    {
      output = "bish-bosh"
    }
    else if (index % bishNumber == 0)
    {
      output = "bish"
    }
    else if (index % boshNumber == 0)
    {
      output = "bosh"
    }
    else
    {
      output = index.toString()
    }
    console.log(output)
  }
}