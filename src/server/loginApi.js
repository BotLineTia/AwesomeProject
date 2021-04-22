import axios from 'axios';

export function fetchLoginData() {
  return axios({
    method: "get",
    url: "https://60804d17a5be5d00176dd725.mockapi.io/api/users"
  });
}

