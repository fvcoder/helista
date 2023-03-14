# Helista

Una aplicacion de videoConferencias

## Stack
- [Remix](https://remix.run/)
- [Supabase](https://supabase.com/)

## Deployment
Esta aplicacion esta pensada en desplegarse en varios tipos de servidores, ligero y facil de desplegar
1. Crea uproyecto en [Supabase](https://app.supabase.com/)
2. Configura las credenciales para la autenticacion con: [Discord](https://supabase.com/docs/guides/auth/social-login/auth-discord) y [Github](https://supabase.com/docs/guides/auth/social-login/auth-github)
3. Ejecuta [database.sql](./database.sql), en Supabase.
4. Configura las variables de entorno
```
BASE_URL=http://localhost:3000

SUPABASE_URL=
SUPABASE_ANON_KEY=

COOKIE_SECRET=s3cr3t
```
4. Despliga con:
    - Node `npm install && npm run build && npm start` 
    - Docker `docker up`

## Development
1. Copeea [.env.copy](./.env.copy) a [.env](./.env) y configura el [entorno de ejecucion](#deployment)
2. Inicia en modo desarrollo
```sh
npm run dev
```
