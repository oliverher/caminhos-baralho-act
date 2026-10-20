/* Conteúdo autoral piloto. Revisão clínica e testes de uso pendentes. */
const PROCESSES = ['Aceitação','Desfusão','Momento presente','Self como contexto','Valores','Ação comprometida'];
const VISUALS = ['Abrir espaço','Rádio da mente','Aqui, agora','Além dos rótulos','O que importa','Um pequeno passo'];
const IMAGE_DESCRIPTIONS = ['Uma pessoa sentada num banco ao lado de uma nuvem de chuva.','Uma pessoa caminha com um rádio próximo, enquanto sons ocupam o espaço ao redor.','Mãos seguram uma xícara junto a uma janela e uma planta.','Uma pessoa observa imagens de si em diferentes papéis da vida.','Uma mão segura uma bússola diante de uma bifurcação.','Uma pessoa coloca uma pedra num caminho de jardim.'];
const DECKS = [
 {id:'emocoes',name:'Emoções em movimento',short:'Emoções',category:'self',art:0,color:'#d8be99',description:'Sentir, reconhecer e abrir espaço para o que chega.',invite:'Nem sempre é fácil encontrar palavras para o que sentimos. Podemos começar por uma imagem.',context:'Peça uma situação concreta, sem pressupor que a pessoa já consiga nomear a emoção.',questions:[
 'Quando um sentimento difícil chega, o que você costuma fazer nos primeiros minutos?',
 'Que frase sua mente repete quando você sente que não deveria estar assim?',
 'Ao olhar para esta imagem, o que você percebe em você agora?',
 'Que sentimento tem ocupado tanto espaço que às vezes parece definir quem você é?',
 'Que emoção aparece quando você se aproxima de algo que importa?',
 'Qual pequeno cuidado cabe no seu dia, mesmo com esse sentimento por perto?']},
 {id:'controle',name:'Soltar algumas amarras',short:'Controle e aprovação',category:'self',art:1,color:'#c4d1b5',description:'Expectativas, medo de errar e a busca por aprovação.',invite:'Há expectativas que nos orientam e outras que apertam. Qual delas aparece por aqui?',context:'Investigue o que o controle protege e seus custos, sem tratá-lo como algo sempre prejudicial.',questions:[
 'O que você tenta evitar sentir quando busca fazer tudo perfeitamente?',
 'Qual “tenho que” costuma decidir seu dia antes mesmo de você escolher?',
 'Quando espera uma resposta de alguém, onde sua atenção costuma ficar?',
 'Que parte de você fica pouco visível quando tenta corresponder às expectativas dos outros?',
 'Se a aprovação não estivesse garantida, o que ainda valeria a pena fazer?',
 'Em que situação pequena você gostaria de experimentar fazer de um jeito suficientemente bom?']},
 {id:'relacoes',name:'Entre nós',short:'Relações e vínculos',category:'relations',art:2,color:'#cbb99e',description:'Limites, encontros e o espaço de cada pessoa.',invite:'Existem muitos jeitos de estar com alguém. Vamos olhar para os seus, com curiosidade.',context:'Considere reciprocidade, contexto e segurança. A pessoa pode falar de qualquer vínculo, inclusive o terapêutico.',questions:[
 'O que você sente quando precisa dizer a alguém que algo não está bem?',
 'Que história sua mente conta quando alguém demora a responder?',
 'Enquanto conversamos, o que facilita ou dificulta você dizer o que pensa?',
 'Que papel você costuma ocupar nas relações? Como é quando ele não cabe?',
 'Que qualidade você gostaria de cultivar no jeito de estar com as pessoas?',
 'Qual conversa pequena e possível poderia abrir mais espaço para você numa relação?']},
 {id:'amor',name:'Amor e outros encontros',short:'Relacionamentos amorosos',category:'relations',art:3,color:'#cdbec5',description:'Intimidade, diferenças e os caminhos de uma relação.',invite:'Cada relação tem sua história. Você escolhe de qual parte quer se aproximar hoje.',context:'Não presuma um modelo de casal ou incentive permanência. Aceitar emoções não significa aceitar violência ou violação de limites.',questions:[
 'Quando surge insegurança numa relação, o que você faz para tentar se proteger?',
 'Que ideia sobre como o amor deveria ser costuma pesar nas suas escolhas?',
 'O que você percebe em si quando alguém de quem gosta se aproxima?',
 'Que partes suas encontram espaço numa relação? Quais costumam ficar de fora?',
 'O que é importante para você numa relação, além de evitar que ela termine?',
 'Que limite ou necessidade você gostaria de conseguir comunicar com mais clareza?']},
 {id:'historia',name:'Eu, para além da história',short:'Identidade e autocompaixão',category:'self',art:3,color:'#c1c5d8',description:'Autocrítica, histórias antigas e novos olhares sobre si.',invite:'Você carrega histórias sobre quem é. Algumas acolhem; outras já podem ter ficado pequenas.',context:'Evite impor uma narrativa positiva. Explore a função das histórias e as experiências que elas deixam de fora.',questions:[
 'Quando você se critica, de que sentimento talvez esteja tentando se proteger?',
 'Qual descrição sobre você sua mente apresenta como se fosse a história inteira?',
 'Como é ouvir essa pergunta aqui, comigo, neste momento?',
 'O que mudou em você ao longo dos anos, mesmo quando um antigo rótulo continuou igual?',
 'Que jeito de tratar você gostaria de cultivar nos dias difíceis?',
 'Qual gesto concreto de cuidado seria possível hoje, sem precisar merecê-lo primeiro?']},
 {id:'processos',name:'Novos jeitos de olhar',short:'Flexibilidade no cotidiano',category:'self',art:1,color:'#b4cbbd',description:'Pensamentos, escolhas e outras formas de responder.',invite:'Talvez exista mais de um jeito de se relacionar com o que acontece por dentro.',context:'Use a imagem como convite, não como explicação obrigatória. O processo indicado é uma hipótese de trabalho.',questions:[
 'O que acontece com sua vida enquanto você tenta não sentir algo difícil?',
 'Quando sua mente diz “não vai dar”, o que você costuma fazer em seguida?',
 'O que está acontecendo ao seu redor agora, além dos pensamentos que chegaram?',
 'Que experiência sua não combina com a ideia de que você é sempre do mesmo jeito?',
 'Em meio a tantas urgências, o que você não gostaria de perder de vista?',
 'O que você poderia experimentar de diferente numa situação pequena desta semana?']},
 {id:'valores',name:'O que faz sentido',short:'Valores e sentido',category:'life',art:4,color:'#d5bf91',description:'O que importa, para além das expectativas e urgências.',invite:'Não precisamos encontrar uma grande resposta. Às vezes, o que importa aparece nos detalhes.',context:'Diferencie direções de vida de metas concluídas. Não pressuponha um propósito único ou valores considerados melhores.',questions:[
 'Que desconforto aparece quando você tenta fazer algo que importa para você?',
 'Que expectativa de outras pessoas costuma se confundir com um desejo seu?',
 'Qual momento recente fez você sentir que estava participando da própria vida?',
 'Que parte de você aparece quando ninguém está avaliando seu desempenho?',
 'Que jeito de agir continua importante mesmo quando o resultado não é o esperado?',
 'Que escolha pequena, nesta semana, combinaria com o que você quer cultivar?']},
 {id:'mudancas',name:'Passos no desconhecido',short:'Mudanças e coragem',category:'life',art:5,color:'#b7c7ad',description:'Transições, dúvidas e os pequenos movimentos possíveis.',invite:'Mudar pode trazer vontade e receio ao mesmo tempo. Podemos ouvir os dois.',context:'Considere recursos e barreiras reais. Um pequeno passo pode ser pausar, pedir apoio ou rever o caminho.',questions:[
 'O que você gostaria de mudar, mas tem receio de sentir ao começar?',
 'Que previsão da sua mente costuma fazer uma possibilidade parecer impossível?',
 'O que você nota agora ao falar dessa mudança?',
 'Que versão antiga de você ainda parece decidir o que pode tentar hoje?',
 'O que merece ser levado junto, mesmo que outras coisas mudem?',
 'Qual passo caberia nas suas condições de hoje, sem precisar resolver tudo?']},
 {id:'luto',name:'O que permanece',short:'Perdas e saudade',category:'life',art:0,color:'#bdc3c3',description:'Ausências, lembranças e aquilo que segue com a gente.',invite:'Não existe pressa para falar de uma perda. Você pode escolher uma lembrança, uma palavra ou passar.',context:'Não proponha estágios, prazos, superação ou uma leitura obrigatória da perda. Permita silêncio e interrupção.',questions:[
 'Quando a saudade chega, o que costuma ajudar você a atravessar aquele momento?',
 'Existe algum “eu já deveria” que torna sua experiência de perda ainda mais difícil?',
 'O que você precisa de mim agora enquanto se aproxima dessa lembrança?',
 'Que partes de você mudaram com essa perda? Quais você reconhece ainda por perto?',
 'O que desse vínculo ou dessa fase você gostaria de carregar de algum jeito?',
 'Que cuidado ou apoio seria possível buscar nos próximos dias?']},
 {id:'rotina',name:'Um respiro no dia',short:'Rotina, trabalho e descanso',category:'life',art:2,color:'#c9cfb0',description:'Entre demandas, pausas e o ritmo possível de viver.',invite:'Entre tudo o que precisa ser feito, também existe alguém vivendo esse dia: você.',context:'Inclua condições de trabalho, renda e responsabilidades. Não transforme sobrecarga estrutural em falha individual.',questions:[
 'Quando tenta descansar, que sensações ou preocupações costumam aparecer?',
 'Qual regra sobre produtividade acompanha você mesmo fora do trabalho?',
 'Em que momento do seu dia você percebe que está funcionando no automático?',
 'Quem você consegue ser quando não está resolvendo alguma coisa para alguém?',
 'O que você gostaria que tivesse mais espaço numa semana possível, não ideal?',
 'Que ajuste pequeno ou pedido de apoio poderia tornar um dia seu mais habitável?']}
];
const FOLLOWUPS = [
 ['Você lembra de uma situação recente em que isso aconteceu?','O que essa reação ajuda a evitar? E o que custa, quando se repete?','Há espaço para reconhecer esse sentimento sem precisar resolver tudo agora?'],
 ['Em quais situações essa frase costuma aparecer?','Quando você segue essa frase, o que acontece depois?','Como seria notar essa frase como algo que a mente está dizendo?'],
 ['Como é perceber isso aqui, neste momento?','O que muda na conversa quando você nota essa experiência?','Prefere ficar mais um pouco com isso, mudar de assunto ou fazer uma pausa?'],
 ['Quando essa descrição parece caber? Quando ela deixa algo importante de fora?','Que experiências mostram outros lados seus?','Como é contar essa história sobre você aqui comigo?'],
 ['O que torna isso significativo para você?','Esse caminho tem mais a ver com uma escolha sua ou com uma cobrança?','Como isso apareceria num gesto do cotidiano?'],
 ['O que tornaria esse movimento viável na sua realidade?','Que obstáculo pode aparecer? De que apoio você poderia precisar?','Se não funcionar como imaginou, como poderia ajustar o caminho?']
];
const CARDS = DECKS.flatMap(deck=>deck.questions.map((text,index)=>({id:deck.id+'-'+(index+1),deck:deck.id,text,process:PROCESSES[index],art:index,title:VISUALS[index],intensity:deck.id==='luto'?'profunda':(['leve','média','leve','profunda','média','leve'][index]),followups:FOLLOWUPS[index],context:deck.context})));
