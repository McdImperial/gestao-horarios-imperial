// Acrescenta o módulo "Gestão de Horários" à app, sem alterar o ficheiro original no armazenamento.
// Se qualquer ponto de encaixe não for encontrado exatamente uma vez, NÃO altera nada (a app fica como estava).
const fs=require('fs'),F='public/index.html';
let s=fs.readFileSync(F,'utf8');
const ICO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="16.5" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M7.5 14h3M13.5 14h3M7.5 17.5h3"/></svg>';
const R=[
['body[data-app="home"],.rail-btn[data-app="home"]{','body[data-app="horarios"],.rail-btn[data-app="horarios"],.hcard[data-app="horarios"]{--mc:var(--app-red);--mci:#fff;--mt:var(--app-red)}\nbody[data-app="home"],.rail-btn[data-app="home"]{'],
["    faturacao:'<svg viewBox","    horarios:'"+ICO+"',\n    faturacao:'<svg viewBox"],
['  <button class="rail-btn" data-app="financeiro">','  <button class="rail-btn rb-desk" data-app="horarios">'+ICO+'Horários</button>\n  <button class="rail-btn" data-app="financeiro">'],
['<div class="frame" id="frame-faturacao" hidden><div class="frame-load">A abrir Controlo Faturação…</div></div>','<div class="frame" id="frame-faturacao" hidden><div class="frame-load">A abrir Controlo Faturação…</div></div>\n<div class="frame" id="frame-horarios" hidden><div class="frame-load">A abrir Gestão de Horários…</div></div>'],
['    financeiro:{label:"Financeiro", color:"#1B8A8A"','    horarios:{label:"Gestão de Horários", color:"#DA291C", sub:"Escala · Planeamento · Staffing", src:"horarios.html", opts:[]},\n    financeiro:{label:"Financeiro", color:"#1B8A8A"'],
['    financeiro:"Controlo do cofre, pedidos de moedas e faturas de despesa."};','    horarios:"Escala semanal, planeamento diário, staffing e disponibilidades.",\n    financeiro:"Controlo do cofre, pedidos de moedas e faturas de despesa."};'],
['["disputas","faturacao"].forEach(a=>{ const box','["disputas","faturacao","horarios"].forEach(a=>{ const box'],
['if(v==="disputas"||v==="faturacao") frameFor(v, sec);','if(v==="disputas"||v==="faturacao"||v==="horarios") frameFor(v, sec);'],
['    cards.push(homeCard("faturacao",','    cards.push(homeCard("horarios", chip("Escala")+chip("Planeamento")+chip("Staffing")));\n    cards.push(homeCard("faturacao",'],
['      ${can("config")?it("config","Configurações"','      ${it("horarios","Horários","'+ICO.replace(/"/g,'&quot;')+'")}\n      ${can("config")?it("config","Configurações"'],
];
for(const [a,b] of R){const n=s.split(a).length-1;if(n!==1){console.log('patch-index: ponto de encaixe não encontrado ('+n+'x): '+a.slice(0,60)+' — app deixada sem alterações');process.exit(0)}}
for(const [a,b] of R)s=s.replace(a,()=>b);
fs.writeFileSync(F,s);console.log('patch-index: módulo Horários ligado ao menu');
