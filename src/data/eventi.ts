// Eventi di prova. Quando arriva il database (Supabase) questo file viene sostituito dai dati veri.
export type Categoria = "sagra" | "fiera" | "festa" | "mercatino" | "concerto";

export interface Evento {
  slug: string;
  titolo: string;
  categoria: Categoria;
  inizio: string; // AAAA-MM-GG
  fine: string; // AAAA-MM-GG
  comune: string;
  provincia: string; // sigla
  luogo: string;
  descrizione: string;
  orari: string;
  ingresso: string;
  partner: string[];
  sito?: string;
  immagine: string;
  prova: boolean;
}

export const categorie: Record<Categoria, string> = {
  sagra: "Sagra",
  fiera: "Fiera",
  festa: "Festa di paese",
  mercatino: "Mercatino",
  concerto: "Concerto",
};

export const province: Record<string, string> = {
  BO: "Bologna",
  FC: "Forlì-Cesena",
  FE: "Ferrara",
  MO: "Modena",
  PC: "Piacenza",
  PR: "Parma",
  RA: "Ravenna",
  RE: "Reggio Emilia",
  RN: "Rimini",
};

const img = (c: Categoria) => `/img/eventi/${c}.svg`;

export const eventi: Evento[] = [
  {
    slug: "festa-di-halloween-imola",
    titolo: "Festa di Halloween in piazza",
    categoria: "festa",
    inizio: "2026-10-30",
    fine: "2026-11-01",
    comune: "Imola",
    provincia: "BO",
    luogo: "Piazza Matteotti",
    descrizione:
      "Tre sere di maschere, zucche intagliate e stand gastronomici per grandi e piccoli. Sabato sfilata in costume con premio per la maschera più originale.",
    orari: "Dalle 17:00 alle 23:00",
    ingresso: "Ingresso libero",
    partner: ["Pro Loco Imola", "Panificio Rossi"],
    immagine: img("festa"),
    prova: true,
  },
  {
    slug: "sagra-della-castagna-zocca",
    titolo: "Sagra della Castagna",
    categoria: "sagra",
    inizio: "2026-11-06",
    fine: "2026-11-08",
    comune: "Zocca",
    provincia: "MO",
    luogo: "Parco Comunale",
    descrizione:
      "Castagne arrostite, tigelle, polenta e vin brulé nel cuore dell'Appennino modenese. Musica dal vivo e mercatino dei prodotti di montagna.",
    orari: "Venerdì dalle 18:00, sabato e domenica dalle 10:00",
    ingresso: "Ingresso libero",
    partner: ["Pro Loco Zocca", "Consorzio Castagna dell'Appennino"],
    immagine: img("sagra"),
    prova: true,
  },
  {
    slug: "fiera-dei-sapori-di-mare-ravenna",
    titolo: "Fiera dei Sapori di Mare",
    categoria: "fiera",
    inizio: "2026-11-07",
    fine: "2026-11-08",
    comune: "Ravenna",
    provincia: "RA",
    luogo: "Darsena di città",
    descrizione:
      "Il pesce dell'Adriatico incontra i cuochi della Romagna: degustazioni, show cooking e banchi dei pescatori locali.",
    orari: "Dalle 10:00 alle 22:00",
    ingresso: "Ingresso libero, degustazioni a pagamento",
    partner: ["Cooperativa Pescatori", "Ristorante La Darsena"],
    immagine: img("fiera"),
    prova: true,
  },
  {
    slug: "fiera-di-san-martino-cesena",
    titolo: "Fiera di San Martino",
    categoria: "fiera",
    inizio: "2026-11-11",
    fine: "2026-11-11",
    comune: "Cesena",
    provincia: "FC",
    luogo: "Centro storico",
    descrizione:
      "La fiera di tradizione con bancarelle, dolci tipici e il vino novello. Si festeggiano anche i matrimoni sbagliati, come vuole l'usanza.",
    orari: "Tutto il giorno",
    ingresso: "Ingresso libero",
    partner: ["Comune di Cesena"],
    immagine: img("fiera"),
    prova: true,
  },
  {
    slug: "sagra-del-tortellino-castelfranco",
    titolo: "Sagra del Tortellino",
    categoria: "sagra",
    inizio: "2026-11-12",
    fine: "2026-11-14",
    comune: "Castelfranco Emilia",
    provincia: "MO",
    luogo: "Piazza Garibaldi",
    descrizione:
      "Tre giorni dedicati al tortellino: sfoglia tirata a mano in diretta, cucina aperta tutta la sera, musica dal vivo e mercatino artigiano.",
    orari: "Dalle 18:30 alle 23:30",
    ingresso: "Ingresso libero",
    partner: ["Pro Loco Castelfranco", "Pastificio Ghiselli", "Cantina Sociale"],
    sito: "https://example.com",
    immagine: img("sagra"),
    prova: true,
  },
  {
    slug: "fiera-del-tartufo-savigno",
    titolo: "Fiera del Tartufo",
    categoria: "fiera",
    inizio: "2026-11-14",
    fine: "2026-11-15",
    comune: "Valsamoggia",
    provincia: "BO",
    luogo: "Borgo di Savigno",
    descrizione:
      "Bancarelle di tartufo fresco, olio e formaggi, con passeggiate nei boschi insieme ai tartufai e pranzi a tema nei ristoranti del borgo.",
    orari: "Dalle 9:00 alle 19:00",
    ingresso: "Ingresso libero",
    partner: ["Associazione Tartufai", "Agriturismo Il Poggio"],
    immagine: img("fiera"),
    prova: true,
  },
  {
    slug: "festa-del-vino-novello-bertinoro",
    titolo: "Festa del Vino Novello",
    categoria: "festa",
    inizio: "2026-11-19",
    fine: "2026-11-22",
    comune: "Bertinoro",
    provincia: "FC",
    luogo: "Centro storico",
    descrizione:
      "Il borgo si riempie di cantine aperte e assaggi di Sangiovese novello, con castagnaccio, salumi e concerti nelle piazzette.",
    orari: "Dalle 16:00 alle 24:00",
    ingresso: "Calice con tasca: 8 euro",
    partner: ["Cantine di Romagna", "Proloco Bertinoro"],
    immagine: img("festa"),
    prova: true,
  },
  {
    slug: "mercatino-antiquariato-parma",
    titolo: "Mercatino dell'Antiquariato",
    categoria: "mercatino",
    inizio: "2026-11-21",
    fine: "2026-11-21",
    comune: "Parma",
    provincia: "PR",
    luogo: "Piazzale della Pace",
    descrizione:
      "Oltre cento espositori tra mobili d'epoca, libri rari, bigiotteria e oggetti da collezione.",
    orari: "Dalle 8:00 alle 18:00",
    ingresso: "Ingresso libero",
    partner: ["Associazione Antiquari Parmensi"],
    immagine: img("mercatino"),
    prova: true,
  },
  {
    slug: "sagra-del-cappellaccio-ferrara",
    titolo: "Sagra del Cappellaccio di Zucca",
    categoria: "sagra",
    inizio: "2026-11-28",
    fine: "2026-11-29",
    comune: "Ferrara",
    provincia: "FE",
    luogo: "Piazza Ariostea",
    descrizione:
      "I cappellacci di zucca al burro e salvia, la salama da sugo e i dolci ferraresi in due giornate di festa nella piazza più bella della città.",
    orari: "Sabato dalle 12:00, domenica dalle 11:00",
    ingresso: "Ingresso libero",
    partner: ["Pro Loco Ferrara", "Azienda Agricola Zucca d'Oro"],
    immagine: img("sagra"),
    prova: true,
  },
  {
    slug: "festa-del-parmigiano-soragna",
    titolo: "Festa del Parmigiano Reggiano",
    categoria: "sagra",
    inizio: "2026-12-03",
    fine: "2026-12-04",
    comune: "Soragna",
    provincia: "PR",
    luogo: "Rocca Meli Lupi",
    descrizione:
      "Visite al caseificio, degustazioni di stagionature diverse e laboratorio per bambini sulla lavorazione del latte.",
    orari: "Dalle 10:00 alle 20:00",
    ingresso: "5 euro, gratis sotto i 12 anni",
    partner: ["Caseificio Sociale", "Consorzio del Parmigiano Reggiano"],
    immagine: img("sagra"),
    prova: true,
  },
  {
    slug: "mercatino-di-natale-ferrara",
    titolo: "Mercatino di Natale",
    categoria: "mercatino",
    inizio: "2026-12-05",
    fine: "2026-12-08",
    comune: "Ferrara",
    provincia: "FE",
    luogo: "Piazza Trento e Trieste",
    descrizione:
      "Casette di legno con addobbi, dolci natalizi e artigianato, pista di pattinaggio e Babbo Natale per i più piccoli.",
    orari: "Dalle 10:00 alle 20:00",
    ingresso: "Ingresso libero",
    partner: ["Comune di Ferrara", "Confcommercio"],
    immagine: img("mercatino"),
    prova: true,
  },
  {
    slug: "concerto-di-natale-reggio-emilia",
    titolo: "Concerto di Natale in piazza",
    categoria: "concerto",
    inizio: "2026-12-12",
    fine: "2026-12-12",
    comune: "Reggio Emilia",
    provincia: "RE",
    luogo: "Piazza Prampolini",
    descrizione:
      "La banda cittadina e il coro gospel in un concerto all'aperto con cioccolata calda e panettone per tutti.",
    orari: "Alle 21:00",
    ingresso: "Ingresso libero",
    partner: ["Banda Città del Tricolore", "Bar Centrale"],
    immagine: img("concerto"),
    prova: true,
  },
  {
    slug: "fiera-del-cioccolato-bologna",
    titolo: "Fiera del Cioccolato",
    categoria: "fiera",
    inizio: "2026-12-18",
    fine: "2026-12-20",
    comune: "Bologna",
    provincia: "BO",
    luogo: "Piazza VIII Agosto",
    descrizione:
      "Maestri cioccolatieri da tutta Italia, laboratori per bambini e degustazioni guidate di cioccolato fondente.",
    orari: "Dalle 10:00 alle 21:00",
    ingresso: "Ingresso libero",
    partner: ["Cioccolateria Dolce Vita", "Confesercenti"],
    immagine: img("fiera"),
    prova: true,
  },
  {
    slug: "capodanno-in-piazza-rimini",
    titolo: "Capodanno in piazza",
    categoria: "festa",
    inizio: "2026-12-31",
    fine: "2026-12-31",
    comune: "Rimini",
    provincia: "RN",
    luogo: "Piazza Cavour",
    descrizione:
      "Musica dal vivo, DJ set e brindisi di mezzanotte con lo spettacolo pirotecnico sul lungomare.",
    orari: "Dalle 22:00 alle 2:00",
    ingresso: "Ingresso libero",
    partner: ["Comune di Rimini", "Radio Romagna"],
    immagine: img("festa"),
    prova: true,
  },
  {
    slug: "festa-di-sant-antonio-piacenza",
    titolo: "Festa di Sant'Antonio con falò",
    categoria: "festa",
    inizio: "2027-01-16",
    fine: "2027-01-17",
    comune: "Piacenza",
    provincia: "PC",
    luogo: "Borgo di Podenzano",
    descrizione:
      "La tradizionale benedizione degli animali, il grande falò e la cena con polenta e salsiccia sotto il tendone.",
    orari: "Sabato dalle 17:00, domenica dalle 11:00",
    ingresso: "Ingresso libero",
    partner: ["Parrocchia di Podenzano", "Pro Loco"],
    immagine: img("festa"),
    prova: true,
  },
];
