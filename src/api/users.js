/**
 * Имитирует запрос.
 * @param {number} timeout Время "выполнения запроса".
 * @returns {Promise} Промис "запроса".
 */
function emulateRequest(timeout = 200) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, timeout);
  });
}

/**
 * Получает всех пользователей.
 * @returns {Promise} Промис запроса.
 * */
function getAll() {
  return emulateRequest().then(() => users);
}

export { getAll, };

const users = [
  {
    id: 1,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 2,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  // Копипаста для тестов ;)
  /*{
    id: 3,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 4,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 5,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 6,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 7,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 8,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 9,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 10,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 11,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 12,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 13,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 14,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 15,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 16,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 17,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 18,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 19,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 20,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 21,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 22,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 23,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 24,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 25,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 26,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 27,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },
  {
    id: 28,
    firstname: 'Иван',
    lastname: 'Мариев',
    age: 28,
  },
  {
    id: 29,
    firstname: 'Мария',
    lastname: 'Иванова',
    age: 30,
  },*/
];