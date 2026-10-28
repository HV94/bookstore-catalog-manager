/**
 * BiblioTech - Bookstore & Catalog Manager
 * Autore: Valentyn Haidukov (HV94)
 * Descrizione: Gestione interattiva di un catalogo libri, inventario scorte, ricerca in tempo reale ed esportazione dati.
 */

// Catalogo iniziale dimostrativo
const DEFAULT_BOOKS = [
  {
    id: "book-1",
    title: "Clean Code: Guida per artigiani del software",
    author: "Robert C. Martin",
    category: "Informatica",
    isbn: "978-88-50-33438-4",
    year: 2018,
    price: 36.00,
    stock: 5
  },
  {
    id: "book-2",
    title: "Il nome della rosa",
    author: "Umberto Eco",
    category: "Narrativa",
    isbn: "978-88-45-29834-9",
    year: 2020,
    price: 15.00,
    stock: 12
  },
  {
    id: "book-3",
    title: "Python Crash Course (Edizione Italiana)",
    author: "Eric Matthes",
    category: "Informatica",
    isbn: "978-88-20-39420-1",
    year: 2023,
    price: 29.90,
    stock: 4
  },
  {
    id: "book-4",
    title: "Sapiens: Da animali a dèi. Breve storia dell'umanità",
    author: "Yuval Noah Harari",
    category: "Saggistica",
    isbn: "978-88-45-29649-9",
    year: 2017,
    price: 18.00,
    stock: 2
  },
  {
    id: "book-5",
    title: "1984",
    author: "George Orwell",
    category: "Classici",
    isbn: "978-88-04-71234-5",
    year: 2021,
    price: 12.50,
    stock: 8
  },
  {
    id: "book-6",
    title: "L'ordine del tempo",
    author: "Carlo Rovelli",
    category: "Scienza",
    isbn: "978-88-45-93192-5",
    year: 2017,
    price: 14.00,
    stock: 0
  },
  {
    id: "book-7",
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    category: "Informatica",
    isbn: "978-14-91-95202-3",
    year: 2022,
    price: 42.00,
    stock: 3
  },
  {
    id: "book-8",
    title: "Le città invisibili",
    author: "Italo Calvino",
    category: "Narrativa",
    isbn: "978-88-04-66795-7",
    year: 2016,
    price: 11.00,
    stock: 7
  }
];

// Stato dell'applicazione
let books = [];

// Elementi DOM
const booksGrid = document.getElementById("booksGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stockFilter = document.getElementById("stockFilter");
const sortBy = document.getElementById("sortBy");

// Statistiche
const totalBooksEl = document.getElementById("totalBooks");
const totalCopiesEl = document.getElementById("totalCopies");
const totalValueEl = document.getElementById("totalValue");
const lowStockCountEl = document.getElementById("lowStockCount");

// Modale
const bookModal = document.getElementById("bookModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const bookForm = document.getElementById("bookForm");
const modalTitle = document.getElementById("modalTitle");

// Altri pulsanti
const exportCsvBtn = document.getElementById("exportCsvBtn");
const resetDataBtn = document.getElementById("resetDataBtn");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Inizializzazione
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  loadBooks();
  setupEventListeners();
  render();
});

// Carica libri da LocalStorage o Default
function loadBooks() {
  const saved = localStorage.getItem("bibliotech_books");
  if (saved) {
    try {
      books = JSON.parse(saved);
    } catch (e) {
      books = [...DEFAULT_BOOKS];
    }
  } else {
    books = [...DEFAULT_BOOKS];
    saveBooks();
  }
}

// Salva libri in LocalStorage
function saveBooks() {
  localStorage.setItem("bibliotech_books", JSON.stringify(books));
}

