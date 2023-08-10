import instance from '../utils/axios.utils';

const product = {
  getManyProduct: (body:any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'product/get_many_product';
      instance()
        .post(url,body)
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
