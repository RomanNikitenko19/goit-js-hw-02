//Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на содержание слов spam и sale.Если нашли зарещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

const checkForSpam = function (message) {
  message = message.toLowerCase();
  // console.log(message.incindexOf(`spam`));
  //1вариант
  // if (message.includes(`spam`) || message.includes(`sale`))
  //   return true

  //2 вариант
  if (message.indexOf(`spam`) >= 0 || message.indexOf(`sale`) >= 0) return true;
  return false;

  // //3вариант
  // return(message.includes(`spam`) || message.includes(`sale`)) ? true : folse



};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true