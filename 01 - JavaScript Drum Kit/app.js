
  removeTransition = (e) => {
    // transform is the longest transition time so only that can be selected skip the rest
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // we get corresponding keycodes
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; //starts playing from beginning even if previous event wasn't completed
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key')); // we selected all class key
  // the event transition( like the key glow effect) must end
  // from the transition effect of class playing that we added
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

