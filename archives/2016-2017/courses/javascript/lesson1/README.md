# JavaScript

![JavaScript Unofficial Logo](img/js.png)



---



## Qu'est ce que c'est ?



---



## JavaScript est un langage de programmation
* de haut niveau
* interprété
* non typé
* dynamique


***


## Et ça veut dire quoi ?


***


## De haut niveau
A contrario d'un langage bas niveau, le langage haut niveau s'éloigne de celui de la machine. Il permet d'être focalisé sur la resolution d'un problème (ou d'un groupe de problèmes) précis.

Il permet d'écrire un programme en utilisant des mots usuels plus proche du langage humain (anglais généralement) et des signes mathématiques compréhensibles.


***


## Langage de bas niveau
Un langage de bas niveau est un langage plus proche de la machine et permettant des interactions plus précises (gestion de la mémoire, instructions directes, etc.) qu'un langage haut niveau.

Mais ... c'est moche.

```assembly
 dec     bx                      ; decrement note counter
 jnz     nloop                   ; loop until bx = 0
 mov     ax, 4c00h               ; terminate program
```

_Petit exemple d'assembleur_

Note: juste pour montrer que c'est moins lisible


***


## Interprété
C'est un langage dont l'implémentation et le code et les instructions s'exécutent directement sans compilation en langage machine.


***


## Attent langage machine ?
Un langage machine est une suite basique d'instructions en binaire (0 ou 1) et / ou hexadécimales.

C'est ce que va comprendre votre ordinateur au niveau machine. Tous les langages de programmations sont à un moment traduits en instructions machines.


***


## Non typé
Cela signifie qu'au moment de l'interprétation ou de la compilation (traduction du code source en langage machine), on ne connait pas le type de variable (nombre, chaine de caractères, caractère, date, etc.).


***


## Dynamique
C'est un type de langage de programmation haut niveau qui porte certaines caractéristiques :
* Les variables ne sont pas typées
* Elles sont alouées et supprimées au fur et à mesure de l'exécution du programme
* Au moment de l'exécution le contenu et type de TOUTES les variables peuvent changer
* Du code peut-être rajouté ou supprimé au moment de l'exécution


***


## Et ça vient d'où ce truc ?
De Netscape qui après plusieurs dérivés a donné Mozilla Firefox. En 1995, originellement appelé Mocha, puis LiveScript le JavaScript (appelé ainsi après certains partenariats commerciaux qui ouvrirent le port du langage Java dans les navigateurs Netscape) est né.


***


## On en est où dans les versions ?
Le JavaScript suit les versions de ce que l'on appelle [EcmaScript](https://en.wikipedia.org/wiki/ECMAScript). On a 7 versions dont la dernière qui est EcmaScript 7 (ou EcmaScript 2016).


***


## Et on utilise laquelle du coup ?
Si seulement on pouvait utiliser la dernière seulement... La norme EcmaScript est implémenté pour des interpréteurs JavaScript, c'est donc ainsi que va être exécuté votre code.


***

|Implémentation|Applications|EcmaScript version|
|-|-|-|
|SpiderMonkey|Firefox, Adobe Acrobat|5.1 & 6 & 7|
|V8|Google Chrome, Node.js, Opera|6|
|JavaScriptCore|WebKit, Safari|6|
|Chakra|Microsoft Edge|5.1, & 6|
|JerryScript|IoT Devices|5.1|
|JScript 9.0|Internet Explorer|5.1|


Note: IOT = Internet of thinges (wtf montres connectées, domotique, etc.



---



## A quoi ça sert morray ?
Nous allons faire du Javascript côté client, et donc cela consiste à :
* Modifier dynamiquement le HTML & CSS (affichage de données dynamique)
* Valider l’entrée de données
* Modifier le comportement de la page en fonction de l'action de l'utilisateur



---



## Notre environement de développement
Téléchargez `node.js` qui va nous permettre de faire du javascript sans navigateur pour le début :
* `sudo apt-get install nodejs` : NodeJs
* `sudo apt-get install npm` : Le gestionaire de dépendances
* `sudo ln -s /usr/bin/nodejs /usr/bin/node` : NodeJs est aussi "node"
* `node -v` : pour tester que l'installation a bien fonctionnée



---


## Faisons du javascript !
Le javascript est généralement écrit dans un fichier avec l'extension `.js`.



---



## Quelques fondamentaux
Chaque instruction que vous allez écrire doit terminer par un `;`. Cela délimite votre code.

Généralement on écrit une instruction par ligne.


***


## Les variables & opérateurs


***


## C'est quoi une variable ?
C'est une entité qui va nous permettre de stocker une valeur (quelle qu'elle soit) et d'agir sur cette dernière si besoin.


***


## Déclarer une variable
```js
var toto = "olé";
```
Ci-dessus, j'ai créé une variable qui a pour nom `toto` et je lui ai ssocié la valeur `"olé"` à l'aide du symbole `=`.


***


## Plusieurs types de variables

|Type|Valeurs|
|-|-|
|Boolean|`true` ou `false`|
|Number|entre `-(2^53 -1)` et `2^53 -1`|
|Null|`null`|
|Undefined|`undefined`|
|String|Chaine de caractères définie par des guillemets (quote) ex: `"toto"`|

Pour les nombres on peut aussi utiliser `+Infinity`, `-Infinity` et `NaN`.


***


## Afficher une variable dans la console

Pour afficher une variable dans la console on utilise la fonction `console.log` et on lui passe entre parenthèse ce qu'on veut aficher (on verra ce qu'est une fonction plus tard) :
```js
var toto = "olé";
console.log(toto);
```

Ici on affiche la valeur de la variable toto


***


## Pause exercice
* Créez un fichier JavaScript
* Déclarez une variable
* Affichez la dans la console
* Exécutez votre fichier avec la commande suivante : `node yourfile.js`
* Si vous voulez utiliser votre fichier en mode debug utilisez la commande : `node debug yourfile.js`


Note: Pour quitter le mode debug utiliser la fonction `quit`


***


## Les opérateurs

Pour agir sur les variables on utilise des opérateurs. Chacun d'entre eux porte une action mathématique.


***


|Opérateur|Action|
|-|-|
|+|Addition ou concaténation de chaines de caractères|
|-|Soustraction|
|*|Multiplication|
|/|Division|
|%|Modulo|
|++|Incrémentation|
|--|Decrementation|



---



## Faire un commentaire
Pour commenter en code en JavaScript c'est pareil qu'en CSS !
* `/*` pour ouvrir un commentaire
* `*/` pour fermer un commentaire !



---



## Utiliser le debugger NodeJS
Pour utiliser le débugger nodejs il faut utiliser le mot clé `debugger;`. Cela stoppera l'exécution de votre code lorsque vous le lancez avec `node debug`.

* Pour continuer l'exécution du code tapez `c` ou `cont`
* Pour quitter le débugger tapez `quit`
