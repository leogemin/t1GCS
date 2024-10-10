var usuarioLogado

const userSelector = document.getElementById('userSelector')

const toggleTheme = () => {
    document.querySelector('body').classList.toggle('darkmode')
}

const openRow = (e) => {
    e.currentTarget.classList.toggle('open')
    e.currentTarget.classList.toggle('row')    
}

const addNew = () => {
    const tabela = document.querySelector(".tableBody")
    const primeiraRow = tabela.firstElementChild

    const newRow = document.createElement("div")
    newRow.className = "row"

    if (primeiraRow && primeiraRow.querySelector('input').disabled) {
        for (let i = 0; i < 7; i++) {
            const celula = document.createElement("div")
            celula.className = "cell"

            const cellInput = document.createElement("input")
            cellInput.type = "text"
            cellInput.classList.add("inputField")
            celula.appendChild(cellInput)
            newRow.appendChild(celula)
        }
        tabela.insertBefore(newRow, primeiraRow)
    }
}

const gremioGigante = () => {
    const tabela = document.querySelector(".tableBody")
    const primeiraRow = tabela.firstElementChild

    if (primeiraRow && !primeiraRow.querySelector('input').disabled) {
        const inputs = primeiraRow.querySelectorAll('input')
        let preenchido = true

        inputs.forEach(input => {
            if (input.value == "") {
                preenchido = false
            }
        })

        if (preenchido == true) {
            inputs.forEach(input => {
                input.disabled = true
            })    
            primeiraRow.addEventListener('click', openRow)
            document.querySelector('.ok').style.display = 'none'
        }
        else {
            alert("Preencha todos os campos")
        }
    }
}

function visibilidade() {
    const botaoOK = document.querySelector('.ok')
    if (botaoOK.style.display === 'none' || botaoOK.style.display === '') {
        botaoOK.style.display = 'block'
    }
}

const setUsuario = (e) => {
    console.log(e.value)
}

function administradorEstaOnline() {
    const label = userSelector.value

    if (label === "Juliano" || label === "Pasternak" || label === "Odorico") {
        habilitarPermissoesAdministrador()
    } else {
        alert("Você não tem permissão para acessar essas funcionalidades.")
    }
}

document.querySelector('.adicionar').addEventListener('click', visibilidade)
document.querySelector('.ok').addEventListener('click', gremioGigante)

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        gremioGigante()
    }
})