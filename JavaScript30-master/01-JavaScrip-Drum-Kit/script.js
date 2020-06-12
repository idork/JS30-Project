
function playSound(e){ /* listenin to the key down event & when we find it we run function*/
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`) //tells you keyboard key number on console
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //selected key dive or key clas, assigns it to specfic div
   
    if (!audio) return; //this stops function from running
    key.classList.add('playing'); //this makes playing css happen at the samee as the current js so the colors change when clicked
    audio.currentTime=0; //this makes it rewind to the start
    audio.play(); //plays audio
   
  }
  
  function removeTransition(e){
    if (e.propertyName !=='transform') return; //this skips it if its not a transform
    this.classList.remove('playing'); //this removes the css for playing
  }
  
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown',playSound);