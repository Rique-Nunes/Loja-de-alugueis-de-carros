// script.js
document.addEventListener("DOMContentLoaded", () => {
  const listaVeiculos = document.getElementById("lista-veiculos");
  const formularioBusca = document.getElementById("formulario-busca");
  const buscaTexto = document.getElementById("busca-texto");

  // Dados dos Veículos (substitua pelos seus dados)
  const veiculos = [
    {
      imagem: "carro1.jpg",
      modelo: "Sedan Compacto",
      marca: "Marca A",
      descricao: "Ideal para cidade.",
      pcd: false,
      diaria: 150,
    },

    {
      imagem: "carro2.jpg",
      modelo: "SUV Familiar",
      marca: "Marca B",
      descricao: "Confortável e espaçoso.",
      pcd: true,
      diaria: 250,
    },

    {
      imagem: "carro3.jpg",
      modelo: "Esportivo",
      marca: "Marca C",
      descricao: "Alto desempenho.",
      pcd: false,
      diaria: 400,
    },
  ];

  // Função para exibir os veículos
  function exibirVeiculos(veiculosFiltrados) {
    listaVeiculos.innerHTML = ""; // Limpa a lista antes de adicionar novos veículos

    if (veiculosFiltrados.length === 0) {
      listaVeiculos.innerHTML = "<p>Nenhum veículo encontrado.</p>";
    } else {
      veiculosFiltrados.forEach((veiculo) => {
        const divVeiculo = document.createElement("div");
        divVeiculo.classList.add("veiculo");

        divVeiculo.innerHTML = `
            <img src="${veiculo.imagem}" alt="${veiculo.modelo}">
            <h3>${veiculo.marca} ${veiculo.modelo}</h3>
            <p>${veiculo.descricao}</p>

            <p>Diária: R$ ${veiculo.diaria}</p>


            <button class="btn-reservar" data-modelo="${veiculo.modelo}">Reservar</button>


        `; // Adiciona o botão de Reservar
        listaVeiculos.appendChild(divVeiculo);
      });
    }
  }

  // Filtragem de veículos

  function filtrarVeiculos() {
    const textoBusca = buscaTexto.value.toLowerCase();

    const veiculosFiltrados = veiculos.filter((veiculo) => {
      const modeloMatch = veiculo.modelo.toLowerCase().includes(textoBusca);
      const marcaMatch = veiculo.marca.toLowerCase().includes(textoBusca);
      return modeloMatch || marcaMatch;
    });

    exibirVeiculos(veiculosFiltrados);
  }

  exibirVeiculos(veiculos); // Exibe todos os veículos inicialmente

  // Adiciona evento de busca ao formulário
  formularioBusca.addEventListener("submit", (event) => {
    event.preventDefault();
    filtrarVeiculos();
  });
});
