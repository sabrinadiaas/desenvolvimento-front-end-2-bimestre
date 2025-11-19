async function carregarComponente(e, o) {
    try {
        let r = await fetch(e);
        if (!r.ok) throw Error(`Erro ao carregar o componente: ${e}`);

        let n = await r.text(),
            t = document.querySelector(o);

        t ? t.innerHTML = n : console.error(`Elemento não encontrado: ${o}`);
    } catch (a) {
        console.error("Erro ao carregar componente:", a);
    }
}

async function carregarTodosComponentes() {
    await Promise.all([
        carregarComponente("componentes/header.html", "#header-container"),
        carregarComponente("componentes/footer.html", "#footer-container")
    ]);
}

document.addEventListener("DOMContentLoaded", carregarTodosComponentes);
