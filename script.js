// Base de dados expandida com 20 receitas
const receitas = [
  // --- ITALIANA (5 receitas) ---
  {
    id: 1,
    nome: "Spaghetti alla Carbonara",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/D_2DBLAt57c",
    ingredientes: ["400g de Spaghetti", "150g de Guanciale ou Bacon", "4 gemas de ovo", "100g de Queijo Pecorino", "Pimenta-do-reino a gosto"],
    instrucoes: [
      "Cozinhe o macarrão em água salgada.",
      "Frite o guanciale até ficar crocante.",
      "Misture as gemas com o queijo ralado e pimenta.",
      "Junte a massa quente à frigideira, desligue o fogo e adicione a mistura de ovos, mexendo rapidamente com a água do cozimento."
    ]
  },
  {
    id: 2,
    nome: "Pizza Margherita Classic",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/1-SJGQ2HLp8",
    ingredientes: ["500g de farinha de trigo", "300ml de água", "5g de fermento biológico", "Molho de tomate caseiro", "Mussarela de búfala", "Manjericão fresco"],
    instrucoes: [
      "Prepare a massa e deixe fermentar por 2 horas.",
      "Abra a massa em formato de disco.",
      "Espalhe o molho de tomate e a mussarela de búfala.",
      "Asse em forno bem quente e finalize com folhas de manjericão fresco."
    ]
  },
  {
    id: 3,
    nome: "Tiramisù Tradicional",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/p9YxK-aF5x8",
    ingredientes: ["500g de queijo Mascarpone", "4 ovos (gemas e claras separadas)", "100g de açúcar", "200g de biscoito Champagne", "1 xícara de café forte sem açúcar", "Cacau em pó para polvilhar"],
    instrucoes: [
      "Bata as gemas com o açúcar até obter um creme claro e adicione o mascarpone.",
      "Bata as claras em neve e incorpore suavemente ao creme.",
      "Passe os biscoitos rapidamente pelo café frio.",
      "Monte camadas de biscoito e creme, finalizando com cacau em pó. Leve à geladeira."
    ]
  },
  {
    id: 4,
    nome: "Risotto al Funghi",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/eA391J-G-Lg",
    ingredientes: ["300g de arroz Arbóreo", "200g de cogumelos variados", "1 litro de caldo de legumes", "1/2 xícara de vinho branco", "100g de queijo parmesão", "2 colheres de manteiga"],
    instrucoes: [
      "Refogue os cogumelos na manteiga e reserve.",
      "Na mesma panela, refogue o arroz, adicione o vinho e deixe evaporar.",
      "Vá adicionando o caldo quente aos poucos, mexendo sempre.",
      "Quando o arroz estiver al dente, misture os cogumelos, a manteiga e o parmesão."
    ]
  },
  {
    id: 5,
    nome: "Cannoli Siciliano",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/O49vIuPnp_c",
    ingredientes: ["Massas para cannoli", "500g de Ricota fresca", "150g de açúcar de confeiteiro", "Gotas de chocolate amargo", "Pistasgache picado para decorar"],
    instrucoes: [
      "Passe a ricota por uma peneira para ficar bem cremosa.",
      "Misture a ricota com o açúcar e as gotas de chocolate.",
      "Frite os tubos de massa até dourarem.",
      "Recheie os tubos com o creme apenas no momento de servir e decore com pistache."
    ]
  },

  // --- JAPONESA (5 receitas) ---
  {
    id: 6,
    nome: "Ramen Shoyu Traditional",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/B8y3BHt1Xn0",
    ingredientes: ["Macarrão para ramen", "Caldo de galinha e porco encorpado", "Shoyu a gosto", "Chashu (fatias de barriga de porco)", "Ovo marinado (Ajitsuke Tamago)", "Cebolinha picada"],
    instrucoes: [
      "Prepare o caldo bem quente temperado com a base de shoyu.",
      "Cozinhe o macarrão de ramen até ficar al dente.",
      "Coloque o macarrão na tigela e cubra com o caldo escaldante.",
      "Decore com o porco, o ovo cortado ao meio e cebolinha."
    ]
  },
  {
    id: 7,
    nome: "Dorayaki",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5H-7Z4eDGE8",
    ingredientes: ["2 ovos", "50g de açúcar", "1 colher de mel", "100g de farinha de trigo", "Anko (pasta de feijão doce azuki)"],
    instrucoes: [
      "Bata os ovos, açúcar e mel até espumar.",
      "Peneire a farinha e adicione um pouco de água para dar o ponto de massa.",
      "Cozinhe discos de massa em uma frigideira antiaderente.",
      "Faça um sanduíche com duas panquecas recheadas com anko."
    ]
  },
  {
    id: 8,
    nome: "Chicken Katsu Curry",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/55hS05r10_4",
    ingredientes: ["2 filés de peito de frango", "Farinha Panko", "1 tablete de Curry japonês", "Batata e cenoura em cubos", "Arroz japonês (Gohan)"],
    instrucoes: [
      "Empane o frango na farinha de trigo, ovo e panko, e frite até dourar.",
      "Cozinhe os legumes e dissolva o tablete de curry para fazer o molho encorpado.",
      "Sirva o frango fatiado ao lado do arroz japonês e cubra com o molho de curry."
    ]
  },
  {
    id: 9,
    nome: "Mochi de Morango (Ichigo Daifuku)",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/9G_0l2V4f4A",
    ingredientes: ["100g de farinha de arroz glutinoso (Shiratamako)", "180ml de água", "50g de açúcar", "Morangos frescos", "Anko (pasta doce de feijão)"],
    instrucoes: [
      "Envolva os morangos em uma camada fina de pasta de feijão anko.",
      "Misture a farinha de arroz, água e açúcar, e leve ao micro-ondas até formar uma massa elástica.",
      "Polvilhe amido de milho nas mãos e abra pequenas porções de massa.",
      "Envolva o morango preparado com a massa de mochi."
    ]
  },
  {
    id: 10,
    nome: "Gyoza de Porco",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/rV3i6U-tXW8",
    ingredientes: ["Massas para gyoza", "300g de carne suína moída", "Acelga bem picada", "Gengibre e alho ralados", "Óleo de gergelim e shoyu"],
    instrucoes: [
      "Misture a carne, acelga, gengibre, alho e temperos até formar um recheio homogêneo.",
      "Recheie as massas e feche fazendo pequenas dobras na borda.",
      "Frite o fundo dos gyozas em uma frigideira com óleo de gergelim.",
      "Adicione um pouco de água, tape a frigideira e deixe cozinhar no vapor."
    ]
  },

  // --- MEXICANA (5 receitas) ---
  {
    id: 11,
    nome: "Tacos de Carne Asada",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/v8l5wI7aK8Y",
    ingredientes: ["500g de fraldinha", "Tortilhas de milho", "Coentro picado", "Cebola picada", "Limão e sal"],
    instrucoes: [
      "Tempere a carne e grelhe em fogo bem alto.",
      "Corte a carne em cubos bem pequenos.",
      "Aqueça as tortilhas na chapa.",
      "Monte os tacos com carne, cebola, coentro e finalize com gotas de limão."
    ]
  },
  {
    id: 12,
    nome: "Churros com Doce de Leite",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1624371414361-e670ef4889d6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/6S2n4Q7dE6g",
    ingredientes: ["250ml de água", "2 colheres de manteiga", "2 colheres de açúcar", "150g de farinha de trigo", "Açúcar e canela para polvilhar", "Doce de leite para acompanhar"],
    instrucoes: [
      "Ferva a água com a manteiga e o açúcar.",
      "Adicione a farinha de uma vez e mexa até soltar do fundo da panela.",
      "Coloque a massa em um saco de confeitar com bico pitanga e modele os churros.",
      "Frite em óleo quente, passe na canela com açúcar e sirva com doce de leite."
    ]
  },
  {
    id: 13,
    nome: "Guacamole e Totopos",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3KkOzA_v_v0",
    ingredientes: ["2 abacates maduros (ou avocados)", "1 tomate sem semente em cubos", "1/2 cebola roxa picada", "Suco de 1 limão", "Coentro fresco", "Tortilhas de milho fritas (Totopos)"],
    instrucoes: [
      "Amasse o abacate com um garfo deixando alguns pedaços.",
      "Adicione o tomate, cebola roxa e coentro picado.",
      "Tempere com o suco de limão e sal a gosto.",
      "Sirva imediatamente acompanhado de totopos bem crocantes."
    ]
  },
  {
    id: 14,
    nome: "Tres Leches Cake",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/Q4X-P6vWz6E",
    ingredientes: ["Pão de ló básico", "1 lata de leite condensado", "1 lata de leite evaporado", "1 xícara de creme de leite fresco", "Chantilly e canela para decorar"],
    instrucoes: [
      "Asse o pão de ló e deixe esfriar completamente.",
      "Misture os três leites (condensado, evaporado e creme de leite).",
      "Fure todo o bolo com um garfo e despeje a mistura de leites lentamente.",
      "Cubra com chantilly e leve à geladeira antes de servir."
    ]
  },
  {
    id: 15,
    nome: "Enchiladas de Frango",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/fA3f5k4Cq5E",
    ingredientes: ["Tortilhas de milho", "400g de frango desfiado temperado", "Molho de pimenta vermelha para enchilada", "200g de queijo cheddar ou prato ralado", "Creme azedo (sour cream)"],
    instrucoes: [
      "Passe as tortilhas ligeiramente no molho quente.",
      "Recheie com o frango desfiado e enrole como panquecas.",
      "Disponha em um refratário, cubra com mais molho e bastante queijo.",
      "Leve ao forno para gratinar e sirva com creme azedo."
    ]
  },

  // --- BRASILEIRA (5 receitas) ---
  {
    id: 16,
    nome: "Brigadeiro Gourmet",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/L1M4k6iN4m8",
    ingredientes: ["1 lata de leite condensado", "200g de creme de leite", "100g de chocolate nobre 50%", "Granulado de qualidade"],
    instrucoes: [
      "Junte todos os ingredientes em uma panela de fundo grosso.",
      "Cozinhe em fogo médio/baixo sem parar de mexer até desprender do fundo.",
      "Deixe esfriar completamente, modele as bolinhas e passe no granulado."
    ]
  },
  {
    id: 17,
    nome: "Feijoada Completa",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5aK0B7xJ2U8",
    ingredientes: ["500g de feijão preto", "300g de carne seca", "200g de lombo defumado", "2 linguiças calabresas", "Paiol, alho, cebola e folhas de louro"],
    instrucoes: [
      "Dessalgue as carnes secas por 24 horas.",
      "Cozinhe o feijão com as carnes mais duras na pressão.",
      "Adicione as linguiças e termine o cozimento.",
      "Refogue alho e cebola e junte ao feijão para engrossar o caldo."
    ]
  },
  {
    id: 18,
    nome: "Pudim de Leite Condensado",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/9Z9P9_nQ1U8",
    ingredientes: ["1 lata de leite condensado", "1 lata de leite (mesma medida)", "3 ovos inteiros", "1 xícara de açúcar para a calda"],
    instrucoes: [
      "Derreta o açúcar na forma de pudim até virar um caramelo dourado.",
      "Bata o leite condensado, o leite e os ovos no liquidificador por 3 minutos.",
      "Despeje a mistura na forma caramelizada.",
      "Asse em banho-maria no forno pré-aquecido a 180°C por cerca de 1 hora."
    ]
  },
  {
    id: 19,
    nome: "Moqueca Baiana de Peixe",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/8vR4M_W2U8c",
    ingredientes: ["800g de postas de peixe (Robalo ou Cação)", "200ml de leite de coco", "3 colheres de azeite de dendê", "Pimentões coloridos e cebola em rodelas", "Coentro picado"],
    instrucoes: [
      "Marine o peixe com limão, alho e sal por 30 minutos.",
      "Monte em uma panela de barro camadas de cebola, pimentão e peixe.",
      "Regue com o leite de coco e o azeite de dendê.",
      "Cozinhe em fogo baixo com a panela tampada por 20 minutos e finalize com coentro."
    ]
  },
  {
    id: 20,
    nome: "Coxinha de Frango com Catupiry",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["500ml de caldo de frango", "300g de farinha de trigo", "50g de manteiga", "300g de frango desfiado temperado", "Requeijão tipo Catupiry", "Farinha de rosca e ovos para empanar"],
    instrucoes: [
      "Ferva o caldo com a manteiga, adicione a farinha e mexa vigorosamente até cozinhar a massa.",
      "Deixe a massa esfriar e abra pequenas porções na mão.",
      "Recheie com o frango e uma colher de catupiry.",
      "Modele no formato de coxinha, empane no ovo e farinha de rosca e frite em óleo quente."
    ]
  }
];