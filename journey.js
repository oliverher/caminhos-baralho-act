// Coordinates use the original artwork viewBox, so the targets scale with the image.
const JOURNEY_TILES = [
 {deck:'emocoes',label:'Emoções',points:'276,693 397,558 596,615 525,786 369,773',x:431,y:744,width:139},
 {deck:'controle',label:'Controle e aprovação',points:'529,787 598,623 863,666 883,841 722,844',x:703,y:811,width:244},
 {deck:'relacoes',label:'Relações e vínculos',points:'882,666 1114,608 1256,734 1095,804 891,839',x:1054,y:774,width:234},
 {deck:'amor',label:'Relacionamentos amorosos',points:'1188,530 1417,551 1364,684 1257,725 1118,604',x:1284,y:653,width:286},
 {deck:'historia',label:'Eu e minha história',points:'1158,392 1262,371 1391,437 1420,539 1185,523',x:1290,y:506,width:229},
 {deck:'processos',label:'Novos jeitos de olhar',points:'1004,222 1204,241 1250,367 1156,391 951,338',x:1100,y:353,width:242},
 {deck:'valores',label:'Valores e sentido',points:'793,146 1000,216 948,333 748,268',x:873,y:296,width:215},
 {deck:'mudancas',label:'Mudanças e coragem',points:'571,133 780,141 743,264 548,244',x:670,y:233,width:245},
 {deck:'luto',label:'Perdas e saudade',points:'398,170 559,133 546,244 511,286 355,239',x:466,y:246,width:215},
 {deck:'rotina',label:'Rotina e descanso',points:'350,255 507,293 596,393 499,449 352,414 319,327',x:453,y:417,width:224}
];
function renderJourney(){
 const svg=$('journey-hotspots');
 svg.innerHTML=JOURNEY_TILES.map(tile=>{
  const deck=deckById(tile.deck);
  return `<g class="journey-tile" role="button" tabindex="0" data-journey-deck="${deck.id}" aria-label="Escolher tema ${escapeHtml(deck.short)} e abrir suas cartas"><title>${escapeHtml(deck.short)} — ${escapeHtml(deck.description)}</title><polygon points="${tile.points}"/><g class="tile-label" aria-hidden="true"><rect x="${tile.x-tile.width/2}" y="${tile.y-23}" width="${tile.width}" height="39" rx="19"/><text x="${tile.x}" y="${tile.y+3}" text-anchor="middle">${escapeHtml(tile.label)}</text></g></g>`;
 }).join('');
 const caption=$('board-caption');
 const describe=event=>{const target=event.target.closest('[data-journey-deck]');if(target){const deck=deckById(target.dataset.journeyDeck);caption.textContent=deck.short+' · '+deck.description;}};
 const resetCaption=()=>{caption.textContent='Você pode começar por qualquer tema. Não precisa seguir a ordem da trilha.';};
 svg.addEventListener('pointerover',describe);svg.addEventListener('focusin',describe);svg.addEventListener('pointerleave',resetCaption);svg.addEventListener('focusout',resetCaption);
 const open=target=>{const id=target.dataset.journeyDeck;startDeck(id);$('session-title').setAttribute('tabindex','-1');$('session-title').focus({preventScroll:true});};
 svg.addEventListener('click',event=>{const tile=event.target.closest('[data-journey-deck]');if(tile)open(tile);});
 svg.addEventListener('keydown',event=>{const tile=event.target.closest('[data-journey-deck]');if(tile&&(event.key==='Enter'||event.key===' ')){event.preventDefault();open(tile);}});
}
