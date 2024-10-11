var usuarioLogado

const aquisitionStruct = {
    Descricao: "",
    Valor_Uni: 0,
    Quantidade: 0,
    Valor_Total: 0,
    Status: "",
    Data: "",
    Solicitante: ""
}

const data = [
    {
        "Titulo": "Financeiro",
        "max_valor": 5000,
        "Funcionarios": [
            {
                "Nome": "Pedro",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de material de escritório",
                        "Valor_Uni": 15.00,
                        "Quantidade": 20,
                        "Valor_Total": 300.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-15",
                        "Solicitante": "Pedro"
                    },
                    {
                        "Descricao": "Compra de licenças de software",
                        "Valor_Uni": 250.00,
                        "Quantidade": 10,
                        "Valor_Total": 2500.00,
                        "Status": "Pendente",
                        "Data": "2023-10-05",
                        "Solicitante": "Pedro"
                    }
                ]
            },
            {
                "Nome": "Frederico",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de equipamento de TI",
                        "Valor_Uni": 500.00,
                        "Quantidade": 5,
                        "Valor_Total": 2500.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-20",
                        "Solicitante": "Frederico"
                    },
                    {
                        "Descricao": "Contratação de consultoria",
                        "Valor_Uni": 1000.00,
                        "Quantidade": 1,
                        "Valor_Total": 1000.00,
                        "Status": "Pendente",
                        "Data": "2023-10-01",
                        "Solicitante": "Frederico"
                    }
                ]
            },
            {
                "Nome": "Luca",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de cadeiras",
                        "Valor_Uni": 150.00,
                        "Quantidade": 10,
                        "Valor_Total": 1500.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-25",
                        "Solicitante": "Luca"
                    },
                    {
                        "Descricao": "Compra de impressoras",
                        "Valor_Uni": 300.00,
                        "Quantidade": 3,
                        "Valor_Total": 900.00,
                        "Status": "Pendente",
                        "Data": "2023-10-03",
                        "Solicitante": "Luca"
                    }
                ]
            }
        ]
    },
    {
        "Titulo": "RH",
        "max_valor": 2000,
        "Funcionarios": [
            {
                "Nome": "Ana",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de brindes para eventos",
                        "Valor_Uni": 50.00,
                        "Quantidade": 30,
                        "Valor_Total": 1500.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-28",
                        "Solicitante": "Ana"
                    },
                    {
                        "Descricao": "Material para treinamento",
                        "Valor_Uni": 100.00,
                        "Quantidade": 5,
                        "Valor_Total": 500.00,
                        "Status": "Pendente",
                        "Data": "2023-10-06",
                        "Solicitante": "Ana"
                    }
                ]
            },
            {
                "Nome": "Luiza",
                "Aquisicoes": [
                    {
                        "Descricao": "Serviço de outsourcing de RH",
                        "Valor_Uni": 2000.00,
                        "Quantidade": 1,
                        "Valor_Total": 2000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-15",
                        "Solicitante": "Luiza"
                    },
                    {
                        "Descricao": "Compra de ferramentas de recrutamento",
                        "Valor_Uni": 500.00,
                        "Quantidade": 2,
                        "Valor_Total": 1000.00,
                        "Status": "Pendente",
                        "Data": "2023-10-01",
                        "Solicitante": "Luiza"
                    }
                ]
            },
            {
                "Nome": "Gabriel",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de uniformes",
                        "Valor_Uni": 50.00,
                        "Quantidade": 40,
                        "Valor_Total": 2000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-12",
                        "Solicitante": "Gabriel"
                    },
                    {
                        "Descricao": "Contratação de palestrante",
                        "Valor_Uni": 500.00,
                        "Quantidade": 1,
                        "Valor_Total": 500.00,
                        "Status": "Pendente",
                        "Data": "2023-10-07",
                        "Solicitante": "Gabriel"
                    }
                ]
            }
        ]
    },
    {
        "Titulo": "Engenharia",
        "max_valor": 4000,
        "Funcionarios": [
            {
                "Nome": "Rodrigo",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de ferramentas",
                        "Valor_Uni": 250.00,
                        "Quantidade": 4,
                        "Valor_Total": 1000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-10",
                        "Solicitante": "Rodrigo"
                    },
                    {
                        "Descricao": "Compra de peças de reposição",
                        "Valor_Uni": 100.00,
                        "Quantidade": 10,
                        "Valor_Total": 1000.00,
                        "Status": "Pendente",
                        "Data": "2023-09-20",
                        "Solicitante": "Rodrigo"
                    }
                ]
            },
            {
                "Nome": "Lucas",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de materiais de construção",
                        "Valor_Uni": 500.00,
                        "Quantidade": 2,
                        "Valor_Total": 1000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-18",
                        "Solicitante": "Lucas"
                    },
                    {
                        "Descricao": "Serviço de manutenção de equipamentos",
                        "Valor_Uni": 800.00,
                        "Quantidade": 1,
                        "Valor_Total": 800.00,
                        "Status": "Pendente",
                        "Data": "2023-10-04",
                        "Solicitante": "Lucas"
                    }
                ]
            },
            {
                "Nome": "Bernardo",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de EPIs",
                        "Valor_Uni": 100.00,
                        "Quantidade": 20,
                        "Valor_Total": 2000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-22",
                        "Solicitante": "Bernardo"
                    },
                    {
                        "Descricao": "Compra de extintores",
                        "Valor_Uni": 150.00,
                        "Quantidade": 10,
                        "Valor_Total": 1500.00,
                        "Status": "Pendente",
                        "Data": "2023-10-08",
                        "Solicitante": "Bernardo"
                    }
                ]
            }
        ]
    },
    {
        "Titulo": "Manutenção",
        "max_valor": 1000,
        "Funcionarios": [
            {
                "Nome": "Leonardo",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de material de limpeza",
                        "Valor_Uni": 25.00,
                        "Quantidade": 10,
                        "Valor_Total": 250.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-17",
                        "Solicitante": "Leonardo"
                    },
                    {
                        "Descricao": "Serviço de manutenção elétrica",
                        "Valor_Uni": 300.00,
                        "Quantidade": 1,
                        "Valor_Total": 300.00,
                        "Status": "Pendente",
                        "Data": "2023-10-02",
                        "Solicitante": "Leonardo"
                    }
                ]
            },
            {
                "Nome": "Filipe",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de ferramentas",
                        "Valor_Uni": 50.00,
                        "Quantidade": 5,
                        "Valor_Total": 250.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-25",
                        "Solicitante": "Filipe"
                    },
                    {
                        "Descricao": "Serviço de manutenção hidráulica",
                        "Valor_Uni": 400.00,
                        "Quantidade": 1,
                        "Valor_Total": 400.00,
                        "Status": "Pendente",
                        "Data": "2023-10-05",
                        "Solicitante": "Filipe"
                    }
                ]
            },
            {
                "Nome": "Mateus",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de lâmpadas",
                        "Valor_Uni": 10.00,
                        "Quantidade": 30,
                        "Valor_Total": 300.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-30",
                        "Solicitante": "Mateus"
                    },
                    {
                        "Descricao": "Serviço de troca de piso",
                        "Valor_Uni": 500.00,
                        "Quantidade": 1,
                        "Valor_Total": 500.00,
                        "Status": "Pendente",
                        "Data": "2023-10-08",
                        "Solicitante": "Mateus"
                    }
                ]
            }
        ]
    },
    {
        "Titulo": "Administração",
        "max_valor": 10000,
        "Funcionarios": [
            {
                "Nome": "Juliano",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de computadores",
                        "Valor_Uni": 1500.00,
                        "Quantidade": 5,
                        "Valor_Total": 7500.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-19",
                        "Solicitante": "Juliano"
                    },
                    {
                        "Descricao": "Compra de smartphones",
                        "Valor_Uni": 1000.00,
                        "Quantidade": 5,
                        "Valor_Total": 5000.00,
                        "Status": "Pendente",
                        "Data": "2023-10-07",
                        "Solicitante": "Juliano"
                    }
                ]
            },
            {
                "Nome": "Pasternak",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de tablets",
                        "Valor_Uni": 800.00,
                        "Quantidade": 5,
                        "Valor_Total": 4000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-22",
                        "Solicitante": "Pasternak"
                    },
                    {
                        "Descricao": "Compra de cadeiras ergonômicas",
                        "Valor_Uni": 300.00,
                        "Quantidade": 10,
                        "Valor_Total": 3000.00,
                        "Status": "Pendente",
                        "Data": "2023-10-09",
                        "Solicitante": "Pasternak"
                    }
                ]
            },
            {
                "Nome": "Odorico",
                "Aquisicoes": [
                    {
                        "Descricao": "Compra de monitores",
                        "Valor_Uni": 500.00,
                        "Quantidade": 8,
                        "Valor_Total": 4000.00,
                        "Status": "Aprovado",
                        "Data": "2023-09-28",
                        "Solicitante": "Odorico"
                    },
                    {
                        "Descricao": "Compra de mesas de reunião",
                        "Valor_Uni": 2000.00,
                        "Quantidade": 2,
                        "Valor_Total": 4000.00,
                        "Status": "Pendente",
                        "Data": "2023-10-02",
                        "Solicitante": "Odorico"
                    }
                ]
            }
        ]
    }
]


