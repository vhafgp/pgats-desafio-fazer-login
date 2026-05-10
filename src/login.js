const usuarios = [
    { id: 1, nome: 'Frodo Bolseiro',    email: 'frodo@condado.com', senha: 'portadorDoAnel123',   expirado: false },
    { id: 2, nome: 'Boromir de Gondor', email: 'boromir@gondor.com', senha: 'filhoDeDenethor123',  expirado: true  },
    { id: 3, nome: 'Aragorn Elessar',   email: 'aragorn@gondor.com', senha: 'passoLargo456',       expirado: false }
]

export function fazerLogin(email, senha) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email) {
            if (usuarios[i].senha !== senha) {
                return 'Credenciais incorretas'
            }
            if (usuarios[i].expirado === true) {
                return 'Renove suas credenciais'
            }
            return 'Login realizado com sucesso'
        }
    }
    return 'Credenciais incorretas'
}
