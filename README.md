# Live Mutch — Live Sports Dashboard

React + Vite frontend and Node.js + Express backend for Football, Basketball, Tennis and Cricket.

## Security
The Football-Data.org token shared in the conversation should be revoked and regenerated. Keep all provider keys in backend environment variables only. Never commit .env files.

## Providers
- Football: Football-Data.org
- Basketball: BALLDONTLIE
- Tennis: API-Tennis
- Cricket: CricketData

Provider endpoint access and quotas depend on each provider's plan. Empty/error states are shown rather than inventing scores.

## Run locally
1. In backend run `npm install`.
2. Copy `backend/.env.example` to `backend/.env` and set API keys.
3. Run `npm run dev` in backend; health check: `http://localhost:5000/health`.
4. In frontend run `npm install`.
5. Copy `frontend/.env.example` to `frontend/.env`.
6. Run `npm run dev` and open `http://localhost:5173`.

## Deploy
**Render:** create a Web Service from this repository; Root Directory `backend`, Build Command `npm install`, Start Command `npm start`. Add `FOOTBALL_API_KEY`, `BASKETBALL_API_KEY`, `TENNIS_API_KEY`, `CRICKET_API_KEY`, and `FRONTEND_URL` (your Vercel URL).

**Vercel:** import this repository; Root Directory `frontend`, Framework Vite, Build Command `npm run build`, Output Directory `dist`. Set `VITE_API_URL` to `https://YOUR-RENDER-SERVICE.onrender.com/api`.

## API routes
`/api/football/live`, `/api/football/fixtures?date=YYYY-MM-DD`, `/api/football/results`, `/api/football/competitions`, `/api/football/standings?competition=PL`, `/api/football/teams?competition=PL`, `/api/basketball/games`, `/api/basketball/teams`, `/api/basketball/players`, `/api/tennis/live`, `/api/cricket/live`.
