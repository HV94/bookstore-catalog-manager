/**
 * BiblioTech - Bookstore & Catalog Manager + Cassa POS
 * Autore: Valentyn Haidukov (HV94)
 * Descrizione: Gestione completa di catalogo libri, inventario scorte, carrello vendite, cassa contanti/POS e scontrino fiscale.
 */

// Catalogo iniziale dimostrativo (500 volumi: 100 per genere)
const DEFAULT_BOOKS = [
  {
    "id": "book-1",
    "title": "Clean Code: Guida per artigiani del software",
    "author": "Robert C. Martin",
    "category": "Informatica",
    "isbn": "978-88-503-0001-4",
    "year": 2018,
    "price": 36.0,
    "stock": 3
  },
  {
    "id": "book-2",
    "title": "Python Crash Course (Edizione Italiana)",
    "author": "Eric Matthes",
    "category": "Informatica",
    "isbn": "978-88-503-0002-1",
    "year": 2023,
    "price": 29.9,
    "stock": 5
  },
  {
    "id": "book-3",
    "title": "JavaScript: The Definitive Guide",
    "author": "David Flanagan",
    "category": "Informatica",
    "isbn": "978-88-503-0003-1",
    "year": 2022,
    "price": 42.0,
    "stock": 11
  },
  {
    "id": "book-4",
    "title": "Il pragmatic programmer: Da apprendista a maestro",
    "author": "David Thomas, Andrew Hunt",
    "category": "Informatica",
    "isbn": "978-88-503-0004-0",
    "year": 2020,
    "price": 34.0,
    "stock": 3
  },
  {
    "id": "book-5",
    "title": "Algoritmi e strutture dati in Java",
    "author": "Robert Sedgewick, Kevin Wayne",
    "category": "Informatica",
    "isbn": "978-88-503-0005-8",
    "year": 2019,
    "price": 45.0,
    "stock": 1
  },
  {
    "id": "book-6",
    "title": "Imparare SQL: Guida pratica alle query",
    "author": "Alan Beaulieu",
    "category": "Informatica",
    "isbn": "978-88-503-0006-3",
    "year": 2021,
    "price": 28.5,
    "stock": 11
  },
  {
    "id": "book-7",
    "title": "Architettura dei calcolatori: Un approccio strutturale",
    "author": "Andrew S. Tanenbaum",
    "category": "Informatica",
    "isbn": "978-88-503-0007-8",
    "year": 2021,
    "price": 48.0,
    "stock": 14
  },
  {
    "id": "book-8",
    "title": "Sistemi operativi: Concetti ed esempi",
    "author": "Silberschatz, Galvin, Gagne",
    "category": "Informatica",
    "isbn": "978-88-503-0008-9",
    "year": 2020,
    "price": 52.0,
    "stock": 10
  },
  {
    "id": "book-9",
    "title": "Reti di calcolatori e internet: Approccio top-down",
    "author": "James F. Kurose, Keith W. Ross",
    "category": "Informatica",
    "isbn": "978-88-503-0009-2",
    "year": 2022,
    "price": 49.0,
    "stock": 3
  },
  {
    "id": "book-10",
    "title": "Progettazione di database relazionali e SQL",
    "author": "Paolo Atzeni, Stefano Ceri",
    "category": "Informatica",
    "isbn": "978-88-503-0010-4",
    "year": 2018,
    "price": 38.0,
    "stock": 8
  },
  {
    "id": "book-11",
    "title": "Docker: Guida per sviluppatori e sysadmin",
    "author": "James Turnbull",
    "category": "Informatica",
    "isbn": "978-88-503-0011-1",
    "year": 2022,
    "price": 29.0,
    "stock": 2
  },
  {
    "id": "book-12",
    "title": "Design Patterns: Elementi per il riuso di software",
    "author": "Erich Gamma, Richard Helm",
    "category": "Informatica",
    "isbn": "978-88-503-0012-5",
    "year": 2019,
    "price": 42.0,
    "stock": 1
  },
  {
    "id": "book-13",
    "title": "Git: Guida pratica per programmatori",
    "author": "Scott Chacon, Ben Straub",
    "category": "Informatica",
    "isbn": "978-88-503-0013-4",
    "year": 2020,
    "price": 24.0,
    "stock": 1
  },
  {
    "id": "book-14",
    "title": "Intelligenza Artificiale: Un approccio moderno",
    "author": "Stuart Russell, Peter Norvig",
    "category": "Informatica",
    "isbn": "978-88-503-0014-7",
    "year": 2021,
    "price": 55.0,
    "stock": 14
  },
  {
    "id": "book-15",
    "title": "Machine Learning con Python: Guida pratica",
    "author": "Aurélien Géron",
    "category": "Informatica",
    "isbn": "978-88-503-0015-1",
    "year": 2023,
    "price": 39.9,
    "stock": 9
  },
  {
    "id": "book-16",
    "title": "HTML5 & CSS3 per il Web moderno",
    "author": "Jon Duckett",
    "category": "Informatica",
    "isbn": "978-88-503-0016-9",
    "year": 2020,
    "price": 32.0,
    "stock": 13
  },
  {
    "id": "book-17",
    "title": "React: Progettare applicazioni web moderne",
    "author": "Alex Banks, Eve Porcello",
    "category": "Informatica",
    "isbn": "978-88-503-0017-9",
    "year": 2022,
    "price": 35.0,
    "stock": 8
  },
  {
    "id": "book-18",
    "title": "Sicurezza informatica e crittografia",
    "author": "William Stallings",
    "category": "Informatica",
    "isbn": "978-88-503-0018-0",
    "year": 2021,
    "price": 46.0,
    "stock": 1
  },
  {
    "id": "book-19",
    "title": "Linux: Amministrazione di sistema e comandi shell",
    "author": "Evi Nemeth",
    "category": "Informatica",
    "isbn": "978-88-503-0019-4",
    "year": 2020,
    "price": 44.0,
    "stock": 15
  },
  {
    "id": "book-20",
    "title": "Ingegneria del software: Principi e pratica",
    "author": "Ian Sommerville",
    "category": "Informatica",
    "isbn": "978-88-503-0020-1",
    "year": 2019,
    "price": 47.0,
    "stock": 6
  },
  {
    "id": "book-21",
    "title": "Refactoring: Ristrutturare il codice esistente",
    "author": "Martin Fowler",
    "category": "Informatica",
    "isbn": "978-88-503-0021-5",
    "year": 2020,
    "price": 43.0,
    "stock": 10
  },
  {
    "id": "book-22",
    "title": "Clean Architecture: Guida per architetti software",
    "author": "Robert C. Martin",
    "category": "Informatica",
    "isbn": "978-88-503-0022-3",
    "year": 2019,
    "price": 37.0,
    "stock": 2
  },
  {
    "id": "book-23",
    "title": "The DevOps Handbook: Efficienza e resilienza IT",
    "author": "Gene Kim, Jez Humble",
    "category": "Informatica",
    "isbn": "978-88-503-0023-1",
    "year": 2021,
    "price": 35.0,
    "stock": 2
  },
  {
    "id": "book-24",
    "title": "Continuous Delivery: Rilascio software affidabile",
    "author": "Jez Humble, David Farley",
    "category": "Informatica",
    "isbn": "978-88-503-0024-8",
    "year": 2019,
    "price": 41.0,
    "stock": 5
  },
  {
    "id": "book-25",
    "title": "Site Reliability Engineering (Google SRE)",
    "author": "Betsy Beyer, Chris Jones",
    "category": "Informatica",
    "isbn": "978-88-503-0025-7",
    "year": 2020,
    "price": 39.5,
    "stock": 5
  },
  {
    "id": "book-26",
    "title": "Building Microservices: Progettare architetture modulari",
    "author": "Sam Newman",
    "category": "Informatica",
    "isbn": "978-88-503-0026-8",
    "year": 2022,
    "price": 38.0,
    "stock": 13
  },
  {
    "id": "book-27",
    "title": "Domain-Driven Design: Affrontare la complessità del software",
    "author": "Eric Evans",
    "category": "Informatica",
    "isbn": "978-88-503-0027-0",
    "year": 2018,
    "price": 48.0,
    "stock": 8
  },
  {
    "id": "book-28",
    "title": "Microservices Patterns: Esempi e best practice",
    "author": "Chris Richardson",
    "category": "Informatica",
    "isbn": "978-88-503-0028-5",
    "year": 2021,
    "price": 44.0,
    "stock": 3
  },
  {
    "id": "book-29",
    "title": "Kubernetes in Action (Edizione Italiana)",
    "author": "Marko Luksa",
    "category": "Informatica",
    "isbn": "978-88-503-0029-3",
    "year": 2022,
    "price": 45.0,
    "stock": 4
  },
  {
    "id": "book-30",
    "title": "Designing Data-Intensive Applications",
    "author": "Martin Kleppmann",
    "category": "Informatica",
    "isbn": "978-88-503-0030-5",
    "year": 2021,
    "price": 46.0,
    "stock": 1
  },
  {
    "id": "book-31",
    "title": "Cracking the Coding Interview (189 quesiti risolti)",
    "author": "Gayle Laakmann McDowell",
    "category": "Informatica",
    "isbn": "978-88-503-0031-6",
    "year": 2020,
    "price": 39.0,
    "stock": 2
  },
  {
    "id": "book-32",
    "title": "Introduction to Algorithms (CLRS)",
    "author": "Cormen, Leiserson, Rivest, Stein",
    "category": "Informatica",
    "isbn": "978-88-503-0032-7",
    "year": 2022,
    "price": 58.0,
    "stock": 13
  },
  {
    "id": "book-33",
    "title": "Grokking Algorithms: Guida illustrata agli algoritmi",
    "author": "Aditya Bhargava",
    "category": "Informatica",
    "isbn": "978-88-503-0033-3",
    "year": 2021,
    "price": 28.0,
    "stock": 1
  },
  {
    "id": "book-34",
    "title": "Eloquent JavaScript: Guida moderna alla programmazione",
    "author": "Marijn Haverbeke",
    "category": "Informatica",
    "isbn": "978-88-503-0034-4",
    "year": 2020,
    "price": 31.0,
    "stock": 1
  },
  {
    "id": "book-35",
    "title": "You Don't Know JS Yet: Get Started",
    "author": "Kyle Simpson",
    "category": "Informatica",
    "isbn": "978-88-503-0035-9",
    "year": 2021,
    "price": 24.0,
    "stock": 1
  },
  {
    "id": "book-36",
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "category": "Informatica",
    "isbn": "978-88-503-0036-2",
    "year": 2017,
    "price": 22.0,
    "stock": 6
  },
  {
    "id": "book-37",
    "title": "Learning TypeScript: Sviluppare codice scalabile",
    "author": "Josh Goldberg",
    "category": "Informatica",
    "isbn": "978-88-503-0037-0",
    "year": 2023,
    "price": 34.0,
    "stock": 4
  },
  {
    "id": "book-38",
    "title": "Node.js: Guida completa allo sviluppo back-end",
    "author": "David Herron",
    "category": "Informatica",
    "isbn": "978-88-503-0038-2",
    "year": 2022,
    "price": 36.0,
    "stock": 5
  },
  {
    "id": "book-39",
    "title": "Fullstack Vue.js: Il manuale pratico",
    "author": "Hassan Djirdeh",
    "category": "Informatica",
    "isbn": "978-88-503-0039-9",
    "year": 2021,
    "price": 33.0,
    "stock": 9
  },
  {
    "id": "book-40",
    "title": "Angular: Dalle basi allo sviluppo enterprise",
    "author": "Nate Murray",
    "category": "Informatica",
    "isbn": "978-88-503-0040-6",
    "year": 2022,
    "price": 37.0,
    "stock": 0
  },
  {
    "id": "book-41",
    "title": "CSS Secrets: Tecniche avanzate di Web Design",
    "author": "Lea Verou",
    "category": "Informatica",
    "isbn": "978-88-503-0041-8",
    "year": 2019,
    "price": 32.5,
    "stock": 10
  },
  {
    "id": "book-42",
    "title": "Responsive Web Design con HTML5 e CSS3",
    "author": "Ben Frain",
    "category": "Informatica",
    "isbn": "978-88-503-0042-0",
    "year": 2021,
    "price": 30.0,
    "stock": 11
  },
  {
    "id": "book-43",
    "title": "Head First Design Patterns (Edizione Italiana)",
    "author": "Eric Freeman, Elisabeth Robson",
    "category": "Informatica",
    "isbn": "978-88-503-0043-8",
    "year": 2021,
    "price": 42.0,
    "stock": 4
  },
  {
    "id": "book-44",
    "title": "The Mythical Man-Month: Saggi sull'ingegneria del software",
    "author": "Frederick P. Brooks Jr.",
    "category": "Informatica",
    "isbn": "978-88-503-0044-5",
    "year": 2018,
    "price": 26.0,
    "stock": 1
  },
  {
    "id": "book-45",
    "title": "The Phoenix Project: Romanzo su IT e DevOps",
    "author": "Gene Kim, Kevin Behr",
    "category": "Informatica",
    "isbn": "978-88-503-0045-2",
    "year": 2019,
    "price": 21.0,
    "stock": 2
  },
  {
    "id": "book-46",
    "title": "The Unicorn Project: Accelerazione digitale e business",
    "author": "Gene Kim",
    "category": "Informatica",
    "isbn": "978-88-503-0046-4",
    "year": 2020,
    "price": 22.0,
    "stock": 14
  },
  {
    "id": "book-47",
    "title": "Accelerate: Scienza e metriche del DevOps",
    "author": "Nicole Forsgren, Jez Humble",
    "category": "Informatica",
    "isbn": "978-88-503-0047-2",
    "year": 2019,
    "price": 25.0,
    "stock": 15
  },
  {
    "id": "book-48",
    "title": "Extreme Programming Explained: Abbracciare il cambiamento",
    "author": "Kent Beck",
    "category": "Informatica",
    "isbn": "978-88-503-0048-4",
    "year": 2018,
    "price": 31.0,
    "stock": 1
  },
  {
    "id": "book-49",
    "title": "Clean Agile: Ritorno alle basi dell'agilità",
    "author": "Robert C. Martin",
    "category": "Informatica",
    "isbn": "978-88-503-0049-9",
    "year": 2020,
    "price": 28.0,
    "stock": 11
  },
  {
    "id": "book-50",
    "title": "User Story Mapping: Progettare prodotti digitali vincenti",
    "author": "Jeff Patton",
    "category": "Informatica",
    "isbn": "978-88-503-0050-2",
    "year": 2019,
    "price": 29.0,
    "stock": 2
  },
  {
    "id": "book-51",
    "title": "Scrum: Guida pratica alla gestione agile dei progetti",
    "author": "Jeff Sutherland",
    "category": "Informatica",
    "isbn": "978-88-503-0051-8",
    "year": 2018,
    "price": 20.0,
    "stock": 15
  },
  {
    "id": "book-52",
    "title": "High Performance MySQL: Ottimizzazione e scalabilità",
    "author": "Silvia Botros, Jeremy Tinley",
    "category": "Informatica",
    "isbn": "978-88-503-0052-5",
    "year": 2022,
    "price": 47.0,
    "stock": 12
  },
  {
    "id": "book-53",
    "title": "PostgreSQL: Guida completa e avanzata",
    "author": "Regina Obe, Leo Hsu",
    "category": "Informatica",
    "isbn": "978-88-503-0053-5",
    "year": 2021,
    "price": 41.0,
    "stock": 4
  },
  {
    "id": "book-54",
    "title": "MongoDB: The Definitive Guide",
    "author": "Shannon Bradshaw, Kristina Chodorow",
    "category": "Informatica",
    "isbn": "978-88-503-0054-4",
    "year": 2020,
    "price": 38.0,
    "stock": 15
  },
  {
    "id": "book-55",
    "title": "NoSQL Distilled: Basi di dati distribuite",
    "author": "Pramod J. Sadalage, Martin Fowler",
    "category": "Informatica",
    "isbn": "978-88-503-0055-9",
    "year": 2019,
    "price": 32.0,
    "stock": 6
  },
  {
    "id": "book-56",
    "title": "SQL Cookbook: Soluzioni pratiche per sviluppatori",
    "author": "Anthony Molinaro",
    "category": "Informatica",
    "isbn": "978-88-503-0056-7",
    "year": 2021,
    "price": 39.0,
    "stock": 4
  },
  {
    "id": "book-57",
    "title": "Database System Concepts (Silberschatz)",
    "author": "Abraham Silberschatz, Henry Korth",
    "category": "Informatica",
    "isbn": "978-88-503-0057-8",
    "year": 2021,
    "price": 54.0,
    "stock": 15
  },
  {
    "id": "book-58",
    "title": "Data Science con Python: Guida rapida",
    "author": "Jake VanderPlas",
    "category": "Informatica",
    "isbn": "978-88-503-0058-7",
    "year": 2022,
    "price": 37.0,
    "stock": 5
  },
  {
    "id": "book-59",
    "title": "Python for Data Analysis (Pandas & NumPy)",
    "author": "Wes McKinney",
    "category": "Informatica",
    "isbn": "978-88-503-0059-4",
    "year": 2023,
    "price": 40.0,
    "stock": 5
  },
  {
    "id": "book-60",
    "title": "Deep Learning con Python (Keras)",
    "author": "François Chollet",
    "category": "Informatica",
    "isbn": "978-88-503-0060-6",
    "year": 2022,
    "price": 42.0,
    "stock": 12
  },
  {
    "id": "book-61",
    "title": "Deep Learning: Principi e algoritmi",
    "author": "Ian Goodfellow, Yoshua Bengio",
    "category": "Informatica",
    "isbn": "978-88-503-0061-3",
    "year": 2018,
    "price": 56.0,
    "stock": 11
  },
  {
    "id": "book-62",
    "title": "Pattern Recognition and Machine Learning",
    "author": "Christopher M. Bishop",
    "category": "Informatica",
    "isbn": "978-88-503-0062-5",
    "year": 2019,
    "price": 52.0,
    "stock": 9
  },
  {
    "id": "book-63",
    "title": "Storytelling con i dati: Visualizzazione efficace",
    "author": "Cole Nussbaumer Knaflic",
    "category": "Informatica",
    "isbn": "978-88-503-0063-7",
    "year": 2020,
    "price": 27.0,
    "stock": 1
  },
  {
    "id": "book-64",
    "title": "Naked Statistics: Statistica per chi odia la matematica",
    "author": "Charles Wheelan",
    "category": "Informatica",
    "isbn": "978-88-503-0064-1",
    "year": 2019,
    "price": 18.0,
    "stock": 1
  },
  {
    "id": "book-65",
    "title": "The C Programming Language (Second Edition)",
    "author": "Brian W. Kernighan, Dennis Ritchie",
    "category": "Informatica",
    "isbn": "978-88-503-0065-8",
    "year": 2017,
    "price": 35.0,
    "stock": 12
  },
  {
    "id": "book-66",
    "title": "Effective Modern C++ (C++11 e C++14)",
    "author": "Scott Meyers",
    "category": "Informatica",
    "isbn": "978-88-503-0066-0",
    "year": 2019,
    "price": 41.0,
    "stock": 6
  },
  {
    "id": "book-67",
    "title": "Il linguaggio C++: Guida ufficiale",
    "author": "Bjarne Stroustrup",
    "category": "Informatica",
    "isbn": "978-88-503-0067-3",
    "year": 2020,
    "price": 50.0,
    "stock": 1
  },
  {
    "id": "book-68",
    "title": "The Go Programming Language",
    "author": "Alan A. A. Donovan, Brian W. Kernighan",
    "category": "Informatica",
    "isbn": "978-88-503-0068-0",
    "year": 2020,
    "price": 39.0,
    "stock": 0
  },
  {
    "id": "book-69",
    "title": "The Rust Programming Language",
    "author": "Steve Klabnik, Carol Nichols",
    "category": "Informatica",
    "isbn": "978-88-503-0069-8",
    "year": 2022,
    "price": 38.0,
    "stock": 4
  },
  {
    "id": "book-70",
    "title": "Programming Rust: Fast, Safe Systems Development",
    "author": "Jim Blandy, Jason Orendorff",
    "category": "Informatica",
    "isbn": "978-88-503-0070-7",
    "year": 2022,
    "price": 44.0,
    "stock": 13
  },
  {
    "id": "book-71",
    "title": "Effective Java (Terza Edizione)",
    "author": "Joshua Bloch",
    "category": "Informatica",
    "isbn": "978-88-503-0071-9",
    "year": 2019,
    "price": 43.0,
    "stock": 5
  },
  {
    "id": "book-72",
    "title": "Java: La guida completa per sviluppatori",
    "author": "Herbert Schildt",
    "category": "Informatica",
    "isbn": "978-88-503-0072-7",
    "year": 2022,
    "price": 53.0,
    "stock": 6
  },
  {
    "id": "book-73",
    "title": "C# 10 in a Nutshell: Il manuale di riferimento",
    "author": "Joseph Albahari",
    "category": "Informatica",
    "isbn": "978-88-503-0073-1",
    "year": 2022,
    "price": 48.0,
    "stock": 1
  },
  {
    "id": "book-74",
    "title": "CLR via C#: Architettura interna del .NET Framework",
    "author": "Jeffrey Richter",
    "category": "Informatica",
    "isbn": "978-88-503-0074-5",
    "year": 2019,
    "price": 49.0,
    "stock": 2
  },
  {
    "id": "book-75",
    "title": "PHP and MySQL for Dynamic Web Sites",
    "author": "Larry Ullman",
    "category": "Informatica",
    "isbn": "978-88-503-0075-0",
    "year": 2020,
    "price": 33.0,
    "stock": 2
  },
  {
    "id": "book-76",
    "title": "The Linux Command Line: Dalla shell agli script",
    "author": "William E. Shotts Jr.",
    "category": "Informatica",
    "isbn": "978-88-503-0076-1",
    "year": 2020,
    "price": 26.0,
    "stock": 13
  },
  {
    "id": "book-77",
    "title": "Linux Bible: Amministrazione di sistema e sicurezza",
    "author": "Christopher Negus",
    "category": "Informatica",
    "isbn": "978-88-503-0077-5",
    "year": 2021,
    "price": 45.0,
    "stock": 0
  },
  {
    "id": "book-78",
    "title": "TCP/IP Illustrated (Volume 1: I protocolli)",
    "author": "W. Richard Stevens",
    "category": "Informatica",
    "isbn": "978-88-503-0078-3",
    "year": 2018,
    "price": 54.0,
    "stock": 4
  },
  {
    "id": "book-79",
    "title": "Computer Systems: A Programmer's Perspective",
    "author": "Randal E. Bryant, David R. O'Hallaron",
    "category": "Informatica",
    "isbn": "978-88-503-0079-2",
    "year": 2020,
    "price": 55.0,
    "stock": 2
  },
  {
    "id": "book-80",
    "title": "Code: The Hidden Language of Computer Hardware and Software",
    "author": "Charles Petzold",
    "category": "Informatica",
    "isbn": "978-88-503-0080-7",
    "year": 2022,
    "price": 28.0,
    "stock": 7
  },
  {
    "id": "book-81",
    "title": "The Web Application Hacker's Handbook",
    "author": "Dafydd Stuttard, Marcus Pinto",
    "category": "Informatica",
    "isbn": "978-88-503-0081-7",
    "year": 2019,
    "price": 45.0,
    "stock": 4
  },
  {
    "id": "book-82",
    "title": "Hacking: The Art of Exploitation",
    "author": "Jon Erickson",
    "category": "Informatica",
    "isbn": "978-88-503-0082-1",
    "year": 2018,
    "price": 36.0,
    "stock": 2
  },
  {
    "id": "book-83",
    "title": "Practical Malware Analysis: Guida al reversing",
    "author": "Michael Sikorski, Andrew Honig",
    "category": "Informatica",
    "isbn": "978-88-503-0083-8",
    "year": 2020,
    "price": 48.0,
    "stock": 0
  },
  {
    "id": "book-84",
    "title": "Metasploit: The Penetration Tester's Guide",
    "author": "David Kennedy, Jim O'Gorman",
    "category": "Informatica",
    "isbn": "978-88-503-0084-3",
    "year": 2019,
    "price": 35.0,
    "stock": 4
  },
  {
    "id": "book-85",
    "title": "Crittografia applicata: Protocolli, algoritmi e codice",
    "author": "Bruce Schneier",
    "category": "Informatica",
    "isbn": "978-88-503-0085-7",
    "year": 2019,
    "price": 49.0,
    "stock": 2
  },
  {
    "id": "book-86",
    "title": "Blue Team Handbook: Incident Response Edition",
    "author": "Don Murdoch",
    "category": "Informatica",
    "isbn": "978-88-503-0086-0",
    "year": 2021,
    "price": 23.0,
    "stock": 9
  },
  {
    "id": "book-87",
    "title": "Practical Packet Analysis (Usare Wireshark)",
    "author": "Chris Sanders",
    "category": "Informatica",
    "isbn": "978-88-503-0087-6",
    "year": 2020,
    "price": 33.0,
    "stock": 1
  },
  {
    "id": "book-88",
    "title": "CompTIA Security+ All-in-One Exam Guide",
    "author": "Wm. Arthur Conklin",
    "category": "Informatica",
    "isbn": "978-88-503-0088-7",
    "year": 2022,
    "price": 46.0,
    "stock": 15
  },
  {
    "id": "book-89",
    "title": "Zero Trust Networks: Costruire architetture sicure",
    "author": "Evan Gilman, Doug Barth",
    "category": "Informatica",
    "isbn": "978-88-503-0089-8",
    "year": 2021,
    "price": 36.0,
    "stock": 1
  },
  {
    "id": "book-90",
    "title": "Infrastructure as Code: Gestione dinamica dei server",
    "author": "Kief Morris",
    "category": "Informatica",
    "isbn": "978-88-503-0090-2",
    "year": 2021,
    "price": 39.0,
    "stock": 2
  },
  {
    "id": "book-91",
    "title": "Terraform: Up & Running (Edizione Italiana)",
    "author": "Yevgeniy Brikman",
    "category": "Informatica",
    "isbn": "978-88-503-0091-0",
    "year": 2022,
    "price": 37.0,
    "stock": 1
  },
  {
    "id": "book-92",
    "title": "Ansible for DevOps: Automazione server e cloud",
    "author": "Jeff Geerling",
    "category": "Informatica",
    "isbn": "978-88-503-0092-0",
    "year": 2021,
    "price": 31.0,
    "stock": 11
  },
  {
    "id": "book-93",
    "title": "Kafka: The Definitive Guide (Real-time data streaming)",
    "author": "Gwen Shapira, Todd Palino",
    "category": "Informatica",
    "isbn": "978-88-503-0093-0",
    "year": 2022,
    "price": 42.0,
    "stock": 3
  },
  {
    "id": "book-94",
    "title": "Redis in Action: Basi di dati in-memory ultraveloci",
    "author": "Josiah L. Carlson",
    "category": "Informatica",
    "isbn": "978-88-503-0094-8",
    "year": 2020,
    "price": 34.0,
    "stock": 11
  },
  {
    "id": "book-95",
    "title": "Elasticsearch: The Definitive Guide",
    "author": "Clinton Gormley, Zachary Tong",
    "category": "Informatica",
    "isbn": "978-88-503-0095-2",
    "year": 2019,
    "price": 39.0,
    "stock": 1
  },
  {
    "id": "book-96",
    "title": "GraphQL: Guida pratica per sviluppatori web",
    "author": "Eve Porcello, Alex Banks",
    "category": "Informatica",
    "isbn": "978-88-503-0096-1",
    "year": 2021,
    "price": 30.0,
    "stock": 0
  },
  {
    "id": "book-97",
    "title": "RESTful Web APIs: Progettare servizi web moderni",
    "author": "Leonard Richardson, Mike Amundsen",
    "category": "Informatica",
    "isbn": "978-88-503-0097-6",
    "year": 2019,
    "price": 35.0,
    "stock": 6
  },
  {
    "id": "book-98",
    "title": "Micro Frontends in Action: Architetture frontend scalabili",
    "author": "Michael Geers",
    "category": "Informatica",
    "isbn": "978-88-503-0098-9",
    "year": 2022,
    "price": 38.0,
    "stock": 1
  },
  {
    "id": "book-99",
    "title": "Clean Coder: Codice di condotta per professionisti",
    "author": "Robert C. Martin",
    "category": "Informatica",
    "isbn": "978-88-503-0099-1",
    "year": 2019,
    "price": 29.0,
    "stock": 2
  },
  {
    "id": "book-100",
    "title": "Structure and Interpretation of Computer Programs (SICP)",
    "author": "Harold Abelson, Gerald Jay Sussman",
    "category": "Informatica",
    "isbn": "978-88-503-0100-9",
    "year": 2018,
    "price": 52.0,
    "stock": 12
  },
  {
    "id": "book-101",
    "title": "Il nome della rosa",
    "author": "Umberto Eco",
    "category": "Narrativa",
    "isbn": "978-88-04-0101-3",
    "year": 2020,
    "price": 15.0,
    "stock": 7
  },
  {
    "id": "book-102",
    "title": "Le città invisibili",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0102-3",
    "year": 2016,
    "price": 11.0,
    "stock": 2
  },
  {
    "id": "book-103",
    "title": "Il barone rampante",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0103-4",
    "year": 2017,
    "price": 12.0,
    "stock": 5
  },
  {
    "id": "book-104",
    "title": "L'amica geniale",
    "author": "Elena Ferrante",
    "category": "Narrativa",
    "isbn": "978-88-04-0104-1",
    "year": 2011,
    "price": 19.5,
    "stock": 15
  },
  {
    "id": "book-105",
    "title": "Cent'anni di solitudine",
    "author": "Gabriel García Márquez",
    "category": "Narrativa",
    "isbn": "978-88-04-0105-9",
    "year": 2018,
    "price": 14.0,
    "stock": 0
  },
  {
    "id": "book-106",
    "title": "Se questo è un uomo",
    "author": "Primo Levi",
    "category": "Narrativa",
    "isbn": "978-88-04-0106-1",
    "year": 2019,
    "price": 11.5,
    "stock": 4
  },
  {
    "id": "book-107",
    "title": "La coscienza di Zeno",
    "author": "Italo Svevo",
    "category": "Narrativa",
    "isbn": "978-88-04-0107-4",
    "year": 2020,
    "price": 10.0,
    "stock": 11
  },
  {
    "id": "book-108",
    "title": "Il Gattopardo",
    "author": "Giuseppe Tomasi di Lampedusa",
    "category": "Narrativa",
    "isbn": "978-88-04-0108-1",
    "year": 2019,
    "price": 12.0,
    "stock": 2
  },
  {
    "id": "book-109",
    "title": "Cecità",
    "author": "José Saramago",
    "category": "Narrativa",
    "isbn": "978-88-04-0109-4",
    "year": 2017,
    "price": 13.5,
    "stock": 8
  },
  {
    "id": "book-110",
    "title": "Pastorale americana",
    "author": "Philip Roth",
    "category": "Narrativa",
    "isbn": "978-88-04-0110-9",
    "year": 2018,
    "price": 14.5,
    "stock": 2
  },
  {
    "id": "book-111",
    "title": "La solitudine dei numeri primi",
    "author": "Paolo Giordano",
    "category": "Narrativa",
    "isbn": "978-88-04-0111-8",
    "year": 2014,
    "price": 12.0,
    "stock": 1
  },
  {
    "id": "book-112",
    "title": "Notte prima degli esami",
    "author": "Fausto Brizzi",
    "category": "Narrativa",
    "isbn": "978-88-04-0112-8",
    "year": 2012,
    "price": 9.9,
    "stock": 0
  },
  {
    "id": "book-113",
    "title": "Il deserto dei Tartari",
    "author": "Dino Buzzati",
    "category": "Narrativa",
    "isbn": "978-88-04-0113-1",
    "year": 2019,
    "price": 11.0,
    "stock": 13
  },
  {
    "id": "book-114",
    "title": "Lessico famigliare",
    "author": "Natalia Ginzburg",
    "category": "Narrativa",
    "isbn": "978-88-04-0114-4",
    "year": 2016,
    "price": 12.0,
    "stock": 5
  },
  {
    "id": "book-115",
    "title": "Uno, nessuno e centomila",
    "author": "Luigi Pirandello",
    "category": "Narrativa",
    "isbn": "978-88-04-0115-8",
    "year": 2021,
    "price": 9.5,
    "stock": 1
  },
  {
    "id": "book-116",
    "title": "Il giorno della civetta",
    "author": "Leonardo Sciascia",
    "category": "Narrativa",
    "isbn": "978-88-04-0116-9",
    "year": 2018,
    "price": 10.5,
    "stock": 2
  },
  {
    "id": "book-117",
    "title": "Kafka sulla spiaggia",
    "author": "Haruki Murakami",
    "category": "Narrativa",
    "isbn": "978-88-04-0117-3",
    "year": 2020,
    "price": 15.0,
    "stock": 8
  },
  {
    "id": "book-118",
    "title": "Shantaram",
    "author": "Gregory David Roberts",
    "category": "Narrativa",
    "isbn": "978-88-04-0118-8",
    "year": 2019,
    "price": 16.5,
    "stock": 7
  },
  {
    "id": "book-119",
    "title": "La chimera",
    "author": "Sebastiano Vassalli",
    "category": "Narrativa",
    "isbn": "978-88-04-0119-1",
    "year": 2018,
    "price": 11.0,
    "stock": 3
  },
  {
    "id": "book-120",
    "title": "Trilogia della città di K.",
    "author": "Agota Kristof",
    "category": "Narrativa",
    "isbn": "978-88-04-0120-0",
    "year": 2021,
    "price": 14.0,
    "stock": 7
  },
  {
    "id": "book-121",
    "title": "Il pendolo di Foucault",
    "author": "Umberto Eco",
    "category": "Narrativa",
    "isbn": "978-88-04-0121-2",
    "year": 2019,
    "price": 16.0,
    "stock": 0
  },
  {
    "id": "book-122",
    "title": "Baudolino",
    "author": "Umberto Eco",
    "category": "Narrativa",
    "isbn": "978-88-04-0122-2",
    "year": 2018,
    "price": 14.5,
    "stock": 7
  },
  {
    "id": "book-123",
    "title": "Se una notte d'inverno un viaggiatore",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0123-6",
    "year": 2018,
    "price": 12.5,
    "stock": 1
  },
  {
    "id": "book-124",
    "title": "Il visconte dimezzato",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0124-1",
    "year": 2017,
    "price": 10.5,
    "stock": 4
  },
  {
    "id": "book-125",
    "title": "Il cavaliere inesistente",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0125-2",
    "year": 2017,
    "price": 10.5,
    "stock": 1
  },
  {
    "id": "book-126",
    "title": "Marcovaldo ovvero Le stagioni in città",
    "author": "Italo Calvino",
    "category": "Narrativa",
    "isbn": "978-88-04-0126-9",
    "year": 2019,
    "price": 9.5,
    "stock": 8
  },
  {
    "id": "book-127",
    "title": "La tregua",
    "author": "Primo Levi",
    "category": "Narrativa",
    "isbn": "978-88-04-0127-2",
    "year": 2018,
    "price": 11.5,
    "stock": 9
  },
  {
    "id": "book-128",
    "title": "Il sistema periodico",
    "author": "Primo Levi",
    "category": "Narrativa",
    "isbn": "978-88-04-0128-5",
    "year": 2019,
    "price": 12.0,
    "stock": 0
  },
  {
    "id": "book-129",
    "title": "Storia del nuovo cognome",
    "author": "Elena Ferrante",
    "category": "Narrativa",
    "isbn": "978-88-04-0129-0",
    "year": 2012,
    "price": 19.5,
    "stock": 15
  },
  {
    "id": "book-130",
    "title": "Storia di chi fugge e di chi resta",
    "author": "Elena Ferrante",
    "category": "Narrativa",
    "isbn": "978-88-04-0130-3",
    "year": 2013,
    "price": 19.5,
    "stock": 6
  },
  {
    "id": "book-131",
    "title": "Storia della bambina perduta",
    "author": "Elena Ferrante",
    "category": "Narrativa",
    "isbn": "978-88-04-0131-8",
    "year": 2014,
    "price": 19.5,
    "stock": 1
  },
  {
    "id": "book-132",
    "title": "La vita bugiarda degli adulti",
    "author": "Elena Ferrante",
    "category": "Narrativa",
    "isbn": "978-88-04-0132-9",
    "year": 2019,
    "price": 19.0,
    "stock": 9
  },
  {
    "id": "book-133",
    "title": "L'amore ai tempi del colera",
    "author": "Gabriel García Márquez",
    "category": "Narrativa",
    "isbn": "978-88-04-0133-2",
    "year": 2019,
    "price": 13.5,
    "stock": 1
  },
  {
    "id": "book-134",
    "title": "Cronaca di una morte annunciata",
    "author": "Gabriel García Márquez",
    "category": "Narrativa",
    "isbn": "978-88-04-0134-2",
    "year": 2018,
    "price": 10.0,
    "stock": 2
  },
  {
    "id": "book-135",
    "title": "Saggio sulla lucidità",
    "author": "José Saramago",
    "category": "Narrativa",
    "isbn": "978-88-04-0135-2",
    "year": 2018,
    "price": 13.0,
    "stock": 3
  },
  {
    "id": "book-136",
    "title": "Memoriale del convento",
    "author": "José Saramago",
    "category": "Narrativa",
    "isbn": "978-88-04-0136-6",
    "year": 2019,
    "price": 14.0,
    "stock": 8
  },
  {
    "id": "book-137",
    "title": "Norwegian Wood (Tokyo Blues)",
    "author": "Haruki Murakami",
    "category": "Narrativa",
    "isbn": "978-88-04-0137-3",
    "year": 2019,
    "price": 13.5,
    "stock": 14
  },
  {
    "id": "book-138",
    "title": "1Q84 (Libri 1, 2 e 3)",
    "author": "Haruki Murakami",
    "category": "Narrativa",
    "isbn": "978-88-04-0138-1",
    "year": 2020,
    "price": 22.0,
    "stock": 15
  },
  {
    "id": "book-139",
    "title": "L'uccello che girava le viti del mondo",
    "author": "Haruki Murakami",
    "category": "Narrativa",
    "isbn": "978-88-04-0139-7",
    "year": 2018,
    "price": 16.0,
    "stock": 3
  },
  {
    "id": "book-140",
    "title": "La macchia umana",
    "author": "Philip Roth",
    "category": "Narrativa",
    "isbn": "978-88-04-0140-5",
    "year": 2019,
    "price": 14.0,
    "stock": 10
  },
  {
    "id": "book-141",
    "title": "Il lamento di Portnoy",
    "author": "Philip Roth",
    "category": "Narrativa",
    "isbn": "978-88-04-0141-3",
    "year": 2018,
    "price": 12.5,
    "stock": 15
  },
  {
    "id": "book-142",
    "title": "La luna e i falò",
    "author": "Cesare Pavese",
    "category": "Narrativa",
    "isbn": "978-88-04-0142-3",
    "year": 2019,
    "price": 10.0,
    "stock": 1
  },
  {
    "id": "book-143",
    "title": "La bella estate",
    "author": "Cesare Pavese",
    "category": "Narrativa",
    "isbn": "978-88-04-0143-1",
    "year": 2018,
    "price": 9.5,
    "stock": 1
  },
  {
    "id": "book-144",
    "title": "La casa in collina",
    "author": "Cesare Pavese",
    "category": "Narrativa",
    "isbn": "978-88-04-0144-5",
    "year": 2017,
    "price": 10.0,
    "stock": 2
  },
  {
    "id": "book-145",
    "title": "La storia",
    "author": "Elsa Morante",
    "category": "Narrativa",
    "isbn": "978-88-04-0145-8",
    "year": 2018,
    "price": 15.0,
    "stock": 9
  },
  {
    "id": "book-146",
    "title": "L'isola di Arturo",
    "author": "Elsa Morante",
    "category": "Narrativa",
    "isbn": "978-88-04-0146-1",
    "year": 2019,
    "price": 12.5,
    "stock": 3
  },
  {
    "id": "book-147",
    "title": "Menzogna e sortilegio",
    "author": "Elsa Morante",
    "category": "Narrativa",
    "isbn": "978-88-04-0147-2",
    "year": 2017,
    "price": 16.0,
    "stock": 7
  },
  {
    "id": "book-148",
    "title": "A ciascuno il suo",
    "author": "Leonardo Sciascia",
    "category": "Narrativa",
    "isbn": "978-88-04-0148-0",
    "year": 2018,
    "price": 10.0,
    "stock": 7
  },
  {
    "id": "book-149",
    "title": "Todo modo",
    "author": "Leonardo Sciascia",
    "category": "Narrativa",
    "isbn": "978-88-04-0149-5",
    "year": 2019,
    "price": 9.5,
    "stock": 2
  },
  {
    "id": "book-150",
    "title": "Novecento: Un monologo",
    "author": "Alessandro Baricco",
    "category": "Narrativa",
    "isbn": "978-88-04-0150-6",
    "year": 2018,
    "price": 9.0,
    "stock": 2
  },
  {
    "id": "book-151",
    "title": "Seta",
    "author": "Alessandro Baricco",
    "category": "Narrativa",
    "isbn": "978-88-04-0151-1",
    "year": 2017,
    "price": 9.5,
    "stock": 11
  },
  {
    "id": "book-152",
    "title": "Oceano mare",
    "author": "Alessandro Baricco",
    "category": "Narrativa",
    "isbn": "978-88-04-0152-3",
    "year": 2019,
    "price": 11.0,
    "stock": 12
  },
  {
    "id": "book-153",
    "title": "Castelli di rabbia",
    "author": "Alessandro Baricco",
    "category": "Narrativa",
    "isbn": "978-88-04-0153-6",
    "year": 2018,
    "price": 11.5,
    "stock": 1
  },
  {
    "id": "book-154",
    "title": "Io non ho paura",
    "author": "Niccolò Ammaniti",
    "category": "Narrativa",
    "isbn": "978-88-04-0154-8",
    "year": 2017,
    "price": 11.0,
    "stock": 0
  },
  {
    "id": "book-155",
    "title": "Come Dio comanda",
    "author": "Niccolò Ammaniti",
    "category": "Narrativa",
    "isbn": "978-88-04-0155-3",
    "year": 2018,
    "price": 13.0,
    "stock": 2
  },
  {
    "id": "book-156",
    "title": "Ti prendo e ti porto via",
    "author": "Niccolò Ammaniti",
    "category": "Narrativa",
    "isbn": "978-88-04-0156-5",
    "year": 2019,
    "price": 12.0,
    "stock": 4
  },
  {
    "id": "book-157",
    "title": "La strada",
    "author": "Cormac McCarthy",
    "category": "Narrativa",
    "isbn": "978-88-04-0157-1",
    "year": 2018,
    "price": 12.0,
    "stock": 13
  },
  {
    "id": "book-158",
    "title": "Non è un paese per vecchi",
    "author": "Cormac McCarthy",
    "category": "Narrativa",
    "isbn": "978-88-04-0158-8",
    "year": 2019,
    "price": 12.5,
    "stock": 7
  },
  {
    "id": "book-159",
    "title": "Meridiano di sangue",
    "author": "Cormac McCarthy",
    "category": "Narrativa",
    "isbn": "978-88-04-0159-5",
    "year": 2017,
    "price": 14.0,
    "stock": 9
  },
  {
    "id": "book-160",
    "title": "L'ombra del vento",
    "author": "Carlos Ruiz Zafón",
    "category": "Narrativa",
    "isbn": "978-88-04-0160-8",
    "year": 2018,
    "price": 13.5,
    "stock": 1
  },
  {
    "id": "book-161",
    "title": "Il gioco dell'angelo",
    "author": "Carlos Ruiz Zafón",
    "category": "Narrativa",
    "isbn": "978-88-04-0161-6",
    "year": 2019,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-162",
    "title": "Il prigioniero del cielo",
    "author": "Carlos Ruiz Zafón",
    "category": "Narrativa",
    "isbn": "978-88-04-0162-9",
    "year": 2019,
    "price": 13.0,
    "stock": 5
  },
  {
    "id": "book-163",
    "title": "Il labirinto degli spiriti",
    "author": "Carlos Ruiz Zafón",
    "category": "Narrativa",
    "isbn": "978-88-04-0163-8",
    "year": 2020,
    "price": 16.0,
    "stock": 9
  },
  {
    "id": "book-164",
    "title": "L'insostenibile leggerezza dell'essere",
    "author": "Milan Kundera",
    "category": "Narrativa",
    "isbn": "978-88-04-0164-4",
    "year": 2018,
    "price": 12.5,
    "stock": 1
  },
  {
    "id": "book-165",
    "title": "L'immortalità",
    "author": "Milan Kundera",
    "category": "Narrativa",
    "isbn": "978-88-04-0165-9",
    "year": 2019,
    "price": 13.0,
    "stock": 15
  },
  {
    "id": "book-166",
    "title": "La lentezza",
    "author": "Milan Kundera",
    "category": "Narrativa",
    "isbn": "978-88-04-0166-7",
    "year": 2017,
    "price": 10.0,
    "stock": 8
  },
  {
    "id": "book-167",
    "title": "Lo straniero",
    "author": "Albert Camus",
    "category": "Narrativa",
    "isbn": "978-88-04-0167-3",
    "year": 2019,
    "price": 10.0,
    "stock": 13
  },
  {
    "id": "book-168",
    "title": "La peste",
    "author": "Albert Camus",
    "category": "Narrativa",
    "isbn": "978-88-04-0168-2",
    "year": 2020,
    "price": 12.0,
    "stock": 15
  },
  {
    "id": "book-169",
    "title": "La caduta",
    "author": "Albert Camus",
    "category": "Narrativa",
    "isbn": "978-88-04-0169-8",
    "year": 2018,
    "price": 9.5,
    "stock": 7
  },
  {
    "id": "book-170",
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "category": "Narrativa",
    "isbn": "978-88-04-0170-5",
    "year": 2019,
    "price": 9.0,
    "stock": 12
  },
  {
    "id": "book-171",
    "title": "Il lupo della steppa",
    "author": "Hermann Hesse",
    "category": "Narrativa",
    "isbn": "978-88-04-0171-4",
    "year": 2018,
    "price": 11.5,
    "stock": 1
  },
  {
    "id": "book-172",
    "title": "Narciso e Boccadoro",
    "author": "Hermann Hesse",
    "category": "Narrativa",
    "isbn": "978-88-04-0172-2",
    "year": 2019,
    "price": 12.0,
    "stock": 6
  },
  {
    "id": "book-173",
    "title": "I pilastri della terra",
    "author": "Ken Follett",
    "category": "Narrativa",
    "isbn": "978-88-04-0173-3",
    "year": 2018,
    "price": 16.0,
    "stock": 0
  },
  {
    "id": "book-174",
    "title": "Mondo senza fine",
    "author": "Ken Follett",
    "category": "Narrativa",
    "isbn": "978-88-04-0174-1",
    "year": 2019,
    "price": 16.5,
    "stock": 2
  },
  {
    "id": "book-175",
    "title": "La colonna di fuoco",
    "author": "Ken Follett",
    "category": "Narrativa",
    "isbn": "978-88-04-0175-9",
    "year": 2018,
    "price": 17.0,
    "stock": 13
  },
  {
    "id": "book-176",
    "title": "Shining",
    "author": "Stephen King",
    "category": "Narrativa",
    "isbn": "978-88-04-0176-7",
    "year": 2019,
    "price": 13.5,
    "stock": 2
  },
  {
    "id": "book-177",
    "title": "Misery",
    "author": "Stephen King",
    "category": "Narrativa",
    "isbn": "978-88-04-0177-0",
    "year": 2018,
    "price": 12.5,
    "stock": 2
  },
  {
    "id": "book-178",
    "title": "IT",
    "author": "Stephen King",
    "category": "Narrativa",
    "isbn": "978-88-04-0178-1",
    "year": 2019,
    "price": 18.0,
    "stock": 15
  },
  {
    "id": "book-179",
    "title": "Il miglio verde",
    "author": "Stephen King",
    "category": "Narrativa",
    "isbn": "978-88-04-0179-2",
    "year": 2018,
    "price": 14.0,
    "stock": 6
  },
  {
    "id": "book-180",
    "title": "Il codice Da Vinci",
    "author": "Dan Brown",
    "category": "Narrativa",
    "isbn": "978-88-04-0180-8",
    "year": 2018,
    "price": 12.0,
    "stock": 1
  },
  {
    "id": "book-181",
    "title": "Angeli e demoni",
    "author": "Dan Brown",
    "category": "Narrativa",
    "isbn": "978-88-04-0181-3",
    "year": 2018,
    "price": 12.0,
    "stock": 11
  },
  {
    "id": "book-182",
    "title": "Inferno",
    "author": "Dan Brown",
    "category": "Narrativa",
    "isbn": "978-88-04-0182-7",
    "year": 2019,
    "price": 13.0,
    "stock": 4
  },
  {
    "id": "book-183",
    "title": "Furore",
    "author": "John Steinbeck",
    "category": "Narrativa",
    "isbn": "978-88-04-0183-8",
    "year": 2019,
    "price": 14.5,
    "stock": 2
  },
  {
    "id": "book-184",
    "title": "La valle dell'Eden",
    "author": "John Steinbeck",
    "category": "Narrativa",
    "isbn": "978-88-04-0184-5",
    "year": 2018,
    "price": 15.0,
    "stock": 12
  },
  {
    "id": "book-185",
    "title": "Uomini e topi",
    "author": "John Steinbeck",
    "category": "Narrativa",
    "isbn": "978-88-04-0185-9",
    "year": 2019,
    "price": 10.0,
    "stock": 10
  },
  {
    "id": "book-186",
    "title": "Il vecchio e il mare",
    "author": "Ernest Hemingway",
    "category": "Narrativa",
    "isbn": "978-88-04-0186-6",
    "year": 2019,
    "price": 10.0,
    "stock": 11
  },
  {
    "id": "book-187",
    "title": "Addio alle armi",
    "author": "Ernest Hemingway",
    "category": "Narrativa",
    "isbn": "978-88-04-0187-7",
    "year": 2018,
    "price": 12.5,
    "stock": 11
  },
  {
    "id": "book-188",
    "title": "Per chi suona la campana",
    "author": "Ernest Hemingway",
    "category": "Narrativa",
    "isbn": "978-88-04-0188-7",
    "year": 2019,
    "price": 14.0,
    "stock": 14
  },
  {
    "id": "book-189",
    "title": "La montagna incantata",
    "author": "Thomas Mann",
    "category": "Narrativa",
    "isbn": "978-88-04-0189-3",
    "year": 2018,
    "price": 16.5,
    "stock": 1
  },
  {
    "id": "book-190",
    "title": "Morte a Venezia",
    "author": "Thomas Mann",
    "category": "Narrativa",
    "isbn": "978-88-04-0190-8",
    "year": 2019,
    "price": 9.5,
    "stock": 1
  },
  {
    "id": "book-191",
    "title": "I Buddenbrook: Decadenza di una famiglia",
    "author": "Thomas Mann",
    "category": "Narrativa",
    "isbn": "978-88-04-0191-4",
    "year": 2018,
    "price": 15.5,
    "stock": 6
  },
  {
    "id": "book-192",
    "title": "Il racconto dell'ancella",
    "author": "Margaret Atwood",
    "category": "Narrativa",
    "isbn": "978-88-04-0192-4",
    "year": 2019,
    "price": 13.0,
    "stock": 14
  },
  {
    "id": "book-193",
    "title": "I testamenti",
    "author": "Margaret Atwood",
    "category": "Narrativa",
    "isbn": "978-88-04-0193-5",
    "year": 2020,
    "price": 15.0,
    "stock": 8
  },
  {
    "id": "book-194",
    "title": "Non lasciarmi",
    "author": "Kazuo Ishiguro",
    "category": "Narrativa",
    "isbn": "978-88-04-0194-2",
    "year": 2019,
    "price": 12.5,
    "stock": 4
  },
  {
    "id": "book-195",
    "title": "Quel che resta del giorno",
    "author": "Kazuo Ishiguro",
    "category": "Narrativa",
    "isbn": "978-88-04-0195-2",
    "year": 2018,
    "price": 12.0,
    "stock": 2
  },
  {
    "id": "book-196",
    "title": "La casa degli spiriti",
    "author": "Isabel Allende",
    "category": "Narrativa",
    "isbn": "978-88-04-0196-6",
    "year": 2018,
    "price": 13.0,
    "stock": 4
  },
  {
    "id": "book-197",
    "title": "Paula",
    "author": "Isabel Allende",
    "category": "Narrativa",
    "isbn": "978-88-04-0197-7",
    "year": 2019,
    "price": 12.5,
    "stock": 2
  },
  {
    "id": "book-198",
    "title": "La forma dell'acqua (Il commissario Montalbano)",
    "author": "Andrea Camilleri",
    "category": "Narrativa",
    "isbn": "978-88-04-0198-6",
    "year": 2018,
    "price": 10.0,
    "stock": 6
  },
  {
    "id": "book-199",
    "title": "Il cane di terracotta",
    "author": "Andrea Camilleri",
    "category": "Narrativa",
    "isbn": "978-88-04-0199-9",
    "year": 2018,
    "price": 10.0,
    "stock": 2
  },
  {
    "id": "book-200",
    "title": "I leoni di Sicilia: La saga dei Florio",
    "author": "Stefania Auci",
    "category": "Narrativa",
    "isbn": "978-88-04-0200-9",
    "year": 2019,
    "price": 18.0,
    "stock": 3
  },
  {
    "id": "book-201",
    "title": "Sapiens: Da animali a dèi",
    "author": "Yuval Noah Harari",
    "category": "Saggistica",
    "isbn": "978-88-452-0201-5",
    "year": 2017,
    "price": 18.0,
    "stock": 3
  },
  {
    "id": "book-202",
    "title": "Homo Deus: Breve storia del futuro",
    "author": "Yuval Noah Harari",
    "category": "Saggistica",
    "isbn": "978-88-452-0202-6",
    "year": 2018,
    "price": 18.5,
    "stock": 9
  },
  {
    "id": "book-203",
    "title": "21 lezioni per il XXI secolo",
    "author": "Yuval Noah Harari",
    "category": "Saggistica",
    "isbn": "978-88-452-0203-8",
    "year": 2019,
    "price": 18.0,
    "stock": 14
  },
  {
    "id": "book-204",
    "title": "Nexus: Breve storia delle reti di informazione",
    "author": "Yuval Noah Harari",
    "category": "Saggistica",
    "isbn": "978-88-452-0204-7",
    "year": 2024,
    "price": 21.0,
    "stock": 6
  },
  {
    "id": "book-205",
    "title": "Armi, acciaio e malattie",
    "author": "Jared Diamond",
    "category": "Saggistica",
    "isbn": "978-88-452-0205-7",
    "year": 2014,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-206",
    "title": "Collasso: Come le società scelgono di morire",
    "author": "Jared Diamond",
    "category": "Saggistica",
    "isbn": "978-88-452-0206-5",
    "year": 2015,
    "price": 16.5,
    "stock": 0
  },
  {
    "id": "book-207",
    "title": "Pensieri lenti e veloci",
    "author": "Daniel Kahneman",
    "category": "Saggistica",
    "isbn": "978-88-452-0207-6",
    "year": 2012,
    "price": 16.0,
    "stock": 15
  },
  {
    "id": "book-208",
    "title": "Il cigno nero: L'improbabile nella vita",
    "author": "Nassim Nicholas Taleb",
    "category": "Saggistica",
    "isbn": "978-88-452-0208-2",
    "year": 2014,
    "price": 15.0,
    "stock": 10
  },
  {
    "id": "book-209",
    "title": "Antifragile: Prosperare nel disordine",
    "author": "Nassim Nicholas Taleb",
    "category": "Saggistica",
    "isbn": "978-88-452-0209-0",
    "year": 2015,
    "price": 16.5,
    "stock": 2
  },
  {
    "id": "book-210",
    "title": "Giocati dal caso: Il ruolo della fortuna",
    "author": "Nassim Nicholas Taleb",
    "category": "Saggistica",
    "isbn": "978-88-452-0210-9",
    "year": 2016,
    "price": 14.0,
    "stock": 12
  },
  {
    "id": "book-211",
    "title": "Skin in the Game: Rischi condivisi nella vita",
    "author": "Nassim Nicholas Taleb",
    "category": "Saggistica",
    "isbn": "978-88-452-0211-6",
    "year": 2018,
    "price": 15.5,
    "stock": 4
  },
  {
    "id": "book-212",
    "title": "Factfulness: Dieci ragioni per cui il mondo va meglio",
    "author": "Hans Rosling",
    "category": "Saggistica",
    "isbn": "978-88-452-0212-2",
    "year": 2018,
    "price": 17.0,
    "stock": 2
  },
  {
    "id": "book-213",
    "title": "Breve storia del corpo umano",
    "author": "Bill Bryson",
    "category": "Saggistica",
    "isbn": "978-88-452-0213-6",
    "year": 2019,
    "price": 19.0,
    "stock": 0
  },
  {
    "id": "book-214",
    "title": "Breve storia di (quasi) tutto",
    "author": "Bill Bryson",
    "category": "Saggistica",
    "isbn": "978-88-452-0214-5",
    "year": 2018,
    "price": 16.5,
    "stock": 10
  },
  {
    "id": "book-215",
    "title": "Fuoriclasse: Storia naturale del successo",
    "author": "Malcolm Gladwell",
    "category": "Saggistica",
    "isbn": "978-88-452-0215-4",
    "year": 2017,
    "price": 13.0,
    "stock": 1
  },
  {
    "id": "book-216",
    "title": "Il punto critico: I grandi effetti dei piccoli cambiamenti",
    "author": "Malcolm Gladwell",
    "category": "Saggistica",
    "isbn": "978-88-452-0216-4",
    "year": 2016,
    "price": 12.5,
    "stock": 9
  },
  {
    "id": "book-217",
    "title": "In un batter di ciglia: Il potere dell'intuito",
    "author": "Malcolm Gladwell",
    "category": "Saggistica",
    "isbn": "978-88-452-0217-0",
    "year": 2018,
    "price": 13.5,
    "stock": 10
  },
  {
    "id": "book-218",
    "title": "La fine del mondo è solo l'inizio",
    "author": "Peter Zeihan",
    "category": "Saggistica",
    "isbn": "978-88-452-0218-5",
    "year": 2023,
    "price": 21.0,
    "stock": 2
  },
  {
    "id": "book-219",
    "title": "Capitalismo senza capitale",
    "author": "Jonathan Haskel, Stian Westlake",
    "category": "Saggistica",
    "isbn": "978-88-452-0219-0",
    "year": 2019,
    "price": 18.0,
    "stock": 1
  },
  {
    "id": "book-220",
    "title": "Economia in una lezione",
    "author": "Henry Hazlitt",
    "category": "Saggistica",
    "isbn": "978-88-452-0220-3",
    "year": 2019,
    "price": 13.0,
    "stock": 6
  },
  {
    "id": "book-221",
    "title": "Superintelligenza: Tendenze, pericoli, strategie",
    "author": "Nick Bostrom",
    "category": "Saggistica",
    "isbn": "978-88-452-0221-2",
    "year": 2018,
    "price": 22.0,
    "stock": 2
  },
  {
    "id": "book-222",
    "title": "L'illusione del denaro e della finanza",
    "author": "Irving Fisher",
    "category": "Saggistica",
    "isbn": "978-88-452-0222-1",
    "year": 2021,
    "price": 14.0,
    "stock": 10
  },
  {
    "id": "book-223",
    "title": "Principi: Il successo nella vita e nel lavoro",
    "author": "Ray Dalio",
    "category": "Saggistica",
    "isbn": "978-88-452-0223-7",
    "year": 2018,
    "price": 28.0,
    "stock": 6
  },
  {
    "id": "book-224",
    "title": "I principi per affrontare il nuovo ordine mondiale",
    "author": "Ray Dalio",
    "category": "Saggistica",
    "isbn": "978-88-452-0224-5",
    "year": 2022,
    "price": 29.0,
    "stock": 15
  },
  {
    "id": "book-225",
    "title": "Le leggi fondamentali della stupidità umana",
    "author": "Carlo M. Cipolla",
    "category": "Saggistica",
    "isbn": "978-88-452-0225-2",
    "year": 2015,
    "price": 9.0,
    "stock": 1
  },
  {
    "id": "book-226",
    "title": "Allegro ma non troppo con le leggi della stupidità",
    "author": "Carlo M. Cipolla",
    "category": "Saggistica",
    "isbn": "978-88-452-0226-9",
    "year": 2016,
    "price": 10.5,
    "stock": 2
  },
  {
    "id": "book-227",
    "title": "Perché le nazioni falliscono",
    "author": "Daron Acemoglu, James A. Robinson",
    "category": "Saggistica",
    "isbn": "978-88-452-0227-4",
    "year": 2020,
    "price": 19.5,
    "stock": 0
  },
  {
    "id": "book-228",
    "title": "La stretta strettoia: Libertà e destino delle nazioni",
    "author": "Daron Acemoglu, James A. Robinson",
    "category": "Saggistica",
    "isbn": "978-88-452-0228-6",
    "year": 2021,
    "price": 22.0,
    "stock": 9
  },
  {
    "id": "book-229",
    "title": "Il capitale nel XXI secolo",
    "author": "Thomas Piketty",
    "category": "Saggistica",
    "isbn": "978-88-452-0229-1",
    "year": 2014,
    "price": 25.0,
    "stock": 6
  },
  {
    "id": "book-230",
    "title": "Capitale e ideologia",
    "author": "Thomas Piketty",
    "category": "Saggistica",
    "isbn": "978-88-452-0230-3",
    "year": 2020,
    "price": 26.0,
    "stock": 13
  },
  {
    "id": "book-231",
    "title": "La società signorile di massa",
    "author": "Luca Ricolfi",
    "category": "Saggistica",
    "isbn": "978-88-452-0231-9",
    "year": 2019,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-232",
    "title": "La mutazione: Come la sinistra è diventata élite",
    "author": "Luca Ricolfi",
    "category": "Saggistica",
    "isbn": "978-88-452-0232-9",
    "year": 2021,
    "price": 15.0,
    "stock": 15
  },
  {
    "id": "book-233",
    "title": "Chi ha spostato il mio formaggio?",
    "author": "Spencer Johnson",
    "category": "Saggistica",
    "isbn": "978-88-452-0233-8",
    "year": 2016,
    "price": 10.0,
    "stock": 8
  },
  {
    "id": "book-234",
    "title": "L'arte della vittoria: Autobiografia patron Nike",
    "author": "Phil Knight",
    "category": "Saggistica",
    "isbn": "978-88-452-0234-1",
    "year": 2018,
    "price": 16.0,
    "stock": 8
  },
  {
    "id": "book-235",
    "title": "L'ordine mondiale",
    "author": "Henry Kissinger",
    "category": "Saggistica",
    "isbn": "978-88-452-0235-0",
    "year": 2015,
    "price": 17.0,
    "stock": 8
  },
  {
    "id": "book-236",
    "title": "Diplomazia: La politica estera nella storia",
    "author": "Henry Kissinger",
    "category": "Saggistica",
    "isbn": "978-88-452-0236-1",
    "year": 2019,
    "price": 24.0,
    "stock": 10
  },
  {
    "id": "book-237",
    "title": "Leadership: Sei lezioni di strategia globale",
    "author": "Henry Kissinger",
    "category": "Saggistica",
    "isbn": "978-88-452-0237-7",
    "year": 2022,
    "price": 22.0,
    "stock": 2
  },
  {
    "id": "book-238",
    "title": "Vita 3.0: Essere umani nell'era dell'IA",
    "author": "Max Tegmark",
    "category": "Saggistica",
    "isbn": "978-88-452-0238-2",
    "year": 2018,
    "price": 19.0,
    "stock": 9
  },
  {
    "id": "book-239",
    "title": "Il capitalismo della sorveglianza",
    "author": "Shoshana Zuboff",
    "category": "Saggistica",
    "isbn": "978-88-452-0239-4",
    "year": 2019,
    "price": 25.0,
    "stock": 13
  },
  {
    "id": "book-240",
    "title": "Le origini del totalitarismo",
    "author": "Hannah Arendt",
    "category": "Saggistica",
    "isbn": "978-88-452-0240-7",
    "year": 2018,
    "price": 18.0,
    "stock": 11
  },
  {
    "id": "book-241",
    "title": "La banalità del male: Eichmann a Gerusalemme",
    "author": "Hannah Arendt",
    "category": "Saggistica",
    "isbn": "978-88-452-0241-9",
    "year": 2019,
    "price": 12.5,
    "stock": 14
  },
  {
    "id": "book-242",
    "title": "Sorvegliare e punire: Nascita della prigione",
    "author": "Michel Foucault",
    "category": "Saggistica",
    "isbn": "978-88-452-0242-1",
    "year": 2017,
    "price": 14.0,
    "stock": 6
  },
  {
    "id": "book-243",
    "title": "Modernità liquida",
    "author": "Zygmunt Bauman",
    "category": "Saggistica",
    "isbn": "978-88-452-0243-3",
    "year": 2016,
    "price": 13.0,
    "stock": 10
  },
  {
    "id": "book-244",
    "title": "Amore liquido: Sulla fragilità dei legami affettivi",
    "author": "Zygmunt Bauman",
    "category": "Saggistica",
    "isbn": "978-88-452-0244-9",
    "year": 2017,
    "price": 12.5,
    "stock": 12
  },
  {
    "id": "book-245",
    "title": "La società della stanchezza",
    "author": "Byung-Chul Han",
    "category": "Saggistica",
    "isbn": "978-88-452-0245-0",
    "year": 2020,
    "price": 10.0,
    "stock": 8
  },
  {
    "id": "book-246",
    "title": "Le non-cose: Come abbiamo smesso di vivere il reale",
    "author": "Byung-Chul Han",
    "category": "Saggistica",
    "isbn": "978-88-452-0246-2",
    "year": 2022,
    "price": 11.0,
    "stock": 8
  },
  {
    "id": "book-247",
    "title": "Psicopolitica: Il neoliberismo e le nuove tecnologie",
    "author": "Byung-Chul Han",
    "category": "Saggistica",
    "isbn": "978-88-452-0247-4",
    "year": 2021,
    "price": 10.5,
    "stock": 8
  },
  {
    "id": "book-248",
    "title": "L'ospite inquietante: Il nichilismo e i giovani",
    "author": "Umberto Galimberti",
    "category": "Saggistica",
    "isbn": "978-88-452-0248-4",
    "year": 2018,
    "price": 13.0,
    "stock": 12
  },
  {
    "id": "book-249",
    "title": "I miti del nostro tempo",
    "author": "Umberto Galimberti",
    "category": "Saggistica",
    "isbn": "978-88-452-0249-3",
    "year": 2017,
    "price": 14.0,
    "stock": 1
  },
  {
    "id": "book-250",
    "title": "Psiche e techne: L'uomo nell'età della tecnica",
    "author": "Umberto Galimberti",
    "category": "Saggistica",
    "isbn": "978-88-452-0250-7",
    "year": 2019,
    "price": 19.0,
    "stock": 2
  },
  {
    "id": "book-251",
    "title": "Il complesso di Telemaco: Genitori e figli",
    "author": "Massimo Recalcati",
    "category": "Saggistica",
    "isbn": "978-88-452-0251-7",
    "year": 2016,
    "price": 12.0,
    "stock": 6
  },
  {
    "id": "book-252",
    "title": "L'ora di lezione: Per un'erotica dell'insegnamento",
    "author": "Massimo Recalcati",
    "category": "Saggistica",
    "isbn": "978-88-452-0252-7",
    "year": 2017,
    "price": 11.5,
    "stock": 10
  },
  {
    "id": "book-253",
    "title": "I segreti di Roma",
    "author": "Corrado Augias",
    "category": "Saggistica",
    "isbn": "978-88-452-0253-4",
    "year": 2018,
    "price": 13.0,
    "stock": 4
  },
  {
    "id": "book-254",
    "title": "I segreti di Parigi",
    "author": "Corrado Augias",
    "category": "Saggistica",
    "isbn": "978-88-452-0254-3",
    "year": 2019,
    "price": 13.5,
    "stock": 14
  },
  {
    "id": "book-255",
    "title": "I segreti di Londra",
    "author": "Corrado Augias",
    "category": "Saggistica",
    "isbn": "978-88-452-0255-5",
    "year": 2018,
    "price": 13.0,
    "stock": 2
  },
  {
    "id": "book-256",
    "title": "Bella ciao: Gli anni della Resistenza",
    "author": "Alessandro Barbero",
    "category": "Saggistica",
    "isbn": "978-88-452-0256-5",
    "year": 2020,
    "price": 14.0,
    "stock": 11
  },
  {
    "id": "book-257",
    "title": "Carlo Magno: Un padre dell'Europa",
    "author": "Alessandro Barbero",
    "category": "Saggistica",
    "isbn": "978-88-452-0257-8",
    "year": 2018,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-258",
    "title": "Dante: La biografia definitiva",
    "author": "Alessandro Barbero",
    "category": "Saggistica",
    "isbn": "978-88-452-0258-7",
    "year": 2021,
    "price": 20.0,
    "stock": 14
  },
  {
    "id": "book-259",
    "title": "Caporetto: Anatomia di una disfatta",
    "author": "Alessandro Barbero",
    "category": "Saggistica",
    "isbn": "978-88-452-0259-3",
    "year": 2019,
    "price": 16.0,
    "stock": 7
  },
  {
    "id": "book-260",
    "title": "Il Principe",
    "author": "Niccolò Machiavelli",
    "category": "Saggistica",
    "isbn": "978-88-452-0260-5",
    "year": 2020,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-261",
    "title": "L'arte della guerra",
    "author": "Sun Tzu",
    "category": "Saggistica",
    "isbn": "978-88-452-0261-3",
    "year": 2019,
    "price": 8.0,
    "stock": 1
  },
  {
    "id": "book-262",
    "title": "Lettere a Lucilio",
    "author": "Lucio Anneo Seneca",
    "category": "Saggistica",
    "isbn": "978-88-452-0262-4",
    "year": 2018,
    "price": 13.0,
    "stock": 10
  },
  {
    "id": "book-263",
    "title": "La brevità della vita",
    "author": "Lucio Anneo Seneca",
    "category": "Saggistica",
    "isbn": "978-88-452-0263-8",
    "year": 2021,
    "price": 7.5,
    "stock": 15
  },
  {
    "id": "book-264",
    "title": "Pensieri (A se stesso)",
    "author": "Marco Aurelio",
    "category": "Saggistica",
    "isbn": "978-88-452-0264-3",
    "year": 2020,
    "price": 9.0,
    "stock": 1
  },
  {
    "id": "book-265",
    "title": "Manuale di Epitteto",
    "author": "Epitteto",
    "category": "Saggistica",
    "isbn": "978-88-452-0265-2",
    "year": 2019,
    "price": 7.5,
    "stock": 2
  },
  {
    "id": "book-266",
    "title": "L'arte di ottenere ragione",
    "author": "Arthur Schopenhauer",
    "category": "Saggistica",
    "isbn": "978-88-452-0266-8",
    "year": 2018,
    "price": 8.0,
    "stock": 14
  },
  {
    "id": "book-267",
    "title": "La ricchezza delle nazioni",
    "author": "Adam Smith",
    "category": "Saggistica",
    "isbn": "978-88-452-0267-0",
    "year": 2019,
    "price": 18.0,
    "stock": 1
  },
  {
    "id": "book-268",
    "title": "L'etica protestante e lo spirito del capitalismo",
    "author": "Max Weber",
    "category": "Saggistica",
    "isbn": "978-88-452-0268-2",
    "year": 2018,
    "price": 12.0,
    "stock": 2
  },
  {
    "id": "book-269",
    "title": "L'interpretazione dei sogni",
    "author": "Sigmund Freud",
    "category": "Saggistica",
    "isbn": "978-88-452-0269-7",
    "year": 2019,
    "price": 15.0,
    "stock": 15
  },
  {
    "id": "book-270",
    "title": "Il disagio della civiltà",
    "author": "Sigmund Freud",
    "category": "Saggistica",
    "isbn": "978-88-452-0270-9",
    "year": 2020,
    "price": 9.5,
    "stock": 1
  },
  {
    "id": "book-271",
    "title": "L'uomo e i suoi simboli",
    "author": "Carl Gustav Jung",
    "category": "Saggistica",
    "isbn": "978-88-452-0271-7",
    "year": 2018,
    "price": 16.0,
    "stock": 10
  },
  {
    "id": "book-272",
    "title": "Alla ricerca di un significato della vita",
    "author": "Viktor E. Frankl",
    "category": "Saggistica",
    "isbn": "978-88-452-0272-4",
    "year": 2019,
    "price": 11.0,
    "stock": 3
  },
  {
    "id": "book-273",
    "title": "L'arte di amare",
    "author": "Erich Fromm",
    "category": "Saggistica",
    "isbn": "978-88-452-0273-1",
    "year": 2018,
    "price": 10.5,
    "stock": 10
  },
  {
    "id": "book-274",
    "title": "Fuga dalla libertà",
    "author": "Erich Fromm",
    "category": "Saggistica",
    "isbn": "978-88-452-0274-7",
    "year": 2019,
    "price": 11.5,
    "stock": 9
  },
  {
    "id": "book-275",
    "title": "Le armi della persuasione: Come e perché si dice sì",
    "author": "Robert Cialdini",
    "category": "Saggistica",
    "isbn": "978-88-452-0275-2",
    "year": 2017,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-276",
    "title": "Pre-suasione: Creare le condizioni per il successo",
    "author": "Robert Cialdini",
    "category": "Saggistica",
    "isbn": "978-88-452-0276-1",
    "year": 2018,
    "price": 16.5,
    "stock": 2
  },
  {
    "id": "book-277",
    "title": "Come trattare gli altri e farseli amici",
    "author": "Dale Carnegie",
    "category": "Saggistica",
    "isbn": "978-88-452-0277-8",
    "year": 2019,
    "price": 12.0,
    "stock": 4
  },
  {
    "id": "book-278",
    "title": "Piccole abitudini per grandi cambiamenti (Atomic Habits)",
    "author": "James Clear",
    "category": "Saggistica",
    "isbn": "978-88-452-0278-9",
    "year": 2020,
    "price": 16.0,
    "stock": 12
  },
  {
    "id": "book-279",
    "title": "Il potere delle abitudini",
    "author": "Charles Duhigg",
    "category": "Saggistica",
    "isbn": "978-88-452-0279-8",
    "year": 2018,
    "price": 14.5,
    "stock": 6
  },
  {
    "id": "book-280",
    "title": "Intelligenza emotiva: Che cos'è e perché può renderci felici",
    "author": "Daniel Goleman",
    "category": "Saggistica",
    "isbn": "978-88-452-0280-4",
    "year": 2017,
    "price": 13.0,
    "stock": 10
  },
  {
    "id": "book-281",
    "title": "Focus: Istruzioni per mantenere viva l'attenzione",
    "author": "Daniel Goleman",
    "category": "Saggistica",
    "isbn": "978-88-452-0281-4",
    "year": 2018,
    "price": 13.5,
    "stock": 9
  },
  {
    "id": "book-282",
    "title": "Flow: La psicologia dell'esperienza ottimale",
    "author": "Mihaly Csikszentmihalyi",
    "category": "Saggistica",
    "isbn": "978-88-452-0282-9",
    "year": 2019,
    "price": 14.0,
    "stock": 3
  },
  {
    "id": "book-283",
    "title": "Mindset: Cambiare forma mentis per raggiungere il successo",
    "author": "Carol S. Dweck",
    "category": "Saggistica",
    "isbn": "978-88-452-0283-3",
    "year": 2018,
    "price": 14.0,
    "stock": 4
  },
  {
    "id": "book-284",
    "title": "Steve Jobs: La biografia autorizzata",
    "author": "Walter Isaacson",
    "category": "Saggistica",
    "isbn": "978-88-452-0284-1",
    "year": 2018,
    "price": 18.0,
    "stock": 2
  },
  {
    "id": "book-285",
    "title": "Leonardo da Vinci: La biografia",
    "author": "Walter Isaacson",
    "category": "Saggistica",
    "isbn": "978-88-452-0285-8",
    "year": 2019,
    "price": 22.0,
    "stock": 1
  },
  {
    "id": "book-286",
    "title": "Elon Musk: La biografia",
    "author": "Walter Isaacson",
    "category": "Saggistica",
    "isbn": "978-88-452-0286-6",
    "year": 2023,
    "price": 24.0,
    "stock": 1
  },
  {
    "id": "book-287",
    "title": "Einstein: La sua vita, il suo universo",
    "author": "Walter Isaacson",
    "category": "Saggistica",
    "isbn": "978-88-452-0287-7",
    "year": 2018,
    "price": 19.0,
    "stock": 12
  },
  {
    "id": "book-288",
    "title": "4 ore alla settimana: Ricchi e liberi subito",
    "author": "Timothy Ferriss",
    "category": "Saggistica",
    "isbn": "978-88-452-0288-4",
    "year": 2017,
    "price": 15.0,
    "stock": 6
  },
  {
    "id": "book-289",
    "title": "Parti con il perché: Come i grandi leader ispirano",
    "author": "Simon Sinek",
    "category": "Saggistica",
    "isbn": "978-88-452-0289-7",
    "year": 2018,
    "price": 14.0,
    "stock": 1
  },
  {
    "id": "book-290",
    "title": "I leader mangiano per ultimi",
    "author": "Simon Sinek",
    "category": "Saggistica",
    "isbn": "978-88-452-0290-4",
    "year": 2019,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-291",
    "title": "Deep Work: Concentrarsi al massimo in un mondo distratto",
    "author": "Cal Newport",
    "category": "Saggistica",
    "isbn": "978-88-452-0291-9",
    "year": 2019,
    "price": 15.0,
    "stock": 13
  },
  {
    "id": "book-292",
    "title": "Minimalismo digitale: Difendersi dalla tecnologia",
    "author": "Cal Newport",
    "category": "Saggistica",
    "isbn": "978-88-452-0292-6",
    "year": 2020,
    "price": 14.5,
    "stock": 1
  },
  {
    "id": "book-293",
    "title": "L'efficacia del manager: Come prendere decisioni giuste",
    "author": "Peter F. Drucker",
    "category": "Saggistica",
    "isbn": "978-88-452-0293-2",
    "year": 2018,
    "price": 17.0,
    "stock": 1
  },
  {
    "id": "book-294",
    "title": "Geopolitica umana: Capire il mondo attraverso i popoli",
    "author": "Dario Fabbri",
    "category": "Saggistica",
    "isbn": "978-88-452-0294-1",
    "year": 2022,
    "price": 17.5,
    "stock": 5
  },
  {
    "id": "book-295",
    "title": "Sotto la pelle del mondo: Perché le nazioni agiscono",
    "author": "Dario Fabbri",
    "category": "Saggistica",
    "isbn": "978-88-452-0295-4",
    "year": 2023,
    "price": 18.0,
    "stock": 0
  },
  {
    "id": "book-296",
    "title": "La notte della sinistra: Da dove ripartire",
    "author": "Federico Rampini",
    "category": "Saggistica",
    "isbn": "978-88-452-0296-4",
    "year": 2019,
    "price": 14.0,
    "stock": 12
  },
  {
    "id": "book-297",
    "title": "Il secolo dell'Asia e il destino dell'Occidente",
    "author": "Federico Rampini",
    "category": "Saggistica",
    "isbn": "978-88-452-0297-4",
    "year": 2021,
    "price": 16.0,
    "stock": 10
  },
  {
    "id": "book-298",
    "title": "Le linee rosse: Uomini, confini e imperi",
    "author": "Federico Rampini",
    "category": "Saggistica",
    "isbn": "978-88-452-0298-8",
    "year": 2018,
    "price": 15.0,
    "stock": 7
  },
  {
    "id": "book-299",
    "title": "Gomorra: Viaggio nell'impero economico e nel sogno di dominio",
    "author": "Roberto Saviano",
    "category": "Saggistica",
    "isbn": "978-88-452-0299-1",
    "year": 2018,
    "price": 13.5,
    "stock": 2
  },
  {
    "id": "book-300",
    "title": "ZeroZeroZero: Come la cocaina governa il mondo",
    "author": "Roberto Saviano",
    "category": "Saggistica",
    "isbn": "978-88-452-0300-5",
    "year": 2019,
    "price": 15.0,
    "stock": 9
  },
  {
    "id": "book-301",
    "title": "1984",
    "author": "George Orwell",
    "category": "Classici",
    "isbn": "978-88-07-0301-1",
    "year": 2021,
    "price": 12.5,
    "stock": 3
  },
  {
    "id": "book-302",
    "title": "La fattoria degli animali",
    "author": "George Orwell",
    "category": "Classici",
    "isbn": "978-88-07-0302-9",
    "year": 2021,
    "price": 10.0,
    "stock": 13
  },
  {
    "id": "book-303",
    "title": "Il fu Mattia Pascal",
    "author": "Luigi Pirandello",
    "category": "Classici",
    "isbn": "978-88-07-0303-4",
    "year": 2020,
    "price": 9.5,
    "stock": 3
  },
  {
    "id": "book-304",
    "title": "I promessi sposi",
    "author": "Alessandro Manzoni",
    "category": "Classici",
    "isbn": "978-88-07-0304-2",
    "year": 2019,
    "price": 13.0,
    "stock": 15
  },
  {
    "id": "book-305",
    "title": "La Divina Commedia: Inferno",
    "author": "Dante Alighieri",
    "category": "Classici",
    "isbn": "978-88-07-0305-7",
    "year": 2021,
    "price": 11.0,
    "stock": 13
  },
  {
    "id": "book-306",
    "title": "La Divina Commedia: Purgatorio",
    "author": "Dante Alighieri",
    "category": "Classici",
    "isbn": "978-88-07-0306-9",
    "year": 2021,
    "price": 11.0,
    "stock": 5
  },
  {
    "id": "book-307",
    "title": "La Divina Commedia: Paradiso",
    "author": "Dante Alighieri",
    "category": "Classici",
    "isbn": "978-88-07-0307-1",
    "year": 2021,
    "price": 11.0,
    "stock": 2
  },
  {
    "id": "book-308",
    "title": "Vita Nuova",
    "author": "Dante Alighieri",
    "category": "Classici",
    "isbn": "978-88-07-0308-5",
    "year": 2020,
    "price": 9.0,
    "stock": 9
  },
  {
    "id": "book-309",
    "title": "Canzoniere (Rerum vulgarium fragmenta)",
    "author": "Francesco Petrarca",
    "category": "Classici",
    "isbn": "978-88-07-0309-2",
    "year": 2019,
    "price": 13.5,
    "stock": 4
  },
  {
    "id": "book-310",
    "title": "Decameron",
    "author": "Giovanni Boccaccio",
    "category": "Classici",
    "isbn": "978-88-07-0310-7",
    "year": 2018,
    "price": 16.0,
    "stock": 14
  },
  {
    "id": "book-311",
    "title": "Orlando furioso",
    "author": "Ludovico Ariosto",
    "category": "Classici",
    "isbn": "978-88-07-0311-8",
    "year": 2019,
    "price": 18.0,
    "stock": 9
  },
  {
    "id": "book-312",
    "title": "Gerusalemme liberata",
    "author": "Torquato Tasso",
    "category": "Classici",
    "isbn": "978-88-07-0312-1",
    "year": 2018,
    "price": 15.0,
    "stock": 0
  },
  {
    "id": "book-313",
    "title": "Canti",
    "author": "Giacomo Leopardi",
    "category": "Classici",
    "isbn": "978-88-07-0313-1",
    "year": 2020,
    "price": 10.5,
    "stock": 1
  },
  {
    "id": "book-314",
    "title": "Operette morali",
    "author": "Giacomo Leopardi",
    "category": "Classici",
    "isbn": "978-88-07-0314-8",
    "year": 2019,
    "price": 9.5,
    "stock": 9
  },
  {
    "id": "book-315",
    "title": "Zibaldone di pensieri",
    "author": "Giacomo Leopardi",
    "category": "Classici",
    "isbn": "978-88-07-0315-8",
    "year": 2018,
    "price": 22.0,
    "stock": 3
  },
  {
    "id": "book-316",
    "title": "Ultime lettere di Jacopo Ortis",
    "author": "Ugo Foscolo",
    "category": "Classici",
    "isbn": "978-88-07-0316-3",
    "year": 2020,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-317",
    "title": "Dei Sepolcri",
    "author": "Ugo Foscolo",
    "category": "Classici",
    "isbn": "978-88-07-0317-7",
    "year": 2019,
    "price": 7.5,
    "stock": 12
  },
  {
    "id": "book-318",
    "title": "I Malavoglia",
    "author": "Giovanni Verga",
    "category": "Classici",
    "isbn": "978-88-07-0318-0",
    "year": 2020,
    "price": 9.5,
    "stock": 15
  },
  {
    "id": "book-319",
    "title": "Mastro-don Gesualdo",
    "author": "Giovanni Verga",
    "category": "Classici",
    "isbn": "978-88-07-0319-2",
    "year": 2019,
    "price": 10.0,
    "stock": 11
  },
  {
    "id": "book-320",
    "title": "Novelle rusticane",
    "author": "Giovanni Verga",
    "category": "Classici",
    "isbn": "978-88-07-0320-7",
    "year": 2018,
    "price": 8.5,
    "stock": 10
  },
  {
    "id": "book-321",
    "title": "Le avventure di Pinocchio",
    "author": "Carlo Collodi",
    "category": "Classici",
    "isbn": "978-88-07-0321-2",
    "year": 2021,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-322",
    "title": "Cuore",
    "author": "Edmondo De Amicis",
    "category": "Classici",
    "isbn": "978-88-07-0322-8",
    "year": 2019,
    "price": 9.0,
    "stock": 1
  },
  {
    "id": "book-323",
    "title": "Il piacere",
    "author": "Gabriele D'Annunzio",
    "category": "Classici",
    "isbn": "978-88-07-0323-1",
    "year": 2020,
    "price": 10.5,
    "stock": 6
  },
  {
    "id": "book-324",
    "title": "L'innocente",
    "author": "Gabriele D'Annunzio",
    "category": "Classici",
    "isbn": "978-88-07-0324-2",
    "year": 2019,
    "price": 10.0,
    "stock": 4
  },
  {
    "id": "book-325",
    "title": "Senilità",
    "author": "Italo Svevo",
    "category": "Classici",
    "isbn": "978-88-07-0325-4",
    "year": 2020,
    "price": 9.5,
    "stock": 14
  },
  {
    "id": "book-326",
    "title": "Una vita",
    "author": "Italo Svevo",
    "category": "Classici",
    "isbn": "978-88-07-0326-6",
    "year": 2019,
    "price": 9.0,
    "stock": 7
  },
  {
    "id": "book-327",
    "title": "L'iliade",
    "author": "Omero",
    "category": "Classici",
    "isbn": "978-88-07-0327-3",
    "year": 2020,
    "price": 12.0,
    "stock": 1
  },
  {
    "id": "book-328",
    "title": "L'odissea",
    "author": "Omero",
    "category": "Classici",
    "isbn": "978-88-07-0328-6",
    "year": 2020,
    "price": 12.0,
    "stock": 5
  },
  {
    "id": "book-329",
    "title": "Eneide",
    "author": "Publio Virgilio Marone",
    "category": "Classici",
    "isbn": "978-88-07-0329-1",
    "year": 2019,
    "price": 13.0,
    "stock": 1
  },
  {
    "id": "book-330",
    "title": "Metamorfosi",
    "author": "Publio Ovidio Nasone",
    "category": "Classici",
    "isbn": "978-88-07-0330-6",
    "year": 2020,
    "price": 14.5,
    "stock": 15
  },
  {
    "id": "book-331",
    "title": "Edipo re",
    "author": "Sofocle",
    "category": "Classici",
    "isbn": "978-88-07-0331-8",
    "year": 2019,
    "price": 8.0,
    "stock": 1
  },
  {
    "id": "book-332",
    "title": "Antigone",
    "author": "Sofocle",
    "category": "Classici",
    "isbn": "978-88-07-0332-4",
    "year": 2019,
    "price": 8.0,
    "stock": 3
  },
  {
    "id": "book-333",
    "title": "La Repubblica",
    "author": "Platone",
    "category": "Classici",
    "isbn": "978-88-07-0333-9",
    "year": 2020,
    "price": 15.0,
    "stock": 12
  },
  {
    "id": "book-334",
    "title": "Simposio",
    "author": "Platone",
    "category": "Classici",
    "isbn": "978-88-07-0334-2",
    "year": 2021,
    "price": 8.5,
    "stock": 10
  },
  {
    "id": "book-335",
    "title": "Apologia di Socrate",
    "author": "Platone",
    "category": "Classici",
    "isbn": "978-88-07-0335-5",
    "year": 2020,
    "price": 8.0,
    "stock": 10
  },
  {
    "id": "book-336",
    "title": "Fedro",
    "author": "Platone",
    "category": "Classici",
    "isbn": "978-88-07-0336-8",
    "year": 2019,
    "price": 9.0,
    "stock": 15
  },
  {
    "id": "book-337",
    "title": "Etica Nicomachea",
    "author": "Aristotele",
    "category": "Classici",
    "isbn": "978-88-07-0337-3",
    "year": 2020,
    "price": 13.5,
    "stock": 8
  },
  {
    "id": "book-338",
    "title": "Poetica",
    "author": "Aristotele",
    "category": "Classici",
    "isbn": "978-88-07-0338-9",
    "year": 2019,
    "price": 8.5,
    "stock": 6
  },
  {
    "id": "book-339",
    "title": "Amleto",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0339-6",
    "year": 2021,
    "price": 9.5,
    "stock": 2
  },
  {
    "id": "book-340",
    "title": "Romeo e Giulietta",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0340-7",
    "year": 2021,
    "price": 9.0,
    "stock": 0
  },
  {
    "id": "book-341",
    "title": "Macbeth",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0341-6",
    "year": 2020,
    "price": 9.0,
    "stock": 15
  },
  {
    "id": "book-342",
    "title": "Otello",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0342-2",
    "year": 2020,
    "price": 9.0,
    "stock": 13
  },
  {
    "id": "book-343",
    "title": "Re Lear",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0343-2",
    "year": 2019,
    "price": 9.5,
    "stock": 3
  },
  {
    "id": "book-344",
    "title": "La tempesta",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0344-5",
    "year": 2020,
    "price": 9.0,
    "stock": 12
  },
  {
    "id": "book-345",
    "title": "Sogno di una notte di mezza estate",
    "author": "William Shakespeare",
    "category": "Classici",
    "isbn": "978-88-07-0345-1",
    "year": 2021,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-346",
    "title": "Don Chisciotte della Mancia",
    "author": "Miguel de Cervantes",
    "category": "Classici",
    "isbn": "978-88-07-0346-0",
    "year": 2019,
    "price": 16.0,
    "stock": 1
  },
  {
    "id": "book-347",
    "title": "Il misantropo",
    "author": "Molière",
    "category": "Classici",
    "isbn": "978-88-07-0347-2",
    "year": 2019,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-348",
    "title": "Il malato immaginario",
    "author": "Molière",
    "category": "Classici",
    "isbn": "978-88-07-0348-5",
    "year": 2020,
    "price": 8.5,
    "stock": 2
  },
  {
    "id": "book-349",
    "title": "I dolori del giovane Werther",
    "author": "Johann Wolfgang von Goethe",
    "category": "Classici",
    "isbn": "978-88-07-0349-1",
    "year": 2020,
    "price": 9.5,
    "stock": 9
  },
  {
    "id": "book-350",
    "title": "Faust",
    "author": "Johann Wolfgang von Goethe",
    "category": "Classici",
    "isbn": "978-88-07-0350-8",
    "year": 2019,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-351",
    "title": "Orgoglio e pregiudizio",
    "author": "Jane Austen",
    "category": "Classici",
    "isbn": "978-88-07-0351-7",
    "year": 2021,
    "price": 11.0,
    "stock": 8
  },
  {
    "id": "book-352",
    "title": "Ragione e sentimento",
    "author": "Jane Austen",
    "category": "Classici",
    "isbn": "978-88-07-0352-9",
    "year": 2020,
    "price": 10.5,
    "stock": 1
  },
  {
    "id": "book-353",
    "title": "Emma",
    "author": "Jane Austen",
    "category": "Classici",
    "isbn": "978-88-07-0353-4",
    "year": 2021,
    "price": 11.5,
    "stock": 0
  },
  {
    "id": "book-354",
    "title": "Persuasione",
    "author": "Jane Austen",
    "category": "Classici",
    "isbn": "978-88-07-0354-1",
    "year": 2020,
    "price": 10.0,
    "stock": 14
  },
  {
    "id": "book-355",
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "category": "Classici",
    "isbn": "978-88-07-0355-1",
    "year": 2020,
    "price": 11.5,
    "stock": 4
  },
  {
    "id": "book-356",
    "title": "Cime tempestose",
    "author": "Emily Brontë",
    "category": "Classici",
    "isbn": "978-88-07-0356-4",
    "year": 2020,
    "price": 11.5,
    "stock": 14
  },
  {
    "id": "book-357",
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "category": "Classici",
    "isbn": "978-88-07-0357-5",
    "year": 2020,
    "price": 9.9,
    "stock": 3
  },
  {
    "id": "book-358",
    "title": "Canto di Natale",
    "author": "Charles Dickens",
    "category": "Classici",
    "isbn": "978-88-07-0358-5",
    "year": 2021,
    "price": 9.0,
    "stock": 2
  },
  {
    "id": "book-359",
    "title": "Oliver Twist",
    "author": "Charles Dickens",
    "category": "Classici",
    "isbn": "978-88-07-0359-3",
    "year": 2020,
    "price": 11.0,
    "stock": 5
  },
  {
    "id": "book-360",
    "title": "Grandi speranze",
    "author": "Charles Dickens",
    "category": "Classici",
    "isbn": "978-88-07-0360-2",
    "year": 2019,
    "price": 12.5,
    "stock": 12
  },
  {
    "id": "book-361",
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "category": "Classici",
    "isbn": "978-88-07-0361-9",
    "year": 2019,
    "price": 14.0,
    "stock": 1
  },
  {
    "id": "book-362",
    "title": "Una storia di due città",
    "author": "Charles Dickens",
    "category": "Classici",
    "isbn": "978-88-07-0362-3",
    "year": 2020,
    "price": 11.5,
    "stock": 12
  },
  {
    "id": "book-363",
    "title": "I miserabili",
    "author": "Victor Hugo",
    "category": "Classici",
    "isbn": "978-88-07-0363-2",
    "year": 2018,
    "price": 18.0,
    "stock": 12
  },
  {
    "id": "book-364",
    "title": "Notre-Dame de Paris",
    "author": "Victor Hugo",
    "category": "Classici",
    "isbn": "978-88-07-0364-4",
    "year": 2019,
    "price": 13.5,
    "stock": 13
  },
  {
    "id": "book-365",
    "title": "Il conte di Montecristo",
    "author": "Alexandre Dumas",
    "category": "Classici",
    "isbn": "978-88-07-0365-0",
    "year": 2019,
    "price": 17.5,
    "stock": 13
  },
  {
    "id": "book-366",
    "title": "I tre moschettieri",
    "author": "Alexandre Dumas",
    "category": "Classici",
    "isbn": "978-88-07-0366-4",
    "year": 2020,
    "price": 13.0,
    "stock": 10
  },
  {
    "id": "book-367",
    "title": "Madame Bovary",
    "author": "Gustave Flaubert",
    "category": "Classici",
    "isbn": "978-88-07-0367-1",
    "year": 2020,
    "price": 11.0,
    "stock": 5
  },
  {
    "id": "book-368",
    "title": "L'educazione sentimentale",
    "author": "Gustave Flaubert",
    "category": "Classici",
    "isbn": "978-88-07-0368-9",
    "year": 2019,
    "price": 12.5,
    "stock": 8
  },
  {
    "id": "book-369",
    "title": "Il rosso e il nero",
    "author": "Stendhal",
    "category": "Classici",
    "isbn": "978-88-07-0369-4",
    "year": 2019,
    "price": 12.0,
    "stock": 9
  },
  {
    "id": "book-370",
    "title": "La certosa di Parma",
    "author": "Stendhal",
    "category": "Classici",
    "isbn": "978-88-07-0370-3",
    "year": 2018,
    "price": 13.0,
    "stock": 7
  },
  {
    "id": "book-371",
    "title": "Papà Goriot",
    "author": "Honoré de Balzac",
    "category": "Classici",
    "isbn": "978-88-07-0371-1",
    "year": 2019,
    "price": 10.5,
    "stock": 10
  },
  {
    "id": "book-372",
    "title": "Guerra e pace",
    "author": "Lev Tolstoj",
    "category": "Classici",
    "isbn": "978-88-07-0372-5",
    "year": 2018,
    "price": 18.0,
    "stock": 12
  },
  {
    "id": "book-373",
    "title": "Anna Karenina",
    "author": "Lev Tolstoj",
    "category": "Classici",
    "isbn": "978-88-07-0373-4",
    "year": 2020,
    "price": 14.0,
    "stock": 14
  },
  {
    "id": "book-374",
    "title": "La morte di Ivan Il'ic",
    "author": "Lev Tolstoj",
    "category": "Classici",
    "isbn": "978-88-07-0374-6",
    "year": 2019,
    "price": 8.5,
    "stock": 0
  },
  {
    "id": "book-375",
    "title": "Delitto e castigo",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0375-0",
    "year": 2019,
    "price": 13.5,
    "stock": 2
  },
  {
    "id": "book-376",
    "title": "I fratelli Karamazov",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0376-7",
    "year": 2020,
    "price": 15.0,
    "stock": 14
  },
  {
    "id": "book-377",
    "title": "L'idiota",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0377-3",
    "year": 2019,
    "price": 13.5,
    "stock": 7
  },
  {
    "id": "book-378",
    "title": "I demoni",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0378-3",
    "year": 2018,
    "price": 15.0,
    "stock": 8
  },
  {
    "id": "book-379",
    "title": "Le notti bianche",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0379-4",
    "year": 2021,
    "price": 8.5,
    "stock": 12
  },
  {
    "id": "book-380",
    "title": "Memorie dal sottoscala",
    "author": "Fëdor Dostoevskij",
    "category": "Classici",
    "isbn": "978-88-07-0380-2",
    "year": 2020,
    "price": 9.0,
    "stock": 14
  },
  {
    "id": "book-381",
    "title": "Il giardino dei ciliegi",
    "author": "Anton Cechov",
    "category": "Classici",
    "isbn": "978-88-07-0381-0",
    "year": 2019,
    "price": 8.5,
    "stock": 13
  },
  {
    "id": "book-382",
    "title": "Zio Vanja",
    "author": "Anton Cechov",
    "category": "Classici",
    "isbn": "978-88-07-0382-0",
    "year": 2018,
    "price": 8.0,
    "stock": 10
  },
  {
    "id": "book-383",
    "title": "Le anime morte",
    "author": "Nikolaj Gogol'",
    "category": "Classici",
    "isbn": "978-88-07-0383-2",
    "year": 2019,
    "price": 12.0,
    "stock": 14
  },
  {
    "id": "book-384",
    "title": "Il cappotto e altri racconti",
    "author": "Nikolaj Gogol'",
    "category": "Classici",
    "isbn": "978-88-07-0384-5",
    "year": 2020,
    "price": 9.5,
    "stock": 2
  },
  {
    "id": "book-385",
    "title": "I racconti del terrore",
    "author": "Edgar Allan Poe",
    "category": "Classici",
    "isbn": "978-88-07-0385-3",
    "year": 2020,
    "price": 10.5,
    "stock": 1
  },
  {
    "id": "book-386",
    "title": "Moby Dick",
    "author": "Herman Melville",
    "category": "Classici",
    "isbn": "978-88-07-0386-8",
    "year": 2019,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-387",
    "title": "Bartleby lo scrivano",
    "author": "Herman Melville",
    "category": "Classici",
    "isbn": "978-88-07-0387-2",
    "year": 2021,
    "price": 7.5,
    "stock": 7
  },
  {
    "id": "book-388",
    "title": "La lettera scarlatta",
    "author": "Nathaniel Hawthorne",
    "category": "Classici",
    "isbn": "978-88-07-0388-4",
    "year": 2019,
    "price": 9.5,
    "stock": 10
  },
  {
    "id": "book-389",
    "title": "Le avventure di Tom Sawyer",
    "author": "Mark Twain",
    "category": "Classici",
    "isbn": "978-88-07-0389-1",
    "year": 2020,
    "price": 9.5,
    "stock": 8
  },
  {
    "id": "book-390",
    "title": "Le avventure di Huckleberry Finn",
    "author": "Mark Twain",
    "category": "Classici",
    "isbn": "978-88-07-0390-2",
    "year": 2020,
    "price": 10.0,
    "stock": 4
  },
  {
    "id": "book-391",
    "title": "Il ritratto di Dorian Gray",
    "author": "Oscar Wilde",
    "category": "Classici",
    "isbn": "978-88-07-0391-6",
    "year": 2021,
    "price": 10.0,
    "stock": 2
  },
  {
    "id": "book-392",
    "title": "L'importanza di chiamarsi Ernesto",
    "author": "Oscar Wilde",
    "category": "Classici",
    "isbn": "978-88-07-0392-8",
    "year": 2020,
    "price": 8.5,
    "stock": 15
  },
  {
    "id": "book-393",
    "title": "De Profundis",
    "author": "Oscar Wilde",
    "category": "Classici",
    "isbn": "978-88-07-0393-6",
    "year": 2019,
    "price": 8.5,
    "stock": 15
  },
  {
    "id": "book-394",
    "title": "Lo strano caso del dottor Jekyll e mister Hyde",
    "author": "Robert Louis Stevenson",
    "category": "Classici",
    "isbn": "978-88-07-0394-8",
    "year": 2019,
    "price": 8.5,
    "stock": 0
  },
  {
    "id": "book-395",
    "title": "L'isola del tesoro",
    "author": "Robert Louis Stevenson",
    "category": "Classici",
    "isbn": "978-88-07-0395-4",
    "year": 2020,
    "price": 9.5,
    "stock": 2
  },
  {
    "id": "book-396",
    "title": "Dracula",
    "author": "Bram Stoker",
    "category": "Classici",
    "isbn": "978-88-07-0396-5",
    "year": 2020,
    "price": 11.0,
    "stock": 13
  },
  {
    "id": "book-397",
    "title": "Uno studio in rosso (Sherlock Holmes)",
    "author": "Arthur Conan Doyle",
    "category": "Classici",
    "isbn": "978-88-07-0397-7",
    "year": 2021,
    "price": 8.5,
    "stock": 1
  },
  {
    "id": "book-398",
    "title": "Il mastino dei Baskerville",
    "author": "Arthur Conan Doyle",
    "category": "Classici",
    "isbn": "978-88-07-0398-8",
    "year": 2020,
    "price": 9.0,
    "stock": 0
  },
  {
    "id": "book-399",
    "title": "Ventimila leghe sotto i mari",
    "author": "Jules Verne",
    "category": "Classici",
    "isbn": "978-88-07-0399-3",
    "year": 2020,
    "price": 10.5,
    "stock": 12
  },
  {
    "id": "book-400",
    "title": "Il giro del mondo in 80 giorni",
    "author": "Jules Verne",
    "category": "Classici",
    "isbn": "978-88-07-0400-7",
    "year": 2021,
    "price": 9.5,
    "stock": 13
  },
  {
    "id": "book-401",
    "title": "L'ordine del tempo",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0401-6",
    "year": 2017,
    "price": 14.0,
    "stock": 7
  },
  {
    "id": "book-402",
    "title": "Sette brevi lezioni di fisica",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0402-0",
    "year": 2014,
    "price": 10.0,
    "stock": 1
  },
  {
    "id": "book-403",
    "title": "Helgoland",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0403-1",
    "year": 2020,
    "price": 15.0,
    "stock": 10
  },
  {
    "id": "book-404",
    "title": "La realtà non è come ci appare",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0404-6",
    "year": 2016,
    "price": 13.5,
    "stock": 1
  },
  {
    "id": "book-405",
    "title": "Buchi bianchi: Dentro l'orizzonte",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0405-8",
    "year": 2023,
    "price": 15.0,
    "stock": 13
  },
  {
    "id": "book-406",
    "title": "Anassimandro: L'inizio del pensiero scientifico",
    "author": "Carlo Rovelli",
    "category": "Scienza",
    "isbn": "978-88-459-0406-2",
    "year": 2019,
    "price": 12.0,
    "stock": 14
  },
  {
    "id": "book-407",
    "title": "Dal big bang ai buchi neri: Breve storia del tempo",
    "author": "Stephen Hawking",
    "category": "Scienza",
    "isbn": "978-88-459-0407-1",
    "year": 2018,
    "price": 13.0,
    "stock": 13
  },
  {
    "id": "book-408",
    "title": "L'universo in un guscio di noce",
    "author": "Stephen Hawking",
    "category": "Scienza",
    "isbn": "978-88-459-0408-6",
    "year": 2019,
    "price": 14.5,
    "stock": 12
  },
  {
    "id": "book-409",
    "title": "Il grande disegno: Nuove risposte alle domande della vita",
    "author": "Stephen Hawking, Leonard Mlodinow",
    "category": "Scienza",
    "isbn": "978-88-459-0409-0",
    "year": 2017,
    "price": 13.5,
    "stock": 7
  },
  {
    "id": "book-410",
    "title": "Le mie risposte alle grandi domande",
    "author": "Stephen Hawking",
    "category": "Scienza",
    "isbn": "978-88-459-0410-7",
    "year": 2018,
    "price": 14.0,
    "stock": 6
  },
  {
    "id": "book-411",
    "title": "La fisica di Feynman (Vol. 1: Meccanica, radiazione, calore)",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0411-5",
    "year": 2020,
    "price": 38.0,
    "stock": 6
  },
  {
    "id": "book-412",
    "title": "La fisica di Feynman (Vol. 2: Elettromagnetismo e materia)",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0412-8",
    "year": 2020,
    "price": 39.0,
    "stock": 2
  },
  {
    "id": "book-413",
    "title": "La fisica di Feynman (Vol. 3: Meccanica quantistica)",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0413-5",
    "year": 2021,
    "price": 40.0,
    "stock": 1
  },
  {
    "id": "book-414",
    "title": "Sei pezzi facili: Le basi della fisica",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0414-4",
    "year": 2019,
    "price": 11.0,
    "stock": 0
  },
  {
    "id": "book-415",
    "title": "Sei pezzi meno facili: Teoria della relatività e simmetrie",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0415-7",
    "year": 2020,
    "price": 11.5,
    "stock": 1
  },
  {
    "id": "book-416",
    "title": "Sta scherzando, Mr. Feynman! Vita di uno scienziato curioso",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0416-9",
    "year": 2018,
    "price": 13.0,
    "stock": 1
  },
  {
    "id": "book-417",
    "title": "Il senso delle cose",
    "author": "Richard P. Feynman",
    "category": "Scienza",
    "isbn": "978-88-459-0417-5",
    "year": 2019,
    "price": 10.5,
    "stock": 3
  },
  {
    "id": "book-418",
    "title": "Relatività: Esposizione divulgativa",
    "author": "Albert Einstein",
    "category": "Scienza",
    "isbn": "978-88-459-0418-9",
    "year": 2021,
    "price": 9.9,
    "stock": 5
  },
  {
    "id": "book-419",
    "title": "Come io vedo il mondo: La teoria dei quanti e la pace",
    "author": "Albert Einstein",
    "category": "Scienza",
    "isbn": "978-88-459-0419-8",
    "year": 2019,
    "price": 9.5,
    "stock": 15
  },
  {
    "id": "book-420",
    "title": "Il significato della relatività",
    "author": "Albert Einstein",
    "category": "Scienza",
    "isbn": "978-88-459-0420-3",
    "year": 2020,
    "price": 11.0,
    "stock": 6
  },
  {
    "id": "book-421",
    "title": "L'universo elegante: Superstringhe e dimensioni nascoste",
    "author": "Brian Greene",
    "category": "Scienza",
    "isbn": "978-88-459-0421-9",
    "year": 2015,
    "price": 15.5,
    "stock": 5
  },
  {
    "id": "book-422",
    "title": "La trama del cosmo: Spazio, tempo e natura della realtà",
    "author": "Brian Greene",
    "category": "Scienza",
    "isbn": "978-88-459-0422-2",
    "year": 2016,
    "price": 16.0,
    "stock": 0
  },
  {
    "id": "book-423",
    "title": "La realtà nascosta: I multiversi e le leggi del cosmo",
    "author": "Brian Greene",
    "category": "Scienza",
    "isbn": "978-88-459-0423-4",
    "year": 2018,
    "price": 16.5,
    "stock": 11
  },
  {
    "id": "book-424",
    "title": "Fino alla fine del tempo: Mente, materia e cosmo",
    "author": "Brian Greene",
    "category": "Scienza",
    "isbn": "978-88-459-0424-0",
    "year": 2020,
    "price": 18.0,
    "stock": 4
  },
  {
    "id": "book-425",
    "title": "Cosmos",
    "author": "Carl Sagan",
    "category": "Scienza",
    "isbn": "978-88-459-0425-3",
    "year": 2019,
    "price": 18.0,
    "stock": 2
  },
  {
    "id": "book-426",
    "title": "Il mondo infestato dai demoni: La scienza come candela nel buio",
    "author": "Carl Sagan",
    "category": "Scienza",
    "isbn": "978-88-459-0426-2",
    "year": 2018,
    "price": 15.0,
    "stock": 3
  },
  {
    "id": "book-427",
    "title": "I draghi dell'Eden: Speculazioni sull'intelligenza umana",
    "author": "Carl Sagan",
    "category": "Scienza",
    "isbn": "978-88-459-0427-6",
    "year": 2017,
    "price": 13.5,
    "stock": 5
  },
  {
    "id": "book-428",
    "title": "Pale Blue Dot: Un punto blu nel cosmo",
    "author": "Carl Sagan",
    "category": "Scienza",
    "isbn": "978-88-459-0428-1",
    "year": 2020,
    "price": 16.0,
    "stock": 14
  },
  {
    "id": "book-429",
    "title": "Passeggiate nel cosmo: Guida per viaggiatori dello spazio",
    "author": "Neil deGrasse Tyson",
    "category": "Scienza",
    "isbn": "978-88-459-0429-5",
    "year": 2018,
    "price": 14.0,
    "stock": 15
  },
  {
    "id": "book-430",
    "title": "Astrofisica per chi va di fretta",
    "author": "Neil deGrasse Tyson",
    "category": "Scienza",
    "isbn": "978-88-459-0430-7",
    "year": 2017,
    "price": 12.0,
    "stock": 4
  },
  {
    "id": "book-431",
    "title": "Origini: 14 miliardi di anni di evoluzione cosmica",
    "author": "Neil deGrasse Tyson, Donald Goldsmith",
    "category": "Scienza",
    "isbn": "978-88-459-0431-0",
    "year": 2019,
    "price": 15.0,
    "stock": 12
  },
  {
    "id": "book-432",
    "title": "Messaggero cosmico: Prospettive scientifiche sulla civiltà",
    "author": "Neil deGrasse Tyson",
    "category": "Scienza",
    "isbn": "978-88-459-0432-8",
    "year": 2022,
    "price": 17.0,
    "stock": 13
  },
  {
    "id": "book-433",
    "title": "Il gene egoista",
    "author": "Richard Dawkins",
    "category": "Scienza",
    "isbn": "978-88-459-0433-0",
    "year": 2017,
    "price": 16.0,
    "stock": 1
  },
  {
    "id": "book-434",
    "title": "L'orologiaio cieco: Perché le prove dell'evoluzione rivelano un universo senza scopo",
    "author": "Richard Dawkins",
    "category": "Scienza",
    "isbn": "978-88-459-0434-7",
    "year": 2018,
    "price": 15.0,
    "stock": 0
  },
  {
    "id": "book-435",
    "title": "Il più grande spettacolo della terra: Le prove dell'evoluzione",
    "author": "Richard Dawkins",
    "category": "Scienza",
    "isbn": "978-88-459-0435-1",
    "year": 2019,
    "price": 16.5,
    "stock": 9
  },
  {
    "id": "book-436",
    "title": "L'illusione di Dio: Le ragioni contro la fede",
    "author": "Richard Dawkins",
    "category": "Scienza",
    "isbn": "978-88-459-0436-1",
    "year": 2017,
    "price": 14.0,
    "stock": 10
  },
  {
    "id": "book-437",
    "title": "L'origine delle specie",
    "author": "Charles Darwin",
    "category": "Scienza",
    "isbn": "978-88-459-0437-9",
    "year": 2019,
    "price": 13.0,
    "stock": 8
  },
  {
    "id": "book-438",
    "title": "L'origine dell'uomo e la selezione sessuale",
    "author": "Charles Darwin",
    "category": "Scienza",
    "isbn": "978-88-459-0438-4",
    "year": 2018,
    "price": 14.5,
    "stock": 1
  },
  {
    "id": "book-439",
    "title": "Viaggio di un naturalista intorno al mondo",
    "author": "Charles Darwin",
    "category": "Scienza",
    "isbn": "978-88-459-0439-8",
    "year": 2020,
    "price": 15.0,
    "stock": 2
  },
  {
    "id": "book-440",
    "title": "Che cos'è la vita? La cellula vivente dal punto di vista fisico",
    "author": "Erwin Schrödinger",
    "category": "Scienza",
    "isbn": "978-88-459-0440-9",
    "year": 2019,
    "price": 10.5,
    "stock": 9
  },
  {
    "id": "book-441",
    "title": "Fisica e filosofia: La rivoluzione nella scienza moderna",
    "author": "Werner Heisenberg",
    "category": "Scienza",
    "isbn": "978-88-459-0441-8",
    "year": 2018,
    "price": 12.0,
    "stock": 10
  },
  {
    "id": "book-442",
    "title": "Mutamenti nelle basi della scienza",
    "author": "Werner Heisenberg",
    "category": "Scienza",
    "isbn": "978-88-459-0442-1",
    "year": 2019,
    "price": 11.5,
    "stock": 4
  },
  {
    "id": "book-443",
    "title": "La mente nuova dell'imperatore: Computer, menti e leggi della fisica",
    "author": "Roger Penrose",
    "category": "Scienza",
    "isbn": "978-88-459-0443-8",
    "year": 2018,
    "price": 19.0,
    "stock": 1
  },
  {
    "id": "book-444",
    "title": "Ombre della mente: Alla ricerca della coscienza",
    "author": "Roger Penrose",
    "category": "Scienza",
    "isbn": "978-88-459-0444-6",
    "year": 2019,
    "price": 21.0,
    "stock": 6
  },
  {
    "id": "book-445",
    "title": "Dal Big Bang all'eternità: I cicli cosmici del tempo",
    "author": "Roger Penrose",
    "category": "Scienza",
    "isbn": "978-88-459-0445-6",
    "year": 2017,
    "price": 16.5,
    "stock": 6
  },
  {
    "id": "book-446",
    "title": "Fisica del futuro: Come la scienza cambierà il nostro destino",
    "author": "Michio Kaku",
    "category": "Scienza",
    "isbn": "978-88-459-0446-6",
    "year": 2017,
    "price": 14.0,
    "stock": 10
  },
  {
    "id": "book-447",
    "title": "Il futuro della mente: Viaggio nelle neuroscienze e nell'IA",
    "author": "Michio Kaku",
    "category": "Scienza",
    "isbn": "978-88-459-0447-5",
    "year": 2018,
    "price": 15.0,
    "stock": 4
  },
  {
    "id": "book-448",
    "title": "Iperspazio: Verso la teoria del tutto",
    "author": "Michio Kaku",
    "category": "Scienza",
    "isbn": "978-88-459-0448-4",
    "year": 2019,
    "price": 14.5,
    "stock": 13
  },
  {
    "id": "book-449",
    "title": "Mondi paralleli: Un viaggio cosmico",
    "author": "Michio Kaku",
    "category": "Scienza",
    "isbn": "978-88-459-0449-7",
    "year": 2018,
    "price": 14.0,
    "stock": 5
  },
  {
    "id": "book-450",
    "title": "Buchi neri e salti temporali: L'eredità di Einstein",
    "author": "Kip S. Thorne",
    "category": "Scienza",
    "isbn": "978-88-459-0450-1",
    "year": 2017,
    "price": 18.0,
    "stock": 0
  },
  {
    "id": "book-451",
    "title": "La scienza di Interstellar",
    "author": "Kip S. Thorne",
    "category": "Scienza",
    "isbn": "978-88-459-0451-5",
    "year": 2018,
    "price": 19.5,
    "stock": 1
  },
  {
    "id": "book-452",
    "title": "Il quadro d'insieme: Origini della vita, significato e universo",
    "author": "Sean Carroll",
    "category": "Scienza",
    "isbn": "978-88-459-0452-0",
    "year": 2018,
    "price": 18.0,
    "stock": 11
  },
  {
    "id": "book-453",
    "title": "Qualcosa di nascosto: Meccanica quantistica e mondi paralleli",
    "author": "Sean Carroll",
    "category": "Scienza",
    "isbn": "978-88-459-0453-8",
    "year": 2020,
    "price": 17.5,
    "stock": 1
  },
  {
    "id": "book-454",
    "title": "Spazio, tempo e moto: Le idee che governano il cosmo",
    "author": "Sean Carroll",
    "category": "Scienza",
    "isbn": "978-88-459-0454-6",
    "year": 2022,
    "price": 18.5,
    "stock": 4
  },
  {
    "id": "book-455",
    "title": "L'universo matematico: La mia ricerca della natura ultima della realtà",
    "author": "Max Tegmark",
    "category": "Scienza",
    "isbn": "978-88-459-0455-6",
    "year": 2018,
    "price": 17.0,
    "stock": 13
  },
  {
    "id": "book-456",
    "title": "L'inizio dell'infinito: Spiegazioni che trasformano il mondo",
    "author": "David Deutsch",
    "category": "Scienza",
    "isbn": "978-88-459-0456-0",
    "year": 2017,
    "price": 18.5,
    "stock": 2
  },
  {
    "id": "book-457",
    "title": "La trama della realtà: Fisica quantistica, computazione ed evoluzione",
    "author": "David Deutsch",
    "category": "Scienza",
    "isbn": "978-88-459-0457-4",
    "year": 2018,
    "price": 17.5,
    "stock": 12
  },
  {
    "id": "book-458",
    "title": "La vita segreta degli alberi: Cosa provano, come comunicano",
    "author": "Peter Wohlleben",
    "category": "Scienza",
    "isbn": "978-88-459-0458-8",
    "year": 2016,
    "price": 14.0,
    "stock": 12
  },
  {
    "id": "book-459",
    "title": "La saggezza degli alberi: Segreti dell'equilibrio naturale",
    "author": "Peter Wohlleben",
    "category": "Scienza",
    "isbn": "978-88-459-0459-7",
    "year": 2018,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-460",
    "title": "La rete segreta della natura: Il legame tra piante e animali",
    "author": "Peter Wohlleben",
    "category": "Scienza",
    "isbn": "978-88-459-0460-5",
    "year": 2019,
    "price": 14.5,
    "stock": 4
  },
  {
    "id": "book-461",
    "title": "La pianta del mondo: Come i vegetali governano la Terra",
    "author": "Stefano Mancuso",
    "category": "Scienza",
    "isbn": "978-88-459-0461-1",
    "year": 2020,
    "price": 16.0,
    "stock": 8
  },
  {
    "id": "book-462",
    "title": "Verde brillante: Sensibilità e intelligenza del mondo vegetale",
    "author": "Stefano Mancuso, Alessandra Viola",
    "category": "Scienza",
    "isbn": "978-88-459-0462-3",
    "year": 2017,
    "price": 12.0,
    "stock": 12
  },
  {
    "id": "book-463",
    "title": "L'incredibile viaggio delle piante",
    "author": "Stefano Mancuso",
    "category": "Scienza",
    "isbn": "978-88-459-0463-9",
    "year": 2018,
    "price": 15.0,
    "stock": 11
  },
  {
    "id": "book-464",
    "title": "La nazione delle piante",
    "author": "Stefano Mancuso",
    "category": "Scienza",
    "isbn": "978-88-459-0464-8",
    "year": 2019,
    "price": 13.0,
    "stock": 1
  },
  {
    "id": "book-465",
    "title": "Fitopolis: La città vivente delle piante",
    "author": "Stefano Mancuso",
    "category": "Scienza",
    "isbn": "978-88-459-0465-4",
    "year": 2023,
    "price": 17.0,
    "stock": 0
  },
  {
    "id": "book-466",
    "title": "Il pianeta vivente: Storia naturale della Terra",
    "author": "David Attenborough",
    "category": "Scienza",
    "isbn": "978-88-459-0466-4",
    "year": 2020,
    "price": 22.0,
    "stock": 0
  },
  {
    "id": "book-467",
    "title": "La vita sulla Terra: Un viaggio enciclopedico nella biosfera",
    "author": "David Attenborough",
    "category": "Scienza",
    "isbn": "978-88-459-0467-5",
    "year": 2019,
    "price": 21.0,
    "stock": 7
  },
  {
    "id": "book-468",
    "title": "Una vita sul nostro pianeta: La mia testimonianza e la visione per il futuro",
    "author": "David Attenborough",
    "category": "Scienza",
    "isbn": "978-88-459-0468-2",
    "year": 2021,
    "price": 18.0,
    "stock": 5
  },
  {
    "id": "book-469",
    "title": "L'ombra dell'uomo: La mia vita tra gli scimpanzé",
    "author": "Jane Goodall",
    "category": "Scienza",
    "isbn": "978-88-459-0469-1",
    "year": 2018,
    "price": 15.0,
    "stock": 9
  },
  {
    "id": "book-470",
    "title": "Il libro della speranza: Guida per tempi difficili",
    "author": "Jane Goodall, Douglas Abrams",
    "category": "Scienza",
    "isbn": "978-88-459-0470-1",
    "year": 2021,
    "price": 16.5,
    "stock": 1
  },
  {
    "id": "book-471",
    "title": "Siamo così intelligenti da capire l'intelligenza degli animali?",
    "author": "Frans de Waal",
    "category": "Scienza",
    "isbn": "978-88-459-0471-6",
    "year": 2017,
    "price": 16.0,
    "stock": 2
  },
  {
    "id": "book-472",
    "title": "Il bonobo e l'ateo: In cerca di umanità tra i primati",
    "author": "Frans de Waal",
    "category": "Scienza",
    "isbn": "978-88-459-0472-2",
    "year": 2018,
    "price": 15.5,
    "stock": 8
  },
  {
    "id": "book-473",
    "title": "L'età dell'empatia: Lezioni dalla natura per una società più solidale",
    "author": "Frans de Waal",
    "category": "Scienza",
    "isbn": "978-88-459-0473-5",
    "year": 2019,
    "price": 15.0,
    "stock": 14
  },
  {
    "id": "book-474",
    "title": "L'uomo che scambiò sua moglie per un cappello",
    "author": "Oliver Sacks",
    "category": "Scienza",
    "isbn": "978-88-459-0474-9",
    "year": 2018,
    "price": 12.5,
    "stock": 12
  },
  {
    "id": "book-475",
    "title": "Risvegli",
    "author": "Oliver Sacks",
    "category": "Scienza",
    "isbn": "978-88-459-0475-2",
    "year": 2019,
    "price": 13.0,
    "stock": 1
  },
  {
    "id": "book-476",
    "title": "Un antropologo su Marte: Sette racconti paradossali",
    "author": "Oliver Sacks",
    "category": "Scienza",
    "isbn": "978-88-459-0476-1",
    "year": 2018,
    "price": 13.5,
    "stock": 1
  },
  {
    "id": "book-477",
    "title": "Musicofilia: Racconti sulla musica e il cervello",
    "author": "Oliver Sacks",
    "category": "Scienza",
    "isbn": "978-88-459-0477-6",
    "year": 2019,
    "price": 14.0,
    "stock": 13
  },
  {
    "id": "book-478",
    "title": "L'errore di Cartesio: Emozione, ragione e cervello umano",
    "author": "Antonio Damasio",
    "category": "Scienza",
    "isbn": "978-88-459-0478-6",
    "year": 2017,
    "price": 14.0,
    "stock": 10
  },
  {
    "id": "book-479",
    "title": "Emozione e coscienza",
    "author": "Antonio Damasio",
    "category": "Scienza",
    "isbn": "978-88-459-0479-8",
    "year": 2018,
    "price": 15.0,
    "stock": 15
  },
  {
    "id": "book-480",
    "title": "Il sé viene alla mente: La costruzione del cervello cosciente",
    "author": "Antonio Damasio",
    "category": "Scienza",
    "isbn": "978-88-459-0480-1",
    "year": 2019,
    "price": 16.0,
    "stock": 2
  },
  {
    "id": "book-481",
    "title": "Sentire e conoscere: Storia delle menti coscienti",
    "author": "Antonio Damasio",
    "category": "Scienza",
    "isbn": "978-88-459-0481-9",
    "year": 2021,
    "price": 16.5,
    "stock": 13
  },
  {
    "id": "book-482",
    "title": "Coscienza: Che cos'è",
    "author": "Daniel C. Dennett",
    "category": "Scienza",
    "isbn": "978-88-459-0482-4",
    "year": 2018,
    "price": 17.0,
    "stock": 13
  },
  {
    "id": "book-483",
    "title": "L'idea pericolosa di Darwin: L'evoluzione e i significati della vita",
    "author": "Daniel C. Dennett",
    "category": "Scienza",
    "isbn": "978-88-459-0483-6",
    "year": 2019,
    "price": 19.0,
    "stock": 0
  },
  {
    "id": "book-484",
    "title": "In un volo di storni: Le meraviglie dei sistemi complessi",
    "author": "Giorgio Parisi",
    "category": "Scienza",
    "isbn": "978-88-459-0484-0",
    "year": 2021,
    "price": 14.0,
    "stock": 3
  },
  {
    "id": "book-485",
    "title": "L'universo nel terzo millennio: Viaggio tra stelle e galassie",
    "author": "Margherita Hack",
    "category": "Scienza",
    "isbn": "978-88-459-0485-2",
    "year": 2018,
    "price": 13.0,
    "stock": 6
  },
  {
    "id": "book-486",
    "title": "Notte di stelle: Le costellazioni tra mito e scienza",
    "author": "Margherita Hack, Viviano Domenici",
    "category": "Scienza",
    "isbn": "978-88-459-0486-5",
    "year": 2019,
    "price": 14.0,
    "stock": 7
  },
  {
    "id": "book-487",
    "title": "Il mio infinito: L'avventura cosmica della fisica",
    "author": "Margherita Hack",
    "category": "Scienza",
    "isbn": "978-88-459-0487-6",
    "year": 2017,
    "price": 12.5,
    "stock": 2
  },
  {
    "id": "book-488",
    "title": "La macchina meravigliosa: Viaggio nel corpo umano",
    "author": "Piero Angela",
    "category": "Scienza",
    "isbn": "978-88-459-0488-8",
    "year": 2018,
    "price": 14.0,
    "stock": 2
  },
  {
    "id": "book-489",
    "title": "13 miliardi di anni: Il grande romanzo dell'universo",
    "author": "Piero Angela",
    "category": "Scienza",
    "isbn": "978-88-459-0489-8",
    "year": 2019,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-490",
    "title": "I tre giorni di Pompei",
    "author": "Alberto Angela",
    "category": "Scienza",
    "isbn": "978-88-459-0490-5",
    "year": 2017,
    "price": 15.0,
    "stock": 15
  },
  {
    "id": "book-491",
    "title": "Una giornata nell'antica Roma",
    "author": "Alberto Angela",
    "category": "Scienza",
    "isbn": "978-88-459-0491-6",
    "year": 2018,
    "price": 13.5,
    "stock": 1
  },
  {
    "id": "book-492",
    "title": "La teoria dell'evoluzione: Una panoramica contemporanea",
    "author": "Telmo Pievani",
    "category": "Scienza",
    "isbn": "978-88-459-0492-1",
    "year": 2018,
    "price": 12.0,
    "stock": 0
  },
  {
    "id": "book-493",
    "title": "Imperfezione: Una storia naturale",
    "author": "Telmo Pievani",
    "category": "Scienza",
    "isbn": "978-88-459-0493-6",
    "year": 2019,
    "price": 14.0,
    "stock": 12
  },
  {
    "id": "book-494",
    "title": "Genesi: Il grande racconto delle origini",
    "author": "Guido Tonelli",
    "category": "Scienza",
    "isbn": "978-88-459-0494-6",
    "year": 2019,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-495",
    "title": "Tempo: Il sogno di uccidere Chronos",
    "author": "Guido Tonelli",
    "category": "Scienza",
    "isbn": "978-88-459-0495-0",
    "year": 2021,
    "price": 16.0,
    "stock": 9
  },
  {
    "id": "book-496",
    "title": "Materia: La magnifica illusione",
    "author": "Guido Tonelli",
    "category": "Scienza",
    "isbn": "978-88-459-0496-9",
    "year": 2023,
    "price": 17.0,
    "stock": 5
  },
  {
    "id": "book-497",
    "title": "Cercatori di meraviglia: Storie di grandi scoperte scientifiche",
    "author": "Amedeo Balbi",
    "category": "Scienza",
    "isbn": "978-88-459-0497-5",
    "year": 2018,
    "price": 14.0,
    "stock": 14
  },
  {
    "id": "book-498",
    "title": "L'ultimo orizzonte: Cosa sappiamo dei limiti dell'universo",
    "author": "Amedeo Balbi",
    "category": "Scienza",
    "isbn": "978-88-459-0498-3",
    "year": 2020,
    "price": 15.0,
    "stock": 1
  },
  {
    "id": "book-499",
    "title": "Su un altro pianeta: C'è vita oltre la Terra?",
    "author": "Amedeo Balbi",
    "category": "Scienza",
    "isbn": "978-88-459-0499-8",
    "year": 2022,
    "price": 16.0,
    "stock": 9
  },
  {
    "id": "book-500",
    "title": "Chi ha paura del buio? Guida all'universo",
    "author": "F. Maimone, M. Razzano",
    "category": "Scienza",
    "isbn": "978-88-459-0500-5",
    "year": 2021,
    "price": 16.5,
    "stock": 2
  }
];

