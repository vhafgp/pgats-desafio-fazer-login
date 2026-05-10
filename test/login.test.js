import { fazerLogin } from '../src/login.js'
import assert from 'node:assert'

describe('Testes da função fazerLogin', function () {

    it('Deve retornar mensagem de sucesso quando login é válido', function () {
        // Arrange
        const emailValido = 'frodo@condado.com'
        const senhaCerta = 'portadorDoAnel123'
        const mensagemEsperada = 'Login realizado com sucesso'

        // Act
        const mensagemRecebida = fazerLogin(emailValido, senhaCerta)

        // Assert
        assert.equal(mensagemRecebida, mensagemEsperada)
    })

    it('Deve retornar mensagem de credencial expirada', function () {
        // Arrange
        const emailDeUsuarioExpirado = 'boromir@gondor.com'
        const senhaCerta = 'filhoDeDenethor123'
        const mensagemEsperada = 'Renove suas credenciais'

        // Act
        const mensagemRecebida = fazerLogin(emailDeUsuarioExpirado, senhaCerta)

        // Assert
        assert.equal(mensagemRecebida, mensagemEsperada)
    })

    it('Deve retornar mensagem de credenciais incorretas quando email não existe', function () {
        // Arrange
        const emailQueNaoExiste = 'sauron@mordor.com'
        const qualquerSenha = 'umAnelParaTodosGovernar'
        const mensagemEsperada = 'Credenciais incorretas'

        // Act
        const mensagemRecebida = fazerLogin(emailQueNaoExiste, qualquerSenha)

        // Assert
        assert.equal(mensagemRecebida, mensagemEsperada)
    })

    it('Deve retornar mensagem de credenciais incorretas quando senha está errada', function () {
        // Arrange
        const emailValido = 'frodo@condado.com'
        const senhaErrada = 'umAnelParaEncontrar999'
        const mensagemEsperada = 'Credenciais incorretas'

        // Act
        const mensagemRecebida = fazerLogin(emailValido, senhaErrada)

        // Assert
        assert.equal(mensagemRecebida, mensagemEsperada)
    })
})
