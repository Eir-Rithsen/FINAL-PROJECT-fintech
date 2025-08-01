# FINAL-PROJECT-fintech
# 🛠 TechLab API - Proyecto Final

Esta es una API REST desarrollada como entrega final para el curso de TechLab. Permite realizar operaciones CRUD sobre productos y gestionar autenticación de usuarios mediante JWT.

## 🚀 Características

- 🔐 Autenticación con JWT
- 🔄 CRUD de productos
- ☁️ Firebase Firestore como base de datos
- 🧱 Arquitectura en capas (Rutas, Controladores, Servicios, Modelos)
- 🌍 Listo para deploy en Render o Railway

## 🧪 Endpoints

### Auth
- `POST /auth/login` → Devuelve un token si las credenciales son válidas

### Productos
- `GET /api/products` → Devuelve todos los productos
- `GET /api/products/:id` → Devuelve un producto por ID
- `POST /api/products/create` → Crea producto (requiere token)
- `DELETE /api/products/:id` → Elimina producto (requiere token)

## 🧰 Setup

```bash
npm install
npm run start