// Stato dell'applicazione
let books = [];
let cart = [];
let currentPaymentMethod = "cash";
let posSimulatedAuth = null;
let lastCompletedSale = null;

// Elementi DOM Principali
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

// Modale Aggiungi/Modifica Libro
const bookModal = document.getElementById("bookModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const bookForm = document.getElementById("bookForm");
const modalTitle = document.getElementById("modalTitle");

// Carrello & Cassa POS
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const cartItemsList = document.getElementById("cartItemsList");
const cartEmptyState = document.getElementById("cartEmptyState");
const cartDrawerFooter = document.getElementById("cartDrawerFooter");
const cartTotalItems = document.getElementById("cartTotalItems");
const cartIva = document.getElementById("cartIva");
const cartGrandTotal = document.getElementById("cartGrandTotal");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

// Metodi di Pagamento
const payMethodCash = document.getElementById("payMethodCash");
const payMethodPos = document.getElementById("payMethodPos");
const cashPaymentBox = document.getElementById("cashPaymentBox");
const posPaymentBox = document.getElementById("posPaymentBox");
const cashReceivedInput = document.getElementById("cashReceivedInput");
const changeDueBox = document.getElementById("changeDueBox");
const changeDueValue = document.getElementById("changeDueValue");
const cashExactBtn = document.getElementById("cashExactBtn");
const posStatusText = document.getElementById("posStatusText");
const posSimulateBtn = document.getElementById("posSimulateBtn");

// Modale Scontrino Fiscale
const receiptModal = document.getElementById("receiptModal");
const receiptOverlay = document.getElementById("receiptOverlay");
const downloadPdfReceiptBtn = document.getElementById("downloadPdfReceiptBtn");
const printReceiptBtn = document.getElementById("printReceiptBtn");
const shareReceiptBtn = document.getElementById("shareReceiptBtn");
const closeReceiptBtn = document.getElementById("closeReceiptBtn");
const receiptDate = document.getElementById("receiptDate");
const receiptItemsContainer = document.getElementById("receiptItemsContainer");
const receiptTotalAmount = document.getElementById("receiptTotalAmount");
const receiptPaymentType = document.getElementById("receiptPaymentType");
const receiptCashRow = document.getElementById("receiptCashRow");
const receiptCashReceived = document.getElementById("receiptCashReceived");
const receiptChangeRow = document.getElementById("receiptChangeRow");
const receiptChangeAmount = document.getElementById("receiptChangeAmount");
const receiptPosRow = document.getElementById("receiptPosRow");
const receiptPosAuth = document.getElementById("receiptPosAuth");

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
  setupCartListeners();
  updateCartUI();
  render();
});

