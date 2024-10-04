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
                  const divv = document.createElement("div")
                  divv.className = "cell"

                  const inputt = document.createElement("input")
                  inputt.type = "text"
                  inputt.value = ""

                  divv.appendChild(inputt)

                  newRow.appendChild(divv)
            }

            tabela.insertBefore(newRow, primeiraRow)
      }
}