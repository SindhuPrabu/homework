/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

//target the classlist property when the js-ball is clicked 
//defening dataset data and its property is called increment 
//parseInt is converting the string data-increment="20" to integer

arenaEl.addEventListener('click', function(play_game) {
    if ( play_game.target.classList.contains('js-ball') ) {
      score += parseInt(play_game.target.dataset.increment);
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else {
        declareWinner();
      }
    }
  })
  
  function declareWinner() {
    document.body.classList.add('game-over');
  }
