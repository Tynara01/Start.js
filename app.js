// 1.Напишите программу, которая считает количество секунд в часе.

let seconsToMinute = 60;
let minutesToHour = 60;
let hour = seconsToMinute * minutesToHour;

console.log(hour);

// 2.Создайте переменную myNumber и присвойте ей значение 2022. Выведите значение этой переменной на экран с помощью метода alert.

let myNumber = 2022;

alert(myNumber);

// 3.Спросите имя пользователя с помощью метода prompt. Выведите сообщение на страницу с помощью document.write : “Рад знакомству {имя пользователя}!”.

let userName = prompt("What is your name?");

document.write(`Welcome, ${userName}!`);

// 4.Даны два числа a, b. Написать программу, которая считает среднее арифметическое двух чисел.

let a = 20;
let b = 5;
let result = (a + b) * 2;
console.log(result);

// 5.Спросите пользователя ввести любое число. Ваша задача вывести следующий по счету число.

let number = prompt("Write your number.");
number++;
alert(number);

// 6.6. Создайте объект описывающий пользователя, в данном объекте должны быть следующие ключи:
// - Имя
// - Возраст
// - Список друзей
// - Почтовый адрес
// - Электронный адрес

let user = {
  name: "Kevin",
  age: 29,
  friends: ["Mike", "Rob", "Robert"],
  postcode: 00022 - 99750,
  email: "bendson.kevin.@gmail.com",
};

console.log(user);

// 7.7. Создайте объект описывающий блог-пост на сайте:
// - Название поста
// - Автор поста
// - Дата публикации поста
// - Тело поста (содержит текст поста)
// - Картинка поста (содержит url картинки)
// - Теги поста

let blogPost = {
  title: "Sweets of the world",
  author: "Mary",
  publicarionDate: "22.05.2022",
  body: "A lot of people, both small and adults, love sweets and call themselves sweet tooth. But if you think about it, at present, almost half of the market products are various confectionery products.",
  img: "https://i.pinimg.com/564x/92/ae/7b/92ae7b771e15872ac33756bbfba09206.jpg",
  tags: ["chocolate", "cupcakes", "biscuit", "cakes"],
};

console.log(blogPost);

// 8.Создайте массив с именами пользователей.

let users = ["Tiffany", "Michael", "Colin"];

// 9.Создайте массив с url адресами на разные картинки.

let urlImages = [
  "https://i.pinimg.com/564x/6f/d4/bc/6fd4bc00876fe3231862c04c4c518dc0.jpg",
  "https://i.pinimg.com/564x/b1/d6/9a/b1d69aedef83457f12a13283db645300.jpg",
  "https://i.pinimg.com/564x/22/21/1e/22211eeccbe0638cc63b9aeb11217fe7.jpg",
];

// 10.Создайте массив содержащий объекты описывающие блог-посты (схема объектов идентична как в пункте 7.

let post = [
  {
    title: "Sweets of the world",
    author: "Mary",
    publicarionDate: "22.05.2022",
    body: "A lot of people, both small and adults, love sweets and call themselves sweet tooth. But if you think about it, at present, almost half of the market products are various confectionery products.",
    img: "https://i.pinimg.com/564x/92/ae/7b/92ae7b771e15872ac33756bbfba09206.jpg",
    tags: ["chocolate", "cupcakes", "biscuit", "cakes"],
  },

  {
    title: "Sweets of the world",
    author: "Mary",
    publicarionDate: "22.05.2022",
    body: "A lot of people, both small and adults, love sweets and call themselves sweet tooth. But if you think about it, at present, almost half of the market products are various confectionery products.",
    img: "https://i.pinimg.com/564x/92/ae/7b/92ae7b771e15872ac33756bbfba09206.jpg",
    tags: ["chocolate", "cupcakes", "biscuit", "cakes"],
  },
];
