// Controller de login: recebe requisições, valida dados e chama o service
const loginService = require('../services/loginService');

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Dados obrigatórios.' });
  }
  const result = loginService.login(username, password);
  return res.status(result.status).json(result.data);
};

exports.reminder = (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Dados obrigatórios.' });
  }
  const result = loginService.reminder(username);
  return res.status(result.status).json(result.data);
}; 