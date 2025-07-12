// Usuários mockados em memória
const users = [
  {
    username: 'usuario1',
    password: 'senha123',
    email: 'usuario1@email.com',
    reminder: 'Dica: sua senha é o nome do seu animal de estimação + 123',
    attempts: 0,
    blocked: false
  },
  // Adicione mais usuários conforme necessário
];

// Função auxiliar para encontrar usuário
function findUser(username) {
  return users.find(u => u.username === username);
}

// Função de login
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = findUser(username);

  // Usuário não cadastrado
  if (!user) {
    return res.status(404).json({ message: 'Usuário não cadastrado.' });
  }

  // Usuário bloqueado
  if (user.blocked) {
    return res.status(403).json({ message: 'Usuário bloqueado por tentativas inválidas.' });
  }

  // Validação de senha
  if (user.password === password) {
    user.attempts = 0; // Reseta tentativas
    return res.status(200).json({ message: 'Login realizado com sucesso.' });
  } else {
    user.attempts += 1;
    if (user.attempts >= 3) {
      user.blocked = true;
      return res.status(403).json({ message: 'Usuário bloqueado após 3 tentativas inválidas.' });
    }
    return res.status(401).json({ message: 'Login ou senha inválidos.' });
  }
};

// Função de lembrete de senha
exports.reminder = (req, res) => {
  const { username } = req.body;
  const user = findUser(username);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não cadastrado.' });
  }
  return res.status(200).json({ reminder: user.reminder });
}; 