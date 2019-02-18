const cards = document.querySelectorAll('.box');
let array = [...cards];
function shuffle(array) {
    var m = array.length, t, i;
  
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
}
const deck = document.querySelector(".content");
function startGame(){
   var shuffledCards = shuffle(array);
   for (var i= 0; i < shuffledCards.length; i++){
      [].forEach.call(shuffledCards, function(item){
         deck.appendChild(item);
      });
   }
}

function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));

window.onload = startGame();