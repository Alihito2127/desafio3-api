const users = {
  "usuario1": { password: "senha123", attempts: 0 }
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  if (!user) return res.status(401).json({ message: "Login inválido" });

  if (user.attempts >= 3) return res.status(403).json({ message: "Conta bloqueada" });

  if (user.password === password) {
    user.attempts = 0;
    return res.status(200).json({ message: "Login com sucesso" });
  } else {
    user.attempts++;
    return res.status(401).json({ message: "Senha incorreta" });
  }
};

exports.rememberPassword = (req, res) => {
  const { username } = req.body;
  if (users[username]) {
    return res.status(200).json({ message: `A senha é: ${users[username].password}` });
  } else {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
};

exports.resetAttempts = (req, res) => {
  const { username } = req.body;
  const user = users[username];

  if (user) {
    user.attempts = 0;
    return res.status(200).json({ message: "Tentativas resetadas" });
  } else {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
};
