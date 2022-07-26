let departureDateEntry = prompt('Digite a data de partida no formato DD/MM/AAAA');
let departureDate = moment(departureDateEntry, 'DD/MM/AAAA');

let today = moment() 

// calcular a diferença entre a data de hoje com a data de partido digitada pelo usuário.
let dateDiference = today - departureDate // esse cálculo irá trazer o resultado em milisegundos

let chosenOption = prompt('Escolha como gostaria de exibir o tempo de partida. \n1 - Segundos \n2- Minutos \n3- Horas \n4- Dias');

// verificar qual a opção escolhida pelo usuário e fazer o calculo correto para exibição da data.
if(chosenOption == '1') {
  let secondsOfDeparture = Math.round(dateDiference / 1000);
  alert('Tempo de vôo: ' + secondsOfDeparture + ' segundos.');
} else if(chosenOption == '2') {
  let minutsOfDeparture = Math.round(dateDiference / 1000 / 60);
  alert('Tempo de vôo: ' + minutsOfDeparture + ' minutos.');
} else if(chosenOption == '3') {
  let hourOfDeparture = Math.round(dateDiference / 1000 / 3600);
  alert('Tempo de vôo: ' + hourOfDeparture + ' houras.');
} else if(chosenOption == '4') {
  let dateOfDeparture = Math.round(dateDiference/1000 / 3600 / 24);
  alert('Tempo de vôo: ' + dateOfDeparture + ' dias.');
} else {
  alert('Opção inválida, escolha entre 1 a 4.');
}