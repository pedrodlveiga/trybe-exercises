function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysDecember() {
   
       
    let dezDays = document.querySelector("#days");
    
    for(let index = 0; index < dezDaysList.length; index += 1){
        let dia = dezDaysList[index];
        let diaLi = document.createElement('li');
        
        if (dia === 24 | dia === 31){
            diaLi.className = ' day feriado';
            diaLi.innerHTML = dia;
           dezDays.appendChild(diaLi)
        } else if (dia === 4 | dia === 11 | dia === 18) {
          diaLi.className = 'day sexta-feira'
          diaLiInnerHTML = dia;
          diaLi.innerHTML = dia;
          dezDays.appendChild(diaLi)
        } else if (dia === 25) {
          diaLi.ClassName = 'day feriado'
          diaLi.innerHTML = dia;
          dezDays.appendChild(diaLi)
        } else {
        diaLi.ClassName = 'day'
        diaLi.innerHTML = dia;
        dezDays.appendChild(diaLi);
        }
    }         
}
createDaysDecember();

// EXERCÍCIO 02


function recebeFeriados(buttonName) {

  let selDivButton = document.getElementsByTagName('div')[2];
  let criaButton = document.createElement('button');
  selDivButton.appendChild(criaButton);
  // criaButton.id = criaButtonID;// opção de criar e salvar em uma variável o nome do ID do elemento button criado e depois declarar que o id = variável criada;
  criaButton.id = "btn-holiday"; 
  criaButton.innerHTML = buttonName;
}
recebeFeriados('Feriados')



//EXERCÍCIO 04

function recebeFridays(buttonName) {
  let selDivButton = document.querySelector('.buttons-container');
  let criaButton = document.createElement('button');
  selDivButton.appendChild(criaButton);
  // criaButton.id = criaButtonID;// opção de criar e salvar em uma variável o nome do ID do elemento button criado e depois declarar que o id = variável criada;
  criaButton.id = "btn-friday"; 
  criaButton.innerHTML = buttonName;
}
recebeFridays("Sexta-feiras")

