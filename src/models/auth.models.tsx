import instance from '../utils/axios.utils';

const auth = {
  login: data => {
    let promise = new Promise((resolve, reject) => {
      let url = 'auth/login';
      instance()
        .post(url, data)
        .then(res => {
          resolve(res.data);
        })
        .catch(error => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },
};

export default auth;