function isValid(str) {
  return typeof str === "string" && str.length > 0;
}

function capitalizeWord(word) {
  if (!isValid(word)) {
    return word;
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalize(sentence) {
  if (!isValid(sentence)) {
    return sentence;
  }
  const words = sentence.split(" ");
  const capitalizedWords = words.map(capitalizeWord);
  return capitalizedWords.join(" ");
}

module.exports = capitalize;
