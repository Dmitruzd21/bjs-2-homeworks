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

function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
