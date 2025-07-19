// Repositório de usuários: abstrai o acesso aos dados em memória
const User = require('../models/userModel');

// Usuários mockados em memória
const users = [
    new User({
        username: 'usuario1',
        password: 'senha123',
        email: 'usuario1@email.com',
        reminder: 'Dica: sua senha é o nome do seu animal de estimação + 123',
    }),
    // Adicione mais usuários conforme necessário
];

exports.findByUsername = (username) => {
    return users.find(u => u.username === username);
};

exports.save = (user) => {
    const idx = users.findIndex(u => u.username === user.username);
    if (idx !== -1) {
        users[idx] = user;
    } else {
        users.push(user);
    }
}; 