// Carica libri da LocalStorage con aggiornamento versione (v3 = 500 libri calibrati)
function loadBooks() {
  const version = localStorage.getItem("bibliotech_version");
  const saved = localStorage.getItem("bibliotech_books");
  
  if (version === "3.0" && saved) {
    try {
      books = JSON.parse(saved);
      if (!Array.isArray(books) || books.length < 400) {
        books = [...DEFAULT_BOOKS];
        saveBooks();
      }
    } catch (e) {
      books = [...DEFAULT_BOOKS];
      saveBooks();
    }
  } else {
    // Caricamento iniziale o aggiornamento a v3.0 con 500 libri e scorte calibrate
    books = [...DEFAULT_BOOKS];
    saveBooks();
    localStorage.setItem("bibliotech_version", "3.0");
  }
}

// Salva libri in LocalStorage
function saveBooks() {
  localStorage.setItem("bibliotech_books", JSON.stringify(books));
}

// Configurazione Event Listener Principali
function setupEventListeners() {
  // Ricerca e Filtri
  searchInput.addEventListener("input", render);
  
  // Category Pills
  const pills = document.querySelectorAll(".cat-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      categoryFilter.value = pill.dataset.cat;
      render();
    });
  });

  categoryFilter.addEventListener("change", () => {
    const val = categoryFilter.value;
    pills.forEach(p => {
      if (p.dataset.cat === val) p.classList.add("active");
      else p.classList.remove("active");
    });
    render();
  });

  stockFilter.addEventListener("change", render);
  sortBy.addEventListener("change", render);

  // Modale Libro
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

