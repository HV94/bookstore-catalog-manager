# 📚 BiblioTech - Bookstore & Catalog Manager

> Applicazione web interattiva per la catalogazione libri, gestione inventario scorte, ricerca in tempo reale ed esportazione dati.  
> Sviluppata in **HTML5, CSS3 moderno e Vanilla JavaScript**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://hv94.github.io/bookstore-catalog-manager/)
[![Language: JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/it/docs/Web/JavaScript)
[![Tech: HTML5/CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Responsive-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/it/docs/Web/HTML)

---

## 🌟 Funzionalità Principali

### 1. 📖 Catalogo & Schede Dettagliate
- Visualizzazione a schede responsive (desktop, tablet e mobile).
- Per ogni libro: **Titolo, Autore, Genere, Codice ISBN-13, Anno di pubblicazione, Prezzo di vendita e Copie a magazzino**.
- Badge di stato scorte colorati in tempo reale:
  - 🟢 **Disponibile** (> 2 copie)
  - 🟠 **Scorta Bassa** (1-2 copie)
  - 🔴 **Esaurito** (0 copie)

### 2. 🔍 Ricerca e Filtri Istantanei
- **Ricerca in tempo reale:** filtraggio istantaneo durante la digitazione per Titolo, Autore o codice ISBN.
- **Filtro per Genere:** Informatica & Web, Narrativa & Romanzi, Saggistica, Classici, Scienza.
- **Filtro per Disponibilità:** visualizza solo i titoli disponibili o quelli con scorte in esaurimento.
- **Ordinamento dinamico:** per Titolo (A-Z / Z-A), per Prezzo (crescente / decrescente) o per quantità di magazzino.

### 3. 📦 Gestione Magazzino & Operazioni CRUD
- **Aggiunta e Modifica:** form modale intuitivo con validazione dei campi obbligatori.
- **Regolazione rapida scorte:** pulsanti rapidi `+` e `-` direttamente su ogni scheda per aggiornare l'inventario all'istante.
- **Eliminazione:** con richiesta di conferma di sicurezza.
- **Persistenza:** tutti i dati modificati rimangono salvati nel browser tramite `localStorage`.

### 4. 📊 Dashboard Statistiche & Esportazione Dati
- Contatori in tempo reale su:
  - Numero totale di titoli a catalogo.
  - Numero totale di copie fisiche a magazzino.
  - Valore economico complessivo dell'inventario (€).
  - Conteggio articoli con scorta in esaurimento.
- **Esportazione CSV:** pulsante per scaricare l'intero inventario in formato `.csv` (codifica UTF-8 con BOM) perfettamente compatibile con **Microsoft Excel** e **Fogli Google**.

### 5. 🌓 Esperienza Utente & Accessibilità
- Supporto nativo per **Tema Chiaro (Light)** e **Tema Scuro (Dark)** con memorizzazione delle preferenze.
- Layout completamente responsive progettato mobile-first.

---

## 🛠️ Tecnologie Utilizzate

- **HTML5 Semantico:** struttura accessibile e chiara (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3 Moderno:** CSS Variables (Design Tokens), Flexbox, CSS Grid, animazioni fluide e Dark Mode automatica.
- **Vanilla JavaScript (ES6+):** manipolazione del DOM, gestione eventi, LocalStorage API, generazione ed esportazione Blob CSV.

---

## 🚀 Come Visualizzare il Progetto

- **Online (Senza installazione):** Visita la [Demo Live su GitHub Pages](https://hv94.github.io/bookstore-catalog-manager/)
- **In locale sul proprio computer:**
  1. Clona la repository o scarica i file `.zip`:
     ```bash
     git clone https://github.com/HV94/bookstore-catalog-manager.git
     ```
  2. Apri il file `index.html` in qualsiasi browser web moderno.

---

## 👤 Autore

**Valentyn Haidukov**  
- **Ruolo:** Junior Web Developer & Supporto Informatico | Gestione Dati & Back Office
- **LinkedIn:** [linkedin.com/in/valentyn-haidukov](https://www.linkedin.com/in/valentyn-haidukov)
- **GitHub:** [@HV94](https://github.com/HV94)
- **Status:** Appartenente alle Categorie Protette (L. 68/99)
