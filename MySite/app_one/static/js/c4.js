var player1Name = prompt('Player 1: Enter your name, you will be blue')
var player1Color = 'rgb(20, 110, 255)'

var player2Name = prompt('Player 2: Enter your name, you will be red')
var player2Color = 'rgb(255, 53, 53)'

var rbutton = $('#rb');
var buttons = $(".c4 button")

var disp = $('h3').css('display')

function clearBoard(){
  buttons.css('background-color', 'rgb(128, 128, 128)')
  $('h1').text('Welcome to Connect Four!')
  $('h2').text('The object of this game is to connect four of your chips in a row!')
  currentPlayer = 1;
  currentPlayerName = player1Name;
  currentColor = player1Color;
  $('h3').css('display', disp)
  $('h3').text(currentPlayerName +': it is your turn, select a column to drop in')
}

rbutton.on('click',clearBoard)

function changeColor(rowIndex, colIndex, color){
  return $('table tr:eq('+rowIndex+') td:eq('+colIndex+')').find('button').css('background-color', color)
}

function returnColor(rowIndex, colIndex){
  return $('table tr:eq('+rowIndex+') td:eq('+colIndex+')').find('button').css('background-color')
}

function checkBottom(colIndex){
  for (var row = 5; row > -1; row--) {
    if (returnColor(row, colIndex) === 'rgb(128, 128, 128)') {
      return row;
    }
  }
}

function colorMatch(one,two,three,four){
  return (one === two && one === three && one === four && one!== 'rgb(128, 128, 128)' && one !== undefined)
}

function horizWin(){
  for (var row = 0; row<6; row++) {
    for (var col = 0; col<4; col++) {
      if (colorMatch(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))) {
        return true
      }
    }
  }
}

function verticalWin(){
  for (var col = 0; col<7; col++) {
    for (var row = 0; row<3; row++) {
      if (colorMatch(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))) {
        return true
      }
    }
  }
}

function diagonalWin(){
  for (var col = 0; col<4; col++) {
    for (var row=0; row<3; row++) {
      if (colorMatch(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        return true
      }else if (colorMatch(returnColor(row+3,col), returnColor(row+2,col+1), returnColor(row+1,col+2), returnColor(row,col+3))) {
        return true
      }
    }
  }
}

function checkWin(){
  if (horizWin() || verticalWin() || diagonalWin()) {
    $('h1').text(currentPlayerName + ' has won the game!')
    $('h2').text('');
    $('h3').fadeOut('fast');
    return true
  }
}

function checkDraw(){
  for (row=0; row<6; row++) {
    for (col=0; col<7; col++) {
      if (returnColor(row, col) === 'rgb(128, 128, 128)') {
        return
      }
    }
  }
  $('h1').text('It is a draw!')
  $('h2').text('');
  $('h3').fadeOut('fast');
  return true
}

/////////////////// Game logic ////////////

var currentPlayer = 1;
var currentPlayerName = player1Name;
var currentColor = player1Color;

$('h3').text(currentPlayerName +': it is your turn, select a column to drop in')

$('table button').on('click', function(){
  if (checkWin()) {
    return
  }else if (checkDraw()) {
    return
  }

  var colIn = $(this).closest('td').index();
  var bottomAvail = checkBottom(colIn);
  changeColor(bottomAvail, colIn, currentColor);

  if (checkWin()) {
    return
  }else if (checkDraw()) {
    return
  }

  currentPlayer *= -1;
  if (currentPlayer === 1) {
    currentPlayerName = player1Name;
    currentColor = player1Color;
  }else{
    currentPlayerName = player2Name;
    currentColor = player2Color;
  }
  $('h3').text(currentPlayerName +': it is your turn, select a column to drop in');

})