// Configurazione Event Listener Cassa & Carrello POS
function setupCartListeners() {
  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);

  // Metodi pagamento
  payMethodCash.addEventListener("click", () => setPaymentMethod("cash"));
  payMethodPos.addEventListener("click", () => setPaymentMethod("pos"));

  // Input contanti
  cashReceivedInput.addEventListener("input", calculateCashChange);
  cashExactBtn.addEventListener("click", () => {
    const total = getCartTotal();
    cashReceivedInput.value = total.toFixed(2);
    calculateCashChange();
  });

  // Pulsanti rapidi contanti
  document.querySelectorAll(".btn-cash-quick[data-amount]").forEach(btn => {
    btn.addEventListener("click", () => {
      cashReceivedInput.value = Number(btn.dataset.amount).toFixed(2);
      calculateCashChange();
    });
  });

  // Simulazione POS
  posSimulateBtn.addEventListener("click", simulatePosPayment);

  // Checkout
  checkoutBtn.addEventListener("click", processCheckout);

  // Ricevuta: Download PDF nativo (mobile & desktop) e Stampa
  if (downloadPdfReceiptBtn) {
    downloadPdfReceiptBtn.addEventListener("click", downloadReceiptPdf);
  }
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener("click", () => window.print());
  }
  closeReceiptBtn.addEventListener("click", closeReceipt);
  receiptOverlay.addEventListener("click", closeReceipt);
}

