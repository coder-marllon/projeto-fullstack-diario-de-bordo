// backend/middleware/auth.js

const auth = (req, res, next) => {
    // Exemplo: checar se o usuário está autenticado
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }
  
    // Aqui você poderia verificar o token...
    // Mas vamos só passar pro próximo por enquanto.
    next();
  };
  
  module.exports = auth;
  