let robot = {
    start: function () {
        console.log('salom menda qandaydir savolinggiz bormi ');
    },
    end: function () {
        console.log('xayr salomat boling');
    }
}




// --------------------------------------------------------------------------- homework

// 1. Kiritilgan summa (dollarda kiritiladi) o'zbek so'mda qancha bo'lishini anniqlab beruvchi dastur! 

// let summa = {
//     dollarda: +prompt('dollarda qancha puling bor'),
//     ozbek: function() {
//         return this.dollarda * 13000;
//     }    
// }

// console.log(summa.ozbek());


// 2. Istalgan Milni kiritganda kilometirda qancha bo'lishini chiqarib beruvchi dastur

// let mil = {
//     mil: +prompt('milni kiring'),
//     kilometrda : 1.60934,
//     kilometrdaQanchaBo: function() {
//         return this.mil * this.kilometrda;
//     }
// }

// console.log(mil.kilometrdaQanchaBo());


// 3. Baxolash sistemasi. Ball (0 dan 100gacha) kiritilganda 5 yoki 4 yoki 3 yoki qolib ketganini chiqaruvchi dastur.

// let baxo = {
//     ball: +prompt('necha ball oldingiz'),
//     baxolash: function() {
//         if (this.ball >= 90 && this.ball <= 100) {
//             // return 'Ball 5 ';
//             alert ('Ball 5')
//         } else if (this.ball >= 75 && this.ball < 90) {
//             // return 'Ball 4 ';
//             alert ('Ball 4')
//         } else if (this.ball >= 60 && this.ball < 75) {
//             // return 'Ball 3 ';
//             alert ('Ball 3')
//         } else {
//             // return 'Ball 0 dan 29gacha qolib ketgan';
//             alert ('qolib ketgansiz yaxshilab oqing')
//         }
//     }
// }

// console.log(baxo.baxolash());


// 4. Soat 9 dan past bo'lsa console.log ga 'ofis yopiq ' so'zi chiqsin agr soat 9 dan kotta bo'lsa 'offis ochiq ' sozi chiqsin

// const now = new Date();
// const hours = now.getHours();

// let soat = {
//     vaqt: hours,
//     soatniChiqaruvchi: function(a) {
//         if (this.vaqt >= a && this.vaqt <= 17) {
//             console.log('ofis ochiq');
            
//         } else {
//             console.log('ofis yopiq');
            
//         }
//     },
// }

// console.log(soat.soatniChiqaruvchi(9));


// 5. Soat 6dan 12gacha bo'lsa , console.log ga 'hayrli tong' soat 12dan kechki 18gacha bo'lsa Xayrli kun Aks xolda , Xayrli kech chiqarilsin


// const now = new Date();
// const hours = now.getHours();
// let kun = {

//     vaqt: hours,
//     soatniChiqaruvchi: function() {
//         if (this.vaqt >= 6 && this.vaqt <= 12) {
//             console.log('hayrli tong');
//         } else if (this.vaqt >= 12 && this.vaqt <= 18 ) {
//             console.log('xayrli kun');
//         } else console.log('xayrli kech');
//     }
// } 

// console.log(kun.soatniChiqaruvchi());
