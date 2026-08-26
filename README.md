# Silvia Castelletti Psicologa

Sito realizzato con React + Vite.

## Comandi

```bash
npm install     # installa le dipendenze
npm run dev     # avvia il server di sviluppo su http://localhost:8000
npm run build   # build di produzione in dist/
npm run preview # anteprima locale della build
```

## Struttura

- `src/content` — testi del sito (JSON + Markdown), modificabili senza toccare i componenti
- `src/section` — sezioni della home page (Chi sono, Come lavoro, Il mio approccio, Dove ricevo, Contatti)
- `src/components` — componenti condivisi (Layout, Header, Footer, Card, Input, TextArea, SEO)
- `src/pages` — pagine associate alle rotte
- `src/assets/images` — immagini importate dai componenti

## Configurazione

L'endpoint della Azure Function che invia le email è configurabile tramite la
variabile d'ambiente `VITE_SEND_EMAIL_API_URL` (file `.env`). Se non impostata
viene usato l'endpoint di produzione.

## Deploy

Il sito è una Single Page Application: il server deve rispondere con
`index.html` per tutte le rotte sconosciute. Per Azure Static Web Apps la
regola è già inclusa in `public/staticwebapp.config.json`.
