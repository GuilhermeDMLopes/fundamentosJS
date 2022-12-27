// Podemos adicionar funções nas propriedades do objeto

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        // O this representa a instancia do objeto atual
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
};

// Chamando a função

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(25);