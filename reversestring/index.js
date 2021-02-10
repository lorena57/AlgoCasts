// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

function reverse(str) {
  let reversed = '';
  for (let newItem of str) {
    reversed = newItem + reversed;
  }
  return reversed;
}

//Function notes
//split('')
// ['A', 'B, "C']

//reverse()
// ['C', 'B, "A"]

//join('') with apostrophe's it removes the space
//[CBA]

module.exports = reverse;
