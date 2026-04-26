# Alandalus Backend

Node.js API for saving contact page inquiries to MongoDB Atlas.

## Setup

```bash
npm install
npm run dev
```

Create `.env` from `.env.example`.

## Environment Variables

- `MONGODB_URI`: MongoDB Atlas connection string.
- `CLIENT_ORIGIN`: allowed frontend origin, for example `http://localhost:5173` locally or the Vercel URL in production.
- `PORT`: optional, defaults to `5000`.

## Endpoints

- `GET /health`
- `POST /inquiries`
- `POST /api/inquiries`
- `POST /contact`
- `POST /api/contact`
