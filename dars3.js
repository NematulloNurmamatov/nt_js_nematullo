// ----------------------------------------------------------------lesson

// let bola = +prompt('yoshni kiritng');

// if (bola > 0 && bola <= 3) {
//     alert('siz chaqaloqsiz');
// } else if (bola > 3 && bola <= 7) {
//     alert('siz godaksiz');
// } else if (bola > 7 && bola <= 12) {
//     alert('siz bolasiz');
// } else if (bola > 12 && bola <= 18) {
//     alert('siz ospirin');
// } else if (bola > 18 && bola <= 21) {
//     alert('siz osmirnsz');
// } else if (bola > 22) {
//     alert('siz erkak');
// }


// let baho = +prompt('bahoni kiritng')

// switch (baho) {
//     case 1:
//         console.log('yomon');
//         break;
//     case 2:
//         console.log('qoniqarsiz');
//         break;
//     case 3:
//         console.log('qoniqarli');
//         break;
//     case 4:
//         console.log('yaxshi');
//         break;
//     case 5:
//         console.log('alo');
//         break;
//     default:
//         console.log('bunday baho yoq');
//         break;
// }


// ---------------------------------------------------------------- homework


// ------------------------------------------------------------- masala1


// let day = +prompt('raqam kiriting');

// switch (day) {
//     case 1:
//         console.log(Monday);
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('xato');
//         break;
// }




// ------------------------------------------------------------- masala2

// let baho = +prompt('bahoni kiritng')

// switch (baho) {
//     case 1:
//         console.log('yomon');
//         break;
//     case 2:
//         console.log('qoniqarsiz');
//         break;
//     case 3:
//         console.log('qoniqarli');
//         break;
//     case 4:
//         console.log('yaxshi');
//         break;
//     case 5:
//         console.log('alo');
//         break;
//     default:
//         console.log('bunday baho yoq');
//         break;
// }

// ------------------------------------------------------------- masala3

// let oy = +prompt('oyni kiritng')

// switch (oy) {
//     case 1:
//         console.log('qish');
//         break;
//     case 2:
//         console.log('qish');
//         break;
//     case 3:
//         console.log('bahor');
//         break;
//     case 4:
//         console.log('bahor');
//         break;
//     case 5:
//         console.log('bahor');
//         break;
//     case 6:
//         console.log('yoz');
//         break;
//     case 7:
//         console.log('yoz');
//         break;
//     case 8:
//         console.log('yoz');
//         break;
//     case 9:
//         console.log('kuz');
//         break;
//     case 10:
//         console.log('kuz');
//         break;
//     case 11:
//         console.log('kuz');
//         break;
//     case 12:
//         console.log('qish');
//         break;

//     default:
//         console.log('xato');
//         break;
// }




// ---------------------------------------------------------------- masala4

// function getDaysInMonth(month, year) {
//     switch (month) {
//         case 1: // Yanvar
//         case 3: // Mart
//         case 5: // May
//         case 7: // Iyul
//         case 8: // Avgust
//         case 10: // Oktyabr
//         case 12: // Dekabr
//             return 31; // Ushbu oylarda 31 kun bor
//         case 4: // Aprel
//         case 6: // Iyun
//         case 9: // Sentabr
//         case 11: // Noyabr
//             return 30; // Ushbu oylarda 30 kun bor
//         case 2: // Fevral
//             // Kabisa yilini aniqlash
//             if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//                 return 29; // Kabisa yilida 29 kun
//             } else {
//                 return 28; // Oddiy yilda 28 kun
//             }
//         default:
//             return "Noto'g'ri oy raqami. 1-12 orasidagi raqam kiriting.";
//     }
// }


// let month = +prompt('oy');
// let year = +prompt('yil');

// console.log(getDaysInMonth(month, year)); // "29" natijasi chiqadi (2024 kabisa yili)







// ----------------------------------------------------------------masala5



// function arithmeticOperation(a, b, operation) {
//     switch (operation) {
//         case 1: // Qo'shish
//             return a + b;
//         case 2: // Ayirish
//             return a - b;
//         case 3: // Bo'lish
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return "Bo'lish uchun b nol bo'lmasligi kerak!";
//             }
//         case 4: // Ko'paytirish
//             return a * b;
//         default:
//             return "Noto'g'ri amal. 1-4 orasidagi qiymat kiriting.";
//     }
// }
// let a = 10.5;
// let b = 2;
// let operation = 1;
// console.log(arithmeticOperation(a, b, operation));




