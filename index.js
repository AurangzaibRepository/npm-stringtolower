const characterMappings = require("./character-mapping");

function lowerCase(text) {
  let result = '';

  for (const character of text) {
    result +=
      character in characterMappings ? characterMappings[character] : character;
  }

  return result;
}

module.exports = lowerCase;