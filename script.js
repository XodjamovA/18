let name = prompt(`Как вас зовут?`)
let money = 10000
let account
if (name === `Alex`) {
    account = +prompt(`Пароль`)
} else {
    alert(`Пользователь не найден`)
}

if (account === 7777) {
   money = +prompt(`Сколько обналичить`)
    
} else {
    alert(`Пароль не верный`)
}

if (money <= 10000) {
    console.log(money);
} else {
    alert(`Недостаточно средств`)
}




