const usuario = {
    nome: 'Bruno',
    idade: 26,
    endereco:{
        cidade: 'São Paulo',
        estado: 'SP'
    },
};
function mostraNome({nome, idade}){

    console.log(nome, idade);
}

mostraNome(usuario);