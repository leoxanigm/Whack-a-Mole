document.addEventListener('DOMContentLoaded', () => {
  const timeEl = document.getElementById('time-left');
  const scoreEl = document.getElementById('score');
  const gameBoard = document.getElementsByClassName('game')[0];
  const cubes = [...document.getElementsByClassName('cube')];
  let score = 0;
  let time = 60;
  let speed = 700;
  let interval;

  const showMole = () => {
    cubes.forEach(cube => {
      cube.classList.remove('mole');
    });

    cubes[Math.floor(Math.random() * 9)].classList.add('mole');
  };

  const gameOver = () => {
    cubes.forEach(cube => {
      cube.classList.remove('mole');
    });

    scoreEl.textContent = 'Game Over! Your final score is: ' + score;
    clearInterval(interval);
  }

  const gameCounter = (t) => {
    if ( t <=0 ) {
      gameOver();
      return;
    } else {
      t--;
      timeEl.textContent = t;
      setTimeout(function() {
        gameCounter(t);
      }, 1000);
    }
  }

  gameBoard.addEventListener('click', (e) => {
    if ( e.target.classList.contains('mole') ) {
      score++;
      scoreEl.textContent = score;
      e.target.classList.remove('mole');
    }
  });

  interval = setInterval(showMole, speed);
  gameCounter(time);
});
