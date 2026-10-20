# Caminhos · Cartas para abrir conversas

Ambiente de baralhos ilustrados para uso conduzido por psicólogo, com 10 temas e 60 cartas autorais em versão piloto.

## Usar

Escolha um dos dez quadrantes temáticos da trilha, ou selecione o tema pelo nome na lista abaixo. O tema abre sua mesa de cartas em modo apresentação. O psicólogo pode voltar ao próprio modo para ajustar os filtros. A pessoa escolhe uma entre até seis cartas fechadas. A carta abre uma imagem e uma pergunta; é possível trocar de carta a qualquer momento. No modo do psicólogo há indicações de processos da ACT e perguntas de aprofundamento.

O site não exige login. Não há campos para nome, prontuário ou respostas do paciente. Os identificadores das cartas favoritas ficam no navegador; as cartas vistas ficam apenas na memória da sessão aberta. O GitHub Pages possui suas próprias condições de hospedagem.

## Publicação no GitHub Pages

Site estático, sem instalação de dependências ou build. Em Settings → Pages, selecione Deploy from a branch, branch main e pasta / (root).

## Arquivos

- `index.html`: estrutura e telas.
- `styles.css`: identidade visual e layouts responsivos.
- `content.js`: temas, perguntas, processos e aprofundamentos.
- `trilha-temas-livre.png` e `journey.js`: tabuleiro ilustrado e áreas temáticas clicáveis, com suporte a teclado.
- `app.js`: seleção, filtros, apresentação e favoritos.
- `ilustracoes.png`: prancha conceitual original, exibida por recortes em CSS.
- `sw.js` e `manifest.webmanifest`: base para uso instalável e cache local após o primeiro carregamento bem-sucedido.

Para executar localmente, sirva esta pasta com um servidor estático, por exemplo `python -m http.server 5174`, e abra `http://localhost:5174`.

## Estado editorial

Conteúdo e imagens piloto, sujeitos a revisão clínica e testes com usuários. As seis ilustrações são compartilhadas entre os temas. Não é teste psicológico; não oferece escores, diagnósticos ou interpretações das imagens. Evidências sobre ACT não demonstram a eficácia deste baralho específico.

Referências de fundamentação constam no próprio aplicativo. Revisão de especialistas, teste de clareza e acolhimento e ampliação gradual do conteúdo são as próximas etapas propostas.
