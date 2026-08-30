// Base de dados simulada das receitas
const receitas = [
  {
    id: 1,
    nome: "Spaghetti alla Carbonara",
    tipo: "salgado",
    cultura: "italiana",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["400g de Spaghetti", "150g de Guanciale ou Bacon", "4 gemas de ovo", "100g de Queijo Pecorino", "Pimenta-do-reino a gosto"],
    instrucoes: [
      "Cozinhe o macarrão em água salgada.",
      "Frite o guanciale até ficar crocante.",
      "Misture as gemas com o queijo ralado e pimenta.",
      "Junte a massa quente à frigideira, desligue o fogo e adicione a mistura de ovos, mexendo rapidamente com um pouco da água do cozimento."
    ]
  },
  {
    id: 2,
    nome: "Tacos de Carne Asada",
    tipo: "salgado",
    cultura: "mexicana",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["500g de fraldinha", "Tortilhas de milho", "Coentro picado", "Cebola picada", "Limão e sal"],
    instrucoes: [
      "Tempere a carne e grelhe em fogo bem alto.",
      "Corte a carne em cubos bem pequenos.",
      "Aqueça as tortilhas.",
      "Monte os tacos com carne, cebola, coentro e finalize com gotas de limão."
    ]
  },
  {
    id: 3,
    nome: "Dorayaki (Panqueca de Feijão Doce)",
    tipo: "doce",
    cultura: "japonesa",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["2 ovos", "50g de açúcar", "1 colher de mel", "100g de farinha de trigo", "Anko (pasta de feijão doce)"],
    instrucoes: [
      "Bata os ovos, açúcar e mel até espumar.",
      "Peneire a farinha e adicione um pouco de água para dar o ponto de massa de panqueca.",
      "Cozinhe discos de massa em uma frigideira antiaderente.",
      "Faça um sanduíche com duas panquecas recheadas com anko."
    ]
  },
  {
    id: 4,
    nome: "Brigadeiro Gourmet",
    tipo: "doce",
    cultura: "brasileira",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    ingredientes: ["1 lata de leite condensado", "200g de creme de leite", "100g de chocolate nobre 50%", "Granulado de qualidade"],
    instrucoes: [
      "Junte todos os ingredientes na panela.",
      "Cozinhe em fogo médio/baixo sem parar de mexer até desprender do fundo.",
      "Deixe esfriar, modele as bolinhas e passe no granulado."
    ]
  }
];

// Elementos da DOM
const recipeGrid = document.getElementById('recipeGrid');
const selectTipo = document.getElementById('tipo');
const selectCultura = document.getElementById('cultura');
const modal = document.getElementById('recipeModal');
const closeBtn = document.getElementById('closeBtn');

// Função para renderizar os cards de receitas
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

    card.innerHTML = `
      <div class="card-info">
        <h3>${receita.nome}</h3>
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
  document.getElementById('modalTitle').innerText = receita.nome;
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

closeBtn.onclick = () => {
  modal.style.display = 'none';
  document.getElementById('modalVideo').src = ''; // Para o vídeo ao fechar
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    document.getElementById('modalVideo').src = '';
  }
};

// Eventos de filtro
selectTipo.addEventListener('change', renderizarReceitas);
selectCultura.addEventListener('change', renderizarReceitas);

// Inicialização
renderizarReceitas();