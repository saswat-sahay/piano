let container = document.querySelector('#container');

var music = [
    { id: 1, song: '28.mp3', key: 'Q' },
    { id: 2, song: '29.mp3', key: 'A' },
    { id: 3, song: '30.mp3', key: 'W' },
    { id: 4, song: '31.mp3', key: 'S' },
    { id: 5, song: '32.mp3', key: 'E' },
    { id: 6, song: '33.mp3', key: 'D' },
    { id: 7, song: '34.mp3', key: 'R' },
    { id: 8, song: '35.mp3', key: 'F' },
    { id: 9, song: '36.mp3', key: 'T' },
    { id: 10, song: '37.mp3', key: 'G' },
    { id: 11, song: '38.mp3', key: 'Y' },
    { id: 12, song: '39.mp3', key: 'H' },
    { id: 13, song: '40.mp3', key: 'U' },
    { id: 14, song: '41.mp3', key: 'J' },
    { id: 15, song: '42.mp3', key: 'I' },
    { id: 16, song: '43.mp3', key: 'K' },
    { id: 17, song: '44.mp3', key: 'L' },
    { id: 18, song: '45.mp3', key: 'Z' },
    { id: 19, song: '46.mp3', key: 'X' },
    { id: 20, song: '47.mp3', key: 'C' },
    { id: 21, song: '48.mp3', key: 'V' },
    { id: 22, song: '49.mp3', key: 'B' },
    { id: 23, song: '50.mp3', key: 'N' },
    { id: 24, song: '51.mp3', key: 'M' },
    { id: 25, song: '52.mp3', key: '0' },
    { id: 26, song: '53.mp3', key: '1' },
    { id: 27, song: '54.mp3', key: '2' },
    { id: 28, song: '55.mp3', key: '3' },
    { id: 29, song: '56.mp3', key: '4' },
    { id: 30, song: '57.mp3', key: '5' },
    { id: 31, song: '58.mp3', key: '6' },
    { id: 32, song: '59.mp3', key: '7' },
    { id: 33, song: '60.mp3', key: '8' },
    { id: 34, song: '61.mp3', key: '9' },
    { id: 35, song: '62.mp3', key: 'O' },
    { id: 36, song: '63.mp3', key: 'P' },
];

music.forEach(function(val) {
    let keyDiv = document.createElement('div');
    keyDiv.innerHTML = `<h2>${val.key}</h2>`;
    keyDiv.setAttribute('data-key', val.key);
    keyDiv.classList.add(val.id % 2 !== 0 ? 'upperkeys' : 'lowerkeys');
    container.appendChild(keyDiv);

    // टच इवेंट जोड़ना
    keyDiv.addEventListener('touchstart', function() {
        playSound(val.key);
    });
});

// ऑडियो प्लेयर्स के लिए वेरिएबल्स बनाते हैं
let q = new Audio('28.mp3');
let w = new Audio('29.mp3');
let e = new Audio('30.mp3');
let r = new Audio('31.mp3');
let t = new Audio('32.mp3');
let y = new Audio('33.mp3');
let u = new Audio('34.mp3');
let i = new Audio('35.mp3');
let o = new Audio('36.mp3');
let p = new Audio('37.mp3');
let a = new Audio('38.mp3');
let s = new Audio('39.mp3');
let d = new Audio('40.mp3');
let f = new Audio('41.mp3');
let g = new Audio('42.mp3');
let h = new Audio('43.mp3');
let j = new Audio('44.mp3');
let k = new Audio('45.mp3');
let l = new Audio('46.mp3');
let z = new Audio('47.mp3');
let x = new Audio('48.mp3');
let c = new Audio('49.mp3');
let v = new Audio('50.mp3');
let b = new Audio('51.mp3');
let n = new Audio('52.mp3');
let m = new Audio('53.mp3');
let zero = new Audio('54.mp3');
let one = new Audio('55.mp3');
let two = new Audio('56.mp3');
let three = new Audio('57.mp3');
let four = new Audio('58.mp3');
let five = new Audio('59.mp3');
let six = new Audio('60.mp3');
let seven = new Audio('61.mp3');
let eight = new Audio('62.mp3');
let nine = new Audio('63.mp3');

// ऑडियो प्ले करने के लिए एक फंक्शन बनाते हैं
function playSound(key) {
    let audio = null;
    switch (key.toUpperCase()) {
        case 'Q': audio = q; break;
        case 'W': audio = w; break;
        case 'E': audio = e; break;
        case 'R': audio = r; break;
        case 'T': audio = t; break;
        case 'Y': audio = y; break;
        case 'U': audio = u; break;
        case 'I': audio = i; break;
        case 'O': audio = o; break;
        case 'P': audio = p; break;
        case 'A': audio = a; break;
        case 'S': audio = s; break;
        case 'D': audio = d; break;
        case 'F': audio = f; break;
        case 'G': audio = g; break;
        case 'H': audio = h; break;
        case 'J': audio = j; break;
        case 'K': audio = k; break;
        case 'L': audio = l; break;
        case 'Z': audio = z; break;
        case 'X': audio = x; break;
        case 'C': audio = c; break;
        case 'V': audio = v; break;
        case 'B': audio = b; break;
        case 'N': audio = n; break;
        case 'M': audio = m; break;
        case '0': audio = zero; break;
        case '1': audio = one; break;
        case '2': audio = two; break;
        case '3': audio = three; break;
        case '4': audio = four; break;
        case '5': audio = five; break;
        case '6': audio = six; break;
        case '7': audio = seven; break;
        case '8': audio = eight; break;
        case '9': audio = nine; break;
    }
    if (audio) {
        audio.currentTime = 0; // अगर वही धुन बार-बार दबा रहे हैं तो रीस्टार्ट हो
        audio.play();
    }
}

// कीबोर्ड इवेंट लिसनर
window.addEventListener('keydown', function(elem) {
    playSound(elem.key);
});