// Configurazione Event Listener
function setupEventListeners() {
  // Ricerca e Filtri
  searchInput.addEventListener("input", render);
  categoryFilter.addEventListener("change", render);
  stockFilter.addEventListener("change", render);
  sortBy.addEventListener("change", render);

  // Modale
  openModalBtn.addEventListener("click", () => openModal());
  closeModalBtn.addEventListener("click", closeModal);
  cancelModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  // Form submit
  bookForm.addEventListener("submit", handleFormSubmit);

  // Azioni Toolbar
  exportCsvBtn.addEventListener("click", exportToCsv);
  resetDataBtn.addEventListener("click", resetCatalog);

  // Tema chiaro/scuro
  themeToggle.addEventListener("click", toggleTheme);
}

// Render generale
function render() {
  const filtered = filterAndSortBooks();
  renderStats();
  renderGrid(filtered);
}

// Filtra e ordina
function filterAndSortBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const stock = stockFilter.value;
  const sort = sortBy.value;

  let result = books.filter(b => {
    // Ricerca testo
    const matchQuery = 
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.isbn.toLowerCase().includes(query);

    // Categoria
    const matchCat = (cat === "all") || (b.category === cat);

    // Giacenza
    let matchStock = true;
    if (stock === "available") matchStock = b.stock > 2;
    else if (stock === "low") matchStock = b.stock > 0 && b.stock <= 2;
    else if (stock === "out") matchStock = b.stock === 0;

    return matchQuery && matchCat && matchStock;
  });

  // Ordinamento
  result.sort((a, b) => {
    switch (sort) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "stock-desc":
        return b.stock - a.stock;
      default:
        return 0;
    }
  });

  return result;
}

