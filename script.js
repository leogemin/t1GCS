const toggleTheme = () => {
      document.querySelector('body').classList.toggle('darkmode')
}



const addNew = () => {
      const tabela = document.querySelector(".table");
      const primeiraRow = tabela.children[1]; 
  
      const newRow = document.createElement("div");
      newRow.className = "row";
  
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
  
  const gremioGigante = () => {
      const tabela = document.querySelector(".table");
      const newRow = tabela.querySelector(".row"); 
      const inputs = newRow.querySelectorAll(".inputField"); 
  
      const dataRow = document.createElement("div");
      dataRow.className = "row";
  
      let hasValue = false;
  
      inputs.forEach(input => {
          const celula = document.createElement("div");
          celula.className = "cell";
          celula.textContent = input.value; 
          dataRow.appendChild(celula);
  
          if (input.value.trim() !== "") {
              hasValue = true;
          }
      });
  
      if (hasValue) {
          tabela.appendChild(dataRow); 
      }
  
    
      newRow.querySelectorAll("input").forEach(input => input.value = "");
      newRow.style.display = 'none'; 
     
      document.querySelector('.ok').style.display = 'none';
  }
  
  function visibilidade() {
      const botaoOK = document.querySelector('.ok');
      if (botaoOK.style.display === 'none' || botaoOK.style.display === '') {
          botaoOK.style.display = 'block';
      }
  }
  
 
  document.querySelector('.adicionar').addEventListener('click', visibilidade);
  
  
  document.querySelector('.ok').addEventListener('click', gremioGigante); 