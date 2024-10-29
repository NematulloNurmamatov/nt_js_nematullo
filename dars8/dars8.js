// console.log(movies);

// movies.forEach(m, i) {
//     console.log(movies.description);

// }


// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i],description);
// }










// ------------------------------------------------------------------ homework


// --------------------------------------------------------------- masal 1

// const mahsulotlar = [
//     { nomi: "Smartfon", narxi: 3000000, soni: 25 },
//     { nomi: "Noutbuk", narxi: 7500000, soni: 15 },
//     { nomi: "Televizor", narxi: 4500000, soni: 10 },
//     { nomi: "Muzlatgich", narxi: 6000000, soni: 8 },
//     { nomi: "Kir yuvish mashinasi", narxi: 5000000, soni: 12 },
//     { nomi: "Mikroto'lqinli pech", narxi: 1200000, soni: 30 },
//     { nomi: "Changyutgich", narxi: 2000000, soni: 20 },
//     { nomi: "Konditsioner", narxi: 8000000, soni: 5 },
//     { nomi: "Daftar", narxi: 10000, soni: 500 },
//     { nomi: "Ruchka", narxi: 3000, soni: 1000 }
// ];

// mahsulotlar.forEach(mahsulot => {
//     console.log(`Mahsulot nomi: ${mahsulot.nomi}, Narxi: ${mahsulot.narxi} so'm, Soni: ${mahsulot.soni}`);
// });


// --------------------------------------------------------------- masal 2



// const mahsulotlar2 = [
//     { nomi: "Smartfon", narxi: 3000000, soni: 25 },
//     { nomi: "Noutbuk", narxi: 7500000, soni: 15 },
// ];

// mahsulotlar2.forEach(mahsulot => {
//     console.log(`Mahsulot nomi: ${mahsulot.nomi}, Narxi: ${mahsulot.narxi} so'm, Soni: ${mahsulot.soni}`);
// });

// function addToProducts() {
//     let nomi =  prompt('mahsulot nomi');
//     let narxi = +prompt('narxi');
//     let soni = +prompt('soni');

//     if (nomi && narxi && soni) {
//         mahsulotlar2.push({nomi, narxi, soni});
//         console.log(`Mahsulot nomi: ${nomi}, Narxi: ${narxi} so'm, Soni: ${soni} ta  qo'shildi. Jami: ${mahsulotlar2.length}`);
//     }
//     else {
//         console.log('to\'liq malumot kiring');
//     }
// }


// --------------------------------------------------------------- masal 3


// Mahsulotlar ro'yxati
const mahsulotlar = [
    { nomi: "iPhone", narxi: 12000000, soni: 3 },
    { nomi: "Samsung Galaxy", narxi: 9000000, soni: 5 },
    { nomi: "Noutbuk", narxi: 7500000, soni: 10 },
    { nomi: "Televizor", narxi: 4500000, soni: 4 },
    { nomi: "Muzlatgich", narxi: 6000000, soni: 2 },
    { nomi: "Kir yuvish mashinasi", narxi: 5000000, soni: 6 },
    { nomi: "Mikroto'lqinli pech", narxi: 1200000, soni: 7 },
    { nomi: "Changyutgich", narxi: 2000000, soni: 8 },
    { nomi: "Konditsioner", narxi: 8000000, soni: 3 },
    { nomi: "Daftar", narxi: 10000, soni: 50 }
];

const savatcha = [];

function mahsulotSotibOlish() {
    while (true) {
        const nomi = prompt("Qanday mahsulot sotib olmoqchisiz? (Chiqish uchun bo'sh qoldiring)");

        if (!nomi) break;

        const mahsulot = mahsulotlar.find(m => m.nomi.toLowerCase() === nomi.toLowerCase());

        if (mahsulot) {
            const miqdor = parseInt(prompt(`${mahsulot.nomi} mahsulotidan nechta olmoqchisiz?`), 10);

            if (miqdor > 0 && miqdor <= mahsulot.soni) {
                const savatchaMahsulot = savatcha.find(m => m.nomi === mahsulot.nomi);

                if (savatchaMahsulot) {
                    savatchaMahsulot.soni += miqdor;
                } else {
                    savatcha.push({ nomi: mahsulot.nomi, narxi: mahsulot.narxi, soni: miqdor });
                }

                mahsulot.soni -= miqdor;
                console.log(`${miqdor} ta ${mahsulot.nomi} savatchaga qo'shildi.`);
            } else {
                console.log(`Noto'g'ri miqdor kiritildi yoki mahsulot yetarli emas.`);
            }
        } else {
            console.log("Bunday mahsulot topilmadi.");
        }
    }

    console.log("\nSotib olingan mahsulotlar:");
    savatcha.forEach(m => {
        console.log(`Mahsulot: ${m.nomi}, Narxi: ${m.narxi} so'm, Soni: ${m.soni} ta`);
    });

    console.log("\nQolgan mahsulotlar:");
    mahsulotlar.forEach(m => {
        console.log(`Mahsulot: ${m.nomi}, Narxi: ${m.narxi} so'm, Qolgan soni: ${m.soni} ta`);
    });
}

document.getElementById("sotib-olish").addEventListener("click", mahsulotSotibOlish);