// Render statistiche inventario
function renderStats() {
  const totalBooks = books.length;
  const totalCopies = books.reduce((sum, b) => sum + (Number(b.stock) || 0), 0);
  const totalValue = books.reduce((sum, b) => sum + ((Number(b.price) || 0) * (Number(b.stock) || 0)), 0);
  const lowStock = books.filter(b => b.stock > 0 && b.stock <= 2).length;

  totalBooksEl.textContent = totalBooks;
  totalCopiesEl.textContent = totalCopies;
  totalValueEl.textContent = `€ ${totalValue.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  lowStockCountEl.textContent = lowStock;
}

// Render griglia schede
function renderGrid(bookList) {
  booksGrid.innerHTML = "";

  if (bookList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  bookList.forEach(book => {
    const card = document.createElement("article");
    card.className = "book-card";

    // Tag stock
    let stockClass = "stock-available";
    let stockLabel = `Disponibile (${book.stock} copie)`;
    if (book.stock === 0) {
      stockClass = "stock-out";
      stockLabel = "Esaurito (0)";
    } else if (book.stock <= 2) {
      stockClass = "stock-low";
      stockLabel = `Scorta Bassa (${book.stock})`;
    }

    card.innerHTML = `
      <div>
        <div class="card-top">
          <span class="badge badge-cat-${book.category}">${book.category}</span>
          <span class="stock-tag ${stockClass}">${stockLabel}</span>
        </div>
        <h3 class="book-title">${escapeHtml(book.title)}</h3>
        <p class="book-author">di <strong>${escapeHtml(book.author)}</strong></p>
        
        <div class="book-meta">
          <div class="meta-row">
            <span>ISBN-13:</span>
            <code>${escapeHtml(book.isbn)}</code>
          </div>
          <div class="meta-row">
            <span>Anno di pubblicazione:</span>
            <span>${book.year || "-"}</span>
          </div>
        </div>
      </div>

      <div class="book-footer">
        <div class="book-price">€ ${Number(book.price).toFixed(2)}</div>
        <div class="card-actions">
          <button class="btn-icon" title="Riduci quantità (-1)" onclick="adjustStock('${book.id}', -1)">-</button>
          <button class="btn-icon" title="Aumenta quantità (+1)" onclick="adjustStock('${book.id}', 1)">+</button>
          <button class="btn-icon" title="Modifica dettagli" onclick="editBook('${book.id}')">✏️</button>
          <button class="btn-icon delete" title="Elimina libro" onclick="deleteBook('${book.id}')">🗑️</button>
        </div>
      </div>
    `;

    booksGrid.appendChild(card);
  });
}

// Gestione Modale (Nuovo / Modifica)
function openModal(bookToEdit = null) {
  bookForm.reset();
  if (bookToEdit) {
    modalTitle.textContent = "Modifica Scheda Libro";
    document.getElementById("bookId").value = bookToEdit.id;
    document.getElementById("bookTitle").value = bookToEdit.title;
    document.getElementById("bookAuthor").value = bookToEdit.author;
    document.getElementById("bookCategory").value = bookToEdit.category;
    document.getElementById("bookIsbn").value = bookToEdit.isbn;
    document.getElementById("bookYear").value = bookToEdit.year;
    document.getElementById("bookPrice").value = bookToEdit.price;
    document.getElementById("bookStock").value = bookToEdit.stock;
  } else {
    modalTitle.textContent = "Aggiungi Nuovo Libro al Catalogo";
    document.getElementById("bookId").value = "";
    document.getElementById("bookYear").value = new Date().getFullYear();
  }
  bookModal.classList.remove("hidden");
  document.getElementById("bookTitle").focus();
}

function closeModal() {
  bookModal.classList.add("hidden");
}

// Submit Form
function handleFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("bookId").value;
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const category = document.getElementById("bookCategory").value;
  const isbn = document.getElementById("bookIsbn").value.trim();
  const year = parseInt(document.getElementById("bookYear").value, 10) || new Date().getFullYear();
  const price = parseFloat(document.getElementById("bookPrice").value) || 0;
  const stock = parseInt(document.getElementById("bookStock").value, 10) || 0;

  if (id) {
    // Modifica
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
      books[index] = { id, title, author, category, isbn, year, price, stock };
    }
  } else {
    // Nuovo
    const newBook = {
      id: "book-" + Date.now(),
      title,
      author,
      category,
      isbn,
      year,
      price,
      stock
    };
    books.unshift(newBook);
  }

  saveBooks();
  closeModal();
  render();
}

// Regola scorte (+1 / -1 rapido)
window.adjustStock = function(id, delta) {
  const book = books.find(b => b.id === id);
  if (book) {
    const newStock = book.stock + delta;
    if (newStock >= 0) {
      book.stock = newStock;
      saveBooks();
      render();
    }
  }
};

// Modifica libro
window.editBook = function(id) {
  const book = books.find(b => b.id === id);
  if (book) {
    openModal(book);
  }
};

// Elimina libro
window.deleteBook = function(id) {
  const book = books.find(b => b.id === id);
  if (book && confirm(`Sei sicuro di voler rimuovere "${book.title}" dal catalogo?`)) {
    books = books.filter(b => b.id !== id);
    saveBooks();
    render();
  }
};

// Esportazione CSV per Excel / Fogli Google
function exportToCsv() {
  if (books.length === 0) {
    alert("Nessun dato da esportare!");
    return;
  }

  const headers = ["Titolo", "Autore", "Genere", "ISBN-13", "Anno", "Prezzo (€)", "Copie a Magazzino", "Valore Totale (€)"];
  const rows = books.map(b => [
    `"${b.title.replace(/"/g, '""')}"`,
    `"${b.author.replace(/"/g, '""')}"`,
    `"${b.category}"`,
    `"${b.isbn}"`,
    b.year,
    b.price.toFixed(2),
    b.stock,
    (b.price * b.stock).toFixed(2)
  ]);

  const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + 
    [headers.join(";"), ...rows.map(r => r.join(";"))].join("\r\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `catalogo_libri_inventario_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Ripristina catalogo dimostrativo
function resetCatalog() {
  if (confirm("Vuoi ripristinare il catalogo iniziale di prova?")) {
    books = [...DEFAULT_BOOKS];
    saveBooks();
    render();
  }
}

// Gestione Tema (Dark / Light)
function toggleTheme() {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.body.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
    localStorage.setItem("bibliotech_theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
    localStorage.setItem("bibliotech_theme", "dark");
  }
}

function loadTheme() {
  const saved = localStorage.getItem("bibliotech_theme");
  if (saved === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.textContent = "☀️";
  } else {
    document.body.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
  }
}

// Utility anti-XSS
function escapeHtml(str) {
  if (!str) return "";
  return str.toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}