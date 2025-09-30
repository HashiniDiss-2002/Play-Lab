function caesarCipher(str, shift, mode = 'encode') {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  shift = shift % 26;
  if (mode === 'decode') shift = (26 - shift) % 26;

  return str.split('').map(char => {
    const lower = char.toLowerCase();
    if (alphabet.includes(lower)) {
      const oldIndex = alphabet.indexOf(lower);
      const newIndex = (oldIndex + shift) % 26;
      const newChar = alphabet[newIndex];
      return char === lower ? newChar : newChar.toUpperCase();
    }
    return char; // Leave punctuation, spaces, etc.
  }).join('');
}

function processText() {
  const input = document.getElementById('input').value;
  const shift = parseInt(document.getElementById('shift').value);
  const mode = document.getElementById('mode').value;

  const result = caesarCipher(input, shift, mode);
  document.getElementById('output').value = result;
}
