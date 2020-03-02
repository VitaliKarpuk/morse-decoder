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
    let b = []
    let c = []
    let res = []
    let res2 = []
    let end = []
    for(let i = 0 ; i < expr.length; i = i+2){
        b.push(expr.slice(i, i+2))
    }
    for(let i = 0; i < b.length; i++){
        if(b[i] === '00'){
            c.push('')
        }if(b[i] === '11'){
            c.push('-')
        }if(b[i] === '10'){
            c.push('.')
        }if(b[i] === '**'){
            c.push(' ')
        }
    }
    for(let i = 0; i<c.length; i= i+5){
        res.push(c.slice(i, i+5))
    }
    res.forEach(item => {
        res2.push(item.join(''))
    })
    res2.forEach(item => {
        for (const key in MORSE_TABLE) {
            if(item === key){
                end.push(MORSE_TABLE[key])
            }if(item === '     '){
                end.push(item = ' ')
            }
        }
    })  
    return end.join('')
}

module.exports = {
    decode
}