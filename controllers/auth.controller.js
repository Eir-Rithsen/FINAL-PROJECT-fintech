import * as authService from '../services/auth.service.js';

export const login = (req, res) => {
  try {
    const token = authService.login(req.body);
    res.json(token);
  } catch {
    res.status(401).json({ error: 'Autenticación fallida' });
  }
};
