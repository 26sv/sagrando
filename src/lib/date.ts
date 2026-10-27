const MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

function parti(iso: string) {
  const [a, m, g] = iso.split("-").map(Number);
  return { a, m: m - 1, g };
}

// "12-14 novembre 2026", "30 ottobre - 1 novembre 2026", "21 novembre 2026"
export function periodo(inizio: string, fine: string): string {
  const i = parti(inizio);
  const f = parti(fine);
  if (inizio === fine) return `${i.g} ${MESI[i.m]} ${i.a}`;
  if (i.m === f.m && i.a === f.a) return `${i.g}-${f.g} ${MESI[i.m]} ${i.a}`;
  if (i.a === f.a) return `${i.g} ${MESI[i.m]} - ${f.g} ${MESI[f.m]} ${i.a}`;
  return `${i.g} ${MESI[i.m]} ${i.a} - ${f.g} ${MESI[f.m]} ${f.a}`;
}

// "12-14 nov" per le etichette sulle schede
export function periodoBreve(inizio: string, fine: string): string {
  const i = parti(inizio);
  const f = parti(fine);
  const mese = (n: number) => MESI[n].slice(0, 3);
  if (inizio === fine) return `${i.g} ${mese(i.m)}`;
  if (i.m === f.m) return `${i.g}-${f.g} ${mese(i.m)}`;
  return `${i.g} ${mese(i.m)} - ${f.g} ${mese(f.m)}`;
}
