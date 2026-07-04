// Opening screen (abrir convite)
document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openInvite');
  const openingScreen = document.getElementById('opening-screen');
  const invitationContent = document.getElementById('invitation-content');

  const musicEl = document.getElementById('bgMusic');
  const musicBtn = document.getElementById('musicBtn');

  if (!openBtn || !openingScreen || !invitationContent) return;

  // Música: tenta tocar quando o usuário interagir (clique em “Abrir Convite”).
  // Obs: navegadores geralmente bloqueiam autoplay sem interação.
  const tryPlayMusic = async () => {
    if (!musicEl) return;
    try {
      await musicEl.play();
      if (musicBtn) musicBtn.textContent = '🔊 Música';
    } catch (e) {
      // Se bloquear autoplay, deixa no play manual via botão.
      if (musicBtn) musicBtn.textContent = '🎵 Música';
    }
  };

  if (musicBtn && musicEl) {
    musicBtn.addEventListener('click', async () => {
      if (musicEl.paused) {
        await tryPlayMusic();
      } else {
        musicEl.pause();
        musicBtn.textContent = '🔇 Música';
      }
    });
  }

  openBtn.addEventListener('click', () => {
    openingScreen.setAttribute('aria-hidden', 'true');
    invitationContent.setAttribute('aria-hidden', 'false');

    openingScreen.style.opacity = '0';
    openingScreen.style.pointerEvents = 'none';

    invitationContent.classList.add('is-revealed');

    // Inicia a música após abrir (interação do usuário já aconteceu)
    tryPlayMusic();
  });
});

// CONTAGEM REGRESSIVA

const weddingDate = new Date("Nov 15, 2026 18:00:00").getTime();


setInterval(() => {

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

},1000);


// PARTÍCULAS FLUTUANTES

const particles = document.querySelector('.particles');

for(let i=0;i<40;i++){

const particle = document.createElement('div');

particle.classList.add('particle');

let size = Math.random()*8+3;

particle.style.width=size+'px';
particle.style.height=size+'px';

particle.style.left=Math.random()*100+'%';

particle.style.animationDuration=
(Math.random()*10+8)+'s';

particle.style.opacity=
Math.random()*0.5;

particles.appendChild(particle);

}


// ANIMAÇÃO AO ROLAR

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(50px)";
section.style.transition="1s";

observer.observe(section);

});