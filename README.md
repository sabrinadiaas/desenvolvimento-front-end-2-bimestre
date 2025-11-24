# Projeto Integrador — Doces da Iza

<img src="https://github.com/sabrinadiaas/desenvolvimento-front-end-2-bimestre/blob/1abff091364cbf81b4d06cfb38760f09c1e5935d/img/brigadeiro.PNG" align="right"
     alt="Doces da Iza logo por Iza" width="200" height="200">
    

O presente repositório contém o projeto integrador feito por Sabrina Dias Nogueira e Sarah Ferreira Monteiro que cria um site vendável para um negócio real. A confeitaria Doces da Iza foi escolhida para o projeto, que criou três páginas para seu escopo inicial: início, cardápio e pedidos. O site busca atrair clientes em busca de doces para eventos como festas de aniversário, tendo um alto potencial de vendas e, por sua natureza simples, não há possibilidade de escassez de clientes.

Um protótipo inicial foi feito no figma paras as duas primeiras páginas, com uma prototipagem inicial que buscava definir as cores e o estilo a ser seguido completo com anotações detalhadas sobre a escolha e um protótipo auxiliador que buscou criar uma simulação clicável do projeto. Ambos foram iniciados no dia 15 de outubro e finalizados no dia 18 de outubro, com o primeiro sendo feito por Sarah Ferreira Monteiro e o segundo por Sabrina Nogueira Dias. Abaixo se encontra o link de ambos.

Protótipo inicial: https://www.figma.com/board/0DAGZgQW9ghlw0lX70CfcK/Projeto-Integrador?node-id=0-1&t=kyLpQWWr5GRFdu2F-1
Protótipo clicável:https://www.figma.com/design/WRwNW5pEMk9dLY8dZsAzOQ/Sem-t%C3%ADtulo?node-id=0-1&t=HnhqiQ7KDVQpesDA-1

Durante a montagem do site, foi criado por Sabrina Nogueira Dias no dia 16 de outubro o repositório no github e o *main branch* composto pelos arquivos inicio.html, cardápio html, pedidos.html e README.md, e pelas pastas css, e img. A pasta css é composta pelo arquivo style.css responsável pela estilização da página e a pasta img contém todas as imagens usadas nos sites. A pasta fonts foi adicionada posteriormente e contém o arquivo em woff2 para a definição da fonte padrão, sendo enviada por Sarah Ferreira Monteiro no dia 20 de outubro.

A criação das páginas e o desenvolvimento do código HTML foi feito por Sabrina Nogueira Dias, iniciando no dia 16 de outubro e tendo seu término no dia 19 de outubro. O código em CSS se iniciou no dia 19 de outubro e foi encerrado no dia 20 de outubro, com a constante atualização dos arquivos no repositório.

As cores do site foram definidas com base nas cores usadas para a logo original da confeitaria e com pesquisas sobre outras confeitarias, visando trazer uma boa identidade visual e ser esteticamente agradável por meio do uso de tons pasteis de rosa, marrom e bege. A fonte usada foi a mesma em todas as partes, 'Inter' da família sans-serif para legibilidade e acessibilidade. Já o layout do site foi feito para a melhor experiência visual possível, com uma navegação intuitiva e agradável que não sobrecarregue o leitor e nem o desestimule.

A página pedidos permaneceu incompleta, sendo reservada para as próximas etapas a fim de ser desenvolvida com o uso da integração da linguagem JavaScript e, por meio da aprimoração dos conhecimentos, ser diagramada de forma fiel e concisa no figma. A princípio, planejamos aplicar um sistema similar ao de sites de compra online, que permitem que os usuários selecionem seus itens no cardápio, enviem esse para o carrinho e selecionem o pagamento. Outra possibilidade visitada é a criação de um formulário ou outro método que armazene os detalhes do pedido e os envie para a confeitaria. 

## Parte 2:

O que já está funcionando bem?
Os media queries focados em desktop e tablet se adaptam adequadamente e as medidas de acessibilidade foram implementadas corretamente. O menu de navegação está funcionando, assim como o carrossel interativo de itens na página cardápio e formulário em pedidos.

