import api from './api';

export const updateUser = (newData: { email: string; name: string }) => {
  return api
    .put('/user/update', newData)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getUser = () => {
  return api
    .get('/user/my-account')
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
