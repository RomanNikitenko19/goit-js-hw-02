const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) return true;
  return false;
};

const isLoginUnique = function (allLogins, login) {
  for (let loginElem of allLogins) {
    if (loginElem === login) return false;
  }
  return true
};

const addLogin = function (allLogins, login) {
  isLoginValid(login)
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов'
  } else {
    if (!isLoginUnique(allLogins, login)) return 'Такой логин уже используется!';

      allLogins.push(login);
      return 'Логин успешно добавлен!';

  }
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'