#!/usr/bin/env node

import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "pokemon",
      message: "What Pokemon's moves do you want to see?",
    },
    {
      type: "input",
      name: "moveCount",
      message: "How many moves do you wish do see? (Enter for All)",
    },
  ])
  .then((answers) => {
    const pokemon = answers.pokemon;
    const moveCount = answers.moveCount;
    printMoves(pokemon, moveCount);
  });

const printMoves = async (pokemonName, moveCount) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  for (const move of moves.slice(0, moveCount || moves.length)) {
    console.log(move);
  }
};
