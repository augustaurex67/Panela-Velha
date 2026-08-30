// Base de dados com 20 receitas
const receitas = [
  // --- ITALIANA ---
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
    ingredientes: ["500g de queijo Mascarpone", "4 ovos", "100g de açúcar", "200g de biscoito Champagne", "1 xícara de café forte sem açúcar", "Cacau em pó"],
    instrucoes: [
      "Bata as gemas com o açúcar e incorpore o mascarpone.",
      "Bata as claras em neve e adicione ao creme suavemente.",
      "Passe os biscoitos no café frio.",
      "Monte camadas de biscoito e creme, finalizando com cacau em pó."
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
      "Refogue o arroz, adicione o vinho e deixe evaporar.",
      "Adicione o caldo quente aos poucos, mexendo sempre.",
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
    ingredientes: ["Massas para cannoli", "500g de Ricota fresca", "150g de açúcar de confeiteiro", "Gotas de chocolate amargo", "Pistache picado"],
    instrucoes: [
      "Passe a ricota por uma peneira para ficar cremosa.",
      "Misture a ricota com o açúcar e as gotas de chocolate.",
      "Frite os tubos de massa até dourarem.",
      "Recheie os tubos com o creme e decore com pistache."
    ]
  },

  // --- JAPONESA ---
  {
    id: 6,
    nome: "Ramen Shoyu Traditional",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/B8y3BHt1Xn0",
    ingredientes: ["Macarrão para ramen", "Caldo encorpado", "Shoyu a gosto", "Chashu (barriga de porco)", "Ovo marinado", "Cebolinha"],
    instrucoes: [
      "Prepare o caldo bem quente temperado com a base de shoyu.",
      "Cozinhe o macarrão até ficar al dente.",
      "Coloque o macarrão na tigela e cubra com o caldo.",
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
    ingredientes: ["2 ovos", "50g de açúcar", "1 colher de mel", "100g de farinha de trigo", "Anko (pasta de feijão doce)"],
    instrucoes: [
      "Bata os ovos, açúcar e mel até espumar.",
      "Peneire a farinha e adicione um pouco de água.",
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
    ingredientes: ["2 filés de frango", "Farinha Panko", "1 tablete de Curry japonês", "Batata e cenoura", "Arroz japonês"],
    instrucoes: [
      "Empane o frango na farinha de trigo, ovo e panko, e frite.",
      "Cozinhe os legumes e dissolva o curry para o molho.",
      "Sirva o frango fatiado ao lado do arroz e cubra com o molho."
    ]
  },
  {
    id: 9,
    nome: "Mochi de Morango",
    tipo: "doce",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/9G_0l2V4f4A",
    ingredientes: ["100g de farinha de arroz glutinoso", "180ml de água", "50g de açúcar", "Morangos frescos", "Anko"],
    instrucoes: [
      "Envolva os morangos em uma camada fina de anko.",
      "Misture a farinha de arroz, água e açúcar, e leve ao micro-ondas até formar uma massa elástica.",
      "Abra pequenas porções de massa e envolva o morango."
    ]
  },
  {
    id: 10,
    nome: "Gyoza de Porco",
    tipo: "salgado",
    cultura: "japonesa",
    imagem: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/rV3i6U-tXW8",
    ingredientes: ["Massas para gyoza", "300g de carne suína moída", "Acelga picada", "Gengibre e alho", "Óleo de gergelim"],
    instrucoes: [
      "Misture a carne, acelga e temperos para o recheio.",
      "Recheie as massas e dobre as bordas.",
      "Frite o fundo dos gyozas em uma frigideira.",
      "Adicione um pouco de água, tampe e deixe cozinhar no vapor."
    ]
  },

  // --- MEXICANA ---
  {
    id: 11,
    nome: "Tacos de Carne Asada",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/v8l5wI7aK8Y",
    ingredientes: ["500g de fraldinha", "Tortilhas de milho", "Coentro picado", "Cebola picada", "Limão e sal"],
    instrucoes: [
      "Tempere a carne e grelhe em fogo alto.",
      "Corte a carne em cubos bem pequenos.",
      "Aqueça as tortilhas na chapa.",
      "Monte os tacos com carne, cebola, coentro e limão."
    ]
  },
  {
    id: 12,
    nome: "Churros com Doce de Leite",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1624371414361-e670ef4889d6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/6S2n4Q7dE6g",
    ingredientes: ["250ml de água", "2 colheres de manteiga", "2 colheres de açúcar", "150g de farinha de trigo", "Açúcar e canela", "Doce de leite"],
    instrucoes: [
      "Ferva a água com manteiga e açúcar.",
      "Adicione a farinha e mexa até soltar da panela.",
      "Modele os churros com bico pitanga.",
      "Frite em óleo quente, passe na canela e sirva com doce de leite."
    ]
  },
  {
    id: 13,
    nome: "Guacamole e Totopos",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3KkOzA_v_v0",
    ingredientes: ["2 abacates maduros", "1 tomate em cubos", "1/2 cebola roxa picada", "Suco de 1 limão", "Coentro fresco", "Totopos"],
    instrucoes: [
      "Amasse o abacate deixando alguns pedaços.",
      "Adicione tomate, cebola e coentro.",
      "Tempere com limão e sal.",
      "Sirva acompanhado de totopos."
    ]
  },
  {
    id: 14,
    nome: "Tres Leches Cake",
    tipo: "doce",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/Q4X-P6vWz6E",
    ingredientes: ["Pão de ló básico", "1 lata de leite condensado", "1 lata de leite evaporado", "1 xícara de creme de leite", "Chantilly"],
    instrucoes: [
      "Asse o pão de ló e deixe esfriar.",
      "Misture os três leites.",
      "Fure o bolo com um garfo e despeje a mistura.",
      "Cubra com chantilly e leve à geladeira."
    ]
  },
  {
    id: 15,
    nome: "Enchiladas de Frango",
    tipo: "salgado",
    cultura: "mexicana",
    imagem: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/fA3f5k4Cq5E",
    ingredientes: ["Tortilhas de milho", "400g de frango desfiado", "Molho de pimenta vermelha", "200g de queijo ralado", "Creme azedo"],
    instrucoes: [
      "Passe as tortilhas no molho quente.",
      "Recheie com frango e enrole.",
      "Disponha num refratário, cubra com molho e queijo.",
      "Gratine no forno e sirva."
    ]
  },

  // --- BRASILEIRA ---
  {
    id: 16,
    nome: "Brigadeiro Gourmet",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/L1M4k6iN4m8",
    ingredientes: ["1 lata de leite condensado", "200g de creme de leite", "100g de chocolate 50%", "Granulado"],
    instrucoes: [
      "Junte todos os ingredientes na panela.",
      "Cozinhe em fogo baixo até desprender do fundo.",
      "Deixe esfriar, modele as bolinhas e passe no granulado."
    ]
  },
  {
    id: 17,
    nome: "Feijoada Completa",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/5aK0B7xJ2U8",
    ingredientes: ["500g de feijão preto", "300g de carne seca", "200g de lombo defumado", "2 linguiças calabresas", "Alho, cebola e louro"],
    instrucoes: [
      "Dessalgue as carnes secas.",
      "Cozinhe o feijão com as carnes mais duras.",
      "Adicione as linguiças e termine o cozimento.",
      "Refogue alho e cebola e junte ao feijão."
    ]
  },
  {
    id: 18,
    nome: "Pudim de Leite",
    tipo: "doce",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/9Z9P9_nQ1U8",
    ingredientes: ["1 lata de leite condensado", "1 lata de leite", "3 ovos", "1 xícara de açúcar"],
    instrucoes: [
      "Derreta o açúcar na forma de pudim.",
      "Bata o leite condensado, leite e ovos no liquidificador.",
      "Despeje na forma caramelizada.",
      "Asse em banho-maria por 1 hora."
    ]
  },
  {
    id: 19,
    nome: "Moqueca Baiana",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/8vR4M_W2U8c",
    ingredientes: ["800g de postas de peixe", "200ml de leite de coco", "3 colheres de azeite de dendê", "Pimentões e cebola", "Coentro"],
    instrucoes: [
      "Marine o peixe com limão, alho e sal.",
      "Monte camadas de vegetais e peixe na panela.",
      "Regue com leite de coco e dendê.",
      "Cozinhe em fogo baixo por 20 minutos."
    ]
  },
  {
    id: 20,
    nome: "Coxinha de Frango",
    tipo: "salgado",
    cultura: "brasileira",
    imagem: "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["500ml de caldo de frango", "300g de farinha de trigo", "50g de manteiga", "300g de frango desfiado", "Catupiry"],
    instrucoes: [
      "Ferva o caldo com manteiga e misture a farinha até dar o ponto de massa.",
      "Abra a massa, recheie com frango e catupiry.",
      "Modele no formato de coxinha.",
      "Empane no ovo e farinha de rosca e frite."
    ]
  }
];

// Mapeamento dos elementos da página
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

// Controle do Modal
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

// Eventos de mudança nos filtros
selectTipo.addEventListener('change', renderizarReceitas);
selectCultura.addEventListener('change', renderizarReceitas);

// Executa a renderização assim que o script carregar
renderizarReceitas();