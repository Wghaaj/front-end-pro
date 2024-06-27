function showUserInformation() {
    let birthYear, city, favoriteSport;

    while (true) {
        birthYear = prompt("Введіть рік вашого народження:");
        if (birthYear === null) {
            alert("Шкода, що ви не захотіли ввести свій рік народження.");
            return;
        }
        birthYear = parseInt(birthYear);
        if (!isNaN(birthYear)) {
            break;
        }
        alert("Будь ласка, введіть коректний рік народження.");
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    while (true) {
        city = prompt("Введіть місто, де ви живете:");
        if (city === null) {
            alert("Шкода, що ви не захотіли ввести своє місто.");
            return;
        }
        if (city.trim() !== "") {
            break;
        }
        alert("Будь ласка, введіть коректне місто.");
    }

    while (true) {
        favoriteSport = prompt("Введіть ваш улюблений вид спорту:");
        if (favoriteSport === null) {
            alert("Шкода, що ви не захотіли ввести свій улюблений вид спорту.");
            return;
        }
        if (favoriteSport.trim() !== "") {
            break;
        }
        alert("Будь ласка, введіть коректний улюблений вид спорту.");
    }

    let message;
    if (city.toLowerCase() === "київ") {
        message = "Ти живеш у столиці України, Київ.";
    } else if (city.toLowerCase() === "вашингтон") {
        message = "Ти живеш у столиці США, Вашингтон.";
    } else if (city.toLowerCase() === "лондон") {
        message = "Ти живеш у столиці Великої Британії, Лондон.";
    } else {
        message = "Ти живеш у місті " + city + ".";
    }

    const sportsChampions = {
        "футбол": "Ліонель Мессі",
        "теніс": "Рафаель Надаль",
        "баскетбол": "Леброн Джеймс"
    };

    if (sportsChampions[favoriteSport.toLowerCase()]) {
        const championName = sportsChampions[favoriteSport.toLowerCase()];
        message += "\n\nКруто! Хочеш стати " + championName + "?";
    }

    alert(message + "\n\nВаш вік: " + age);
}

showUserInformation();
