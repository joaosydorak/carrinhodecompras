document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
let valorTotal = 0;





function adicionar() {

    let lista = document.getElementById('lista-produtos');


    //recupera quantidade e produto
    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;

    //separa o valor do produto do nome

    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1];

    // calcula sub total dos valores dos produtos escolhidos

    let subTotal = quantidade * valor;

    console.log(subTotal);

    // adiciona o produto ao carrinho

    lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x </span>${nome}<span class="texto-azul">R$${valor}</span>
        </section>
      </section>`;


    // calcula o valor total dos produtos adicionados no carrinho

    valorTotal = valorTotal + subTotal;
    let valorTotalGeral = document.getElementById('valor-total');
    valorTotalGeral.textContent = `R$ ${valorTotal}`;


}


function limpar() {

    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = '';

}