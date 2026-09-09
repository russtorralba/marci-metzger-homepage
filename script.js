const toast = document.querySelector('.toast');
function notify(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
document.querySelector('.menu-toggle').addEventListener('click', e => { const nav = document.querySelector('.nav'); const open = nav.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));
document.querySelector('#search-form').addEventListener('submit', e => { e.preventDefault(); notify('Search saved — matching listings will be ready soon.'); });
document.querySelector('#contact-form').addEventListener('submit', e => { e.preventDefault(); e.currentTarget.reset(); notify('Thanks! Your message has been received.'); });
