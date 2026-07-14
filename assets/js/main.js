const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
function setHeader(){header?.classList.toggle('scrolled',window.scrollY>24)}
setHeader();window.addEventListener('scroll',setHeader,{passive:true});
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false')}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
