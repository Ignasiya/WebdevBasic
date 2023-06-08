let name = prompt("Как тебя зовут друг?"); alert (`Привет, ${name}!`);
let age = +(prompt("Сколько тебе друг?"));
// let element = document.getElementById('el1');
// console.log(element);
// добавляем класс элементы
// element.classList.add('active');
// element.classList.remove('active');

switch (age) {
    case 18: {
        alert('Заходи друг не стесняйся');
        break;
    }        
    case 10: {
        alert('А кто за тебя уроки сделает? Иди учись');
        break;
    } 
    case 30: {
        alert('Тебе точно сюда надо? Иди спать');
        break;
    }        
    default: alert('Мне нечего тебе сказать');
}

// let count = 0;
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

