// Indirizzo base del sito ("/sagrando" su GitHub Pages, vuoto con un dominio vero).
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const url = (percorso: string) => base + percorso;
