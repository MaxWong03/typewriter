/*
hello there from light house labs
delay(h), typeWrite(ello there from light house labs)
*/
const sentence = "hello there from lighthouse labs";

const delay = (char, time) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);

};

const typeWrite = (sentence, timeInit) => {
  if (sentence === '') {
    delay("\n", timeInit + 50);
    return 0;
  } //the end of the sentence, type out a new line
  delay(sentence[0], timeInit);
  typeWrite(sentence.substring(1), timeInit + 50);
};


typeWrite(sentence, 50);