// ----------------------------------------------------------------masala6

// function convertLength(unit, length) {
//     switch (unit) {
//         case 1: // Desimetr
//             return length / 10; // Desimetrdan metrga
//         case 2: // Kilometr
//             return length * 1000; // Kilometrdan metrga
//         case 3: // Metr
//             return length; // Metr o'zi
//         case 4: // Millimeter
//             return length / 1000; // Millimetrdan metrga
//         case 5: // Santimetr
//             return length / 100; // Santimetrdan metrga
//         default:
//             return "Noto'g'ri birlik. 1-5 orasidagi raqam kiriting.";
//     }
// }

// // Misol uchun
// let unit = 2; // Kilometr
// let length = 5; // 5 kilometr
// console.log(convertLength(unit, length)); // "5000" natijasi chiqadi


// ----------------------------------------------------------------masala7

// function convertWeight(unit, weight) {
//     switch (unit) {
//         case 1: // Kilogramm
//             return weight; // Kilogramm o'zi
//         case 2: // Milligramm
//             return weight / 1e6; // Milligrammdan kilogrammga
//         case 3: // Gramm
//             return weight / 1000; // Grammdan kilogrammga
//         case 4: // Tonna
//             return weight * 1000; // Tonnadan kilogrammga
//         case 5: // Sentner
//             return weight * 100; // Sentnerdan kilogrammga
//         default:
//             return "Noto'g'ri birlik. 1-5 orasidagi raqam kiriting.";
//     }
// }

// // Misol uchun
// let unit = 3; // Gramm
// let weight = 1500; // 1500 gramm
// console.log(convertWeight(unit, weight)); // "1.5" natijasi chiqadi


// ----------------------------------------------------------------masala8