// Apertura / Chiusura Cassa POS
function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  calculateCashChange();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

// Totale Carrello Corrente
function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Aggiungi Libro al Carrello Cassa
window.addToCart = function(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  if (book.stock <= 0) {
    alert(`"${book.title}" è esaurito a magazzino!`);
    return;
  }

  const existing = cart.find(item => item.id === id);
  if (existing) {
    if (existing.quantity < book.stock) {
      existing.quantity += 1;
    } else {
      alert(`Hai già inserito nella cassa tutte le ${book.stock} copie disponibili di "${book.title}"!`);
      return;
    }
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      isbn: book.isbn,
      price: Number(book.price),
      quantity: 1,
      maxStock: book.stock
    });
  }

  updateCartUI();
  openCart();
};

// Modifica Quantità nel Carrello
window.updateCartQty = function(id, delta) {
  const item = cart.find(i => i.id === id);
  const book = books.find(b => b.id === id);
  if (!item || !book) return;

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    cart = cart.filter(i => i.id !== id);
  } else if (newQty > book.stock) {
    alert(`Solo ${book.stock} copie disponibili a magazzino!`);
    return;
  } else {
    item.quantity = newQty;
  }

  updateCartUI();
};

// Rimuovi Libro dal Carrello
window.removeFromCart = function(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
};

