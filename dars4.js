// ---------------------------------------------------------------- homework


let alisher = +prompt("Alisher, sizda qancha pul bor (so'mda kiriting)?");

const dollar = 11000.34;
const euro = 12354.03;

let samalyot = dollar * 500;
let mehmonxona = dollar * 250;
let sayr = euro * 120;

let jami = samolyot + mehmonxona + sayr;

if (alisher >= jami) {
    console.log('Oq yol, Alisher!');
} else {
    console.log('Alisher, ozgina sabr qilish kerak bolar ekan.');
}