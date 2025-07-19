// Modelo de dados do usuário
module.exports = class User {
  constructor({ username, password, email, reminder, attempts = 0, blocked = false }) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.reminder = reminder;
    this.attempts = attempts;
    this.blocked = blocked;
  }
}; 