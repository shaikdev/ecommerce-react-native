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
  register: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'auth/register';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise;
  },

  socialLogin: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'auth/social_login';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise
  },

  getCurrentUser: () => {
    let promise = new Promise((resolve, reject) => {
      let url = 'auth/get_current_user';
      instance()
        .post(url)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          if (error.response) {
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
    return promise
  }
};

export default auth;
