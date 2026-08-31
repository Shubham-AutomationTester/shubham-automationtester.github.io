const q=document.querySelector('#search');const f=document.querySelector('#privacy');const cards=[...document.querySelectorAll('.card')];const empty=document.querySelector('#empty');
function apply(){const s=(q?.value||'').trim().toLowerCase();const p=f?.value||'all';let shown=0;cards.forEach(c=>{const text=c.dataset.search;const priv=c.dataset.private;const ok=(!s||text.includes(s))&&(p==='all'||priv===p);c.style.display=ok?'':'none';if(ok)shown++});if(empty)empty.style.display=shown?'none':'block'}
q?.addEventListener('input',apply);f?.addEventListener('change',apply);