// Svuota Carrello
function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Vuoi svuotare la cassa?")) {
    cart = [];
    updateCartUI();
  }
}

// Aggiorna Interfaccia Utente Cassa & Carrello
function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = getCartTotal();
  const iva = totalAmount * 0.04; // 4% editoria

  // Badge carrello header
  cartCountBadge.textContent = totalQty;
  if (totalQty > 0) {
    cartCountBadge.style.display = "inline-flex";
  } else {
    cartCountBadge.style.display = "none";
  }

  if (cart.length === 0) {
    cartEmptyState.classList.remove("hidden");
    cartItemsList.classList.add("hidden");
    cartDrawerFooter.classList.add("hidden");
    return;
  }

  cartEmptyState.classList.add("hidden");
  cartItemsList.classList.remove("hidden");
  cartDrawerFooter.classList.remove("hidden");

  // Render elementi carrello
  cartItemsList.innerHTML = cart.map(item => {
    const subtotal = item.price * item.quantity;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-title" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</div>
          <div class="cart-item-author">di ${escapeHtml(item.author)}</div>
          <div class="cart-item-price">€ ${item.price.toFixed(2)} x ${item.quantity} = € ${subtotal.toFixed(2)}</div>
        </div>
        <div class="cart-qty-controls">
          <button class="btn-qty" onclick="updateCartQty('${item.id}', -1)" title="Diminuisci">-</button>
          <span class="cart-qty-value">${item.quantity}</span>
          <button class="btn-qty" onclick="updateCartQty('${item.id}', 1)" ${item.quantity >= item.maxStock ? 'disabled' : ''} title="Aumenta">+</button>
          <button class="btn-cart-remove" onclick="removeFromCart('${item.id}')" title="Rimuovi">&times;</button>
        </div>
      </div>
    `;
  }).join("");

  // Totali
  cartTotalItems.textContent = `${totalQty} volumi`;
  cartIva.textContent = `€ ${iva.toFixed(2)}`;
  cartGrandTotal.textContent = `€ ${totalAmount.toFixed(2)}`;

  calculateCashChange();
}

// Imposta Metodo di Pagamento (Contanti / POS)
function setPaymentMethod(method) {
  currentPaymentMethod = method;
  if (method === "cash") {
    payMethodCash.classList.add("active");
    payMethodPos.classList.remove("active");
    cashPaymentBox.classList.remove("hidden");
    posPaymentBox.classList.add("hidden");
  } else {
    payMethodPos.classList.add("active");
    payMethodCash.classList.remove("active");
    posPaymentBox.classList.remove("hidden");
    cashPaymentBox.classList.add("hidden");
  }
}

// Calcolo Resto in Tempo Reale
function calculateCashChange() {
  const total = getCartTotal();
  const received = parseFloat(cashReceivedInput.value);

  if (isNaN(received) || received === 0) {
    changeDueBox.className = "change-box info";
    changeDueBox.innerHTML = `<span>Resto dovuto:</span><strong>€ 0.00</strong>`;
    return;
  }

  const diff = received - total;
  if (diff >= 0) {
    changeDueBox.className = "change-box info";
    changeDueBox.innerHTML = `<span>Resto dovuto al cliente:</span><strong>€ ${diff.toFixed(2)}</strong>`;
  } else {
    changeDueBox.className = "change-box error";
    changeDueBox.innerHTML = `<span>Importo insufficiente:</span><strong>- € ${Math.abs(diff).toFixed(2)}</strong>`;
  }
}

// Simulatore Lettura POS
function simulatePosPayment() {
  posStatusText.textContent = "⏳ Connessione al circuito bancario in corso...";
  posSimulateBtn.disabled = true;

  setTimeout(() => {
    posSimulatedAuth = "#" + Math.floor(10000 + Math.random() * 90000);
    posStatusText.innerHTML = `✅ <strong>TRANSAZIONE APPROVATA!</strong> Codice AUTH: ${posSimulatedAuth}`;
    posSimulateBtn.disabled = false;
  }, 600);
}

// Processo di Chiusura Vendita & Scarico Scorte
function processCheckout() {
  if (cart.length === 0) {
    alert("La cassa è vuota!");
    return;
  }

  const total = getCartTotal();

  // Validazione pagamento contanti
  let cashGiven = parseFloat(cashReceivedInput.value);
  let change = 0;

  if (currentPaymentMethod === "cash") {
    if (isNaN(cashGiven) || cashGiven < total) {
      // Se non ha digitato l'importo o è inferiore, chiediamo se paga cifra esatta
      if (isNaN(cashGiven) || cashGiven === 0) {
        cashGiven = total;
        change = 0;
      } else {
        alert(`Il contante inserito (€ ${cashGiven.toFixed(2)}) è inferiore al totale dovuto (€ ${total.toFixed(2)})!`);
        cashReceivedInput.focus();
        return;
      }
    } else {
      change = cashGiven - total;
    }
  } else {
    if (!posSimulatedAuth) {
      posSimulatedAuth = "#" + Math.floor(10000 + Math.random() * 90000);
    }
  }

  // SCARICO SCORTE INVENTARIO
  cart.forEach(item => {
    const book = books.find(b => b.id === item.id);
    if (book) {
      book.stock = Math.max(0, book.stock - item.quantity);
    }
  });

  // Salva inventario aggiornato
  saveBooks();

  // Salva dati vendita per generazione PDF e scontrino
  const now = new Date();
  const dateStr = now.toLocaleDateString("it-IT") + " - " + now.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
  lastCompletedSale = {
    date: dateStr,
    items: cart.map(i => ({ ...i })),
    total: total,
    paymentType: currentPaymentMethod === "cash" ? "CONTANTI" : "CARTA / POS ELETTRONICO",
    cashGiven: cashGiven,
    change: change,
    authCode: posSimulatedAuth
  };

  // Mostra Scontrino Fiscale
  showReceipt(total, cashGiven, change);

  // Reset carrello cassa
  cart = [];
  cashReceivedInput.value = "";
  posSimulatedAuth = null;
  posStatusText.textContent = "Pronto per inserimento carta o Contactless...";
  updateCartUI();
  closeCart();

  // Aggiorna il catalogo e le statistiche in tempo reale
  render();
}

// Visualizza Scontrino Fiscale
function showReceipt(total, cashGiven, change) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("it-IT") + " - " + now.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  receiptDate.textContent = dateStr;

  // Render righe articoli
  receiptItemsContainer.innerHTML = cart.map(item => `
    <div class="receipt-item-line">
      <span>${escapeHtml(item.title.length > 28 ? item.title.substring(0, 26) + '..' : item.title)}</span>
      <span>€ ${(item.price * item.quantity).toFixed(2)}</span>
    </div>
    <div class="receipt-item-sub">
      ${item.quantity} pz x € ${item.price.toFixed(2)} [IVA 4%]
    </div>
  `).join("");

  receiptTotalAmount.textContent = `€ ${total.toFixed(2)}`;

  if (currentPaymentMethod === "cash") {
    receiptPaymentType.textContent = "CONTANTI";
    receiptCashRow.style.display = "flex";
    receiptCashReceived.textContent = `€ ${cashGiven.toFixed(2)}`;
    receiptChangeRow.style.display = "flex";
    receiptChangeAmount.textContent = `€ ${change.toFixed(2)}`;
    receiptPosRow.style.display = "none";
  } else {
    receiptPaymentType.textContent = "CARTA / POS ELETTRONICO";
    receiptCashRow.style.display = "none";
    receiptChangeRow.style.display = "none";
    receiptPosRow.style.display = "flex";
    receiptPosAuth.textContent = posSimulatedAuth || "#94821";
  }

  receiptModal.classList.remove("hidden");
}


// Condividi / Salva Scontrino (Ottimizzato per Smartphone e In-App Browser)
function shareReceipt() {
  const dateStr = receiptDate ? receiptDate.textContent : new Date().toLocaleString("it-IT");
  const totalStr = receiptTotalAmount ? receiptTotalAmount.textContent : "€ 0.00";
  const payType = receiptPaymentType ? receiptPaymentType.textContent : "CONTANTI";
  
  let receiptText = "================================\n";
  receiptText += "      BIBLIOTECH - LIBRERIA\n";
  receiptText += "Punto Vendita: Città Sant'Angelo (PE)\n";
  receiptText += `Data e Ora: ${dateStr}\n`;
  receiptText += "Operatore: Valentyn Haidukov (Cassa 01)\n";
  receiptText += "================================\n\n";
  
  const lines = document.querySelectorAll(".receipt-item-line");
  lines.forEach(l => {
    receiptText += l.innerText.replace(/\n/g, " ") + "\n";
  });
  
  receiptText += "\n--------------------------------\n";
  receiptText += `TOTALE COMPLESSIVO: ${totalStr}\n`;
  receiptText += `PAGAMENTO: ${payType}\n`;
  receiptText += "================================\n";
  receiptText += "IVA assolta all'origine (art. 74 DPR 633/72)\n";
  receiptText += "GRAZIE PER LA VISITA - ARRIVEDERCI\n";
  receiptText += "https://hv94.github.io/bookstore-catalog-manager/\n";

  if (navigator.share) {
    navigator.share({
      title: "Scontrino Fiscale BiblioTech",
      text: receiptText
    }).catch(() => {});
  } else {
    // Fallback: download txt file
    const blob = new Blob([receiptText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `scontrino_bibliotech_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Scontrino digitale salvato con successo!");
  }
}

