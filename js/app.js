let lista = document.getElementById('lista-produtos');





function adicionar(){

    let produto = document.getElementById("produto").value;
    let quantidade = document.getElementById("quantidade").value;
    let novoProduto = document.createElement('span');
    let partes = produto.split(' - ');
    let nome = partes[0];
    let valor = partes[1];
    let total = quantidade * valor;
    let textoTotal = document.getElementById('valor-total');

    lista.classList.add('carrinho__produtos__produto');
    novoProduto.classList.add('carrinho__produtos');
    
    textoTotal.innerHTML = valor;
    
    
    

    novoProduto.innerHTML = (`${quantidade}X ${nome} ${valor}`);
    lista.appendChild(novoProduto);

    
    
}






function limpar() {

    lista.innerHTML = "";
    
}