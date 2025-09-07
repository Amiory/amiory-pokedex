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
    if (moveCount.match(/\[0-9]+/) || moveCount == "")
      printMoves(pokemon, moveCount);
    else console.log("Please Enter a valid number or press Enter");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Something went wrong, please try again");
    } else {
      const message =
        error.name === "ExitPromptError"
          ? "Exiting program"
          : "Something went wrong, please try again";

      console.log(message);
    }
  });

const printMoves = async (pokemonName, moveCount) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  if (response.ok) {
    const pokemon = await response.json();
    console.log(`Printing moves for ${pokemon.name}:`);
    
    const moves = pokemon.moves.map(({ move }) => move.name);
    for (const move of moves.slice(0, moveCount || moves.length)) {
      console.log(move);
    }
  } else if (response.status === 404) {
    console.log("Pokemon not found");
  }
};
