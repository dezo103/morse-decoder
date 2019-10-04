const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // console.log(expr.match(/.{1,10}/g));
    let arr = expr.match(/.{1,10}/g);
    // let e;
    let str = ""; 
    for (let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
          case '0000001011': e = 'a'; break;
          case '0011101010': e = 'b'; break;
          case '0011101110': e = 'c'; break;
          case '0000111010': e = 'd'; break;
          case '0000000010': e = 'e'; break;
          case '0010101110': e = 'f'; break;
          case '0000111110': e = 'g'; break;
          case '0010101010': e = 'h'; break;
          case '0000001010': e = 'i'; break;
          case '0010111111': e = 'j'; break;
          case '0000111011': e = 'k'; break;
          case '0010111010': e = 'l'; break;
          case '0000001111': e = 'm'; break;
          case '0000001110': e = 'n'; break;
          case '0000111111': e = 'o'; break;
          case '0010111110': e = 'p'; break;
          case '0011111011': e = 'q'; break;
          case '0000101110': e = 'r'; break;
          case '0000101010': e = 's'; break;
          case '0000000011': e = 't'; break;
          case '0000101011': e = 'u'; break;
          case '0010101011': e = 'v'; break;
          case '0000101111': e = 'w'; break;
          case '0011101011': e = 'x'; break;
          case '0011101111': e = 'y'; break;
          case '0011111010': e = 'z'; break;
          case '1011111111': e = '1'; break;
          case '1010111111': e = '2'; break;
          case '1010101111': e = '3'; break;
          case '1010101011': e = '4'; break;
          case '1010101010': e = '5'; break;
          case '1110101010': e = '6'; break;
          case '1111101010': e = '7'; break;
          case '1111111010': e = '8'; break;
          case '1111111110': e = '9'; break;
          case '1111111111': e = '0'; break;
          case '**********': e = ' '; break;
          }

          str = str + e;
      }
    
      return str;
      // console.log(str);
}

 module.exports = {
     decode
 }

// decode(expr);