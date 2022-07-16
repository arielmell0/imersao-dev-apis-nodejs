// 0 Obter um usuario
// 1 Obter o numero de telefone de um usuario pelo seu Id
// 2 Obter o endereço do usuario pelo seu Id

const obterUsuario = (callback) => {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000);
}

const obterTelefone = (idUsuario, callback) => {
    setTimeout(() => {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}

const obterEndereco = (idUsuario, callback) => {
    setTimeout(() => {
        return callback
    }, 2000)
}

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 === false
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.error('DEU RUIM em TELEFONE', error)
            return
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.error('DEU RUIM em ENDERECO', error)
                return;
            }
    
            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        });
    });

    
});