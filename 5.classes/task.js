// Задача №1. Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state = this._state * 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
        return;
      }
      if (newState > 100) {
        this._state = 100;
        return;
      } 
       this._state = newState;
      }
  
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book"
  
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount, );
      this.type = "novel"
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic"
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective"
    }
  }
  
// Задача №2. Библиотека

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      let bookState = book.state;
      if (bookState > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let findedBook = this.books.find((element) => element[type] === value);
      if (findedBook === undefined) {
        return null;
      } else {
        return findedBook;
      }
    }
  
    giveBookByName(bookName) {
      let givenBook = this.findBookBy("name", bookName);
      if (givenBook === undefined) {
        return null;
      } else {
          // удаляем книгу (фильтр возвращает новый массив книг, у которых иное название)
        this.books = this.books.filter((element) => element.name !== bookName);
        return givenBook;
      }
    }
  }

  // Задача №3. Журнал успеваемости
  
  class Student {
    constructor(name) {
      this.name = name;
      this.subjects = {};
    }
  
    addMark(mark, subject) {
      if (mark < 1 || mark > 5) {
        let error = "Ошибка, оценка должна быть числом от 1 до 5"
        return error;
      } else {
        // иначе выполняется метод
        // предмета нет - создаем его
        if (!(subject in this.subjects)) {
          this.subjects[subject] = []
        }
        this.subjects[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (subject in this.subjects) {
        let sum = this.subjects[subject].reduce((sum, item) => sum + item);
        return sum / this.subjects[subject].length;
      } else {
        return "Несуществующий предмет"
      }
    }
  
    getAverage() {
      let sumLength = 0;
      let sumMark = 0;
      for (let subject in this.subjects) {
        sumMark += this.subjects[subject].reduce((sum, item) => sum + item);
        sumLength += this.subjects[subject].length;
      }
      return sumMark / sumLength;
    }
  
    exclude(reason) {
      delete this.subjects;
      this.excluded = reason;
    }
  }
  
  let student1 = new Student("Oleg");
  let student2 = new Student("Ann");
  let student3 = new Student("Victor");


  
 
  
 
  

  
  
 
