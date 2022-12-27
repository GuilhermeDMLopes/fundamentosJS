/* JSON é uma abreviatura para Java Script Object Notation

Isso significa Notação de Objeto JS, um formato que permite a escrita de Objetos do JS.

Vejamos algumas diferenças:

Criação de Objeto comum:
*/

const cliente = {
    nome: "Joao",
    email: "joao@firma.com",
    telefone: ["11223344", "11922334453"],
    endereco: {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
};

// Utilizando notação JSON: 

/*
{
    "nome": "Joao",
    "email": "joao@firma.com",
    "telefone": ["11223344", "11922334453"],
    "endereco": {
      "rua": "R. Joseph Climber",
      "numero": 1337,
      "apartamento": true,
      "complemento": "ap 934"
    }
}
*/

/* Como podemos observar, não utilizamos variaveis para declarar um objeto
   As chaves das propriedades têm aspas duplas
   Arrays e objetos aninhados podem existir
   Suporta apenas tipos primitivos (string, number, boolean, null)
   Não permite trailling comma (virgula no ultimo elemento)
   Funções, comentários, tipo undefined e estruturas mais complexas como datas ou Regex
podem não ser aceitas
*/