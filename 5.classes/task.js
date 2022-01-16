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
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
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
      let givenBook = this.books.find((element) => element.name === bookName);;
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
      this.subjects = [];
    }
  
    addMark(mark, subject) {
      let subject1 = subject;
      if (mark < 1 || mark > 5) {
        let error = "Ошибка, оценка должна быть числом от 1 до 5"
        return error;
      } else {
        // иначе выполняется метод
        let subject = this.subjects.find((element) => element.subjectName === subject1);
        if (subject === undefined) {
          this.subjects.push(new Subject(subject1, mark));
        } else {
          subject.marks.push(mark);
        }
      }
    }

   getAverageBySubject(subject) {
    let subjectElement = this.subjects.find((element) => element.subjectName === subject);
    if (subjectElement === undefined) {
      let error = "Несуществующий предмет";
      return error;
    } else {
      // иначе выполняется метод
      let arrayOfMarks = subjectElement.marks;
      let sum = 0;
      for (let i = 0; i < arrayOfMarks.length; i++) {
        sum += arrayOfMarks[i];
      }
      let averageMark = sum / arrayOfMarks.length;
      return averageMark;
    }
  }
    
    getAverage() {
    // складываем массивы оценок по предметам в один общий массив:
    let generalArrayOfMarks1 = new Array;
    let generalArrayOfMarks2 = new Array;
    // проходимся по всем элементам (предметам)
    for (let i = 0; i < this.subjects.length; i++) {
      // у каждого элемента(предмета) получаем массив
      let element = this.subjects[i];
      let arrayOfElement = element.marks;
      // при помощи метода concat объединяем массивы
      generalArrayOfMarks1 = generalArrayOfMarks2.concat(arrayOfElement);
      generalArrayOfMarks2 = generalArrayOfMarks1;
    }
    // ищем сумму оценок  общего массива
    let sum = 0;
    for (let i = 0; i < generalArrayOfMarks2.length; i++) {
      sum += generalArrayOfMarks1[i];
    }
    // ищем среднее значение и сразу возвращаем его
    return sum / generalArrayOfMarks1.length;
  }

   exclude(reason) {
    delete this.subjects;
    this.excluded = reason;
  }
}
  
  class Subject {
    constructor(subjectName, mark) {
      this.subjectName = subjectName;
      this.marks = [mark];
    }
    
    set marks(marks) {
      this._marks = marks;
    }
  
    get marks() {
      return this._marks;
    }
  }
  
  let student1 = new Student("Oleg", "male", 37);
  let student2 = new Student("Ann", "female", 29);
  let student3 = new Student("Victor", "male", 21);


  
 
  
 
  

  
  
 
