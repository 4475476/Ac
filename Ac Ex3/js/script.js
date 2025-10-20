produtos = []
quantidade = [];

function adicionarProduto() {
     numero = document.getElementById('produto').value;
     valor = Number(document.getElementById('quantidade').value);
    
    if (numero == "" || valor < 0) return alert("Erro!");
    
    i = produtos.indexOf(numero);
    if (i >= 0) quantidade[i] += valor;
    else { produtos.push(numero); quantidade.push(valor); }
    
    document.getElementById('produto').value = "";
    document.getElementById('quantidade').value = "";
}

function mostrarResultados() {
    if (produtos.length == 0) return alert("Vazio!");
    
    t = 0
    m = 0
     numero = produtos[0];
    for ( i = 0; i < produtos.length; i++) {
        t += quantidade[i];
        if (quantidade[i] > m) { m = quantidade[i]; numero = produtos[i]; }
    }
    
    document.getElementById('resultado').innerHTML
}