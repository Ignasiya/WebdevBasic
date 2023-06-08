let name = prompt("Введите имя"); alert (`Привет, ${name}!`);
let age = +prompt("Введите возраст");
// let element = document.getElementById('el1');
// console.log(element);
// добавляем класс элементы
// element.classList.add('active');
// element.classList.remove('active');

let count = 0;

function pleaseClick() {
    // alert('Ещё, ещё, ещё')
    let element = document.getElementById('el1');
    // count % 2 == 0 ? element.classList.add('active') : element.classList.remove('active');
    // count++;
    // contains вместо toggle
    element.classList.toggle('active');
}

function pleaseClickBtn2() {
    let element = document.getElementById('menz');
    element.classList.toggle('active');
}

let btn1 = document.getElementById('btn1');
console.log(btn1)
btn1.addEventListener('click', pleaseClick);

let btn2 = document.getElementById('btn2');
console.log(btn2)
btn2.addEventListener('click', pleaseClickBtn2);

