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
        this.alarmCollection.push({id:id, timeHHMM:timeHHMM, callback:func});
      }
    }
  
    // удаляет определённый звонок
    removeClock(id) {
      let oldLengthOfAlarmCollection = this.alarmCollection.length;
      this.alarmCollection = this.alarmCollection.filter((element) => element.id !== id);
      let newLengthOfAlarmCollection = this.alarmCollection.length;
      return oldLengthOfAlarmCollection !== newLengthOfAlarmCollection;
    }
  
    // возвращает текущее время в строковом формате HH:MM.
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
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
  

