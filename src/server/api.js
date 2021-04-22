

export function fetchLoginData(action) {
    return fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY8UJq_xLD0nEe1HZHuvEOUfYIS9gg4pA',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: action.data.email,
          password: action.data.password,
          returnSecureToken: true
        })
      }
    );
  
};