Quais elementos HTML se repetem em várias páginas?
O head, o header e o footer se repetem no código de todas as páginas.

Onde o layout "quebra" ou fica estranho?
O layout está tendo problemas para se adaptar aos dispositivos mobile, reconhecendo eles como tablets e estendendo a página para além do footer.

Quais melhorias fariam diferença real para o usuário do pequeno negócio?
Correção da responsividade das páginas e verificação profunda de erros de acessibilidade e funcionalidades.

Foram modularizados os seguintes elementos: header, footer, carrossel e responsividade do css. A modularização foi escolhida para que seja possível a reutilização de código e para manter consistência visual em todas as páginas. Isso também facilita na manutenção do código, já que caso algum ajuste seja necessário, apenas um arquivo deve ser alterado e a mudança será refletida em todo o projeto.

Para tornar o site mais acessível e inclusivo, implementamos as seguintes melhorias:
Alto contraste entre texto e fundo, facilitando a leitura para usuários com baixa visão; Tipografia legível, com fontes de boa legibilidade e tamanho adequado; Navegação por teclado com indicador de foco visível, a implementação do botão “pular para o conteúdo principal” e o uso de tags HTML semânticas, para que o código esteja bem claro para leitores de tela.

Para garantir responsividade do site, o layout foi adaptado usando Media Queries e unidades relativas (como % e rem), assim, garantimos que o site se comporte de maneira adequada em diferentes tipos de dispositivos. O uso de Flexbox e Grid permitiu que os elementos se organizem de maneira fluida, sem quebra de layout em telas com tamanhos diferentes.

## Parte 3:
https://sabrinadiaas.github.io/desenvolvimento-front-end-2-bimestre/index.html
Data de publicação: 20/11/2025 às 13:01

Otimizações feitas na etapa 3 do projeto:
- Refatoração e a minimização dos códigos em CSS e JavaScript, utilizando as plataformas CSS Minifier e JavaScript Minifier;
- Diminuição no tamanho das imagens, utilizando a plataforma TinyPNG, sem comprometer a qualidade visual, resultando em tempos de carregamento muito menores;
- Adição de um favicon (ícone de site), melhorando a identidade visual e o reconhecimento da marca nas abas do navegador.
- Implementação de palavras-chave e descrição nas meta tags do site, facilitando que os clientes encontrem a confeitaria Doces da Iza em resultados de busca.

### Testes realizados.
Para garantir que o site ofereça uma experiência consistente e agradável a todos, realizamos testes de responsividade e compatibilidade.
Verificamos o layout e o comportamento do site nas seguintes resoluções e dispositivos:
- iPhone SE (375 x 677): Foco na verificação do menu mobile e no layout vertical dos elementos.
- iPhone 12 Pro (390 x 844): Análise das imagens e dos espaçamentos em telas de smartphone modernas.
- iPad (768 x 1024): Teste do layout de tablet, funcionamento do grid e disposição de colunas.
- iPad Pro (1024 x 1366): Verificação da transição do layout de tablet para desktop.
- Desktop HD (1280 x 720): Validação do layout padrão de desktop.
- Desktop Full HD (1920 x 1080): Teste de como o site se comporta em telas de máxima resolução comum.

O site foi testado para garantir a compatibilidade e a correta renderização em diferentes ambientes de navegação: Google Chrome, Microsoft Edge, Mozilla Firefox e Safari
Nenhum problema foi encontrado durante a realização dos testes de responsividade e compatibilidade. O site demonstrou estar totalmente responsivo, adaptando-se perfeitamente a todos os dispositivos testados e renderizando corretamente em todos os navegadores acima. Então, nenhuma alteração no layout ou correção foi necessária.

