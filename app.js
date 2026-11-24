/**
 * ==============================================================================
 * PROGETTO: Gestionale Magazzino Libreria & Cassa Vendite (BiblioTech)
 * CANDIDATO: Valentyn Haidukov (Perito Informatico - Help Desk L1 & Supporto IT)
 * CARATTERISTICHE:
 * - 25 titoli a catalogo divisi in 5 generi (Informatica, Narrativa, Saggistica, Classici, Scienza)
 * - Calcolo automatico statistiche: totale copie, valore inventario e scorte basse
 * - Ricerca istantanea per titolo, autore o codice ISBN-13
 * - Aggiunta e modifica libri tramite form modale con persistenza in localStorage
 * - Esportazione del catalogo in formato CSV per Microsoft Excel
 * - Cassa / Carrello con scontrino e stampa (window.print)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATASET INIZIALE CATALOGO LIBRI (25 titoli specialistici)
// ------------------------------------------------------------------------------
const LIBRI_INIZIALI = [
  // Categoria: Informatica & Web
  {
    id: 1,
    titolo: "Clean Code: Guida per artigiani del software",
    autore: "Robert C. Martin",
    genere: "Informatica",
    prezzo: 38.00,
    copie: 6,
    isbn: "978-8850334384",
    anno: 2018,
    editore: "Apogeo",
    icona: "💻",
    immagine: 'covers/cover-1.jpg'
  },
  {
    id: 2,
    titolo: "Il Pragmatic Programmer",
    autore: "David Thomas, Andrew Hunt",
    genere: "Informatica",
    prezzo: 42.00,
    copie: 4,
    isbn: "978-8850335008",
    anno: 2020,
    editore: "Apogeo",
    icona: "💻",
    immagine: 'covers/cover-2.jpg'
  },
  {
    id: 3,
    titolo: "Reti di Calcolatori e Internet",
    autore: "James F. Kurose, Keith W. Ross",
    genere: "Informatica",
    prezzo: 55.00,
    copie: 8,
    isbn: "978-8871926407",
    anno: 2022,
    editore: "Pearson",
    icona: "🌐",
    immagine: 'covers/cover-3.jpg'
  },
  {
    id: 4,
    titolo: "Guida a HTML5 e CSS3",
    autore: "Mark Pilgrim",
    genere: "Informatica",
    prezzo: 24.50,
    copie: 12,
    isbn: "978-8848126748",
    anno: 2019,
    editore: "Tecniche Nuove",
    icona: "🎨",
    immagine: 'covers/cover-4.jpg'
  },
  {
    id: 5,
    titolo: "JavaScript: La Guida Definitiva",
    autore: "David Flanagan",
    genere: "Informatica",
    prezzo: 49.00,
    copie: 5,
    isbn: "978-8848129817",
    anno: 2021,
    editore: "Tecniche Nuove",
    icona: "⚡",
    immagine: 'covers/cover-5.jpg'
  },

  // Categoria: Narrativa
  {
    id: 6,
    titolo: "1984",
    autore: "George Orwell",
    genere: "Narrativa",
    prezzo: 12.00,
    copie: 15,
    isbn: "978-8804668237",
    anno: 1949,
    editore: "Mondadori",
    icona: "📖",
    immagine: 'covers/cover-6.jpg'
  },
  {
    id: 7,
    titolo: "Il Signore degli Anelli",
    autore: "J.R.R. Tolkien",
    genere: "Narrativa",
    prezzo: 28.00,
    copie: 7,
    isbn: "978-8845292613",
    anno: 1954,
    editore: "Bompiani",
    icona: "🗡️",
    immagine: 'covers/cover-7.jpg'
  },
  {
    id: 8,
    titolo: "Dune",
    autore: "Frank Herbert",
    genere: "Narrativa",
    prezzo: 16.50,
    copie: 10,
    isbn: "978-8834739600",
    anno: 1965,
    editore: "Fanucci",
    icona: "🏜️",
    immagine: 'covers/cover-8.jpg'
  },
  {
    id: 9,
    titolo: "Il Piccolo Principe",
    autore: "Antoine de Saint-Exupéry",
    genere: "Narrativa",
    prezzo: 9.90,
    copie: 20,
    isbn: "978-8845292699",
    anno: 1943,
    editore: "Bompiani",
    icona: "👑",
    immagine: 'covers/cover-9.jpg'
  },
  {
    id: 10,
    titolo: "Il Nome della Rosa",
    autore: "Umberto Eco",
    genere: "Narrativa",
    prezzo: 14.00,
    copie: 8,
    isbn: "978-8845278655",
    anno: 1980,
    editore: "Bompiani",
    icona: "🏰",
    immagine: 'covers/cover-10.jpg'
  },

  // Categoria: Saggistica
  {
    id: 11,
    titolo: "Sapiens: Da animali a dèi",
    autore: "Yuval Noah Harari",
    genere: "Saggistica",
    prezzo: 18.00,
    copie: 11,
    isbn: "978-8845296499",
    anno: 2014,
    editore: "Bompiani",
    icona: "🧠",
    immagine: 'covers/cover-11.jpg'
  },
  {
    id: 12,
    titolo: "Pensieri lenti e veloci",
    autore: "Daniel Kahneman",
    genere: "Saggistica",
    prezzo: 15.00,
    copie: 6,
    isbn: "978-8804629276",
    anno: 2012,
    editore: "Mondadori",
    icona: "🧠",
    immagine: 'covers/cover-12.jpg'
  },
  {
    id: 13,
    titolo: "Armi, acciaio e malattie",
    autore: "Jared Diamond",
    genere: "Saggistica",
    prezzo: 14.50,
    copie: 5,
    isbn: "978-8806219222",
    anno: 1997,
    editore: "Einaudi",
    icona: "🌍",
    immagine: 'covers/cover-13.jpg'
  },
  {
    id: 14,
    titolo: "La realtà non è come ci appare",
    autore: "Carlo Rovelli",
    genere: "Saggistica",
    prezzo: 12.50,
    copie: 9,
    isbn: "978-8860889218",
    anno: 2014,
    editore: "Raffaello Cortina",
    icona: "🌌",
    immagine: 'covers/cover-14.jpg'
  },
  {
    id: 15,
    titolo: "Fattore 1%: Piccole abitudini",
    autore: "Luca Mazzucchelli",
    genere: "Saggistica",
    prezzo: 16.90,
    copie: 14,
    isbn: "978-8820067342",
    anno: 2019,
    editore: "Sperling & Kupfer",
    icona: "📈",
    immagine: 'covers/cover-15.jpg'
  },

  // Categoria: Classici
  {
    id: 16,
    titolo: "La Divina Commedia",
    autore: "Dante Alighieri",
    genere: "Classici",
    prezzo: 22.00,
    copie: 8,
    isbn: "978-8804683018",
    anno: 1321,
    editore: "Mondadori",
    icona: "🏛️",
    immagine: 'covers/cover-16.jpg'
  },
  {
    id: 17,
    titolo: "I Promessi Sposi",
    autore: "Alessandro Manzoni",
    genere: "Classici",
    prezzo: 13.00,
    copie: 12,
    isbn: "978-8804683025",
    anno: 1840,
    editore: "Mondadori",
    icona: "🏛️",
    immagine: 'covers/cover-17.jpg'
  },
  {
    id: 18,
    titolo: "Guerra e Pace",
    autore: "Lev Tolstoj",
    genere: "Classici",
    prezzo: 24.00,
    copie: 4,
    isbn: "978-8804683032",
    anno: 1869,
    editore: "Mondadori",
    icona: "🏛️",
    immagine: 'covers/cover-18.jpg'
  },
  {
    id: 19,
    titolo: "Orgoglio e Pregiudizio",
    autore: "Jane Austen",
    genere: "Classici",
    prezzo: 11.50,
    copie: 16,
    isbn: "978-8804683049",
    anno: 1813,
    editore: "Mondadori",
    icona: "🏛️",
    immagine: 'covers/cover-19.jpg'
  },
  {
    id: 20,
    titolo: "L'Odissea",
    autore: "Omero",
    genere: "Classici",
    prezzo: 12.00,
    copie: 7,
    isbn: "978-8804683056",
    anno: -800,
    editore: "Mondadori",
    icona: "🏛️",
    immagine: 'covers/cover-20.jpg'
  },

  // Categoria: Scienza
  {
    id: 21,
    titolo: "L'ordine del tempo",
    autore: "Carlo Rovelli",
    genere: "Scienza",
    prezzo: 14.00,
    copie: 10,
    isbn: "978-8845931925",
    anno: 2017,
    editore: "Adelphi",
    icona: "⏳",
    immagine: 'covers/cover-21.jpg'
  },
  {
    id: 22,
    titolo: "Breve storia di quasi tutto",
    autore: "Bill Bryson",
    genere: "Scienza",
    prezzo: 15.50,
    copie: 8,
    isbn: "978-8850239023",
    anno: 2003,
    editore: "TEA",
    icona: "🔬",
    immagine: 'covers/cover-22.jpg'
  },
  {
    id: 23,
    titolo: "Cosmo",
    autore: "Carl Sagan",
    genere: "Scienza",
    prezzo: 17.00,
    copie: 5,
    isbn: "978-8845298813",
    anno: 1980,
    editore: "Bompiani",
    icona: "🔭",
    immagine: 'covers/cover-23.jpg'
  },
  {
    id: 24,
    titolo: "L'universo elegante",
    autore: "Brian Greene",
    genere: "Scienza",
    prezzo: 16.00,
    copie: 6,
    isbn: "978-8806223403",
    anno: 1999,
    editore: "Einaudi",
    icona: "🌌",
    immagine: 'covers/cover-24.jpg'
  },
  {
    id: 25,
    titolo: "La fisica del futuro",
    autore: "Michio Kaku",
    genere: "Scienza",
    prezzo: 14.90,
    copie: 7,
    isbn: "978-8807884559",
    anno: 2011,
    editore: "Feltrinelli",
    icona: "⚡",
    immagine: 'covers/cover-25.jpg'
  }
];

// ------------------------------------------------------------------------------
// 2. STATO APPLICAZIONE (con salvataggio su localStorage)
// ------------------------------------------------------------------------------
let libri = caricaLibri();
let carrello = [];
let metodoPagamento = 'cash';
let filtroGenere = 'all';
let filtroTesto = '';
let filtroScorte = 'all';
let ordinamento = 'stock-desc';
let libroInModificaId = null;

function caricaLibri() {
  const salvati = localStorage.getItem('bibliotech_libri_v4') || localStorage.getItem('bibliotech_libri');
  if (salvati) {
    try {
      const parsed = JSON.parse(salvati);
      const sincronizzati = parsed.map(l => {
        const init = LIBRI_INIZIALI.find(item => item.id === l.id);
        if (init) {
          // Forza sempre la copertina ufficiale ad alta risoluzione
          return { ...l, immagine: init.immagine, icona: init.icona };
        }
        return l;
      });
      localStorage.setItem('bibliotech_libri_v4', JSON.stringify(sincronizzati));
      localStorage.setItem('bibliotech_libri', JSON.stringify(sincronizzati));
      return sincronizzati;
    } catch (e) {
      console.warn("Errore lettura dati da localStorage, uso default.");
    }
  }
  return [...LIBRI_INIZIALI];
}

function salvaLibri() {
  localStorage.setItem('bibliotech_libri_v4', JSON.stringify(libri));
  localStorage.setItem('bibliotech_libri', JSON.stringify(libri));
}

// ------------------------------------------------------------------------------
// 3. INIZIALIZZAZIONE & EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  render();
  setupEventListeners();
});

function setupEventListeners() {
  // Ricerca testuale
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filtroTesto = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // Filtro Categorie Rapide (Pills)
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(btn => {
    btn.addEventListener('click', () => {
      catPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroGenere = btn.getAttribute('data-cat');
      const catSelect = document.getElementById('categoryFilter');
      if (catSelect) catSelect.value = filtroGenere;
      render();
    });
  });

  // Filtro Dropdown Genere
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      filtroGenere = e.target.value;
      catPills.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-cat') === filtroGenere);
      });
      render();
    });
  }

  // Filtro Scorte
  const stockFilter = document.getElementById('stockFilter');
  if (stockFilter) {
    stockFilter.addEventListener('change', (e) => {
      filtroScorte = e.target.value;
      render();
    });
  }

  // Ordinamento
  const sortBy = document.getElementById('sortBy');
  if (sortBy) {
    sortBy.addEventListener('change', (e) => {
      ordinamento = e.target.value;
      render();
    });
  }

  // Pulsante Esporta CSV
  const exportBtn = document.getElementById('exportCsvBtn');
  if (exportBtn) exportBtn.addEventListener('click', esportaInCsv);

  // Pulsante Reset Dati Iniziali
  const resetBtn = document.getElementById('resetDataBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm("Vuoi ripristinare il catalogo con i 25 volumi predefiniti?")) {
        localStorage.removeItem('bibliotech_libri');
        libri = [...LIBRI_INIZIALI];
        render();
      }
    });
  }

  // Gestione Modale Nuovo/Modifica Libro
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const bookModal = document.getElementById('bookModal');
  const bookForm = document.getElementById('bookForm');

  if (openModalBtn) openModalBtn.addEventListener('click', () => apriModaleLibro());
  if (closeModalBtn) closeModalBtn.addEventListener('click', chiudiModaleLibro);
  if (cancelBtn) cancelBtn.addEventListener('click', chiudiModaleLibro);
  if (bookModal) {
    bookModal.addEventListener('click', (e) => {
      if (e.target === bookModal) chiudiModaleLibro();
    });
  }
  if (bookForm) bookForm.addEventListener('submit', gestisciSalvataggioLibro);

  // Gestione Cassa e Carrello
  const openCartBtn = document.getElementById('openCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (openCartBtn) openCartBtn.addEventListener('click', apriCarrello);
  if (closeCartBtn) closeCartBtn.addEventListener('click', chiudiCarrello);
  if (cartOverlay) cartOverlay.addEventListener('click', chiudiCarrello);
  if (clearCartBtn) clearCartBtn.addEventListener('click', svuotaCarrello);
  if (checkoutBtn) checkoutBtn.addEventListener('click', completaVendita);

  // Metodi di Pagamento Cassa (Contanti / POS)
  const payMethodCash = document.getElementById('payMethodCash');
  const payMethodPos = document.getElementById('payMethodPos');
  const cashBox = document.getElementById('cashPaymentBox');
  const posBox = document.getElementById('posPaymentBox');

  if (payMethodCash && payMethodPos) {
    payMethodCash.addEventListener('click', () => {
      metodoPagamento = 'cash';
      payMethodCash.classList.add('active');
      payMethodPos.classList.remove('active');
      if (cashBox) cashBox.classList.remove('hidden');
      if (posBox) posBox.classList.add('hidden');
    });

    payMethodPos.addEventListener('click', () => {
      metodoPagamento = 'pos';
      payMethodPos.classList.add('active');
      payMethodCash.classList.remove('active');
      if (cashBox) cashBox.classList.add('hidden');
      if (posBox) posBox.classList.remove('hidden');
    });
  }

  // Calcolo Resto Contanti in Tempo Reale
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) {
    cashInput.addEventListener('input', calcolaResto);
  }

  const cashExactBtn = document.getElementById('cashExactBtn');
  if (cashExactBtn) {
    cashExactBtn.addEventListener('click', () => {
      const totale = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
      if (cashInput) {
        cashInput.value = totale.toFixed(2);
        calcolaResto();
      }
    });
  }

  const quickBtns = document.querySelectorAll('.btn-cash-quick[data-amount]');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const amount = btn.getAttribute('data-amount');
      if (cashInput && amount) {
        cashInput.value = parseFloat(amount).toFixed(2);
        calcolaResto();
      }
    });
  });

  // Simulazione Contactless POS
  const posSimulateBtn = document.getElementById('posSimulateBtn');
  const posStatusText = document.getElementById('posStatusText');
  if (posSimulateBtn && posStatusText) {
    posSimulateBtn.addEventListener('click', () => {
      posStatusText.textContent = 'Transazione POS Approvata! Codice Auth #94821';
      posStatusText.style.color = '#34d399';
    });
  }

  // Chiusura e Stampa Scontrino
  const closeReceiptBtn = document.getElementById('closeReceiptBtn');
  const receiptOverlay = document.getElementById('receiptOverlay');
  const printReceiptBtn = document.getElementById('printReceiptBtn');
  const downloadPdfReceiptBtn = document.getElementById('downloadPdfReceiptBtn');

  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', chiudiScontrino);
  if (receiptOverlay) receiptOverlay.addEventListener('click', chiudiScontrino);
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => window.print());
  }
  if (downloadPdfReceiptBtn) {
    downloadPdfReceiptBtn.addEventListener('click', () => window.print());
  }

  // Tema Chiaro/Scuro
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      const icon = document.getElementById('themeIcon');
      if (icon) icon.textContent = isLight ? '☀️' : '🌙';
    });
  }
}

// ------------------------------------------------------------------------------
// 4. RENDERING & STATISTICHE
// ------------------------------------------------------------------------------
function render() {
  renderStatistiche();
  renderGriglia();
  aggiornaCarrelloUI();
}

function renderStatistiche() {
  const totalBooksEl = document.getElementById('totalBooks');
  const totalCopiesEl = document.getElementById('totalCopies');
  const totalValueEl = document.getElementById('totalValue');
  const lowStockEl = document.getElementById('lowStockCount');

  const totaleTitoli = libri.length;
  const totaleCopie = libri.reduce((acc, l) => acc + l.copie, 0);
  const valoreTotale = libri.reduce((acc, l) => acc + (l.prezzo * l.copie), 0);
  const scorteBasse = libri.filter(l => l.copie <= 2).length;

  if (totalBooksEl) totalBooksEl.textContent = totaleTitoli;
  if (totalCopiesEl) totalCopiesEl.textContent = totaleCopie;
  if (totalValueEl) totalValueEl.textContent = `€ ${valoreTotale.toFixed(2).replace('.', ',')}`;
  if (lowStockEl) lowStockEl.textContent = scorteBasse;
}

function renderGriglia() {
  const grid = document.getElementById('booksGrid');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  // Filtraggio
  let filtrati = libri.filter(l => {
    const matchGenere = (filtroGenere === 'all' || l.genere === filtroGenere);
    const matchTesto = !filtroTesto || 
      l.titolo.toLowerCase().includes(filtroTesto) ||
      l.autore.toLowerCase().includes(filtroTesto) ||
      l.isbn.includes(filtroTesto);
    
    let matchScorte = true;
    if (filtroScorte === 'available') matchScorte = l.copie > 2;
    else if (filtroScorte === 'low') matchScorte = l.copie > 0 && l.copie <= 2;
    else if (filtroScorte === 'out') matchScorte = l.copie === 0;

    return matchGenere && matchTesto && matchScorte;
  });

  // Ordinamento
  if (ordinamento === 'stock-desc') filtrati.sort((a, b) => b.copie - a.copie);
  else if (ordinamento === 'title-asc') filtrati.sort((a, b) => a.titolo.localeCompare(b.titolo));
  else if (ordinamento === 'title-desc') filtrati.sort((a, b) => b.titolo.localeCompare(a.titolo));
  else if (ordinamento === 'price-asc') filtrati.sort((a, b) => a.prezzo - b.prezzo);
  else if (ordinamento === 'price-desc') filtrati.sort((a, b) => b.prezzo - a.prezzo);

  if (filtrati.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtrati.map(l => {
    const scortaBadge = l.copie === 0 ? 
      `<span class="badge badge-danger">Esaurito (0)</span>` :
      (l.copie <= 2 ? 
        `<span class="badge badge-warning">Scorta Bassa (${l.copie})</span>` :
        `<span class="badge badge-success">Disponibile (${l.copie})</span>`);

    return `
      <article class="book-card" data-id="${l.id}">
        <div class="book-cover-container" style="position: relative; width: 100%; height: 230px; border-radius: 8px; overflow: hidden; background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%); margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: center; padding: 10px;">
          <img src="${l.immagine || ('covers/cover-' + l.id + '.jpg')}" alt="${l.titolo}" loading="lazy" style="height: 100%; width: auto; max-width: 100%; object-fit: contain; border-radius: 4px; box-shadow: 0 6px 16px rgba(0,0,0,0.6); transition: transform 0.25s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onerror="this.src='https://covers.openlibrary.org/b/id/8065615-L.jpg';">
          <span style="position: absolute; top: 8px; right: 8px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">${l.icona || '📖'} ${l.genere}</span>
          <div style="position: absolute; top: 8px; left: 8px; display: flex; gap: 0.35rem;">
            <button class="btn-icon-sm" onclick="apriModaleLibro(${l.id})" title="Modifica Libro" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.15); padding: 4px 7px; border-radius: 6px; color: #38bdf8; cursor: pointer; font-size: 0.75rem;">✏️</button>
            <button class="btn-icon-sm" onclick="eliminaLibro(${l.id})" title="Elimina Libro" style="background: rgba(15, 23, 42, 0.85); border: 1px solid rgba(255,255,255,0.15); padding: 4px 7px; border-radius: 6px; color: #f87171; cursor: pointer; font-size: 0.75rem;">🗑️</button>
          </div>
        </div>

        <div style="font-size: 0.72rem; color: #38bdf8; font-weight: 700; text-transform: uppercase;">${l.genere}</div>
        <h3 class="book-title" style="font-size: 0.95rem; font-weight: 700; margin: 0.2rem 0 0.35rem 0; line-height: 1.3;">${l.titolo}</h3>
        <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 0.5rem;">Autore: <strong style="color: #cbd5e1;">${l.autore}</strong></div>

        <div style="font-size: 0.75rem; color: #64748b; font-family: monospace; margin-bottom: 0.5rem;">ISBN: ${l.isbn}</div>

        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: auto; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.08);">
          <div style="font-size: 1.15rem; font-weight: 800; color: #34d399;">€ ${l.prezzo.toFixed(2).replace('.', ',')}</div>
          ${scortaBadge}
        </div>

        <div style="margin-top: 0.75rem;">
          <button class="btn btn-primary btn-block" onclick="aggiungiAlCarrello(${l.id})" ${l.copie === 0 ? 'disabled style="opacity: 0.5;"' : ''}>
            🛒 Aggiungi in Cassa
          </button>
        </div>
      </article>
    `;
  }).join('');
}

// ------------------------------------------------------------------------------
// 5. GESTIONE FORM MODALE (AGGIUNGI & MODIFICA)
// ------------------------------------------------------------------------------
function apriModaleLibro(id = null) {
  libroInModificaId = id;
  const modal = document.getElementById('bookModal');
  const modalTitle = document.getElementById('modalTitle');
  const form = document.getElementById('bookForm');
  if (!modal || !form) return;

  if (id) {
    const l = libri.find(item => item.id === id);
    if (!l) return;
    if (modalTitle) modalTitle.textContent = "Modifica Scheda Libro";
    document.getElementById('titleInput').value = l.titolo;
    document.getElementById('authorInput').value = l.autore;
    document.getElementById('genreSelect').value = l.genere;
    document.getElementById('priceInput').value = l.prezzo;
    document.getElementById('stockInput').value = l.copie;
    document.getElementById('isbnInput').value = l.isbn;
    document.getElementById('yearInput').value = l.anno || 2024;
    document.getElementById('publisherInput').value = l.editore || "";
  } else {
    if (modalTitle) modalTitle.textContent = "Aggiungi Nuovo Libro a Catalogo";
    form.reset();
  }

  modal.classList.add('active');
}

function chiudiModaleLibro() {
  const modal = document.getElementById('bookModal');
  if (modal) modal.classList.remove('active');
  libroInModificaId = null;
}

function gestisciSalvataggioLibro(e) {
  e.preventDefault();

  const titolo = document.getElementById('titleInput').value.trim();
  const autore = document.getElementById('authorInput').value.trim();
  const genere = document.getElementById('genreSelect').value;
  const prezzo = parseFloat(document.getElementById('priceInput').value) || 0;
  const copie = parseInt(document.getElementById('stockInput').value, 10) || 0;
  const isbn = document.getElementById('isbnInput').value.trim();
  const anno = parseInt(document.getElementById('yearInput').value, 10) || 2024;
  const editore = document.getElementById('publisherInput').value.trim();

  if (!titolo || !autore || !isbn) {
    alert("Compila tutti i campi obbligatori (Titolo, Autore, ISBN).");
    return;
  }

  if (libroInModificaId) {
    // Modifica
    const l = libri.find(item => item.id === libroInModificaId);
    if (l) {
      l.titolo = titolo;
      l.autore = autore;
      l.genere = genere;
      l.prezzo = prezzo;
      l.copie = copie;
      l.isbn = isbn;
      l.anno = anno;
      l.editore = editore;
    }
  } else {
    // Nuovo
    const nuovoId = libri.length > 0 ? Math.max(...libri.map(l => l.id)) + 1 : 1;
    libri.unshift({
      id: nuovoId,
      titolo,
      autore,
      genere,
      prezzo,
      copie,
      isbn,
      anno,
      editore,
      icona: "📚"
    });
  }

  salvaLibri();
  render();
  chiudiModaleLibro();
}

function eliminaLibro(id) {
  const l = libri.find(item => item.id === id);
  if (!l) return;

  if (confirm(`Confermi l'eliminazione definitiva di "${l.titolo}" dal catalogo?`)) {
    libri = libri.filter(item => item.id !== id);
    salvaLibri();
    render();
  }
}

// ------------------------------------------------------------------------------
// 6. ESPORTAZIONE CSV PER EXCEL
// ------------------------------------------------------------------------------
function esportaInCsv() {
  const intestazioni = ["ID", "Titolo", "Autore", "Genere", "Prezzo (EUR)", "Copie", "ISBN", "Anno"];
  const righe = libri.map(l => [
    l.id,
    `"${l.titolo.replace(/"/g, '""')}"`,
    `"${l.autore.replace(/"/g, '""')}"`,
    `"${l.genere}"`,
    l.prezzo.toFixed(2),
    l.copie,
    `"${l.isbn}"`,
    l.anno || ""
  ]);

  const contenutoCsv = [intestazioni.join(";"), ...righe.map(r => r.join(";"))].join("\n");
  const blob = new Blob(["\uFEFF" + contenutoCsv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `catalogo_libreria_valentyn_haidukov.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ------------------------------------------------------------------------------
// 7. CASSA & CARRELLO VENDITE
// ------------------------------------------------------------------------------
function aggiungiAlCarrello(id) {
  const l = libri.find(item => item.id === id);
  if (!l || l.copie <= 0) return;

  const itemEsistente = carrello.find(i => i.id === id);
  if (itemEsistente) {
    if (itemEsistente.quantita < l.copie) {
      itemEsistente.quantita += 1;
    } else {
      alert(`Attenzione: disponibili solo ${l.copie} copie a magazzino.`);
      return;
    }
  } else {
    carrello.push({
      id: l.id,
      titolo: l.titolo,
      prezzo: l.prezzo,
      isbn: l.isbn,
      quantita: 1
    });
  }

  aggiornaCarrelloUI();
  apriCarrello();
}

function modificaQuantitaCarrello(id, delta) {
  const item = carrello.find(i => i.id === id);
  const l = libri.find(b => b.id === id);
  if (!item) return;

  if (delta > 0 && l && item.quantita >= l.copie) {
    alert(`Attenzione: disponibili solo ${l.copie} copie.`);
    return;
  }

  item.quantita += delta;
  if (item.quantita <= 0) {
    carrello = carrello.filter(i => i.id !== id);
  }

  aggiornaCarrelloUI();
}

function rimuoviDalCarrello(id) {
  carrello = carrello.filter(i => i.id !== id);
  aggiornaCarrelloUI();
}

function svuotaCarrello() {
  carrello = [];
  aggiornaCarrelloUI();
}

function aggiornaCarrelloUI() {
  const badge = document.getElementById('cartCountBadge');
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const footer = document.getElementById('cartDrawerFooter');

  const totalePezzi = carrello.reduce((acc, i) => acc + i.quantita, 0);
  if (badge) {
    badge.textContent = totalePezzi;
    badge.style.display = totalePezzi > 0 ? 'inline-block' : 'none';
  }

  if (carrello.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (itemsContainer) itemsContainer.classList.add('hidden');
    if (footer) footer.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (itemsContainer) itemsContainer.classList.remove('hidden');
  if (footer) footer.classList.remove('hidden');

  if (itemsContainer) {
    itemsContainer.innerHTML = carrello.map(item => `
      <div class="cart-item" style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); gap: 0.5rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.titolo}</div>
          <div style="font-size: 0.78rem; color: #94a3b8;">€ ${item.prezzo.toFixed(2).replace('.', ',')} cad.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <button class="qty-btn" onclick="modificaQuantitaCarrello(${item.id}, -1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">-</button>
          <span style="font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center;">${item.quantita}</span>
          <button class="qty-btn" onclick="modificaQuantitaCarrello(${item.id}, 1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">+</button>
          <button onclick="rimuoviDalCarrello(${item.id})" title="Rimuovi" style="background: none; border: none; color: #f87171; font-size: 1.1rem; cursor: pointer; padding: 0 4px;">&times;</button>
        </div>
      </div>
    `).join('');
  }

  const totale = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const totalItemsEl = document.getElementById('cartTotalItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const ivaEl = document.getElementById('cartIva');
  const grandTotalEl = document.getElementById('cartGrandTotal');

  const imponibile = totale / 1.04; // IVA editoria al 4%
  const iva = totale - imponibile;

  if (totalItemsEl) totalItemsEl.textContent = `${totalePezzi} volumi`;
  if (subtotalEl) subtotalEl.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (ivaEl) ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')} (IVA 4% Assolta)`;
  if (grandTotalEl) grandTotalEl.textContent = `€ ${totale.toFixed(2).replace('.', ',')}`;
}

function apriCarrello() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
}

function chiudiCarrello() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function calcolaResto() {
  const cashInput = document.getElementById('cashReceivedInput');
  const changeDueValue = document.getElementById('changeDueValue');
  if (!changeDueValue) return;

  const totale = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const ricevuto = cashInput ? (parseFloat(cashInput.value) || 0) : 0;
  const resto = Math.max(0, ricevuto - totale);
  changeDueValue.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
}

function completaVendita() {
  if (carrello.length === 0) {
    alert('Il carrello cassa è vuoto. Aggiungi almeno un volume prima di completare la vendita.');
    return;
  }

  const totale = carrello.reduce((acc, i) => acc + (i.prezzo * i.quantita), 0);
  const imponibile = totale / 1.04; // IVA Editoria 4% assolta all'origine
  const iva = totale - imponibile;

  const cashInput = document.getElementById('cashReceivedInput');
  const ricevuto = metodoPagamento === 'cash' ? (parseFloat(cashInput?.value) || totale) : totale;
  const resto = Math.max(0, ricevuto - totale);

  // 1. Scala le copie vendute dal magazzino
  carrello.forEach(cartItem => {
    const libro = libri.find(l => l.id === cartItem.id);
    if (libro) {
      libro.copie = Math.max(0, libro.copie - cartItem.quantita);
    }
  });
  salvaLibri();

  // 2. Popola la data e ora attuale nello scontrino
  const adesso = new Date();
  const dataStr = adesso.toLocaleDateString('it-IT') + ' - ' + adesso.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const receiptDateEl = document.getElementById('receiptDate');
  if (receiptDateEl) receiptDateEl.textContent = dataStr;

  // 3. Popola le righe dei libri acquistati nello scontrino
  const itemsContainer = document.getElementById('receiptItemsContainer');
  if (itemsContainer) {
    itemsContainer.innerHTML = carrello.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.3rem;">
        <span style="font-weight: 600;">${item.quantita}x ${item.titolo.substring(0, 24)}</span>
        <span>€ ${(item.prezzo * item.quantita).toFixed(2).replace('.', ',')}</span>
      </div>
    `).join('');
  }

  // 4. Popola i totali e la modalita di pagamento
  const recTotal = document.getElementById('receiptTotalAmount');
  const recPayType = document.getElementById('receiptPaymentType');
  const recCashRow = document.getElementById('receiptCashRow');
  const recCashReceived = document.getElementById('receiptCashReceived');
  const recChangeRow = document.getElementById('receiptChangeRow');
  const recChangeAmount = document.getElementById('receiptChangeAmount');
  const recPosRow = document.getElementById('receiptPosRow');

  if (recTotal) recTotal.textContent = `€ ${totale.toFixed(2).replace('.', ',')}`;
  if (recPayType) recPayType.textContent = metodoPagamento === 'cash' ? 'CONTANTI' : 'CARTA / POS';

  if (metodoPagamento === 'cash') {
    if (recCashRow) recCashRow.style.display = 'flex';
    if (recChangeRow) recChangeRow.style.display = 'flex';
    if (recCashReceived) recCashReceived.textContent = `€ ${ricevuto.toFixed(2).replace('.', ',')}`;
    if (recChangeAmount) recChangeAmount.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
    if (recPosRow) recPosRow.style.display = 'none';
  } else {
    if (recCashRow) recCashRow.style.display = 'none';
    if (recChangeRow) recChangeRow.style.display = 'none';
    if (recPosRow) recPosRow.style.display = 'flex';
  }

  // 5. Chiudi carrello drawer e apri modale scontrino
  chiudiCarrello();
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.remove('hidden');
}

function chiudiScontrino() {
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.add('hidden');

  // Svuota la cassa per la prossima vendita
  carrello = [];
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) cashInput.value = '';
  const changeDueValue = document.getElementById('changeDueValue');
  if (changeDueValue) changeDueValue.textContent = '€ 0.00';

  aggiornaCarrelloUI();
  render();
}
