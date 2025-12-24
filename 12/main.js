function inputEmail() {
    const emailReg = /^[A-Za-z0-9.-]+@[A-Za-z.-]+\.[A-Za-z]{2,6}$/;
    while (true) {
        let email = prompt("Введите email:");
        if (email === null) {
            alert("Ввод email отменён.");
            return null;
        }
        email = email.trim();
        if (!email) {
            alert("Email не может быть пустым.");
            continue;
        }
        if (emailReg.test(email)) {
            alert("Email введен: " + email);
            return email;
        } else {
            alert("Неверный формат email.");
        }
    }
}
function inputCity() {
    const cityReg = /^[A-Za-zА-Яа-яЁё -]{2,}$/;
    while (true) {
        let city = prompt("Введите город:");
        if (city === null) {
            alert("Ввод города отменён.");
            return null;
        }
        city = city.trim();
          if (!city) {
            alert("Название города не может быть пустым.");
            continue;
        }
         if (city.length < 2) {
            alert("Название города должно содержать минимум 2 символа.");
            continue;
        }
        if (cityReg.test(city)) {
            alert("Город принят: " + city);
            return city;
        } else {
            alert("Ошибка: город должен содержать только буквы, пробелы или дефис и быть не короче 2 символов.");
        }
    }
}
const userEmail = inputEmail();
const userCity  = inputCity();
if (userEmail && userCity) {
    alert(`Данные пользователя: Email: ${userEmail}, Город: ${userCity}`);
}