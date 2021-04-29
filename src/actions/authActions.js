const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export async function loginUser(loginPayload) {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loginPayload.username === 'wizeline' && loginPayload.password === 'Rocks!') {
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 500);
    });

    const data = await response;

    if (data.id) {
      return data;
    }

    throw Error('Username or password invalid');
  } catch (ex) {
    return ex.message;
  }
}

export async function logout() {
  // TODO implement logout here
}
