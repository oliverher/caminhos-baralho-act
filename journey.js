// Coordinates use the original artwork viewBox, so the targets scale with the image.
const JOURNEY_TILES = [
 {deck:'emocoes',label:'Emoções',points:'276,693 397,558 596,615 525,786 369,773',x:431,y:584,width:139},
 {deck:'controle',label:'Controle e aprovação',points:'529,787 598,623 863,666 883,841 722,844',x:703,y:664,width:244},
 {deck:'relacoes',label:'Relações e vínculos',points:'882,666 1114,608 1256,734 1095,804 891,839',x:1054,y:660,width:234},
 {deck:'amor',label:'Relacionamentos amorosos',points:'1188,530 1417,551 1364,684 1257,725 1118,604',x:1284,y:551,width:286},
 {deck:'historia',label:'Eu e minha história',points:'1158,392 1262,371 1391,437 1420,539 1185,523',x:1290,y:411,width:229},
 {deck:'processos',label:'Novos jeitos de olhar',points:'1004,222 1204,241 1250,367 1156,391 951,338',x:1100,y:255,width:242},
 {deck:'valores',label:'Valores e sentido',points:'793,146 1000,216 948,333 748,268',x:873,y:179,width:215},
 {deck:'mudancas',label:'Mudanças e coragem',points:'571,133 780,141 743,264 548,244',x:670,y:139,width:245},
 {deck:'luto',label:'Perdas e saudade',points:'398,170 559,133 546,244 511,286 355,239',x:466,y:164,width:215},
 {deck:'rotina',label:'Rotina e descanso',points:'350,255 507,293 596,393 499,449 352,414 319,327',x:453,y:282,width:224}
];
function renderJourney(){
 const svg=$('journey-hotspots');
 svg.innerHTML=JOURNEY_TILES.map(tile=>{
  const deck=deckById(tile.deck);
  return `<g class="journey-tile" role="button" tabindex="0" data-journey-deck="${deck.id}" aria-label="Escolher tema ${escapeHtml(deck.short)} e abrir suas cartas"><polygon points="${tile.points}"/><text class="quadrant-title" x="${tile.x}" y="${tile.y}" text-anchor="middle" aria-hidden="true">${escapeHtml(tile.label)}</text></g>`;
 }).join('');
 $('journey-theme-nav').innerHTML=JOURNEY_TILES.map(tile=>`<button type="button" data-theme-name="${tile.deck}">${escapeHtml(tile.label)}</button>`).join('');
 $('journey-theme-nav').addEventListener('click',event=>{const button=event.target.closest('[data-theme-name]');if(button)startDeck(button.dataset.themeName);});
 const heading=$('board-topic-title');
 const caption=$('board-caption');
 const describe=event=>{const target=event.target.closest('[data-journey-deck]');if(target){const deck=deckById(target.dataset.journeyDeck);heading.textContent=deck.short;caption.textContent=deck.description;}};
 const resetCaption=()=>{heading.textContent='Escolha um tema na trilha';caption.textContent='Você pode começar por qualquer tema. Não precisa seguir a ordem da trilha.';};
 svg.addEventListener('pointerover',describe);svg.addEventListener('focusin',describe);svg.addEventListener('pointerleave',resetCaption);svg.addEventListener('focusout',resetCaption);
 const open=target=>{const id=target.dataset.journeyDeck;startDeck(id);$('session-title').setAttribute('tabindex','-1');$('session-title').focus({preventScroll:true});};
 svg.addEventListener('click',event=>{const tile=event.target.closest('[data-journey-deck]');if(tile)open(tile);});
 svg.addEventListener('keydown',event=>{const tile=event.target.closest('[data-journey-deck]');if(tile&&(event.key==='Enter'||event.key===' ')){event.preventDefault();open(tile);}});
}
