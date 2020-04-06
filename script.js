$(document).ready(function(){
  var quadrato;
  var container = $('.sezionegriglia');
  var random = []
  var z = 0;
  var rossi = 0;
  var verdi = 0;
  //creazione 64 quadrati
  for (var i = 0; i < 64; i++) {
    container.append('<div class="casella verdeprima"></div>')
  }

  //assegnazione 15 numeri randomici
  while (z < 15) {
    numRandom = Math.floor(Math.random()*64) + 1;
    var test = random.indexOf(numRandom);
    if (test === -1) {
      random.push(numRandom);
      z++
    }
  }

  //assegnazione numeri randomici all'indice dei quadrati
  for (var i = 0; i < random.length; i++) {
    var indice = random[i] - 1;
    $('.casella').eq(indice).removeClass('verdeprima');
    $('.casella').eq(indice).addClass('rossoprima');
  }

  $('.casella').click(
    azione
  );

  function azione(){
    if($(this).hasClass('rossoprima')){
      $(this).removeClass('rossoprima')
      $(this).addClass('rosso');
      rossi = rossi + 1;
      if(rossi === 15){
        alert("Hai Perso!!")
      };
      document.getElementById("rossi").innerHTML = "Totale Rossi : " + rossi;
    }
    else if($(this).hasClass('verdeprima')){
      $(this).addClass('verde');
      $(this).removeClass('verdeprima');
      verdi = verdi + 1;
      if (verdi === 49) {
        alert("Hai vinto!")
      }
      document.getElementById("verdi").innerHTML = "Totale Verdi : " + verdi;
    }
  }
})
