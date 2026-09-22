# assw_front 🚀

Frontend en **Astro** (sitio estático) conectado a la API REST de **assw_backend** (Rust).

## Requisitos

- [Node.js](https://nodejs.org/) ≥ 18

## Ejecución

```bash
# Clonar el repo
git clone https://github.com/TU_USUARIO/assw_front.git
cd assw_front

# Instalar dependencias
npm install

# Copiar y editar el .env con la URL del backend
cp .env.example .env
# Editar .env → PUBLIC_BACKEND_URL=http://<IP_BACKEND>:8080

# Servidor de desarrollo
npm run dev        # → http://localhost:4321

# Build de producción (genera dist/)
PUBLIC_BACKEND_URL=http://192.168.1.100:8080 npm run build

# Preview del build
npm run preview
```

## Variables de entorno

| Variable | Ejemplo | Descripción |
|----------|---------|-------------|
| `PUBLIC_BACKEND_URL` | `http://192.168.1.100:8080` | URL completa del backend Rust |

> La variable se inyecta **en tiempo de build**. Si cambias la IP del backend, vuelve a hacer `npm run build`.

## Servir el build con nginx (producción)

```bash
npm run build
# Copia dist/ al servidor y sírvelo con nginx apuntando a esa carpeta
```
