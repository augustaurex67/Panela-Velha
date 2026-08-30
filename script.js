const receitas = [
  // --- ITALIANA (5 receitas) ---
  {
    id: 1,
    nome: "Spaghetti alla Carbonara",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/S_7TfKOnRro",
    ingredientes: ["400g de Spaghetti", "150g de Guanciale ou Pancetta/Bacon", "4 gemas de ovo + 1 ovo inteiro", "100g de queijo Pecorino Romano ralado", "Pimenta-do-reino moída na hora"],
    instrucoes: [
      "Coloque uma panela grande com água para ferver com um pouco de sal.",
      "Corte o guanciale em tiras médias e doure em uma frigideira em fogo médio até ficar bem crocante. Desligue o fogo e reserve.",
      "Em uma tigela, misture bem as gemas, o ovo inteiro, o queijo ralado e bastante pimenta-do-reino até formar uma pasta homogênea.",
      "Cozinhe a massa até ficar 'al dente'. Guarde meia xícara da água do cozimento antes de escorrer.",
      "Junte a massa quente diretamente na frigideira com o guanciale (com o fogo desligado).",
      "Despeje a mistura de queijo e ovos sobre a massa e mexa vigorosamente. Adicione pequenos pingos da água do cozimento para criar um molho bem cremoso sem empelotar os ovos.",
      "Sirva imediatamente com mais queijo ralado por cima."
    ]
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/8Q_9h6VKm9c",
    ingredientes: ["500g de farinha de trigo de boa qualidade", "320ml de água morna", "7g de fermento biológico seco", "1 colher de chá de sal", "200g de molho de tomate pelado", "200g de mussarela de búfala", "Folhas frescas de manjericão e azeite"],
    instrucoes: [
      "Em uma tigela, misture a farinha, o fermento e a água. Sove bem a massa até ficar lisa e elástica por cerca de 10 minutos.",
      "Adicione o sal e sove por mais 2 minutos. Cubra a massa e deixe descansar em local aquecido por 2 horas até dobrar de tamanho.",
      "Divida a massa em duas bolas, abra cada uma em formato circular deixando as bordas ligeiramente mais altas.",
      "Espalhe o molho de tomate uniformemente pelo centro.",
      "Distribua os pedaços de mussarela de búfala e um fio de azeite por cima.",
      "Asse no forno na temperatura máxima (idealmente acima de 240°C) até a borda dourar e o queijo derreter completamente.",
      "Decore com as folhas de manjericão fresco assim que retirar do forno."
    ]
  },
  {
    id: 3,
    nome: "Tiramisù Tradicional",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/1pS3pG1iBFE",
    ingredientes: ["500g de queijo Mascarpone", "4 ovos (gemas e claras separadas)", "100g de açúcar", "200g de biscoito Champagne", "250ml de café forte sem açúcar (frio)", "Cacau em pó 100% para polvilhar"],
    instrucoes: [
      "Bata as gemas com o açúcar em velocidade alta até obter um creme esbranquiçado e volumoso.",
      "Adicione o queijo mascarpone ao creme de gemas e misture suavemente com uma espátula até incorporar.",
      "Em outro recipiente limpo, bata as claras em neve bem firmes.",
      "Misture as claras em neve delicadamente ao creme de mascarpone com movimentos de baixo para cima.",
      "Passe os biscoitos Champagne rapidamente pelo café frio sem deixar encharcar.",
      "Em um refratário, monte uma camada de biscoitos e cubra com metade do creme. Repita com outra camada de biscoitos e finalize com o restante do creme.",
      "Leve à geladeira por no mínimo 4 horas. Polvilhe o cacau em pó apenas na hora de servir."
    ]
  },
  {
    id: 4,
    nome: "Risotto al Funghi",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/p94XFp6U-2M",
    ingredientes: ["300g de arroz Arbóreo", "200g de cogumelos frescos (Paris, Shimeji ou Sequi)", "1 litro de caldo de legumes bem quente", "1/2 xícara de vinho branco seco", "100g de queijo parmesão ralado", "3 colheres de sopa de manteiga", "1 cebola picadinha"],
    instrucoes: [
      "Em uma frigideira, refogue os cogumelos fatiados em 1 colher de manteiga até dourarem. Reserve.",
      "Em uma panela funda, doure a cebola no restante da manteiga até ficar transparente.",
      "Adicione o arroz Arbóreo sem lavar e refogue por 2 minutos mexendo sempre.",
      "Despeje o vinho branco e mexa até que ele evapore completamente.",
      "Vá adicionando o caldo de legumes bem quente, uma concha por vez, mexendo continuamente até o arroz absorver o líquido antes de colocar a próxima concha.",
      "Quando o arroz estiver macio mas levemente firme no centro ('al dente'), junte os cogumelos reservadose deslique o fogo.",
      "Misture o queijo parmesão e uma colher final de manteiga fria para dar cremosidade. Tampe por 2 minutos e sirva."
    ]
  },
  {
    id: 5,
    nome: "Cannoli Siciliano",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5K9MUn61y1Q",
    ingredientes: ["Tubos/Capas de massa de Cannoli prontas", "500g de Ricota fresca bem escorrida", "150g de açúcar impalpável", "80g de gotas de chocolate amargo", "Pistache picado ou raspas de laranja para decorar"],
    instrucoes: [
      "Passe a ricota por uma peneira fina para que fique leve e sem grumos.",
      "Em uma tigela, junte a ricota peneirada com o açúcar impalpável e bata bem até formar um creme liso.",
      "Adicione as gotas de chocolate amargo e misture delicadamente com uma espátula.",
      "Coloque a mistura dentro de um saco de confeitar com bico largo.",
      "Recheie os tubos crocantes de massa preenchendo primeiro um lado e depois o outro.",
      "Passe as pontas recheadas no pistache picado e polvilhe um pouco de açúcar de confeiteiro por cima."
    ]
  },

  // --- JAPONESA (5 receitas) ---
  {
    id: 6,
    nome: "Ramen Shoyu",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3z5eRlh0854",
    ingredientes: ["2 porções de macarrão para Ramen", "800ml de caldo concentrado de frango/porco", "3 colheres de sopa de Shoyu", "1 colher de sopa de óleo de gergelim", "2 ovos cozidos com gema mole", "Fatias de barriga de porco (Chashu)", "Cebolinha picada e broto de bambu"],
    instrucoes: [
      "Aqueça o caldo concentrado em uma panela e tempere com o shoyu e o óleo de gergelim até obter um sabor marcante.",
      "Em outra panela com água fervente, cozinhe o macarrão de ramen pelo tempo indicado na embalagem (cerca de 2 a 3 minutos).",
      "Escorra bem o macarrão e divida em duas tigelas fundas.",
      "Despeje o caldo bem quente sobre o macarrão até cobri-lo parcialmente.",
      "Ajeite as fatias de porco, os ovos cortados ao meio na vertical, a cebolinha picada e as tiras de broto de bambu por cima do prato.",
      "Sirva imediatamente bem quente."
    ]
  },
  {
    id: 7,
    nome: "Dorayaki",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/O4SgD5aR17U",
    ingredientes: ["2 ovos grandes", "80g de açúcar", "1 colher de sopa de mel", "140g de farinha de trigo", "1 colher de chá de fermento em pó", "50ml de água", "Anko (pasta de feijão doce Azuki)"],
    instrucoes: [
      "Em uma tigela, bata os ovos com o açúcar e o mel até formar uma mistura clara e espumosa.",
      "Peneire a farinha e o fermento sobre a mistura de ovos e mexa bem.",
      "Adicione a água aos poucos até a massa ficar fluida e uniforme. Deixe descansar por 15 minutos.",
      "Aqueça uma frigideira antiaderente em fogo baixo e unte levemente com óleo, retirando o excesso com papel toalha.",
      "Coloque pequenas conchas de massa criando discos circulares médios.",
      "Quando surgirem bolhas na superfície, vire o disco e cozinhe por mais 1 minuto do outro lado.",
      "Faça sanduíches colocando uma porção generosa de pasta de feijão Anko entre dois discos de massa."
    ]
  },
  {
    id: 8,
    nome: "Chicken Katsu Curry",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/v9q3cR4f76w",
    ingredientes: ["2 filés de peito de frango", "Farinha Panko e farinha de trigo para empanar", "1 ovo batido", "1 tablete de Curry japonês", "1 batata e 1 cenoura cortadas em cubos", "1 cebola fatiada", "Arroz japonês (Gohan) cozido"],
    instrucoes: [
      "Tempere os filés de frango com sal e pimenta. Passe na farinha de trigo, depois no ovo batido e por último na farinha Panko pressionando bem.",
      "Frite o frango em óleo bem quente até ficar dourado e crocante. Retire e corte em tiras.",
      "Em outra panela, refogue a cebola, cenoura e batata em um fio de óleo por 5 minutos.",
      "Cubra os legumes com água e cozinhe em fogo médio até ficarem bem macios.",
      "Desligue o fogo, adicione o tablete de curry e misture bem até dissolver e o molho encorpar.",
      "Sirva em um prato colocando uma porção de arroz de um lado, o frango fatiado ao centro e cubra tudo com o molho de curry quente."
    ]
  },
  {
    id: 9,
    nome: "Mochi de Morango",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/s23HkW6f4wI",
    ingredientes: ["100g de farinha de arroz glutinoso (Mochiko/Shiratamako)", "180ml de água", "50g de açúcar", "6 morangos frescos bem lavados e secos", "150g de Anko (pasta de feijão doce)", "Amido de milho para polvilhar"],
    instrucoes: [
      "Seque muito bem os morangos. Envolva cada morango com uma camada de pasta de feijão Anko, deixando apenas a pontinha de fora.",
      "Em um recipiente próprio para micro-ondas, misture a farinha de arroz glutinoso, o açúcar e a água.",
      "Cubra com plástico filme e leve ao micro-ondas em potência alta por 1 minuto. Retire, mexa com uma espátula e volte ao micro-ondas por mais 1 minuto até a massa ficar viscosa e translúcida.",
      "Polvilhe bastante amido de milho sobre uma bancada e despeje a massa quente.",
      "Divida a massa em 6 partes com as mãos polvilhadas de amido de milho.",
      "Abra cada porção em um disco, coloque o morango preparado no centro e feche as bordas selando bem na base."
    ]
  },
  {
    id: 10,
    nome: "Gyoza de Porco",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5U776A1j9kY",
    ingredientes: ["Discos de massa para Gyoza", "300g de carne suína moída", "2 folhas de acelga bem picadas", "1 colher de chá de gengibre ralado", "1 dente de alho picado", "1 colher de sopa de molho Shoyu e óleo de gergelim"],
    instrucoes: [
      "Em uma tigela, junte a carne moída, a acelga picada, o gengibre, o alho, o shoyu e o óleo de gergelim. Misture vigorosamente com as mãos até criar uma liga.",
      "Pegue um disco de massa na palma da mão e umedeça toda a borda com água usando a ponta do dedo.",
      "Coloque uma colher de chá do recheio no centro da massa.",
      "Dobre a massa ao meio e vá fazendo pequenas pregas na borda superior, pressionando contra a borda inferior para selar bem.",
      "Aqueça uma frigideira com um fio de óleo e acomode os gyozas com a base virada para baixo até dourarem.",
      "Despeje 50ml de água na frigideira e tampe imediatamente para cozinhar o recheio no vapor por cerca de 4 minutos."
    ]
  },

  // --- MEXICANA (5 receitas) ---
  {
    id: 11,
    nome: "Tacos de Carne Asada",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/S2q7E66kL9s",
    ingredientes: ["500g de Fraldinha ou Contrafilé", "Tortilhas de milho pequenas", "1 cebola roxa bem picadinha", "1 maço de coentro fresco picado", "Juice de 2 limões", "Sal, pimenta-do-reino e cominho"],
    instrucoes: [
      "Tempere a carne com o suco de limão, sal, pimenta e cominho. Deixe marinar por 20 minutos.",
      "Aqueça uma frigideira bem pesada ou grelha em fogo alto com um fio de azeite.",
      "Grelhe a carne até ficar bem dourada por fora. Retire da frigideira, espere 5 minutos e corte em cubinhos bem pequenos.",
      "Aqueca as tortilhas de milho na mesma frigideira quente até ficarem macias e levemente tostadas.",
      "Monte os tacos colocando uma porção generosa de carne sobre duas tortilhas sobrepostas.",
      "Decore com a cebola picada, o coentro fresco e finalize com gotas de limão."
    ]
  },
  {
    id: 12,
    nome: "Churros com Doce de Leite",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1624371414361-e670ef4889d6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/E-1y7qE9p8k",
    ingredientes: ["250ml de água", "2 colheres de sopa de manteiga", "2 colheres de sopa de açúcar", "150g de farinha de trigo", "1 pitada de sal", "Açúcar e canela em pó para polvilhar", "Doce de leite macio para acompanhar"],
    instrucoes: [
      "Em uma panela, coloque a água, a manteiga, as 2 colheres de açúcar e a pitada de sal. Leve ao fogo até ferver.",
      "Quando ferver, adicione a farinha de trigo de uma só vez e mexa rapidamente com colher de pau até formar uma massa lisa que solte completamente do fundo da panela.",
      "Deixe a massa mornar um pouco e transfira para um saco de confeitar com bico pitanga resistente.",
      "Pressione a massa formando tiras do tamanho desejado sobre papel manteiga e corte as pontas.",
      "Frite os churros em óleo bem quente (180°C) até dourarem por igual.",
      "Escorra em papel absorvente, passe na mistura de açúcar com canela e sirva quente mergulhado no doce de leite."
    ]
  },
  {
    id: 13,
    nome: "Guacamole com Totopos",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5_9QO4jM_5A",
    ingredientes: ["2 Abacates maduros (ou Avocados)", "1 tomate sem sementes picado", "1/2 cebola roxa picada", "1 pimenta dedo-de-moça sem sementes picadinha", "Suco de 1 limão", "Coentro picado e sal a gosto", "Pacote de Totopos ou Doritos sem sabor"],
    instrucoes: [
      "Corte os abacates ao meio, remova o caroço e retire a polpa com uma colher.",
      "Em uma tigela, amasse a polpa do abacate com um garfo deixando alguns pedacinhos inteiros para dar textura.",
      "Adicione o tomate picado, a cebola roxa, a pimenta dedo-de-moça e o coentro fresco.",
      "Regue tudo com o suco de limão e tempere com sal a gosto.",
      "Misture suavemente todos os ingredientes.",
      "Sirva imediatamente em um recipiente acompanhado dos totopos crocantes."
    ]
  },
  {
    id: 14,
    nome: "Tres Leches Cake",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/A8g2_A9o3Wk",
    ingredientes: ["1 pão de ló simples preparado", "1 lata de leite condensado", "1 lata de leite evaporado (ou creme de leite leve)", "200ml de leite integral", "200ml de creme de leite fresco para chantilly", "Canela em pó para polvilhar"],
    instrucoes: [
      "Prepare ou compre um pão de ló fofinho e deixe esfriar completamente na forma.",
      "Em uma jarra, misture bem os três leites: leite condensado, leite evaporado e o leite integral.",
      "Com um garfo ou palito longo, fure toda a superfície do pão de ló mantendo-o dentro da assadeira.",
      "Despeje a mistura dos três leites lentamente sobre todo o bolo até ser totalmente absorvida.",
      "Cubra a fôrma com papel alumínio e leve à geladeira por no mínimo 4 horas (ideal de um dia para o outro).",
      "Bata o creme de leite fresco em ponto de chantilly firme, espalhe por cima do bolo gelado e finalize polvilhando canela."
    ]
  },
  {
    id: 15,
    nome: "Enchiladas de Frango",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/xS6KjE6Dk_g",
    ingredientes: ["8 tortilhas de milho", "400g de peito de frango cozido e desfiado", "300g de molho de pimenta e tomate vermelho mexicano", "200g de queijo Prato ou Cheddar ralado", "Creme azedo (Sour cream) e coentro para finalizar"],
    instrucoes: [
      "Em uma frigideira com um pouco de óleo, passe rapidamente as tortilhas de milho por 5 segundos de cada lado para ficarem maleáveis.",
      "Misture metade do molho vermelho ao frango desfiado para que fique úmido.",
      "Coloque uma porção de frango no centro de cada tortilha e enrole bem apertado como uma panqueca.",
      "Disponha as enchiladas lado a lado em um refratário que possa ir ao forno.",
      "Cubra todas com o restante do molho vermelho e polvilhe generosamente o queijo ralado por cima.",
      "Leve ao forno pré-aquecido a 200°C por cerca de 15 minutos até o queijo derreter e borbulhar.",
      "Sirva com colheradas de creme azedo e folhas de coentro."
    ]
  },

  // --- BRASILEIRA (5 receitas) ---
  {
    id: 16,
    nome: "Brigadeiro Gourmet",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/4yA8Z9l8X_4",
    ingredientes: ["1 lata de leite condensado (395g)", "200g de creme de leite (caixinha)", "100g de chocolate nobre em barra (50% cacau)", "1 colher de sopa de manteiga sem sal", "Granulado de chocolate para enrolar"],
    instrucoes: [
      "Em uma panela de fundo grosso, junte o leite condensado, o creme de leite, o chocolate picado e a manteiga.",
      "Misture bem todos os ingredientes ainda com o fogo desligado.",
      "Ligue o fogo em temperatura média/baixa e mexa sem parar com uma espátula de silicone, raspando bem as bordas e o fundo.",
      "Cozinhe até que o brigadeiro ganhe consistência bem firme e solte completamente do fundo da panela ao incliná-la.",
      "Despeje a massa em um prato untado, cubra com plástico filme em contato e deixe esfriar completamente.",
      "Unte as mãos com um pouco de manteiga, faça bolinhas uniformes e passe pelo granulado."
    ]
  },
  {
    id: 17,
    nome: "Feijoada Completa",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/J7XwB2YnF9A",
    ingredientes: ["500g de feijão preto", "300g de carne seca dessalgada", "200g de lombo suíço dessalgado", "2 linguiças calabresas fatiadas", "150g de paia e bacon em cubos", "4 dentes de alho picados e 1 cebola grande", "Folhas de louro"],
    instrucoes: [
      "Dessalgue as carnes secas por 24 horas trocando a água várias vezes na geladeira.",
      "Na panela de pressão, coloque o feijão preto, a carne seca, o lombo e as folhas de louro. Cubra com água abundante e cozinhe por 30 minutos após pegar pressão.",
      "Em uma frigideira grande, frite o bacon e a calabresa até dourarem.",
      "Na mesma gordura do bacon, refogue a cebola e o alho até ficarem bem dourados.",
      "Abra a panela de pressão, adicione as linguiças, o refogado de alho e cebola e duas conchas do feijão amassado para dar cremosidade.",
      "Cozinhe em fogo baixo com a panela destampada por mais 20 minutos até o caldo engrossar bastante."
    ]
  },
  {
    id: 18,
    nome: "Pudim de Leite Condensado",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/Nn4x7T1E0_M",
    ingredientes: ["1 lata de leite condensado", "1 lata de leite (use a mesma medida da lata)", "3 ovos inteiros", "1 xícara de açúcar (para a calda)", "1/2 xícara de água"],
    instrucoes: [
      "Em uma forma redonda com furo central, derreta o açúcar com a água em fogo baixo até formar um caramelo dourado. Espalhe pela forma e reserve.",
      "No liquidificador, adicione o leite condensado, o leite e os ovos.",
      "Bata em velocidade média por cerca de 3 minutos até ficar homogêneo.",
      "Despeje a mistura delicadamente dentro da forma caramelizada.",
      "Cubra a forma com papel alumínio e leve ao forno pré-aquecido a 180°C em banho-maria por aproximadamente 1 hora e 10 minutos.",
      "Espere esfriar, leve à geladeira por no mínimo 4 horas e desenforme frio."
    ]
  },
  {
    id: 19,
    nome: "Moqueca Baiana",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/e_p3Rk8aO_Q",
    ingredientes: ["800g de postas de peixe firme (Robalo, Cação ou Badejo)", "200ml de leite de coco", "3 colheres de sopa de azeite de dendê", "1 pimentão vermelho, 1 amarelo e 1 cebola em rodelas", "2 tomates maduros em rodelas", "Suco de 1 limão, alho e coentro"],
    instrucoes: [
      "Tempere as postas de peixe com o suco de limão, alho picado e sal. Deixe marinar por 20 minutos.",
      "Em uma panela pesada (preferencialmente de barro), monte uma camada com metade das rodelas de cebola, pimentões e tomates.",
      "Acomode as postas de peixe marinadas por cima desta camada de vegetais.",
      "Cubra o peixe com o restante dos pimentões, tomates e cebola.",
      "Regue tudo com o leite de coco e o azeite de dendê.",
      "Tampe a panela e leve ao fogo baixo por cerca de 20 a 25 minutos sem mexer para não quebrar o peixe.",
      "Finalize com bastante coentro fresco picado e sirva quente."
    ]
  },
  {
    id: 20,
    nome: "Coxinha de Frango",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/K45p4mY9gU0",
    ingredientes: ["500ml de caldo do cozimento do frango", "300g de farinha de trigo", "50g de manteiga", "300g de frango cozido, desfiado e bem temperado", "150g de requeijão cremoso firme (Catupiry)", "Ovos e farinha de rosca para empanar"],
    instrucoes: [
      "Em uma panela, coloque o caldo de frango e a manteiga. Quando ferver, adicione a farinha de trigo de uma vez só.",
      "Mexa energicamente em fogo baixo até a massa cozinhar e desgrudar da panela.",
      "Coloque a massa sobre uma bancada e sove levemente quando estiver morna até ficar bem lisinha.",
      "Pegue uma porção de massa, abra na palma da mão em formato de disco, coloque uma colher de requeijão e uma porção de frango desfiado.",
      "Feche a massa subindo as bordas e modele a pontinha no formato clássico de coxinha.",
      "Passe as coxinhas nos ovos batidos, depois na farinha de rosca e frite em óleo bem quente até dourarem."
    ]
  }
];

