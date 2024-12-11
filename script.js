function duplicateCount(text) {
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size;
}
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("abcde"));
