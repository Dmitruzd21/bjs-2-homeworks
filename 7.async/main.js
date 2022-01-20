// тут вы можете вызывать функции из task.js
let phoneAlarm = new AlarmClock();

//Вызываем будильник без указания id - получим ошибку
//phoneAlarm.addClock ("17:14", () => console.log("Пора вставать"));


// 1й будильник будет звонить множество раз за 1 мин
phoneAlarm.addClock("19:01", () => console.log("Пора вставать"), 1);


// 2й будильник звонит один раз
phoneAlarm.addClock("19:02", () => {
    console.log("Давай, вставай уже");
    phoneAlarm.printAlarms();
    phoneAlarm.removeClock(2);
    phoneAlarm.printAlarms();
}, 2);

// 3й будильник совсем останавливает будильник и чистит все звонки
phoneAlarm.addClock("19:03", () => {
    console.log("Ты все проспал! Больше нет смысла тебя будить!");
    phoneAlarm.stop();
    phoneAlarm.printAlarms();
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.printAlarms();  // распечатает 3 будильника

onsole.log("Идентификатор интервала: " + phoneAlarm.timerId);  // пока равен null
phoneAlarm.removeClock(3);
phoneAlarm.printAlarms();  // распечатает 2 будильника
phoneAlarm.removeClock(56);  // вернет false
phoneAlarm.getCurrentFormattedTime();
phoneAlarm.start();
console.log("Идентификатор интервала: " + phoneAlarm.timerId); // теперь будет определенное числовое значение


