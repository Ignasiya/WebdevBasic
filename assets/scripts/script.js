let name = prompt("Как тебя зовут друг?"); alert (`Привет, ${name}!`);
let age = +(prompt("Сколько тебе друг?"));
// let element = document.getElementById('el1');
// console.log(element);
// добавляем класс элементы
// element.classList.add('active');
// element.classList.remove('active');

switch (age) {
    case ((age >= 0 && age <= 6) ? age : -1): {
        alert('Ты ещё читать не умеешь малютка');
        break;
    } 
    case ((age >= 19 && age <= 30) ? age : -1): {
        alert('Заходи друг не стесняйся');
        break;
    }        
    case ((age >= 7 && age <= 18) ? age : -1): {
        alert('А кто за тебя уроки сделает? Иди учись');
        break;
    } 
    case ((age >= 30 && age <= 60) ? age : -1): {
        alert('Тебе точно сюда надо? Иди спать');
        break;
    }        
    default: alert('Мне нечего тебе сказать');
}

// let count = 0;
function pleaseClick() {
    // alert('Ещё, ещё, ещё')
    let element1 = document.getElementById('el1');
    let element2 = document.getElementById('menz');
    // count % 2 == 0 ? element.classList.add('active') : element.classList.remove('active');
    // count++;
    // contains вместо toggle
    element1.classList.toggle('active1');
    element2.classList.toggle('active2');
}

function pleaseClickBtn2() {
    let element = document.getElementById('limen');
    element.classList.toggle('active3');
}

let btn1 = document.getElementById('btn1');
console.log(btn1)
btn1.addEventListener('click', pleaseClick);

let btn2 = document.getElementById('btn2');
console.log(btn2)
btn2.addEventListener('click', pleaseClickBtn2);

