Rubrica de Avaliação: Projeto Integrador de Front-end (Parte 2)
Nome do Projeto: Delícias da Vó Nena.
Integrantes: Lucas Domingues.
Data de Preenchimento: 24/11/2025
Avaliadores: Sabrina Nogueira Dias e Sarah Ferreira Monteiro.

CRITÉRIOS TÉCNICOS

1. Modularização do Código HTML (0-8 pontos)
Iniciante (1 a 2 pontos): código ainda desorganizado, sem separação em componentes. Há repetição de código HTML em múltiplas páginas. Estrutura de pastas confusa ou inexistente.
Em desenvolvimento (3 a 4 pontos): alguns componentes identificados e separados, mas nem todos foram modularizados. Estrutura de pastas existe mas está incompleta. Ainda há repetição de código em alguns lugares.
Proficiente (5 a 6 pontos): componentes principais (header, footer, etc.) estão bem separados e organizados em pastas. Sistema de modularização está funcionando. Estrutura de pastas clara e profissional. Pouca ou nenhuma repetição de código.
Avançado (7 a 8 pontos): modularização exemplar com todos os componentes reutilizáveis bem separados. Sistema de carregamento de componentes funciona perfeitamente em todas as páginas. Estrutura de pastas profissional e bem documentada. Zero repetição de código HTML.
Pontuação atribuída: 8 / 8
Justificativa: Analisamos o código em todas as páginas e identificamos as seções que poderiam ser modularizadas. Os componentes que se repetiam em todas as páginas foram separados e organizados em uma pasta de nome correspondente e carregados por meio do uso de JavaScript. Não houve nenhum erro encontrado no carregamento dos códigos e, além das tags html e da integração dos componentes, nenhum código se repete.

2. Acessibilidade (0-8 pontos)
Iniciante (1 a 2 pontos): pouco ou nenhum esforço em acessibilidade. HTML semântico inadequado. Ausência de atributos alt em imagens. Formulários sem labels. Sem teste de navegação por teclado.
Em desenvolvimento (3 a 4 pontos): alguns recursos de acessibilidade implementados (ex.: algumas imagens com alt, alguns labels em formulários). HTML semântico parcial. Navegação por teclado parcialmente funcional. Foco visual não muito claro.
Proficiente (5 a 6 pontos): boa implementação de acessibilidade. HTML semântico em todo o site. Todas as imagens com alt descritivo. Formulários com labels associados. Navegação por teclado funcional. Estilos de :focus visíveis. Contraste adequado.
Avançado (7 a 8 pontos): excelente implementação de acessibilidade. HTML semântico completo e correto. Skip link implementado. Atributos ARIA onde necessário. Formulários perfeitamente acessíveis. Navegação por teclado fluida. Alto contraste e legibilidade. Teste de acessibilidade realizado com Lighthouse com bom resultado.
Pontuação atribuída: 8 / 8
Justificativa: O link de pular para o conteúdo principal foi implementado e os atributos aria foram adicionados nas partes necessárias do código. O teste com o Google Lighthouse identificou somente 2 problemas de acessibilidade e deu à página uma pontuação de 94 pontos. O primeiro problema identificado foi o contraste de 1.98:1 no botão que redireciona o cliente para o WhatsApp do pequeno negócio, que não atende aos princípios de acessibilidade WCAG de contraste mínimo 4.5:1. O segundo problema aborda a hierarquia de títulos implementada erroneamente, que não segue uma ordem sequencial, em especial devido ao uso de <h3> para o texto “Entre em Contato” no rodapé da página.

