const toggleTheme = () => {
      document.querySelector('body').classList.toggle('darkmode')
}



const addNew = () => {
    const tabela = document.querySelector(".tableBody");
    const primeiraRow = tabela.firstElementChild; // Alterado para firstElementChild

    const newRow = document.createElement("div");
    newRow.className = "row";

    // Verifica se a primeira row possui um input habilitado
    if (primeiraRow && primeiraRow.querySelector('input').disabled) {
        for (let i = 0; i < 7; i++) {
            const celula = document.createElement("div");
            celula.className = "cell";

            const cellInput = document.createElement("input");
            cellInput.type = "text";
            cellInput.classList.add("inputField");
            celula.appendChild(cellInput);
            newRow.appendChild(celula);
        }
        tabela.insertBefore(newRow, primeiraRow);
    }
}

  
  const gremioGigante = () => {
        const tabela = document.querySelector(".tableBody");
        const primeiraRow = tabela.firstElementChild; 
        const inputs = primeiraRow.querySelectorAll('input')
        inputs.forEach(input => {
            input.disabled = true;
        })
        document.querySelector('.ok').style.display = 'none'
    }
  
  function visibilidade() {
      const botaoOK = document.querySelector('.ok');
      if (botaoOK.style.display === 'none' || botaoOK.style.display === '') {
          botaoOK.style.display = 'block';
      }
  }
  
 
  document.querySelector('.adicionar').addEventListener('click', visibilidade);
  
  
  document.querySelector('.ok').addEventListener('click', gremioGigante); 



  function administradorEstaOnline() {


  }