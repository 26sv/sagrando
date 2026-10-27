# Sagrando

Portale di sagre, fiere e feste di paese dell'Emilia-Romagna, con calendario degli eventi.

## Stato (27 ottobre 2026)
- Home con calendario mensile, filtri per provincia e tipo, elenco eventi con immagine, pagina di dettaglio per ogni evento.
- Gli eventi sono di prova e stanno in `src/data/eventi.ts`. Hanno il segno "Evento di prova" (campo `prova`).
- Le immagini di prova sono in `public/img/eventi/` (una per categoria).
- Online come anteprima (non indicizzata): https://26sv.github.io/sagrando/
- Repo pubblico: https://github.com/26sv/sagrando (mai chiavi segrete nei file)
- Ogni push su `main` ripubblica da solo in circa 1 minuto (GitHub Pages, file `.github/workflows/pubblica.yml`, Node 24).

## Cosa manca (da fare)
- Database e login con Supabase (area organizzatori con link via mail, pannello admin, approvazione eventi, interruttore auto-iscrizione).
- Mail con Resend.
- Gestione banner pubblicitari dal pannello.
- Pagina privacy e note legali (serve il titolare dei dati, da decidere).
- Dominio vero (poi si toglie `base` da `astro.config.mjs` e `noindex` da `src/layouts/Base.astro`).

## Servizi e chiavi
Per ora nessuno. Con Supabase serviranno `PUBLIC_SUPABASE_URL` e `PUBLIC_SUPABASE_ANON_KEY` (non segrete). Solo i nomi qui, mai i valori.

## Dati personali
Per ora nessuno raccolto. Quando ci saranno organizzatori iscritti, i dati stanno in Supabase e si cancellano dal pannello di Supabase (tabelle organizzatori ed eventi).

## Provare sul Mac
```
cd ~/Siti/sagrando
npm run dev
```
Poi aprire http://localhost:4321