3. Responsividade (0-8 pontos)
Iniciante (1 a 2 pontos): site não se adapta bem a diferentes tamanhos de tela. Layout quebra ou fica ilegível em mobile ou tablet. Imagens não redimensionam. Pouco ou nenhum uso de media queries.
Em desenvolvimento (3 a 4 pontos): site adapta-se parcialmente. Alguns breakpoints implementados mas layout é inconsistente em certos tamanhos. Imagens redimensionam mas nem sempre bem. Espaçamentos irregulares.
Proficiente (5 a 6 pontos): site totalmente responsivo. Media queries bem aplicadas para mobile (375px), tablet (768px) e desktop (1024px+). Layout adapta-se fluidamente. Imagens redimensionam corretamente. Espaçamentos consistentes. Mobile-first implementado.
Avançado (7 a 8 pontos): responsividade impecável em todos os tamanhos de tela. Breakpoints bem planejados e executados. Uso avançado de Flexbox/Grid. Imagens e vídeo não apenas redimensionam, mas otimizam. Tipografia escalável. Experiência perfeita em qualquer dispositivo.
Pontuação atribuída: 6 / 8
Justificativa: O site foi testado em diversos dispositivos diferentes e sua adaptação foi observada. As imagens e os elementos se adaptaram adequadamente, mas a transformação da barra de navegação em um menu de hambúrguer (um ícone de três linhas) em dispositivos mobile não funcionou adequadamente e impossibilitou a navegação. O conteúdo mantém o espaçamento adequado pela página, mas não cobre a página inteira em dispositivos com telas altas (computadores, tablets e alguns smartphones) e deixa o espaço vazio do final da página em branco.

4. Organização e Manutenibilidade do Código (0-8 pontos)
Iniciante (1 a 2 pontos): código desorganizado. Nomes de arquivos confusos. Comentários ausentes ou inúteis. Difícil entender ou manter o código.
Em desenvolvimento (3 a 4 pontos): estrutura básica de pastas. Nomes de arquivos parcialmente claros. Alguns comentários mas nem sempre bem colocados. Código funciona mas é moderadamente difícil manter.
Proficiente (5 a 6 pontos): código bem organizado em arquivos e pastas lógicas. Nomes descritivos e consistentes (kebab-case para arquivos, etc.). Comentários relevantes em trechos complexos. Fácil navegar e manter o código.
Avançado (7 a 8 pontos): organização exemplar. Estrutura de pastas profissional. Nomenclatura consistente e clara. Comentários bem colocados explicando lógica. Código limpo, sem redundâncias. Pronto para manutenção por terceiros.
Pontuação atribuída: 7 / 8
Justificativa: O código é simples e bem estruturado, com nomes intuitivos e descritivos que seguem o mesmo padrão de nomenclatura. Não possui nenhum comentário que explique a lógica, mas sua organização e ausência de poluidores visuais, faz com que a navegação pelo código e sua compreensão seja fácil e acessível para terceiros. 

CRITÉRIOS ESTÉTICOS
5. Design Visual Coerente (0-8 pontos)
Iniciante (1 a 2 pontos): visual inconsistente ou genérico. Cores sem harmonia. Tipografia inadequada. Sem identidade visual clara. Escolhas visuais não justificadas.
Em desenvolvimento (3 a 4 pontos): visual razoável mas com inconsistências. Paleta de cores básica. Tipografia aceitável mas não otimizada. Identidade visual fraca. Algumas justificativas de design.
Proficiente (5 a 6 pontos): design coerente e profissional. Paleta de cores bem escolhida e justificada. Tipografia adequada ao negócio e público. Identidade visual clara. Escolhas visuais alinhadas com a proposta.
Avançado (7 a 8 pontos): design excepcional e memorável. Paleta de cores harmoniosa e estratégica. Tipografia sofisticada e totalmente justificada. Identidade visual forte e diferenciada. Cada escolha visual tem propósito claro.
Pontuação atribuída: 8 / 8
Justificativa:  A paleta de cores é agradável aos olhos e possui a identidade visual comumente associada com confeitarias, com forte associação à doces, conforto e ao elemento caseiro que o público-alvo costuma buscar. A tipografia é simples, mas coerente com a proposta.

6. Hierarquia Visual e Layout (0-8 pontos)
Iniciante (1 a 2 pontos): sem hierarquia clara. Elementos desalinhados. Espaçamento irregular. Layout confuso. Difícil identificar o conteúdo principal.
Em desenvolvimento (3 a 4 pontos): hierarquia básica presente. Alguns elementos alinhados. Espaçamento parcialmente consistente. Layout funcional mas poderia ser mais organizado.
Proficiente (5 a 6 pontos): hierarquia visual bem definida. Elementos alinhados e bem espaçados. Grid ou estrutura clara. Usuário consegue identificar facilmente o que é importante. Layout profissional.
Avançado (7 a 8 pontos): hierarquia excepcional que guia perfeitamente o olhar. Alinhamento impecável. Whitespace estratégico. Composição visual profissional e refinada. Usuário entende intuitivamente a estrutura.
Pontuação atribuída: 7 / 8
Justificativa: A hierarquia visual é bem definida, delimitando os elementos e o conteúdo principal por meio do uso de grids. O espaçamento do conteúdo principal não foi bem aplicado, colocando o texto apertado entre o cabeçalho e o rodapé sem nenhum espaço, o que dificulta sua visibilidade.

