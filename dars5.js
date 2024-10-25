// lessson

// for (let i = 2; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// console.log(" ");

// for (let r = 2; r <= 100; r++) {
//     if (r % 2 == 0 && r % 4 == 0) {
//         console.log(r);
//     }
// }

// let n = +prompt('raqam kiritng');

// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// let n = +prompt('raqam kiritng')
// let s = 1;

// for (let i = 1; i <= n; i++) {
//     s *= i;
// }
// console.log(s);

// let n = +prompt('raqam kiritng N')
// let m = +prompt('raqam kiritng M')



// if (n < m) {
//     for (n; n <= m; n++) {
//         console.log(n);
//     }
// } else {
//     for (n; n >= m; n--) {
//         console.log(n);
//     }
// }


// masala9

// function sum(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         sum += i * i; 
//     }
//     return sum;
// }

// let a = +prompt('raqam kiritng a')
// let b = +prompt('raqam kiritng b')

// if (a < b) {
//     console.log(`${a} dan ${b} gacha bo'lgan sonlarning kvadratlari yig'indisi: ${sum(a, b)}`);
// } else {
//     console.log("a soni b dan kichik bo'lishi kerak!");
// }



// k butun soni berilgan son tub yoki tub emasligini aniqlovchi programma tuzilsin jsda for orqali

// function isPrime(k) {
//     if (k <= 1) return false; 

//     for (let i = 2; i <= Math.sqrt(k); i++) {
//         if (k % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// let k = +prompt('son kiring')

// if (isPrime(k)) {
//     console.log(`${k} tub son.`);
// } else {
//     console.log(`${k} tub emas.`);
// }



// ----------------------------------------------------------------homework


//------------------------------------------------------------ masala1

// let k = +prompt('K son kiritng');
// let n = +prompt('N son kiritng');

// for (let i = 0; i < n; i++) {
//     console.log(k);
// }

//------------------------------------------------------------ masala2

// let a = +prompt('a son kiritng');
// let b = +prompt('b son kiritng');

// let count = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++
// }

// console.log(`a dan b gacha sonlar: ${count} ta`);


//------------------------------------------------------------ masala3

// let a = +prompt('a son kiritng');
// let b = +prompt('b son kiritng');

// let count = 0;

// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     count++
// }

// console.log(`a dan b gacha sonlar: ${count} ta`);

//------------------------------------------------------------ masala4

// function printCandyPrices(pricePerKg) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i + " kg konfet narxi:", i * pricePerKg + " so'm");
//     }
// }

// // Misol: 1 kg konfet narxi = 5000 so'm
// printCandyPrices(5000);  



//------------------------------------------------------------ masala5

// function printCandyPrices(pricePerKg) {
//     for (let i = 1; i <= 10; i++) {
//         console.log((i/10) + " kg konfet narxi:", (i / 10) *  pricePerKg + " so'm");
//     }
// }

// // Misol: 1 kg konfet narxi = 1000 so'm
// printCandyPrices(1000);  


//------------------------------------------------------------ masala6

// function Candy(Kg) {
//     for (let i = 12; i <= 20; i += 2) {
//         console.log((i/10) + " kg konfet narxi:", (i / 10) * Kg + " so'm");
//     }
// }

// // Misol: 1 kg konfet narxi = 1000 so'm
// Candy(1000);  

//------------------------------------------------------------ masala7

// let a = +prompt('a sonini kiritng')
// let b = +prompt('b sonini kiritng')
// let sum = 0;  // yig'indi

// for (let i = a; i <= b; i++) {
//     sum += i;  
// }

// console.log("Yig'indisi: " + sum);


//------------------------------------------------------------ masala8

// let a = +prompt('a sonini kiritng')
// let b = +prompt('b sonini kiritng')
// let product = 1;  

// for (let i = a; i <= b; i++) {
//     product *= i;  
// }

// console.log("Ko'paytmasi: " + product);


//------------------------------------------------------------ masala9

// let a = +prompt('a sonini kiritng')
// let b = +prompt('b sonini kiritng')
// let sumOfSquares = 0;

// for (let i = a; i <= b; i++) {
//     sumOfSquares += i * i;  
// }

// console.log("Kvadratlar yig'indisi: " + sumOfSquares);

//------------------------------------------------------------ masala10

// let n = +prompt('n soni')
// let sum = +prompt('yigindi')

// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;  
// }

// console.log("Yig'indisi: " + sum);


//------------------------------------------------------------ masala11


// let n = +prompt('n soni')
// let sum = +prompt('yigindi')

// for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;  
// }

// console.log("Yig'indisi: " + sum);


//------------------------------------------------------------ masala12

// let n = +prompt('n soni')
// let product = +prompt('kopaytma')

// for (let i = 1; i <= n; i++) {
//     product *= 1 + (i / 10);  // har bir ko'payuvchini qo'shish
// }

// console.log("Ko'paytma: " + product);


//------------------------------------------------------------ masala13

// let n = 5;  // n soni
// let sum = 0;  // yig'indi
// let sign = 1;  // ishoraning boshlang'ich qiymati

// for (let i = 1; i <= n; i++) {
//     sum += sign * (1 + (i / 10));  // ishora bilan qo'shiluvchini qo'shish
//     sign *= -1;  // ishorani almashish
// }

// console.log("Yig'indi: " + sum);


//------------------------------------------------------------ masala14

// let n = 5;  // n soni
// let sum = 0;  // yig'indi

// for (let i = 1; i <= n; i++) {
//     let term = 2 * i - 1;  
//     sum += term;  
//     console.log("Qo'shiluvchi: " + term + ", Natija: " + sum);
// }

// console.log("n² = " + sum);


//------------------------------------------------------------ masala15


// let a = 2;  // a soni
// let n = 4;  // n darajasi
// let power = 1;  // darajani hisoblash uchun

// for (let i = 1; i <= n; i++) {
//     power *= a;  // a ni ko'paytirish
// }

// console.log(a + " ning " + n + "-darajasi: " + power);