function closeReceipt() {
  receiptModal.classList.add("hidden");
}

// Render generale del Catalogo
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
    const matchQuery = 
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.isbn.toLowerCase().includes(query);

    const matchCat = (cat === "all") || (b.category === cat);

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
  totalCopiesEl.textContent = totalCopies.toLocaleString("it-IT");
  totalValueEl.textContent = `€ ${totalValue.toLocaleString("it-IT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  lowStockCountEl.textContent = lowStock;
}

// Render griglia schede libri con DocumentFragment ad alte prestazioni
function renderGrid(bookList) {
  if (bookList.length === 0) {
    booksGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  const fragment = document.createDocumentFragment();

  bookList.forEach(book => {
    const card = document.createElement("article");
    card.className = `book-card cat-${book.category}`;

    // Tag stock
    let stockClass = "stock-available";
    let stockLabel = `Disponibile (${book.stock} copie)`;
    let isOutOfStock = book.stock === 0;

    if (isOutOfStock) {
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
            <span>Codice ISBN:</span>
            <code>🏷️ ${escapeHtml(book.isbn)}</code>
          </div>
          <div class="meta-row">
            <span>Anno:</span>
            <span>${book.year || "-"}</span>
          </div>
        </div>
      </div>

      <div>
        <button class="card-buy-btn" onclick="addToCart('${book.id}')" ${isOutOfStock ? 'disabled' : ''}>
          ${isOutOfStock ? '❌ Scorta Esaurita' : '🛒 Metti in Cassa (+)'}
        </button>

        <div class="book-footer">
          <div class="book-price">€ ${Number(book.price).toFixed(2)}</div>
          <div class="card-actions">
            <button class="btn-icon" title="Rimuovi dalla cassa (-1)" onclick="updateCartQty('${book.id}', -1)">-</button>
            <button class="btn-icon btn-cart-plus" title="Metti in Cassa (+1)" onclick="addToCart('${book.id}')">+</button>
            <button class="btn-icon" title="Modifica dettagli catalogo" onclick="editBook('${book.id}')">✏️</button>
            <button class="btn-icon delete" title="Elimina libro" onclick="deleteBook('${book.id}')">🗑️</button>
          </div>
        </div>
      </div>
    `;

    fragment.appendChild(card);
  });

  booksGrid.innerHTML = "";
  booksGrid.appendChild(fragment);
}