7. Usabilidade e Experiência do Usuário (0-8 pontos)
Iniciante (1 a 2 pontos): navegação confusa. Elementos pouco intuitivos. Usuário se perde facilmente. Botões e links desorganizados. Experiência frustrante.
Em desenvolvimento (3 a 4 pontos): navegação funcional mas não muito intuitiva. Alguns elementos claros, outros confusos. Usuário consegue navegar mas com dificuldade. Experiência mediana.
Proficiente (5 a 6 pontos): navegação clara e intuitiva. Botões e links bem-sinalizados. Menu funciona bem. Fluxo lógico no site. Usuário navega sem confusão. Boa experiência.
Avançado (7 a 8 pontos): navegação fluida e natural. Elementos interativos claramente identificáveis. Feedback visual claro (ex.: hover effects). Fluxo perfeito. Usuário tem excelente experiência. Interface agradável e intuitiva.
Pontuação atribuída: 8 / 8
Justificativa: Interface intuitiva e de fácil aprendizado. Os elementos são interativos e, por meio dos efeitos de hover, é possível compreender as ações sendo feitas e seus resultados. A navegação é simples e funcional e as principais funcionalidades atendem seus requisitos de forma satisfatória.

8. Alinhamento com o Negócio (0-8 pontos)
Iniciante (1 a 2 pontos): design não reflete o negócio. Escolhas visuais desconectadas do público-alvo. Site poderia ser de qualquer negócio.
Em desenvolvimento (3 a 4 pontos): design parcialmente alinhado ao negócio. Algumas escolhas justificadas mas outras genéricas. Identidade do negócio parcialmente visível.
Proficiente (5 a 6 pontos): design bem alinhado ao negócio e público-alvo. Escolhas visuais justificadas e apropriadas. Identidade e proposta do negócio claramente comunicadas. Site é reconhecível para este negócio específico.
Avançado (7 a 8 pontos): design perfeitamente alinhado. Cada elemento fortalece a proposta de valor do negócio. Público-alvo claramente considerado em cada decisão. Site é memorável e diferenciado para este negócio. Design elevaria o nível do negócio real.
Pontuação atribuída: 8 / 8
Justificativa: O site satisfaz perfeitamente o perfil associado com negócios de confeitaria nos quesitos visuais. O design está alinhado com a identidade caseira e familiar que busca transmitir e é memorável em sua implementação, elevando a rentabilidade e o valor do negócio.

RESUMO DA AVALIAÇÃO:

Aspecto
Pontos
Máximo
Técnicos
Modularização
8
8
Acessibilidade
8
8
Responsividade
6
8
Organização
7
8
Subtotal Técnico
29
32
Estéticos
Design Visual
8
8
Hierarquia e Layout
7
8
Usabilidade
8
8
Alinhamento com Negócio
8
8
Subtotal Estético
31
32
TOTAL GERAL
60
64

Interpretação da Pontuação
    • 56-64 pontos (Avançado): Projeto excepcional, pronto para ser um case de sucesso para o negócio.
    • 44-55 pontos (Proficiente): Projeto sólido com boas práticas bem aplicadas.
    • 32-43 pontos (Em Desenvolvimento): Projeto funcional, mas há bastante espaço para melhorias.
    • 0-31 pontos (Iniciante): Projeto precisa de revisões significativas antes da entrega final.


**Pontos Fortes (2-3 aspectos):**

O que mais se destacou positivamente no projeto?
A identidade visual e estrutura visual agradável.

**Oportunidades de Melhoria (2-3 aspectos):**

O que poderia ser aprimorado? Como?
O espaçamento do main, a adaptação do site ao dispositivo e o menu de hamburguer. Consertando o main no arquivo css, adicionando <meta name="viewport" content="width=device-width, user-scalable=yes"/> no head e buscando indentificar o erro que quebrou o menu de navegação.

**Comentário Final:**

Uma mensagem de incentivo e reconhecimento do esforço.
Ficou ótimo!
