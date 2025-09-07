#!/usr/bin/env node

import yargs from "yargs";

const { argv } = yargs(process.argv);

const printMoves = async (pokemonName, count) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, count || 5));
};

printMoves(argv.pokemon, argv.count);
