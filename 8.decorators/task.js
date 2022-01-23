// Задача 1. Усовершенствуйте кэширующий декоратор

function cachingDecoratorNew(func) {
  let cache = [];
  return function wrapper(...rest) {
    const key = rest.join(",");
    let index = cache.findIndex((element) => element.key === key);
    if (index !== -1) {   // если элемент найден
      console.log("Из кэша: " + cache[index].value);
      return "Из кэша: " + cache[index].value;
    }
    let result = func(...rest);
    cache.push({ key: key, value: result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result); 
    return "Вычисляем: " + result;
  }
}

// Задача 2. Debounce декоратор с моментальным вызовом

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = true;
  return function wrapper(...rest) {
    //Взведён ли флаг? Можно ли выполнить функцию синхронно?
    if (flag) {
      func(...rest);
      // Синхронный вызов произошёл - взводим флаг, то есть говорим, что пока синхронные вызовы не нужны 
      flag = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...rest);
     // Синхронный вызов произошёл - взводим флаг, то есть говорим, что пока синхронные вызовы не нужны 
      flag = true;
    }, ms);
  }
}

// Задача 3. Усовершенствуйте debounceDecoratorNew

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = true;
  function wrapper(...rest) {
    wrapper.count += 1;
    if (flag) {
      func(...rest);
      flag = false;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...rest);
      flag = true;
    }, ms);
  }
  wrapper.count = 0;
  wrapper.getCount = () => console.log("Количество вызовов: " + wrapper.count);
  return wrapper;
}
