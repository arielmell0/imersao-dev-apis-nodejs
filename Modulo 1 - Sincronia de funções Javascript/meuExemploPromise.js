const { resolve } = require("path/posix")

const obterCaminhao = () => {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            return resolve({
                modelo: 'paçoca 2000',
                ano: 2019,
                carga: 'paçoca'
            })
        }, 1000)
    })
}

const caminhaoPromise = obterCaminhao();

caminhaoPromise
    .then(function(resultado) {
        console.log(resultado)
    })
    .catch(function(error) {
        console.error('deu pau: ', error)
    }) 