function carregarDados() {
    const usuarioAtual = usuarioLogado
    const tabela = document.querySelector(".tableBody")
    tabela.innerHTML = ""  // Limpa a tabela antes de adicionar novos dados

    let usuarioEncontrado = false

    data.forEach(departamento => {
        departamento.Funcionarios.forEach(funcionario => {
            if (funcionario.Nome === usuarioAtual) {
                usuarioEncontrado = true
                funcionario.Aquisicoes.forEach(aquisicao => {
                    const newRow = document.createElement("div")
                    newRow.className = "row"

                    const celulas = [
                        aquisicao.Descricao,
                        aquisicao.Valor_Uni.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                        aquisicao.Quantidade,
                        aquisicao.Valor_Total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                        aquisicao.Status,
                        aquisicao.Data,
                        aquisicao.Solicitante
                    ]

                    celulas.forEach(celulaContent => {
                        const celula = document.createElement("div")
                        celula.className = "cell"
                        celula.textContent = celulaContent
                        newRow.appendChild(celula)
                    })

                    tabela.appendChild(newRow)
                    newRow.addEventListener('click', openRow)
                })
            }
        })
    })

    if (!usuarioEncontrado) {
        alert("Nenhuma aquisição encontrada para o usuário atual.")
    }
}

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
    usuarioLogado = e.value
    carregarDados()  // Atualiza a tabela quando o usuário é alterado
}

function administradorEstaOnline() {
    const label = userSelector.value

    if (label === "Juliano" || label === "Pasternak" || label === "Odorico") {
        habilitarPermissoesAdministrador()
    } else {
        alert("Você não tem permissão para acessar essas funcionalidades.")
    }
}

let isOpen = false
const toggleArrow = () => {
    const selectUser = document.querySelector('.userChanger');
    isOpen = !isOpen
    if (isOpen) {
      selectUser.classList.add('selectOpen');
    } else {
      selectUser.classList.remove('selectOpen');
    }
}

document.addEventListener('DOMContentLoaded', carregarDados)
document.querySelector('.adicionar').addEventListener('click', visibilidade)
document.querySelector('.ok').addEventListener('click', gremioGigante)

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        gremioGigante()
    }
})
