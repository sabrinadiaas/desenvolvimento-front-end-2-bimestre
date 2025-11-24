Rubrica de Avaliação: Projeto Integrador de Front-end (Parte 2)
Nome do Projeto: Inairan Moda Leve e Atemporal.
Integrantes: Luiz Henrique e Luiz Fernando.
Data de Preenchimento: 24/11/2025
Avaliadores: Sabrina Nogueira Dias e Sarah Ferreira Monteiro.

CRITÉRIOS TÉCNICOS

1. Modularização do Código HTML (0-8 pontos)
Iniciante (1 a 2 pontos): código ainda desorganizado, sem separação em componentes. Há repetição de código HTML em múltiplas páginas. Estrutura de pastas confusa ou inexistente.
Em desenvolvimento (3 a 4 pontos): alguns componentes identificados e separados, mas nem todos foram modularizados. Estrutura de pastas existe mas está incompleta. Ainda há repetição de código em alguns lugares.
Proficiente (5 a 6 pontos): componentes principais (header, footer, etc.) estão bem separados e organizados em pastas. Sistema de modularização está funcionando. Estrutura de pastas clara e profissional. Pouca ou nenhuma repetição de código.
Avançado (7 a 8 pontos): modularização exemplar com todos os componentes reutilizáveis bem separados. Sistema de carregamento de componentes funciona perfeitamente em todas as páginas. Estrutura de pastas profissional e bem documentada. Zero repetição de código HTML.
Pontuação atribuída: 4 / 8
Justificativa: Não foi possível identificar a modularização de nenhum elemento além dos arquivos css “carrinho.css” e “cores.css”. A organização das páginas está confusa, com o arquivo css para carrinho localizado na mesma página que os arquivos html das páginas principais. O código do cabeçalho e do rodapé se repete em todos os arquivos html.

2. Acessibilidade (0-8 pontos)
Iniciante (1 a 2 pontos): pouco ou nenhum esforço em acessibilidade. HTML semântico inadequado. Ausência de atributos alt em imagens. Formulários sem labels. Sem teste de navegação por teclado.
Em desenvolvimento (3 a 4 pontos): alguns recursos de acessibilidade implementados (ex.: algumas imagens com alt, alguns labels em formulários). HTML semântico parcial. Navegação por teclado parcialmente funcional. Foco visual não muito claro.
Proficiente (5 a 6 pontos): boa implementação de acessibilidade. HTML semântico em todo o site. Todas as imagens com alt descritivo. Formulários com labels associados. Navegação por teclado funcional. Estilos de :focus visíveis. Contraste adequado.
Avançado (7 a 8 pontos): excelente implementação de acessibilidade. HTML semântico completo e correto. Skip link implementado. Atributos ARIA onde necessário. Formulários perfeitamente acessíveis. Navegação por teclado fluida. Alto contraste e legibilidade. Teste de acessibilidade realizado com Lighthouse com bom resultado.
Pontuação atribuída: 6 / 8
Justificativa: O trabalho foi entregue por meio de seu link no repositório github e não foi possível acessá-lo no GitHub Pages, inviabilizando o uso da ferramenta Google Lighthouse. Por meio de ferramentas alternativas, como o “Wave Evaluation Tool” e o “Axe DevTools”, foi possível identificar 11 problemas de contraste, um alerta de texto redundante e um alerta acerca da  hierarquia de títulos implementada erroneamente, que não possui titulo <h1> e se inicia a partir do titulo <h2>. O projeto não possui skip link e possui contraste médio e legibilidade.

3. Responsividade (0-8 pontos)
Iniciante (1 a 2 pontos): site não se adapta bem a diferentes tamanhos de tela. Layout quebra ou fica ilegível em mobile ou tablet. Imagens não redimensionam. Pouco ou nenhum uso de media queries.
Em desenvolvimento (3 a 4 pontos): site adapta-se parcialmente. Alguns breakpoints implementados mas layout é inconsistente em certos tamanhos. Imagens redimensionam mas nem sempre bem. Espaçamentos irregulares.
Proficiente (5 a 6 pontos): site totalmente responsivo. Media queries bem aplicadas para mobile (375px), tablet (768px) e desktop (1024px+). Layout adapta-se fluidamente. Imagens redimensionam corretamente. Espaçamentos consistentes. Mobile-first implementado.
Avançado (7 a 8 pontos): responsividade impecável em todos os tamanhos de tela. Breakpoints bem planejados e executados. Uso avançado de Flexbox/Grid. Imagens e vídeo não apenas redimensionam, mas otimizam. Tipografia escalável. Experiência perfeita em qualquer dispositivo.
Pontuação atribuída: 7 / 8
Justificativa: As imagens e os elementos se adaptaram adequadamente, mas na página inicial a transformação da barra de navegação em um menu de hambúrguer (um ícone de três linhas) em dispositivos mobile não funcionou adequadamente e impossibilitou a navegação. 


