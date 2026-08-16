const letters = {
  J: [
    "   J",
    "   J",
    "J  J",
    " JJ "
  ],

  A: [
    "   A   ",
    "  A A  ",
    " AAAAA ",
    "A     A"
  ],

  V: [
    "V   V",
    "V   V",
    " V V ",
    "  V  "
  ]
};

const word = ["J", "A", "V", "A"];
const height = 4;

for (let row = 0; row < height; row++) {
  let output = "";

  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    output += letters[letter][row];

    if (index < word.length - 1) {
      output += "  "; // spacing between letters
    }
  }

  console.log(output);
}