// function getDate(D, M) {
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if (M < 1 || M > 12 || D < 1 || D > daysInMonth[M - 1]) {
//         return "Noto'g'ri sanalar.";
//     }

//     return `Berilgan sana: ${D} ${M} oyida.`;
// }

// // Misol uchun
// let D = 15; // Kun
// let M = 5; // Oy
// console.log(getDate(D, M)); // "Berilgan sana: 15 5 oyida."


// ----------------------------------------------------------------masala9

// function getNextDate(D, M) {
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if (M < 1 || M > 12 || D < 1 || D > daysInMonth[M - 1]) {
//         return "Noto'g'ri sanalar.";
//     }

//     if (D < daysInMonth[M - 1]) {
//         return `Keyingi sana: ${D + 1} ${M} oyida.`;
//     } else if (M === 12) {
//         return `Keyingi sana: 1 1 oyida.`; // Yil o'zgarishi
//     } else {
//         return `Keyingi sana: 1 ${M + 1} oyida.`;
//     }
// }

// // Misol uchun
// let D = 28; // Kun
// let M = 2; // Oy
// console.log(getNextDate(D, M)); // "Keyingi sana: 1 3 oyida."


// ----------------------------------------------------------------masala10

// function robotPosition(direction, command) {
//     let x = 0; // G'arb va Sharq uchun
//     let y = 0; // Shimol va Janub uchun

//     // Yo'nalishlarni belgilash
//     switch (direction) {
//         case 's': // Shimol
//             y += 1;
//             break;
//         case 'J': // Janub
//             y -= 1;
//             break;
//         case 'q': // Sharq
//             x += 1;
//             break;
//         case 'g': // G'arb
//             x -= 1;
//             break;
//         default:
//             return "Noto'g'ri yo'nalish.";
//     }

//     // Komanda bajarish
//     switch (command) {
//         case 0: // Harakatni davom ettirish
//             break;
//         case 1: // Chapga burilish
//             if (direction === 's') direction = 'g';
//             else if (direction === 'J') direction = 'q';
//             else if (direction === 'q') direction = 's';
//             else if (direction === 'g') direction = 'J';
//             break;
//         case 2: // O'ngga burilish
//             if (direction === 's') direction = 'q';
//             else if (direction === 'J') direction = 'g';
//             else if (direction === 'q') direction = 'J';
//             else if (direction === 'g') direction = 's';
//             break;
//         default:
//             return "Noto'g'ri komanda.";
//     }

//     // Yangi holatni qaytarish
//     return `Robot holati: x = ${x}, y = ${y}, yo'nalish = ${direction}`;
// }

// // Misol uchun
// let direction = 's'; // Shimol
// let command = 1; // Chapga burilish
// console.log(robotPosition(direction, command)); // "Robot holati: x = 0, y = 1, yo'nalish = g"


// ----------------------------------------------------------------masala11

// function getLocatorState(initialDirection, commands) {
//     const directions = ['s', 'q', 'J', 'g']; // Shimol, Sharq, Janub, G'arb
//     let currentDirectionIndex = directions.indexOf(initialDirection);

//     commands.forEach(command => {
//         switch (command) {
//             case 0: // O'ngga burilish
//                 currentDirectionIndex = (currentDirectionIndex + 1) % 4;
//                 break;
//             case 1: // Chapga burilish
//                 currentDirectionIndex = (currentDirectionIndex + 3) % 4; // 3 ga qo'shib chapga burilish
//                 break;
//             case 2: // 180º burilish
//                 currentDirectionIndex = (currentDirectionIndex + 2) % 4;
//                 break;
//             default:
//                 console.log("Noto'g'ri komanda.");
//         }
//     });

//     return `Lakat holati: ${directions[currentDirectionIndex]}`;
// }

// // Misol uchun
// let initialDirection = 's'; // Boshlang'ich holat
// let commands = [1, 0]; // Chapga burilish, O'ngga burilish
// console.log(getLocatorState(initialDirection, commands)); // "Lakat holati: J"


// ----------------------------------------------------------------masala12

// function calculateCircleProperties(element, value) {
//     const pi = 3.14;

//     switch (element) {
//         case 1: // Radius R
//             let R = value;
//             return {
//                 diameter: 2 * R,
//                 length: 2 * pi * R,
//                 area: pi * R * R
//             };
//         case 2: // Diametr D
//             let D = value;
//             let R1 = D / 2;
//             return {
//                 radius: R1,
//                 length: 2 * pi * R1,
//                 area: pi * R1 * R1
//             };
//         case 3: // Uzunlik L
//             let L = value;
//             let R2 = L / (2 * pi);
//             return {
//                 radius: R2,
//                 diameter: 2 * R2,
//                 area: pi * R2 * R2
//             };
//         case 4: // Yuzasi S
//             let S = value;
//             let R3 = Math.sqrt(S / pi);
//             return {
//                 radius: R3,
//                 diameter: 2 * R3,
//                 length: 2 * pi * R3
//             };
//         default:
//             return "Noto'g'ri element. 1-4 orasidagi raqam kiriting.";
//     }
// }

// // Misol uchun
// let element = 1; // Radius
// let value = 5; // R = 5
// console.log(calculateCircleProperties(element, value)); 
// // { diameter: 10, length: 31.4, area: 78.5 }


// ----------------------------------------------------------------masala13

// function calculateIsoscelesTriangleProperties(element, value) {
//     switch (element) {
//         case 1: // Katet a
//             let a = value;
//             let c = a * Math.sqrt(2); // Gipotenuza
//             let h = c / 2; // Baladlik
//             let S = (a * h) / 2; // Yuzasi
//             return { hypotenuse: c, height: h, area: S };
//         case 2: // Gipotenuza c
//             let c1 = value;
//             let a1 = c1 / Math.sqrt(2); // Katet
//             let h1 = c1 / 2; // Baladlik
//             let S1 = (a1 * h1) / 2; // Yuzasi
//             return { cathetus: a1, height: h1, area: S1 };
//         case 3: // Baladlik h
//             let h2 = value;
//             let c2 = h2 * 2; // Gipotenuza
//             let a2 = c2 / Math.sqrt(2); // Katet
//             let S2 = (a2 * h2) / 2; // Yuzasi
//             return { cathetus: a2, hypotenuse: c2, area: S2 };
//         case 4: // Yuzasi S
//             let S3 = value;
//             let a3 = Math.sqrt(2 * S3); // Katet
//             let c3 = a3 * Math.sqrt(2); // Gipotenuza
//             let h3 = c3 / 2; // Baladlik
//             return { cathetus: a3, hypotenuse: c3, height: h3 };
//         default:
//             return "Noto'g'ri element. 1-4 orasidagi raqam kiriting.";
//     }
// }

// // Misol uchun
// let element = 1; // Katet
// let value = 5; // Katet = 5
// console.log(calculateIsoscelesTriangleProperties(element, value)); 
// // { hypotenuse: 7.0710678118654755, height: 3.5355339059327378, area: 8.839999999999998 }


// ----------------------------------------------------------------masala14

// function calculateEquilateralTriangleProperties(element, value) {
//     const sqrt3 = Math.sqrt(3);

//     switch (element) {
//         case 1: // Tomoni a
//             let a = value;
//             let R1 = (a * sqrt3) / 6; // Ichki aylananing radiusi
//             let R2 = 2 * R1; // Tashqi aylananing radiusi
//             let S = (Math.sqrt(3) * a * a) / 4; // Yuzasi
//             return { innerRadius: R1, outerRadius: R2, area: S };
//         case 2: // Ichki chizilgan aylananing radiusi R1
//             let R1_ = value;
//             let a1 = (6 * R1_) / sqrt3; // Tomoni a
//             let R2_ = 2 * R1_; // Tashqi aylananing radiusi
//             let S1 = (Math.sqrt(3) * a1 * a1) / 4; // Yuzasi
//             return { side: a1, outerRadius: R2_, area: S1 };
//         case 3: // Tashqi chizilgan aylananing radiusi R2
//             let R2_1 = value;
//             let R1_1 = R2_1 / 2; // Ichki aylananing radiusi
//             let a2 = (6 * R1_1) / sqrt3; // Tomoni a
//             let S2 = (Math.sqrt(3) * a2 * a2) / 4; // Yuzasi
//             return { side: a2, innerRadius: R1_1, area: S2 };
//         case 4: // Yuzasi S
//             let S3 = value;
//             let a3 = Math.sqrt((4 * S3) / Math.sqrt(3)); // Tomoni a
//             let R1_2 = (a3 * sqrt3) / 6; // Ichki aylananing radiusi
//             let R2_2 = 2 * R1_2; // Tashqi aylananing radiusi
//             return { side: a3, innerRadius: R1_2, outerRadius: R2_2 };
//         default:
//             return "Noto'g'ri element. 1-4 orasidagi raqam kiriting.";
//     }
// }

// // Misol uchun
// let element = 1; // Tomoni a
// let value = 6; // a = 6
// console.log(calculateEquilateralTriangleProperties(element, value)); 
// // { innerRadius: 1.1547005383792517, outerRadius: 2.3094010767585035, area: 15.588457268119896 }


// ----------------------------------------------------------------masala15

// function getCardInfo(value, type) {
//     const cardTypes = ['g\'isht', 'olma', 'chillak', 'qarg\'a'];
//     let cardName;

//     if (value >= 6 && value <= 10) {
//         cardName = value.toString(); // Oddiy karta qiymati
//     } else if (value === 11) {
//         cardName = "valet"; // 11 - valet
//     } else if (value === 12) {
//         cardName = "dama"; // 12 - dama
//     } else if (value === 13) {
//         cardName = "qirol"; // 13 - qirol
//     } else if (value === 14) {
//         cardName = "tuz"; // 14 - tuz
//     } else {
//         return "Noto'g'ri karta qiymati. 6-14 orasidagi raqam kiriting.";
//     }

//     return `${cardName} ${cardTypes[type - 1]}`; // Karta turi
// }

// // Misol uchun
// let


// ----------------------------------------------------------------masala16


// function ageInWords(age) {
//     if (age < 20 || age > 69) {
//         return "Noto'g'ri yosh. 20-69 orasidagi raqam kiriting.";
//     }

//     const ones = [
//         '', 'bir', 'ikki', 'uch', "to'rt", 'besh', 'olti', 'yetti', 'sakkiz', "to'qqiz"
//     ];
//     const tens = [
//         '', 'yigirma', 'yettinchi', "o'ttiz", 'qirq', 'ellik', 'oltmish', 'yetmish'
//     ];

//     let result = '';

//     if (age >= 20 && age < 30) {
//         result = tens[2] + ' ' + ones[age - 20];
//     } else if (age >= 30 && age < 40) {
//         result = tens[3] + ' ' + ones[age - 30];
//     } else if (age >= 40 && age < 50) {
//         result = tens[4] + ' ' + ones[age - 40];
//     } else if (age >= 50 && age < 60) {
//         result = tens[5] + ' ' + ones[age - 50];
//     } else if (age >= 60 && age < 70) {
//         result = tens[6] + ' ' + ones[age - 60];
//     }

//     return result.trim() + ' yosh';
// }

// // Misol uchun
// console.log(ageInWords(23)); // "yigirma uch yosh"
// console.log(ageInWords(45)); // "qirq besh yosh"
// console.log(ageInWords(67)); // "oltmish yetti yosh"
// console.log(ageInWords(75)); // "Noto'g'ri yosh. 20-69 orasidagi raqam kiriting."