// Modale Libro (Aggiungi/Modifica)
function openModal(bookToEdit = null) {
  if (bookToEdit) {
    modalTitle.textContent = "Modifica Libro";
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
    bookForm.reset();
    document.getElementById("bookId").value = "";
    document.getElementById("bookYear").value = new Date().getFullYear();
  }

  bookModal.classList.remove("hidden");
}

function closeModal() {
  bookModal.classList.add("hidden");
  bookForm.reset();
}

// Gestione Form Submit
function handleFormSubmit(e) {
  e.preventDefault();

  const id = document.getElementById("bookId").value;
  const title = document.getElementById("bookTitle").value.trim();
  const author = document.getElementById("bookAuthor").value.trim();
  const category = document.getElementById("bookCategory").value;
  const isbn = document.getElementById("bookIsbn").value.trim();
  const year = parseInt(document.getElementById("bookYear").value, 10);
  const price = parseFloat(document.getElementById("bookPrice").value);
  const stock = parseInt(document.getElementById("bookStock").value, 10);

  if (id) {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], title, author, category, isbn, year, price, stock };
    }
  } else {
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
    cart = cart.filter(i => i.id !== id);
    saveBooks();
    updateCartUI();
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

// Ripristina catalogo dimostrativo (500 libri)
function resetCatalog() {
  if (confirm("Vuoi ripristinare il catalogo iniziale da 500 volumi?")) {
    books = [...DEFAULT_BOOKS];
    cart = [];
    saveBooks();
    updateCartUI();
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


// ==========================================================================
// Generatore di Scontrino Fiscale in PDF Puro (100% Mobile & Desktop)
// ==========================================================================
function generateReceiptPdfBlob(sale) {
  if (!sale) return null;
  
  const storeName = "BIBLIOTECH - LIBRERIA";
  const storeAddr = "Punto Vendita: Citta' Sant'Angelo (PE)";
  const dateStr = sale.date;
  const operator = "Operatore: Valentyn Haidukov (Cassa 01)";
  
  const lines = [
    "================================",
    "      " + storeName,
    storeAddr,
    "Data: " + dateStr,
    operator,
    "================================",
    ""
  ];

  sale.items.forEach(item => {
    const title = item.title.substring(0, 22);
    const priceStr = "EUR " + (item.price * item.quantity).toFixed(2);
    const pad = Math.max(1, 32 - title.length - priceStr.length);
    lines.push(title + " ".repeat(pad) + priceStr);
    lines.push("  " + item.quantity + " pz x EUR " + item.price.toFixed(2) + " [IVA 4%]");
  });

  lines.push("");
  lines.push("--------------------------------");
  const totStr = "EUR " + sale.total.toFixed(2);
  const totPad = Math.max(1, 32 - 19 - totStr.length);
  lines.push("TOTALE COMPLESSIVO:" + " ".repeat(totPad) + totStr);
  lines.push("PAGAMENTO: " + sale.paymentType);

  if (sale.paymentType === "CONTANTI" && sale.cashGiven !== undefined) {
    lines.push("RICEVUTO: EUR " + sale.cashGiven.toFixed(2));
    lines.push("RESTO:    EUR " + sale.change.toFixed(2));
  } else if (sale.authCode) {
    lines.push("CODICE AUTH POS: " + sale.authCode);
  }

  lines.push("================================");
  lines.push("IVA assolta editore (art. 74)");
  lines.push("||||| ||||||| |||| |||||||| ||||");
  lines.push("GRAZIE PER LA VISITA!");
  lines.push("hv94.github.io/bookstore-catalog-manager");

  const pageHeight = Math.max(380, lines.length * 15 + 80);
  const startY = pageHeight - 35;

  let stream = "BT\n/F1 9 Tf\n14 TL\n18 " + startY + " Td\n";
  lines.forEach(l => {
    const esc = l.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    stream += "(" + esc + ") '\n";
  });
  stream += "ET\n";

  const streamBytes = new TextEncoder().encode(stream);
  const streamLen = streamBytes.length;

  let body = "%PDF-1.4\n";
  const offsets = [0];

  function addObj(str) {
    offsets.push(new TextEncoder().encode(body).length);
    body += str;
  }

  addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 227 " + pageHeight + "] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n");
  addObj("4 0 obj\n<< /Length " + streamLen + " >>\nstream\n" + stream + "\nendstream\nendobj\n");
  addObj("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

  const startxref = new TextEncoder().encode(body).length;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i++) {
    xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  const trailer = "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n" + startxref + "\n%%EOF\n";

  return new Blob([new TextEncoder().encode(body + xref + trailer)], { type: "application/pdf" });
}

function downloadReceiptPdf() {
  if (!lastCompletedSale) {
    alert("Nessun dato di vendita recente da scaricare!");
    return;
  }

  const pdfBlob = generateReceiptPdfBlob(lastCompletedSale);
  if (!pdfBlob) return;

  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `scontrino_bibliotech_${Date.now()}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(url), 1000);
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
