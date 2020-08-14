//here the quote will e generated
const randomQuotes = document.queryselector("#randomquote");
let quoteCounter = 0;
let availableQuotes = [];
let currentQuotes;
let quotes = [
  {"Action is the real measure of intelligence."},
  {"Baseball has the great advantage over cricket of being sooner ended."},
  {"Every goal, every action, every thought, every feeling one experiences, whether it be consciously or unconsciously known, is an attempt to increase one’s level of peace of mind."}
  {"A good head and a good heart are always a formidable combination."}
];
const getQuotes = ()=>{
quoteCounter ++;
  availableQuotes = [... quotes];
 let quoteIndex = Math.floor(Math.random() * availableQuotes.length);
  curentQuotes = availableQuotes[quoteIndex];
  randomQuotes.innertext = curentQuotes;
}
setTimeOut(getQuotes, 3000);
