const sentence = `hello there from lighthouse labs\n`;
const greetAgain = `Really nice to meet you finally\n`;

const typewriter = function(str) {
  let timer = 1000;
  for (let letter of str) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, timer);
    timer += 100;
  }
};
console.log(typewriter(sentence));
console.log(typewriter(greetAgain));