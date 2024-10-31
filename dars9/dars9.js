// console.log('running...');

// // 1. Foydalanuvchilar obyektini yaratish

let users = [
    {
        name: "Ali",
        age: 25,
        phone: +905432312,
        gmail: "gmail@gmail.com",
        favouriteHobbies: ['uyqu', 'dars', 'ovatlanish']


    },
    {
        name: "Vali",
        age: 26,
        phone: +998882955111,
        gmail: "gmail@gmail.com",
        favouriteHobbies: ['uyqu', 'dars', 'ovatlanish']


    },
    {
        name: "Eshmat",
        age: 27,
        phone: +998883270023,
        gmail: "gmail@gmail.com",
        favouriteHobbies: ["Kitob o'qish", "Krossvord yechish", "Coding"]


    },
    {
        name: "Bilol",
        age: 28,
        phone: +998882955111,
        gmail: "gmail@gmail.com",
        favouriteHobbies: ['uyqu', 'dars', 'ovatlanish']


    },
    {
        name: "Yusuf",
        age: 29,
        phone: +998883270023,
        gmail: "gmail@gmail.com",
        favouriteHobbies: ['uyqu', 'dars', 'ovatlanish']
    },
];

// // 2. Foydalanuvchilarni ketma-ketlikda chiqarish


users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} ${user.age} yoshda`);
    console.log(`${index + 1}. ${user.name} ${user.age} yoshda Kontaklari ${user.phone} ${user.gmail}`);
    console.log(`${index + 1}. ${user.name}ning yoqtirgan hobbiylari - ${user.favouriteHobbies.join(", ")}`);
});


// // 3. Foydalanuvchilardan 3-sini hobbiylarini o'zgartirish


users[2].favouriteHobbies = ['kitob oqish', 'IT yangiliklarni kuzatish', 'yugurish'];
console.log('3-foydalanuvchining yangi hobbiylari', users[2].favouriteHobbies);


// // 4. Oxirgi foydalanuvchini o'chirish


users.pop()
console.log('4-foydalanuvchi ochirildi', users);


// // 5. "Eshmat" ismli foydalanuvchini qidirish va "Teshmat" bilan almashtirish


// let foundUser = users.find(user => user.name === 'Eshmat');

// if (foundUser) {
//     console.log('Eshmat foydalanuvchi mavjud');
//     foundUser.name = 'Teshmat';
//     console.log(foundUser);
    
// } else {
//     console.log('Eshmat foydalanuvchi mavjud emas');
// }

// console.log("Yangilangan foydalanuvchilar ro'yxati:", users);



for (let i = 0; i < users.length; i++) {
    if (users[i].name === "Eshmat") {
        users[i] = {
            name: "Teshmat",
            age: 27,
            phone: +998883270023,
            gmail: "gmail@gmail.com",
            favouriteHobbies: ["Kitob o'qish", "Krossvord yechish", "Coding"]
        };
        break;
    }
}
console.log("Yangilangan foydalanuvchilar ro'yxati:", users);

// // 6. Yangi foydalanuvchini prompt orqali qo'shish


let newUser = {
    name: prompt("Yangi foydalanuvchi ismi:"),
    age: parseInt(prompt("Yangi foydalanuvchi yoshi:")),
    telephone: prompt("Yangi foydalanuvchi telefoni:"),
    email: prompt("Yangi foydalanuvchi elektron pochtasi:"),
    favouriteHobbies: prompt("Yangi foydalanuvchining hobbilari (vergul bilan ajrating):").split(", ")
};
users.push(newUser);
console.log("Yangi foydalanuvchi qo'shildi:", users);
