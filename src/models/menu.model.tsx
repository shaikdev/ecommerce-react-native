import instance from '../utils/axios.utils';

const product = {
  getManyProduct: () => {
    let promise = new Promise((resolve, reject) => {
      let url = 'menu/get_many_menu';
      instance()
        .post(url)
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

export default product;
