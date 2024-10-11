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

function isAdmin(usuario) {
    const admins = ["Juliano", "Pasternak", "Odorico"]
    return admins.includes(usuario)
}

function carregarDados() {
    const usuarioAtual = usuarioLogado
    const tabela = document.querySelector(".tableBody")
    tabela.innerHTML = ""

    let usuarioEncontrado = false

    data.forEach(departamento => {
        departamento.Funcionarios.forEach(funcionario => {
            if (funcionario.Nome === usuarioAtual || isAdmin(usuarioAtual)) {
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

                        const cellInput = document.createElement("input")
                        cellInput.type = "text"
                        cellInput.classList.add("inputField")
                        cellInput.value = celulaContent
                        cellInput.disabled = true
                        celula.appendChild(cellInput)
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

const addNewInput = () => {
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

function calcularEstatisticas() {
    let totalPedidos = 0
    let pedidosAprovados = 0
    let pedidosReprovados = 0
    let pedidosUltimos30Dias = 0
    let valorTotalUltimos30Dias = 0
    let valorMedioPedidos = 0
    let valorTotalCategorias = {}
    let maiorPedidoAberto = null

    const dataAtual = new Date()
    const data30DiasAtras = new Date()
    data30DiasAtras.setDate(dataAtual.getDate() - 30)

    data.forEach(departamento => {
        valorTotalCategorias[departamento.Titulo] = 0

        departamento.Funcionarios.forEach(funcionario => {
            funcionario.Aquisicoes.forEach(aquisicao => {
                totalPedidos++

                if (aquisicao.Status === "Aprovado") {
                    pedidosAprovados++
                } else if (aquisicao.Status === "Reprovado") {
                    pedidosReprovados++
                }

                const dataAquisicao = new Date(aquisicao.Data)

                if (dataAquisicao >= data30DiasAtras && dataAquisicao <= dataAtual) {
                    pedidosUltimos30Dias++
                    valorTotalUltimos30Dias += aquisicao.Valor_Total

                    valorTotalCategorias[departamento.Titulo] += aquisicao.Valor_Total
                }

                if (aquisicao.Status === "Aberto") {
                    if (!maiorPedidoAberto || aquisicao.Valor_Total > maiorPedidoAberto.Valor_Total) {
                        maiorPedidoAberto = aquisicao
                    }
                }
            })
        })
    })

    const percentualAprovados = ((pedidosAprovados / totalPedidos) * 100).toFixed(2)
    const percentualReprovados = ((pedidosReprovados / totalPedidos) * 100).toFixed(2)

    if (pedidosUltimos30Dias > 0) {
        valorMedioPedidos = (valorTotalUltimos30Dias / pedidosUltimos30Dias).toFixed(2)
    } else {
        valorMedioPedidos = 0
    }

    document.getElementById('totalPedidos').textContent = `Total de Pedidos: ${totalPedidos}`
    document.getElementById('pedidosAprovados').textContent = `Pedidos Aprovados: ${pedidosAprovados}`
    document.getElementById('pedidosReprovados').textContent = `Pedidos Reprovados: ${pedidosReprovados}`
    document.getElementById('percentualAprovados').textContent = `Percentual Aprovados: ${percentualAprovados}%`
    document.getElementById('percentualReprovados').textContent = `Percentual Reprovados: ${percentualReprovados}%`
    document.getElementById('pedidosUltimos30Dias').textContent = `Pedidos nos últimos 30 dias: ${pedidosUltimos30Dias}`
    document.getElementById('valorMedioPedidos').textContent = `Valor médio dos pedidos (últimos 30 dias): R$ ${valorMedioPedidos}`

    let categoriasTexto = ''
    for (const [categoria, valor] of Object.entries(valorTotalCategorias)) {
        categoriasTexto += `${categoria}: R$ ${valor.toFixed(2)}\n`
    }
    document.getElementById('valorTotalCategorias').textContent = `Valor total por categoria (últimos 30 dias):\n${categoriasTexto}`

    if (maiorPedidoAberto) {
        document.getElementById('maiorPedidoAberto').textContent = `Maior pedido ainda aberto:\nDescrição: ${maiorPedidoAberto.Descricao}, Valor Total: R$ ${maiorPedidoAberto.Valor_Total.toFixed(2)}, Solicitante: ${maiorPedidoAberto.Solicitante}`
    } else {
        document.getElementById('maiorPedidoAberto').textContent = `Maior pedido ainda aberto: Não há pedidos abertos no momento.`
    }
}


const addNew = () => {
    const tabela = document.querySelector(".tableBody")
    const primeiraRow = tabela.firstElementChild

    if (primeiraRow && !primeiraRow.querySelector('input').disabled) {
        const inputs = primeiraRow.querySelectorAll('input')
        const novaAquisicao = {
            Descricao: inputs[0].value,
            Valor_Uni: parseFloat(inputs[1].value.replace("R$", "").trim()),
            Quantidade: parseInt(inputs[2].value),
            Valor_Total: parseFloat(inputs[3].value.replace("R$", "").trim()),
            Status: inputs[4].value,
            Data: inputs[5].value,
            Solicitante: usuarioLogado
        }

        let aquisicaoAdicionada = false
        data.forEach(departamento => {
            departamento.Funcionarios.forEach(funcionario => {
                if (funcionario.Nome === usuarioLogado) {
                    funcionario.Aquisicoes.unshift(novaAquisicao)
                    aquisicaoAdicionada = true
                }
            })
        })

        if (aquisicaoAdicionada) {
            carregarDados()
        } else {
            alert("Usuário não encontrado para adicionar aquisição.")
        }
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
            addNew()
            inputs.forEach(input => {
                input.disabled = true
            })    
            primeiraRow.addEventListener('click', openRow)
            document.querySelector('.ok').style.display = 'none'
        } else {
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
    carregarDados()

    if (isAdmin(usuarioLogado)) {
        calcularEstatisticas()
        document.querySelector('.floatingMenuAdmin').style.display = 'block'
    } else {
        document.querySelector('.floatingMenuAdmin').style.display = 'none'
    }
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
const toggleArrow = (blur) => {
    const selectUser = document.querySelector('.userChanger');
    isOpen = !isOpen

    if (blur === true){
        isOpen = false
    }

    if (isOpen) {
      selectUser.classList.add('selectOpen');
    } else {
      selectUser.classList.remove('selectOpen');
    }
}

document.querySelector('.adicionar').addEventListener('click', visibilidade)
document.querySelector('.ok').addEventListener('click', gremioGigante)

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        gremioGigante()
    }
})