### Reflexão Individual
Quais foram as principais habilidades técnicas que você desenvolveu? (HTML, CSS, Git, organização, etc.)
- Sarah Ferreira Monteiro: Criação de sites com HTML e CSS, modularização de códigos, controle de versionamento no github, uso do github pages, organização na forma de escrever códigos e normas de acessibilidade WCAG.
- Sabrina Nogueira Dias: Precisei desenvolver diversas habilidades técnicas para cobrir todas as demandas do projeto, o que inclui um aprofundamento significativo em HTML e CSS e também uma aprendizagem mais superficial de JavaScript. O uso constante do Git também foi bem útil e educativo, aumentando a organização e servindo como controle de versão e colaboração.

Qual foi a tecnologia ou conceito mais desafiador de aprender?
- Sarah Ferreira Monteiro: A implementação de JavaScript foi o maior desafio do projeto.
- Sabrina Nogueira Dias: O conceito mais desafiador de aprender foi JavaScript, a criação de interações mais complexas exigiu um pouco mais de esforço do que as outras coisas.

O que você domina melhor agora comparado ao início do projeto?
- Sarah Ferreira Monteiro: Domino melhor as linguagens de marcação html e css.
- Sabrina Nogueira Dias: Comparado ao início do projeto, meu domínio dos conceitos iniciais de JavaScript melhorou bastante ao decorrer do projeto.

Como foi trabalhar em dupla? Quais foram os desafios?
- Sarah Ferreira Monteiro: Trabalhar em dupla se mostrou uma experiência prazerosa, permitindo que a carga de trabalho fosse dividida e não ficasse muito pesada para uma pessoa só. Os principais desafios surgiram por meio da comunicação e a organização em relação aos prazos, tendo em vista que certas emergências pessoais ocorreram uma vez ou outra durante o projeto.
- Sabrina Nogueira Dias: Trabalhar em dupla foi extremamente fluido e positivo, não acredito que tenhamos enfrentado nenhum desafio significativo, já que nossa comunicação era excelente e o conhecimento técnico da minha dupla era bem abrangente.

Como vocês organizaram as tarefas e a comunicação?
- Sarah Ferreira Monteiro e Sabrina Nogueira Dias: As tarefas foram divididas igualmente e a comunicação foi estabelecida de forma prazerosa. Uma pessoa realizava as etapas iniciais, relatava o que fez e as mudanças, e a outra pessoa realizava as etapas finais. Qualquer dúvida ou problema enfrentado foi solucionado por meio de discussões e trabalho em equipe.

O que funcionou bem na metodologia da dupla?
- Sarah Ferreira Monteiro: A divisão igualitária de papéis e a comunicação constante.
- Sabrina Nogueira Dias: Nossa metodologia de divisão de tarefas foi bem eficiente. Optamos por dividir cada etapa do projeto em partes iguais de trabalho, aproveitando o melhor de cada. Nossa comunicação era constante e clara para evitarmos problemas devido a falta dela.

Qual foi o maior desafio do projeto?
- Sarah Ferreira Monteiro: Não houveram grandes desafios devido ao escopo, mas a implementação do carrossel em JavaScript foi um desafio notável.
- Sabrina Nogueira Dias: O maior desafio na minha opinião foi a implementação de JavaScript, porém com prática e pesquisas, conseguimos passar por isso tranquilamente.

Como vocês superaram?
- Sarah Ferreira Monteiro e Sabrina Nogueira Dias: Por meio de conversas e de pesquisas. Vários testes foram feitos e o código foi atualizado à medida que consultamos o “Stack Overflow” e o “W3School” e observamos as mudanças.

Se pudesse voltar no tempo, o que faria diferente?
- Sarah Ferreira Monteiro: Não mudaria nada feito no projeto.
- Sabrina Nogueira Dias: Se pudesse voltar no tempo não faria nada diferente. Acredito que apesar de desafiador, o projeto me ajudou a aprender bastante e me trouxe ao nível de conhecimento que tenho agora.

### Reflexão da dupla
Como o projeto evoluiu da Parte 1 até agora?
- A página pedidos foi criada com a implementação de um formulário e foi utilizado JavaScript para criar um carrossel interativo na página do cardápio. De forma visual, os efeitos de hover e de seleção foram aprimorados e agora são visualmente mais distintos.

