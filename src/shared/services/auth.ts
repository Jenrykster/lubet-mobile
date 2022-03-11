import api from './api';

export const login = (email: string, password: string) => {
  return api
    .post('/login', {
      email,
      password,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const register = (name: string, email: string, password: string) => {
  return api
    .post('/user/create', {
      name,
      email,
      password,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const sendPasswordReset = (email: string) => {
  return api
    .post('/reset', {
      email,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const changePassword = (newPassword: string, token: string) => {
  return api
    .post(`/reset/${token}`, {
      password: newPassword,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
