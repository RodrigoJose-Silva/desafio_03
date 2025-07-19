// Service de login: lógica de negócio
const userRepository = require('../repositories/userRepository');

exports.login = (username, password) => {
  const user = userRepository.findByUsername(username);
  if (!user) {
    return { status: 404, data: { message: 'Usuário não cadastrado.' } };
  }
  if (user.blocked) {
    return { status: 403, data: { message: 'Usuário bloqueado por tentativas inválidas.' } };
  }
  if (user.password === password) {
    user.attempts = 0;
    userRepository.save(user);
    return { status: 200, data: { message: 'Login realizado com sucesso.' } };
  } else {
    user.attempts += 1;
    if (user.attempts >= 3) {
      user.blocked = true;
      userRepository.save(user);
      return { status: 403, data: { message: 'Usuário bloqueado após 3 tentativas inválidas.' } };
    }
    userRepository.save(user);
    return { status: 401, data: { message: 'Login ou senha inválidos.' } };
  }
};

exports.reminder = (username) => {
  const user = userRepository.findByUsername(username);
  if (!user) {
    return { status: 404, data: { message: 'Usuário não cadastrado.' } };
  }
  return { status: 200, data: { reminder: user.reminder } };
}; 