4. Organização e Manutenibilidade do Código (0-8 pontos)
Iniciante (1 a 2 pontos): código desorganizado. Nomes de arquivos confusos. Comentários ausentes ou inúteis. Difícil entender ou manter o código.
Em desenvolvimento (3 a 4 pontos): estrutura básica de pastas. Nomes de arquivos parcialmente claros. Alguns comentários mas nem sempre bem colocados. Código funciona mas é moderadamente difícil manter.
Proficiente (5 a 6 pontos): código bem organizado em arquivos e pastas lógicas. Nomes descritivos e consistentes (kebab-case para arquivos, etc.). Comentários relevantes em trechos complexos. Fácil navegar e manter o código.
Avançado (7 a 8 pontos): organização exemplar. Estrutura de pastas profissional. Nomenclatura consistente e clara. Comentários bem colocados explicando lógica. Código limpo, sem redundâncias. Pronto para manutenção por terceiros.
Pontuação atribuída: 8 / 8
Justificativa: O código é simples e bem estruturado, com nomes intuitivos e descritivos que seguem o mesmo padrão de nomenclatura. Não possui nenhum comentário que explique a lógica, mas sua organização e ausência de poluidores visuais, faz com que a navegação pelo código e sua compreensão seja fácil e acessível para terceiros. 

CRITÉRIOS ESTÉTICOS
5. Design Visual Coerente (0-8 pontos)
Iniciante (1 a 2 pontos): visual inconsistente ou genérico. Cores sem harmonia. Tipografia inadequada. Sem identidade visual clara. Escolhas visuais não justificadas.
Em desenvolvimento (3 a 4 pontos): visual razoável mas com inconsistências. Paleta de cores básica. Tipografia aceitável mas não otimizada. Identidade visual fraca. Algumas justificativas de design.
Proficiente (5 a 6 pontos): design coerente e profissional. Paleta de cores bem escolhida e justificada. Tipografia adequada ao negócio e público. Identidade visual clara. Escolhas visuais alinhadas com a proposta.
Avançado (7 a 8 pontos): design excepcional e memorável. Paleta de cores harmoniosa e estratégica. Tipografia sofisticada e totalmente justificada. Identidade visual forte e diferenciada. Cada escolha visual tem propósito claro.
Pontuação atribuída: 8 / 8
Justificativa: O design simples e minimalista do site e sua preferência por tons neutros transmite a identidade visual necessária para o negócio. O uso de verde, cinza, branco e preto remete às cores usadas nas roupas em destaque exemplificando a tonalidade da marca. A tipografia usa uma fonte simples da família sans-serif com alta legibilidade e neutralidade. As escolhas visuais satisfazem a proposta do negócio.

6. Hierarquia Visual e Layout (0-8 pontos)
Iniciante (1 a 2 pontos): sem hierarquia clara. Elementos desalinhados. Espaçamento irregular. Layout confuso. Difícil identificar o conteúdo principal.
Em desenvolvimento (3 a 4 pontos): hierarquia básica presente. Alguns elementos alinhados. Espaçamento parcialmente consistente. Layout funcional mas poderia ser mais organizado.
Proficiente (5 a 6 pontos): hierarquia visual bem definida. Elementos alinhados e bem espaçados. Grid ou estrutura clara. Usuário consegue identificar facilmente o que é importante. Layout profissional.
Avançado (7 a 8 pontos): hierarquia excepcional que guia perfeitamente o olhar. Alinhamento impecável. Whitespace estratégico. Composição visual profissional e refinada. Usuário entende intuitivamente a estrutura.
Pontuação atribuída: 8 / 8
Justificativa: Os elementos estão perfeitamente alinhados e seguem um fluxo intuitivo para guiar a atenção do usuário. Com um template comumente usado em sites de roupas, é de fácil compreensão e familiar à seu público-alvo, com uma composição profissional. 