Quais foram as maiores mudanças/melhorias?
- A acessibilidade foi melhorada por meio da adição de novas funcionalidades como a navegação por tab, link de pular para o conteúdo principal e um botão de retornar ao início da página. O uso apropriado do JavaScript para as interações e a organização do código com a modularização e a reestruturação das pastas ajudou na melhora dele. Por último, erros de responsividade foram corrigidos, como o reconhecimento de dispositivos mobile como mobile e não tablets e o escalamento da página para o tamanho do aparelho do usuário.

O resultado final atende à proposta inicial?
- Sim, o resultado final satisfaz a proposta inicial.

O que vocês aprenderam com a avaliação dos colegas?
- Não recebemos nenhuma avaliação.

Quais feedbacks foram mais úteis?
- Não recebemos nenhuma avaliação.

Como pretendem aplicar essas sugestões?
- Não recebemos nenhuma avaliação.

O site realmente agregaria valor ao pequeno negócio escolhido?
- Sim, acreditamos que o site seria um ótimo auxílio para a divulgação de informações do pequeno negócio. O site, não apenas possui alta funcionalidade, mas também agrega valor ao negócio, transmitindo confiabilidade e profissionalismo aos clientes.

Se pudessem apresentar para o dono do negócio, o que diriam?
- O site é leve e intuitivo, atraindo clientes com sua simplicidade e divulgando as informações de forma eficaz. Acreditamos que ele pode ajudar seu negócio a crescer, pois, além de chamar a atenção de clientes que buscam confeitarias pelos navegadores, também aumenta o nível de profissionalidade de sua confeitaria e a destaca das demais. 

Vocês usariam este projeto como portfólio? Por quê?
- Sim. O site desenvolvido, apesar de simples, demonstra com qualidade as habilidades de Desenvolvimento Front-End necessárias para a criação de sites.

## Próximos Passos e Melhorias Futuras.
Melhorias Técnicas Planejadas:
- Aprender framework Vue para próxima iteração.
- Criar um sistema mais sofisticado para a seção de pedidos, implementando a funcionalidade de um “carrinho” de compras que permita que o cliente escolha um dos pedidos do cardápio.
- Melhorar a acessibilidade nas legendas de descrição das imagens, aprofundando as descrições visuais.
- Implementar animações mais interativas para cada funcionalidade.

Conhecimentos a aprofundar:
- Aprender todas as normas de acessibilidade WCAG a fim de compreender melhor não somente sua importância, mas também ser capaz de criar um site acessível para todos os públicos.
- Estudar CSS mais profundamente, para criar uma estética mais limpa e adicionar animações e detalhes visualmente interessantes.
- Aprofundar os conhecimentos em modularização para HTML e CSS, criando códigos limpos e organizados.
- Aprender manipulação de API’s usando ferramentas como Fetch ou Axios, para obter ou enviar dados e armazená-los devidamente.

Aplicação em Disciplinas Futuras:
- Os conhecimentos adquiridos serão usufruídos de diversas formas. Notavelmente, a habilidade desenvolvida de criar uma estrutura simples para o desenvolvimento front-end de um software possui grande papel, juntamente com as boas práticas de acessibilidade e modularização. A capacidade de criar interfaces agradáveis, intuitivas e acessíveis que podem ser facilmente acessadas e editadas por outros sem por a integridade do código em risco se mostra essencial em qualquer projeto.


Para conectar nosso site ao mundo real e digital, fizemos algumas integrações externas. Google Maps, para que os clientes identifiquem com facilidade a localização da loja, incentivando visitas presenciais e Redes Sociais (Instagram e WhatsApp), com links diretos para as redes, aumentando o contato entre o cliente e a empresa, ampliando a divulgação e o atendimento rápido.

Em conclusão, o site criado possui um escopo pequeno e simples que pode ser atingido perfeitamente durante as duas etapas — garantindo a satisfação do cliente. 

