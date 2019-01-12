var player1Marker = 'X'
var player2Marker = 'O'

var rbutton = $('#rb');
var squares = $(".tt button");

var disp = $('h3').css('display')

function clearBoard() {
  squares.text('');
  $('h1').text("Welcome to Tic Tac Toe!")
  $('h2').text("Let's get started!")
  currentPlayer = 1;
  currentMarker = player1Marker;
  $('h3').css('display', disp)
  $('h3').text(currentMarker +': it is your turn')
}

rbutton.on('click',clearBoard)

function changeMarker(rowIndex, colIndex, marker){
  if ($('table tr:eq('+rowIndex+') td:eq('+colIndex+')').find('button').text() == '') {
    $('table tr:eq('+rowIndex+') td:eq('+colIndex+')').find('button').text(marker)
    return true
  }else {
    $('h2').text('Invalid Choice')
    return false
  }
}

function returnMarker(rowIndex, colIndex){
  return $('table tr:eq('+rowIndex+') td:eq('+colIndex+')').find('button').text()
}

function markerMatch(one,two,three){
  return (one === two && one === three && one!== '' && one !== undefined)
}

function hvWin(){
  for (var i = 0; i<3; i++) {
    if (markerMatch(returnMarker(i,0), returnMarker(i,1), returnMarker(i,2))) {
      return true
    }else if (markerMatch(returnMarker(0,i), returnMarker(1,i), returnMarker(2,i))) {
      return true
    }
  }
}

function diagonalWin(){
  if (markerMatch(returnMarker(0,0), returnMarker(1,1), returnMarker(2,2))) {
    return true
  }else if (markerMatch(returnMarker(2,0), returnMarker(1,1), returnMarker(0,2))) {
    return true
  }
}

function checkWin(){
  if (hvWin() || diagonalWin()) {
    $('h1').text(currentMarker + ' has won the game!')
    $('h3').fadeOut('fast');
    return true
  }
}

function checkDraw(){
  for (row=0; row<3; row++) {
    for (col=0; col<3; col++) {
      if (returnMarker(row, col) === '') {
        return false
      }
    }
  }
  $('h1').text('It is a draw!')
  $('h3').fadeOut('fast');
  return true
}

/////////////////// Game logic ////////////

var currentPlayer = 1;
var currentMarker = player1Marker;

$('h3').text(currentMarker +': it is your turn')

$('table button').on('click', function(){
  if (checkWin()) {
    return
  }else if (checkDraw()) {
    return
  }
  $('h2').text('');
  var colIn = $(this).closest('td').index();
  var rowIn = $(this).closest('tr').index();
  if (!changeMarker(rowIn, colIn, currentMarker)) {
    return
  }
  if (checkWin()) {
    return
  }else if (checkDraw()) {
    return
  }

  currentPlayer *= -1;
  if (currentPlayer === 1) {
    currentMarker = player1Marker;
  }else{
    currentMarker = player2Marker;
  }
  $('h3').text(currentMarker +': it is your turn');

})
