const toggleTheme = () => {
      document.querySelector('body').classList.toggle('darkmode')
}



const addNew = () => {
      const tabela = document.querySelector(".table")
      const primeiraRow = tabela.children[1]

      const primeiroInput = primeiraRow.querySelector("input")

      if(primeiroInput.disabled){

            const newRow = document.createElement("div")
            newRow.className = "row"

            for(let i = 0; i<7;i++){
                  const celula = document.createElement("div")
                  celula.className = "cell"

                  const cellInput = document.createElement("input")
                  cellInput.type = "text"
                  cellInput.value = ""

                  celula.appendChild(cellInput)

                  newRow.appendChild(celula)
            }

            tabela.insertBefore(newRow, primeiraRow)
      }
}