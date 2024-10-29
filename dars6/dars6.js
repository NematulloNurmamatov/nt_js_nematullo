// ------------------------------------------------------------------------ lesson


// function login() {
//     let user = prompt('user name')
//     let parol = +prompt('parol')
// }


// function login(username, password) {

//     let Username = prompt('username')
//     let Password = prompt('password')


//     if (username === Username && password === Password) {
//         alert("Xush kelibsiz!");
//     } else {
//         alert("Noto'g'ri username yoki parol. Iltimos, qayta urinib ko'ring.");
//     }
// }

// login("admin", "123456"); 
// login("user", "wrongpassword"); 


// function user(a, b) {
//     let name = prompt('username')   
//     let pass = prompt('username')   

//     if (a === name && b === pass) {
//         alert("Xush kelibsiz!")
//     }
//     else {
//         alert("Noto'g'ri username yoki parol. Iltimos, qayta urinib ko'ring.");
//     }
// }

// user("admin", "1234");



// function isTub(k) {
//     if (k <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(k); i++) {
//         if (k % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// let k = +prompt('son kiring')

// if (isTub(k)) {
//     console.log(`${k} tub son.`);
// } else {
//     console.log(`${k} tub emas.`);
// }


// ------------------------------------------------------------------------ homework


// ------------------------------------------------------------ masala1

// function timeFromStartOfDay(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const remainingSeconds = seconds % 3600;
//     console.log(`Kun boshidan ${hours} soat va ${remainingSeconds} sekund o'tdi.`);
// }

// // Misol:
// timeFromStartOfDay(5000);  // Kun boshidan 1 soat va 1400 sekund o'tdi.


// ------------------------------------------------------------ masala2

// function isDigitsUnique(num) {
//     const str = num.toString();
//     if (str.length === 3) {
//         return str[0] !== str[1] && str[1] !== str[2] && str[0] !== str[2];
//     } else {
//         console.log("Son uch xonali bo'lishi kerak.");
//     }
// }

// // Misol:
// console.log(isDigitsUnique(123));  // true
// console.log(isDigitsUnique(122));  // false


// ------------------------------------------------------------ masala3

// function countPositivesAndNegatives(a, b, c) {
//     const nums = [a, b, c];
//     let positiveCount = 0;
//     let negativeCount = 0;

//     nums.forEach(num => {
//         if (num > 0) positiveCount++;
//         else if (num < 0) negativeCount++;
//     });

//     console.log(`Musbat sonlar: ${positiveCount}, Manfiy sonlar: ${negativeCount}`);
// }

// // Misol:
// countPositivesAndNegatives(3, -1, -5);  // Musbat sonlar: 1, Manfiy sonlar: 2


// ------------------------------------------------------------ masala4

// function dayOfWeek(n) {
//     const days = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
//     if (n >= 1 && n <= 7) {
//         console.log(days[n - 1]);
//     } else {
//         console.log("Iltimos, 1 dan 7 gacha son kiriting.");
//     }
// }

// // Misol:
// dayOfWeek(3);  // Chorshanba
// dayOfWeek(8);  // Iltimos, 1 dan 7 gacha son kiriting.


// ------------------------------------------------------------ masala5

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// // Misol:
// console.log(factorial(5));  // 120


// ------------------------------------------------------------ masala6


function kirish() {
    let username = prompt("Login kiriting");
    let password = prompt("Password kiriting");
    let myUserName = "ID2152155";
    let myUserPassword = "12345";
    if (username == myUserName && password == myUserPassword)
        alert("Xush kelibsiz!");
    else alert("Xato")
}

// ------------------------------------------------------------ masala7

// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         console.log("FIZZBUZZ");
//     } else if (num % 3 === 0) {
//         console.log("FIZZ");
//     } else if (num % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(num);
//     }
// }

// // Misol:
// fizzBuzz(15);  // FIZZBUZZ
// fizzBuzz(9);   // FIZZ
// fizzBuzz(10);  // Buzz
// fizzBuzz(7);   // 7
