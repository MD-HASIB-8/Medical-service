const shot = document.getElementById("shot")

document.addEventListener('click', () => {
    shot.currentTime = 0;
    shot.volume = 1;
    shot.play();
  });