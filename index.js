const characterMappings = require("./character-mapping");

function lowerCase(text) {
  let result = '';

  for (const character of text) {

    // Return same character if not found in mappings
    if (!(character in characterMappings)) {
      result += character;
      continue;
    }

    result += characterMappings[character];
  }

  return result;
}

module.exports = lowerCase;