// Elementos do DOM
const recipeGrid = document.getElementById('recipeGrid');
const selectTipo = document.getElementById('tipo');
const selectCultura = document.getElementById('cultura');
const modal = document.getElementById('recipeModal');
const closeBtn = document.getElementById('closeBtn');

// Renderização dos cards
function renderizarReceitas() {
  const tipoFiltro = selectTipo.value;
  const culturaFiltro = selectCultura.value;

  recipeGrid.innerHTML = '';

  const receitasFiltradas = receitas.filter(receita => {
    const atendeTipo = tipoFiltro === 'todos' || receita.tipo === tipoFiltro;
    const atendeCultura = culturaFiltro === 'todas' || receita.cultura === culturaFiltro;
    return atendeTipo && atendeCultura;
  });

  receitasFiltradas.forEach(receita => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => abrirModal(receita);

    const classeFonte = `cultura-${receita.cultura}`;

    card.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${receita.imagem}" alt="${receita.nome}">
      </div>
      <div class="card-info">
        <h3 class="${classeFonte}">${receita.nome}</h3>
        <div>
          <span class="tag">${receita.tipo}</span>
          <span class="tag">${receita.cultura}</span>
        </div>
      </div>
    `;

    recipeGrid.appendChild(card);
  });
}

// Modal/Pop-up
function abrirModal(receita) {
  const modalTitle = document.getElementById('modalTitle');
  modalTitle.innerText = receita.nome;
  modalTitle.className = `cultura-${receita.cultura}`;

  document.getElementById('modalTags').innerHTML = `
    <span class="tag">${receita.tipo}</span>
    <span class="tag">${receita.cultura}</span>
  `;
  document.getElementById('modalVideo').src = receita.videoUrl;

  const listIngredientes = document.getElementById('modalIngredients');
  listIngredientes.innerHTML = receita.ingredientes.map(ing => `<li>${ing}</li>`).join('');

  const listInstrucoes = document.getElementById('modalInstructions');
  listInstrucoes.innerHTML = receita.instrucoes.map(inst => `<li>${inst}</li>`).join('');

  modal.style.display = 'flex';
}

function fecharModal() {
  modal.style.display = 'none';
  document.getElementById('modalVideo').src = '';
}

closeBtn.onclick = fecharModal;

window.onclick = (event) => {
  if (event.target === modal) {
    fecharModal();
  }
};

// Eventos de filtro
selectTipo.addEventListener('change', renderizarReceitas);
selectCultura.addEventListener('change', renderizarReceitas);

// Inicialização
renderizarReceitas();