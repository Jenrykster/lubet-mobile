import api from './api';

export const updateUser = (
  newData: { email: string; name: string },
  token: string
) => {
  return api
    .put('/user/update', newData, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getUser = (token: string) => {
  return api
    .get('/user/my-account', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
