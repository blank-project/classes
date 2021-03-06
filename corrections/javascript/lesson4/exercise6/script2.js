function chiffrer(input, decalage) {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // reset sur decalage si besoin (si < 0)
  if (decalage <= 0) decalage = decalage % 26 + alphabet.length;

  // passage du mot sous forme de tableau de caractères
  var word = input.split('');

  // itération dans le tableau de caractères
  for (var i = 0; i < word.length; i++) {

    // on vérifie que c'est un caractère qu'on peut encoder
    if (alphabet.indexOf(word[i].toLowerCase()) >= 0) {

      // Si c'est le cas alors on ajoute le décalage modulo la longueur du tableau (si l'on dépasse, on reboucle sur le début)
      word[i] = alphabet[(alphabet.indexOf(word[i].toLowerCase()) + decalage) % alphabet.length];
    }
  }

  return word.join('');
}

function dechiffrer(input, decalage) {
  return chiffrer(input, -decalage);
}
