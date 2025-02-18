// Функция asyncAuth принимает callback, в который может
// быть передана ошибка (первым аргументом) и данные
// с бэкэнда (вторым аргументом)
// asyncAuth((error, data)=>{})

// Вам нужно реализовать функцию `auth()`,
// которая вызывает `asyncAuth()`, но возвращает Promise.

function auth() {
  return new Promise((resolve, reject) => {
    asyncAuth((error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
}

// Функция tryAuth использует auth и, в случае ошибки, совершает n дополнительных попыток.
// В случае, если все попытки провалились - вернуть последнюю ошибку.

async function tryAuth(n) {
  try {
    const response = await auth();
    return response;
  } catch (error) {
    n = -1;
    if (n === -1) {
      throw error;
    }
    tryAuth(n);
  }
}
