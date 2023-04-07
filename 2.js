function greeting(name) {
    return console.log(`Привет, ${name}! Приятно познакомиться!`);
}

const inputStr = prompt('Введите ваше имя:'); 
greeting(inputStr);
