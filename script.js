const receitas = [
  // --- ITALIANA ---
  {
    id: 1,
    nome: "Spaghetti alla Carbonara",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["400g de Spaghetti", "150g de Guanciale ou Bacon", "4 gemas de ovo + 1 ovo inteiro", "100g de queijo Pecorino Romano ralado", "Pimenta-do-reino moída na hora"],
    instrucoes: [
      "Coloque uma panela grande com água para ferver com um pouco de sal.",
      "Corte o bacon em tiras médias e doure em uma frigideira até ficar bem crocante. Desligue o fogo e reserve.",
      "Em uma tigela, misture bem as gemas, o ovo, o queijo ralado e bastante pimenta-do-reino.",
      "Cozinhe a massa até ficar 'al dente'. Reserve meia xícara da água do cozimento.",
      "Junte a massa quente na frigideira do bacon (com fogo desligado).",
      "Despeje a mistura de queijo e ovos e mexa vigorosamente. Adicione água do cozimento aos poucos para criar cremosidade.",
      "Sirva imediatamente."
    ]
  },
  {
    id: 2,
    nome: "Pizza Margherita",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/Rk1K9sK9sX0",
    ingredientes: ["500g de farinha de trigo", "320ml de água morna", "7g de fermento biológico seco", "1 colher de chá de sal", "200g de molho de tomate", "200g de mussarela de búfala", "Folhas de manjericão e azeite"],
    instrucoes: [
      "Misture a farinha, o fermento e a água. Sove a massa por 10 minutos.",
      "Adicione o sal, sove por mais 2 minutos e deixe descansar por 2 horas.",
      "Abra a massa em formato circular mantendo as bordas ligeiramente altas.",
      "Espalhe o molho de tomate e a mussarela por cima.",
      "Asse no forno na temperatura máxima até dourar.",
      "Adicione as folhas de manjericão ao retirar do forno."
    ]
  },
  {
    id: 3,
    nome: "Tiramisù Tradicional",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/8wX2mY9sJ0c",
    ingredientes: ["500g de Mascarpone", "4 ovos (gemas e claras separadas)", "100g de açúcar", "200g de biscoito Champagne", "250ml de café forte frio", "Cacau em pó"],
    instrucoes: [
      "Bata as gemas com o açúcar até formar um creme claro.",
      "Misture o queijo mascarpone ao creme de gemas.",
      "Bata as claras em neve e incorpore delicadamente ao creme.",
      "Passe os biscoitos rapidamente pelo café frio.",
      "Monte camadas alternando biscoitos e creme em um refratário.",
      "Leve à geladeira por 4 horas e polvilhe cacau em pó antes de servir."
    ]
  },
  {
    id: 4,
    nome: "Risotto al Funghi",
    tipo: "salgado",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5K1N0pI9e10",
    ingredientes: ["300g de arroz Arbóreo", "200g de cogumelos frescos", "1 litro de caldo de legumes", "1/2 xícara de vinho branco seco", "100g de queijo parmesão", "3 colheres de sopa de manteiga", "1 cebola"],
    instrucoes: [
      "Refogue os cogumelos na manteiga até dourarem e reserve.",
      "Refogue a cebola picada na manteiga e adicione o arroz.",
      "Adicione o vinho branco e mexa até evaporar.",
      "Acrescente o caldo quente aos poucos, mexendo constantemente.",
      "Quando estiver al dente, misture os cogumelos, o parmesão e a manteiga final."
    ]
  },
  {
    id: 5,
    nome: "Cannoli Siciliano",
    tipo: "doce",
    cultura: "italiana",
    imagem: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/X5w7s3k8g8k",
    ingredientes: ["Tubos de massa para cannoli", "500g de ricota fresca", "150g de açúcar impalpável", "80g de gotas de chocolate", "Pistache picado"],
    instrucoes: [
      "Peneire a ricota para ficar homogênea.",
      "Misture a ricota com o açúcar até formar um creme liso.",
      "Adicione as gotas de chocolate.",
      "Preencha as casquinhas crocantes com o creme usando saco de confeitar.",
      "Decore as extremidades com o pistache."
    ]
  },

  // --- JAPONESA ---
  {
    id: 6,
    nome: "Ramen Shoyu",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/9wO4eL6tX10",
    ingredientes: ["2 porções de macarrão para Ramen", "800ml de caldo de frango", "3 colheres de sopa de Shoyu", "1 colher de sopa de óleo de gergelim", "2 ovos cozidos de gema mole", "Fatias de carne suína"],
    instrucoes: [
      "Aqueça o caldo e tempere com shoyu e óleo de gergelim.",
      "Cozinhe o macarrão em água fervente por 2 a 3 minutos.",
      "Escorra o macarrão e coloque-o na tigela.",
      "Despeje o caldo bem quente por cima.",
      "Adicione os ovos cortados e as fatias de carne sobre o prato."
    ]
  },
  {
    id: 7,
    nome: "Dorayaki",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0IRU2lVsJHOu0rNSVaJpfdku6U7FlhJFeybTbe9oV5w&s=10",
    videoUrl: "https://www.youtube.com/embed/K8m_Z9d8k1w",
    ingredientes: ["2 ovos", "80g de açúcar", "1 colher de sopa de mel", "140g de farinha de trigo", "1 colher de chá de fermento", "Pasta de feijão doce (Anko)"],
    instrucoes: [
      "Bata os ovos, o açúcar e o mel.",
      "Adicione a farinha e o fermento peneirados.",
      "Acrescente a água até obter uma massa fluida e deixe descansar por 15 minutos.",
      "Asse discos pequenos em uma frigideira antiaderente.",
      "Monte os sanduíches colocando a pasta Anko no centro de dois discos."
    ]
  },
  {
    id: 8,
    nome: "Chicken Katsu Curry",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFUj5o-FEFAFKxSBSK2XGeBETpUPbE5EFESYkUbRgDw&s=10",
    videoUrl: "https://www.youtube.com/embed/L9w_8q7k2wE",
    ingredientes: ["2 filés de frango", "Farinha Panko e de trigo", "1 ovo", "1 tablete de Curry japonês", "1 batata e 1 cenoura", "Arroz japonês cozido"],
    instrucoes: [
      "Passe o frango na farinha de trigo, ovo e Panko.",
      "Frite até dourar e corte em tiras.",
      "Cozinhe a batata e a cenoura picadas em água.",
      "Adicione o tablete de curry até dissolver e engrossar o molho.",
      "Sirva o arroz com o frango e cubra com o molho de curry."
    ]
  },
  {
    id: 9,
    nome: "Mochi de Morango",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4OdLKdp5i0wVRezcq6V6vjvpQYIDTwpGL-1TYMSo9qw&s=10",
    videoUrl: "https://www.youtube.com/embed/1pS3pG1iBFE",
    ingredientes: ["100g de farinha de arroz glutinoso", "180ml de água", "50g de açúcar", "6 morangos frescos", "Pasta de feijão doce", "Amido de milho"],
    instrucoes: [
      "Envolva cada morango com uma camada de pasta de feijão doce.",
      "Misture a farinha de arroz, água e açúcar em uma tigela.",
      "Aqueça no micro-ondas por 2 minutos mexendo na metade do tempo.",
      "Polvilhe amido de milho e divida a massa em porções.",
      "Abra as porções de massa e envolva cada morango preparado."
    ]
  },
  {
    id: 10,
    nome: "Gyoza de Porco",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/4yA8Z9l8X_4",
    ingredientes: ["Discos de massa para Gyoza", "300g de carne suína moída", "2 folhas de acelga picadas", "Gengibre e alho ralados", "Shoyu e óleo de gergelim"],
    instrucoes: [
      "Misture a carne suína com a acelga, alho, gengibre e temperos.",
      "Coloque uma colher do recheio no centro de cada disco de massa.",
      "Umedeça as bordas da massa e feche fazendo pregas.",
      "Dobre na frigideira até a base dourar.",
      "Adicione um pouco de água e tampe para cozinhar no vapor."
    ]
  },

  // --- MEXICANA ---
  {
    id: 11,
    nome: "Tacos de Carne Asada",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCF6TGjOd2uBu4tSekGSQ1xGe56suav8ExdGFa1s7mtQ&s=10",
    videoUrl: "https://www.youtube.com/embed/8Q_9h6VKm9c",
    ingredientes: ["500g de carne bovina", "Tortilhas de milho", "1 cebola roxa", "Coentro fresco", "Suco de limão", "Sal e pimenta"],
    instrucoes: [
      "Tempere e grelhe a carne em fogo alto até dourar.",
      "Corte a carne em cubos pequenos.",
      "Aqueça as tortilhas na frigideira.",
      "Monte os tacos com a carne, cebola roxa e coentro.",
      "Finalize com gotas de limão."
    ]
  },
  {
    id: 12,
    nome: "Churros com Doce de Leite",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaDYtvbL6HkhOVoWRnPXL3dIvOGcGU4UeTtRjuVgU56w&s=10",
    videoUrl: "https://www.youtube.com/embed/E-1y7qE9p8k",
    ingredientes: ["250ml de água", "2 colheres de manteiga", "150g de farinha de trigo", "Açúcar e canela", "Doce de leite"],
    instrucoes: [
      "Ferva a água com a manteiga e o açúcar.",
      "Adicione a farinha e mexa até formar uma massa homogênea.",
      "Molde os churros usando um saco de confeitar.",
      "Frite em óleo quente até ficarem dourados.",
      "Passe na mistura de açúcar com canela e sirva com doce de leite."
    ]
  },
  {
    id: 13,
    nome: "Guacamole com Totopos",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVT_HGwxTgrwOK-_qFOUzHGrN_I8NK5bSzMcPBE7jrIw&s=10",
    videoUrl: "https://www.youtube.com/embed/5_9QO4jM_5A",
    ingredientes: ["2 abacates maduros", "1 tomate picado", "1/2 cebola roxa", "Suco de 1 limão", "Coentro e sal", "Totopos/Chips de milho"],
    instrucoes: [
      "Amasse a polpa do abacate em uma tigela.",
      "Misture o tomate, a cebola roxa e o coentro.",
      "Adicione o suco de limão e tempere com sal.",
      "Sirva acompanhado dos totopos crocantes."
    ]
  },
  {
    id: 14,
    nome: "Tres Leches Cake",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://www.allrecipes.com/thmb/3zjqR0J3EYdaRwZ97AQAZoUSC5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7399-tres-leches-milk-cake-ddmfs-beauty-2x1-BG-25702-f42c94b10c914753aa4dcb413658b8bf.jpg",
    videoUrl: "https://www.youtube.com/embed/A8g2_A9o3Wk",
    ingredientes: ["1 pão de ló preparado", "1 lata de leite condensado", "1 lata de creme de leite", "200ml de leite integral", "Chantilly e canela"],
    instrucoes: [
      "Misture o leite condensado, o creme de leite e o leite integral.",
      "Fure todo o pão de ló com um garfo.",
      "Despeje a calda sobre o bolo para absorver bem.",
      "Mantenha na geladeira por 4 horas.",
      "Cubra com chantilly e polvilhe canela."
    ]
  },
  {
    id: 15,
    nome: "Enchiladas de Frango",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/xS6KjE6Dk_g",
    ingredientes: ["8 tortilhas de milho", "400g de frango desfiado", "300g de molho de tomate temperado", "200g de queijo ralado", "Creme azedo"],
    instrucoes: [
      "Recheie as tortilhas com o frango desfiado e enrole.",
      "Disponha as enchiladas em uma assadeira.",
      "Cubra com o molho de tomate e o queijo ralado.",
      "Asse a 200°C por 15 minutos até derreter o queijo.",
      "Sirva com creme azedo."
    ]
  },

  // --- BRASILEIRA ---
  {
    id: 16,
    nome: "Brigadeiro Gourmet",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtdBH224RCgy6MNMU2umMLtYrNKIJaUEYXt3BzU_ppQ&s=10",
    videoUrl: "https://www.youtube.com/embed/4yA8Z9l8X_4",
    ingredientes: ["1 lata de leite condensado", "200g de creme de leite", "100g de chocolate em barra", "1 colher de manteiga", "Granulado"],
    instrucoes: [
      "Misture os ingredientes em uma panela.",
      "Cozinhe em fogo baixo mexendo sempre até desprender do fundo.",
      "Deixe esfriar completamente em um prato.",
      "Faça bolinhas com as mãos untadas e passe no granulado."
    ]
  },
  {
    id: 17,
    nome: "Feijoada Completa",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLWlc5pUrt6kf_vpd7GZevfjtVhZgjg2tQoIDmOvAq_A&s=10",
    videoUrl: "https://www.youtube.com/embed/J7XwB2YnF9A",
    ingredientes: ["500g de feijão preto", "300g de carne seca", "2 linguiças calabresas", "150g de bacon", "Alho, cebola e louro"],
    instrucoes: [
      "Dessalgue as carnes e cozinhe com o feijão na pressão por 30 minutos.",
      "Frite o bacon, a calabresa, o alho e a cebola em uma frigideira.",
      "Junte o refogado à panela de feijão.",
      "Cozinhe em fogo brando até o caldo encorpar."
    ]
  },
  {
    id: 18,
    nome: "Pudim de Leite Condensado",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYoJwOF0tKYFMbVhEfGXCghJeU1TmS6ZlvGdscQzNow&s=10",
    videoUrl: "https://www.youtube.com/embed/Nn4x7T1E0_M",
    ingredientes: ["1 lata de leite condensado", "1 lata de leite", "3 ovos", "1 xícara de açúcar para calda"],
    instrucoes: [
      "Derreta o açúcar na forma para fazer o caramelo.",
      "Bata os demais ingredientes no liquidificador por 3 minutos.",
      "Despeje a mistura na forma e cubra com papel alumínio.",
      "Asse em banho-maria a 180°C por 1 hora e 10 minutos."
    ]
  },
  {
    id: 19,
    nome: "Moqueca Baiana",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiudrnsy0YkaP9wsr7DHgftDn1Mu3ySoIXr6jfh1MVw&s=10",
    videoUrl: "https://www.youtube.com/embed/e_p3Rk8aO_Q",
    ingredientes: ["800g de postas de peixe", "200ml de leite de coco", "3 colheres de azeite de dendê", "Pimentões e cebola em rodelas", "Coentro"],
    instrucoes: [
      "Monte camadas de vegetais e peixe temperado na panela.",
      "Adicione o leite de coco e o azeite de dendê.",
      "Cozinhe em fogo baixo por 20 minutos com a panela tampada.",
      "Decore com coentro fresco."
    ]
  },
  {
    id: 20,
    nome: "Coxinha de Frango",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2018/08/coxinhadefrangocremosa.webp",
    videoUrl: "https://www.youtube.com/embed/K45p4mY9gU0",
    ingredientes: ["500ml de caldo de frango", "300g de farinha de trigo", "300g de frango temperado", "Requeijão firme", "Farinha de rosca"],
    instrucoes: [
      "Ferva o caldo e adicione a farinha de trigo de uma vez até soltar da panela.",
      "Sove a massa morna.",
      "Abra a massa, recheie com frango e requeijão e molde as coxinhas.",
      "Passe no ovo e na farinha de rosca e frite até dourar."
    ]
  }
];

const recipeGrid = document.getElementById('recipeGrid');
const selectTipo = document.getElementById('tipo');
const selectCultura = document.getElementById('cultura');
const modal = document.getElementById('recipeModal');
const closeBtn = document.getElementById('closeBtn');

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

selectTipo.addEventListener('change', renderizarReceitas);
selectCultura.addEventListener('change', renderizarReceitas);

renderizarReceitas();