7. Usabilidade e Experiência do Usuário (0-8 pontos)
Iniciante (1 a 2 pontos): navegação confusa. Elementos pouco intuitivos. Usuário se perde facilmente. Botões e links desorganizados. Experiência frustrante.
Em desenvolvimento (3 a 4 pontos): navegação funcional mas não muito intuitiva. Alguns elementos claros, outros confusos. Usuário consegue navegar mas com dificuldade. Experiência mediana.
Proficiente (5 a 6 pontos): navegação clara e intuitiva. Botões e links bem-sinalizados. Menu funciona bem. Fluxo lógico no site. Usuário navega sem confusão. Boa experiência.
Avançado (7 a 8 pontos): navegação fluida e natural. Elementos interativos claramente identificáveis. Feedback visual claro (ex.: hover effects). Fluxo perfeito. Usuário tem excelente experiência. Interface agradável e intuitiva.
Pontuação atribuída: 8 / 8
Justificativa: O feedback visual é reconhecível e contrastante, tornando as interações identificáveis. Com exceção do botão de “Entrar”, todos os elementos do site entregam ao cliente feedback visual satisfatório, seja por meio de efeitos de hover ou por caixas de texto que confirmam a operação realizada.

8. Alinhamento com o Negócio (0-8 pontos)
Iniciante (1 a 2 pontos): design não reflete o negócio. Escolhas visuais desconectadas do público-alvo. Site poderia ser de qualquer negócio.
Em desenvolvimento (3 a 4 pontos): design parcialmente alinhado ao negócio. Algumas escolhas justificadas mas outras genéricas. Identidade do negócio parcialmente visível.
Proficiente (5 a 6 pontos): design bem alinhado ao negócio e público-alvo. Escolhas visuais justificadas e apropriadas. Identidade e proposta do negócio claramente comunicadas. Site é reconhecível para este negócio específico.
Avançado (7 a 8 pontos): design perfeitamente alinhado. Cada elemento fortalece a proposta de valor do negócio. Público-alvo claramente considerado em cada decisão. Site é memorável e diferenciado para este negócio. Design elevaria o nível do negócio real.
Pontuação atribuída: 8 / 8
Justificativa: O design se alinha com a expectativa de um usuário que busca comprar roupas pela internet, seguindo os padrões de outros sites como ele. Por meio de sua operação de carrinho de compras e de seu menu horizontal, ele transmite a profissionalidade e a elegância esperada de um negócio voltado à um público-alvo mais velho, que demanda funcionalidade e simplicidade acima de tudo.


RESUMO DA AVALIAÇÃO:

Aspecto
Pontos
Máximo
Técnicos
Modularização
4
8
Acessibilidade
6
8
Responsividade
7
8
Organização
8
8
Subtotal Técnico
25
32
Estéticos
Design Visual
8
8
Hierarquia e Layout
8
8
Usabilidade
8
8
Alinhamento com Negócio
8
8
Subtotal Estético
32
32
TOTAL GERAL
57
64

Interpretação da Pontuação
    • 56-64 pontos (Avançado): Projeto excepcional, pronto para ser um case de sucesso para o negócio.
    • 44-55 pontos (Proficiente): Projeto sólido com boas práticas bem aplicadas.
    • 32-43 pontos (Em Desenvolvimento): Projeto funcional, mas há bastante espaço para melhorias.
    • 0-31 pontos (Iniciante): Projeto precisa de revisões significativas antes da entrega final.

**Pontos Fortes (2-3 aspectos):**

O que mais se destacou positivamente no projeto?
A interface e a funcionalidade do carrinho.

**Oportunidades de Melhoria (2-3 aspectos):**

O que poderia ser aprimorado? Como?
O código pode ser melhorado a partir da modularização e o erro encontrado no menu de hamburguer pode ser consertado por meio de uma investigação profunda do código.

**Comentário Final:**

Uma mensagem de incentivo e reconhecimento do esforço.
O site ficou ótimo e as funcionalidades em JavaScript funcionaram perfeitamente.
