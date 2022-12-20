const baseUrl = 'https://639acdd831877e43d676cd31.mockapi.io/logins';

export const saveLoginData = loginData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(loginData),
  });

export const getLoginForm = () => fetch(baseUrl).then(response => response.json());
