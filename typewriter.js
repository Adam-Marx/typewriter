//had to change const to let in order to add new line at the end, not optimal?
let sentence = 'hello there from lighthouse labs';

sentence = sentence + '\n';
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  },  delay += 50);
};


