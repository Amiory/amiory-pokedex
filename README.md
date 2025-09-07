# Amiory Pokedex 🐉

A simple **CLI tool** that fetches and prints the moves of a Pokémon using the [PokéAPI](https://pokeapi.co/).  
This project was built for learning how to create Node.js CLI tools.

---

## ✨ Features
- Prompt-based CLI using [Inquirer](https://www.npmjs.com/package/inquirer).
- Fetches Pokémon data from PokéAPI.
- Lists all moves or a limited number of moves based on user input.
- Error handling for invalid Pokémon names and inputs.

---

## 🚀 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Amiory/amiory-pokedex.git
cd amiory-pokedex
npm install
```

Link the CLI tool locally:

```bash
npm link
```

Now you can run the tool globally using:

```bash
amiory-pokedex
```

---

## 📖 Usage

Run the command:

```bash
amiory-pokedex
```

You’ll be prompted to enter:
1. **Pokémon name** – e.g., `pikachu`.
2. **Number of moves** – Enter a number (like `5`) or press **Enter** to show all moves.

Example:

```
? What Pokemon's moves do you want to see? pikachu
? How many moves do you wish do see? (Enter for All) 5

Printing moves for pikachu:
mega-punch
pay-day
thunder-punch
slam
double-kick
```

---

## ⚠️ Notes
- Requires **Node.js v18+** (because it uses the native `fetch` API in Node).
- Input validation ensures you provide a number or just press Enter.

---

## 🛠️ Development
If you want to edit and test without linking:

```bash
node index.js
```

---

## 📚 Learning Goal
This project was created to practice:
- Building interactive CLI tools in Node.js.
- Using **npm bin linking** (`npm link`).
- Fetching APIs in Node.js (PokéAPI).

---

## 📜 License
ISC License © 2025  
