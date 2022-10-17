/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

//target the classlist property when the js-ball is clicked

arenaEl.addEventListener('click', function(play_game) {
    if (play_game.target.classList.contains('js-ball') ) {
      score += 10;
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
  


