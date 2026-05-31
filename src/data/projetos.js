const projetos = [
  {
    id: 1,
    nome: "CRUD Cafeteria",
    descrição: "Sistema de gerenciamento para cafeteria com operações de cadastro, edição e remoção de dados.",
    img: "/images/CRUD-cafeteria.png",
    techs: ["React", "JavaScript", "CSS", "Axios", "PostgreSQL", "Node", "Express"],
    github: "https://github.com/GustavoCamargo0/CRUD-cafeteria",
    descDetalhada:
      "Sistema de gerenciamento para cafeterias desenvolvido com React, permitindo o cadastro, edição, visualização e exclusão de clientes e pedidos. A aplicação consome uma API para persistência dos dados e utiliza banco de dados para armazenar as informações de forma segura e organizada. O sistema foi projetado para centralizar o controle operacional da cafeteria, reduzindo processos manuais e facilitando o acompanhamento dos pedidos.",
    objetivo:
      "Organizar e otimizar o gerenciamento de clientes e pedidos de uma cafeteria, centralizando as informações em uma única plataforma e tornando o fluxo de atendimento mais eficiente.",
    funcionalidade:
      "Cadastro de clientes, cadastro de pedidos, edição de clientes, edição de pedidos, exclusão de registros, consulta de informações em tempo real, busca de pedidos por status (entregue ou não entregue), integração com API REST, atualização dinâmica da interface e gerenciamento de dados através de operações CRUD.",
    desafio:
      "O principal desafio foi sincronizar corretamente as operações realizadas na interface com as rotas da API, garantindo que as alterações fossem refletidas imediatamente no sistema. Também foi necessário implementar exclusões em cascata, assegurando que pedidos relacionados fossem tratados adequadamente quando um cliente fosse removido.",
    aprendizado:
      "O projeto consolidou conhecimentos sobre React, componentização, gerenciamento de estado com useState, renderização dinâmica utilizando map(), consumo de APIs REST, manipulação assíncrona de dados, organização de código em componentes reutilizáveis e implementação completa das operações CRUD."
  },
  {
    id: 2,
    nome: "App Ticket Cantina",
    descrição: "Aplicação para gerenciamento de tickets e pedidos em cantina escolar.",
    img: "/images/cantina.png",
    techs: ["React Native", "JavaScript", "Supabase"],
    github: "https://github.com/GustavoCamargo0/AppTicketCatina",
    descDetalhada:
      "Aplicação desenvolvida para auxiliar no gerenciamento de pedidos e tickets de uma cantina escolar. O sistema permite registrar solicitações, acompanhar o andamento dos pedidos e organizar o fluxo de atendimento de forma prática e intuitiva.",
    objetivo:
      "Melhorar a organização dos pedidos realizados na cantina, reduzindo erros de controle e facilitando o acompanhamento das solicitações pelos responsáveis pelo atendimento.",
    funcionalidade:
      "Cadastro de pedidos, emissão de tickets, listagem de solicitações, atualização de status dos pedidos, gerenciamento dinâmico das informações, interface responsiva e atualização automática dos dados exibidos ao usuário.",
    desafio:
      "Estruturar corretamente o fluxo de criação e atualização dos tickets, garantindo que cada pedido mantivesse suas informações consistentes ao longo do processo de atendimento.",
    aprendizado:
      "Aprofundamento nos conceitos de React, gerenciamento de estado, manipulação de listas com map(), organização de componentes reutilizáveis, tratamento de eventos e desenvolvimento de interfaces voltadas para usabilidade."
  },
  {
    id: 3,
    nome: "Cosmic Battle",
    descrição: "Jogo com temática espacial envolvendo batalhas e mecânicas interativas.",
    img: "/images/cosmic.png",
    techs: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/GustavoCamargo0/Cosmic-Battle",
    descDetalhada:
      "Jogo de temática espacial desenvolvido utilizando HTML, CSS e JavaScript. O projeto foi criado com o objetivo de explorar conceitos de lógica de programação, manipulação do DOM e desenvolvimento de mecânicas interativas em tempo real.",
    objetivo:
      "Aplicar conhecimentos de programação em um contexto mais dinâmico, desenvolvendo um jogo que utilizasse movimentação, colisões e interação contínua com o usuário.",
    funcionalidade:
      "Movimentação do jogador, sistema de colisão, geração de obstáculos, controle de pontuação, reinício da partida, detecção de eventos de teclado, atualização em tempo real dos elementos do jogo e interface visual personalizada.",
    desafio:
      "Implementar a lógica de movimentação e colisão entre os elementos do jogo, além de sincronizar a atualização visual da interface com as regras definidas para a gameplay.",
    aprendizado:
      "Fortalecimento dos conhecimentos em JavaScript, manipulação do DOM, tratamento de eventos, lógica de jogos, estruturas condicionais, laços de repetição e organização de código voltada para aplicações interativas."
  }
]

export default projetos