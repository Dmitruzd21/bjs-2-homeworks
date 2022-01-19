// Задача №1. Будильник-колыбельная

class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    // добавляет новый звонок в коллекцию существующих
    addClock(timeHHMM, func, id) {
      if (id === undefined) {
        throw new Error("Невозможно идентифицировать будильник. Параметр id не передан")};
      let isAlarmWithTheSameId = this.alarmCollection.some((element) => element.id === id); // есть ли в коллекции хоть один будильник с указанным id?
        if (isAlarmWithTheSameId === true) {
        console.error("Будильник с таким id уже существует");
      } else {
        this.alarmCollection.push(new Alarm(id, timeHHMM, func));
      }
    }
  
    // удаляет определённый звонок
    removeClock(id) {
      let oldLenthOfAlarmCollection = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id);
      let newLengthOgAlarmCollection = this.alarmCollection.length;
      if (oldLenthOfAlarmCollection = newLengthOgAlarmCollection) {
        return false;
      } else {
        return true;
      }
    }
  
    // возвращает текущее время в строковом формате HH:MM.
    getCurrentFormattedTime() {
        let currentTime = new Date;
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let hourshh;
        if (hours < 10) {
          hourshh = `0${hours}`;
        } else {
          hourshh = `${hours}`;
        }
        let minutesmm;
        if (minutes < 10) {
          minutesmm = `0${minutes}`;
        } else {
          minutesmm = `${minutes}`;
        }
        console.log (`${hourshh}:${minutesmm}`)
        return `${hourshh}:${minutesmm}`;
      }
  
    // запускает все звонки
    start() {
      // а работает ли уже какой-то интервал?
      let checkClock = (element) => {
        if (element.time === this.getCurrentFormattedTime()) {
          element.callback();
        }
      };
      let enumerationOfAllAlarmsWithCheckClock = () => this.alarmCollection.forEach(checkClock);
      if (this.timerId === null) {
        this.timerId = setInterval(enumerationOfAllAlarmsWithCheckClock, 10000);
      }
    }
  
    // останавливает выполнение всех звонков
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  
    // печатает все звонки
    printAlarms() {
      console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
      this.alarmCollection.forEach((element) => console.log(`Будильник №${element.id} заведен на ${element.time}`));
    }
  
    // удаляет все звонки
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
  }
  
  class Alarm {
    constructor(id, time, callback) {
      this.id = id;
      this.time = time;
      this.callback = callback;
    }
  }


let phoneAlarm = new AlarmClock();
phoneAlarm.clearAlarms();
//phoneAlarm.addClock ("17:14", () => console.log("Пора вставать"));
phoneAlarm.addClock("19:01", () => console.log("Пора вставать"), 1);
phoneAlarm.printAlarms();
phoneAlarm.addClock("19:02", () => console.log("Давай, вставай уже"), 2);
phoneAlarm.addClock("19:03", () => console.log("Давай, вставай уже"), 3);
console.log("Идентификатор интервала: " + phoneAlarm.timerId);
phoneAlarm.removeClock(3);
phoneAlarm.printAlarms();
phoneAlarm.removeClock(56);
phoneAlarm.getCurrentFormattedTime();
phoneAlarm.start();
console.log("Идентификатор интервала: " + phoneAlarm.timerId);
//phoneAlarm.stop();
//console.log("Идентификатор интервала: " + phoneAlarm.timerId);
//phoneAlarm.clearAlarms();
//phoneAlarm.printAlarms();
