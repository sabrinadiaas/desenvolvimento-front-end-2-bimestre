async function carregarComponente(caminho, seletor) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar o componente: ${caminho}`);
    }
    const html = await resposta.text();
    const elemento = document.querySelector(seletor);
    if (elemento) {
      elemento.innerHTML = html;
    } else {
      console.error(`Elemento não encontrado: ${seletor}`);
    }
  } catch (erro) {
    console.error('Erro ao carregar componente:', erro);
  }
}

async function carregarTodosComponentes() {
  await Promise.all([
    carregarComponente('componentes/header.html', '#header-container'),
    carregarComponente('componentes/footer.html', '#footer-container')
  ]);
}

document.addEventListener('DOMContentLoaded', carregarTodosComponentes);