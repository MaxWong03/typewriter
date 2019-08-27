const sentence = "hello there from lighthouse labs";
let sec = 0;
// for (const char of sentence) {
for (let i = 0; i < sentence.length; i++) {
  let char = sentence.charAt(i);
  sec += 50;
  setTimeout(() => {
    process.stdout.write(char);
    if (i === (sentence.length -1)) {
      console.log();
    }
  }, sec) // <= 1s delay to make it noticeable. Can dial it down later.
}