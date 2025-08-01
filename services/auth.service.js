import jwt from 'jsonwebtoken';

const userDB = {
  email: 'admin@techlab.com',
  password: 'admin123'
};

export const login = ({ email, password }) => {
  if (email === userDB.email && password === userDB.password) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }
  throw new Error('Credenciales inválidas');
};
