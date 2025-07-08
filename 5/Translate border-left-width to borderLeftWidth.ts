function camelize(str: string): string {
  return str
    .split('-') // divide 'my-long-word' → ['my', 'long', 'word']
    .map((word, index) =>
      index === 0
        ? word
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // junta → 'myLongWord'
}

// Exemplos:
console.log(camelize("background-color")); // "backgroundColor"
console.log(camelize("list-style-image")); // "listStyleImage"
console.log(camelize("webkit-transition")); // "webkitTransition"
