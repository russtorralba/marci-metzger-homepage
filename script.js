
const toast = document.querySelector('.toast');
function notify(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
document.querySelector('.menu-toggle').addEventListener('click', e => { const nav = document.querySelector('.nav'); const open = nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));
document.querySelector('#search-form').addEventListener('submit', e => { e.preventDefault(); notify('Search saved — matching listings will be ready soon.'); });
document.querySelector('#contact-form').addEventListener('submit', e => { e.preventDefault(); e.currentTarget.reset(); notify('Thanks! Your message has been received.'); });

document.querySelectorAll('img[src^="assets/"]').forEach(image => {
  const fallback = image.getAttribute('src').replace('assets/', '');
  const useFallback = () => { image.src = fallback; };
  if (image.complete && !image.naturalWidth) useFallback();
  image.addEventListener('error', useFallback, { once: true });
});

const githubHero = new Image();
githubHero.onload = () => {
  document.querySelector('.hero').style.backgroundImage = "linear-gradient(90deg,rgba(13,21,20,.65),rgba(13,21,20,.13)),url('hero.jpg')";
  document.querySelector('.search-banner').style.backgroundImage = "linear-gradient(#151c1aa1,#151c1a45),url('gallery.jpg')";
  document.querySelector('.cta').style.backgroundImage = "linear-gradient(#141b1b8c,#141b1b52),url('pool.jpg')";
};
githubHero.src = 'hero.jpg';
