import instance from '../utils/axios.utils';

const search = {
  createSearch: (body:any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search/create_search';
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
  getManySearch: () => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search/get_many_search';
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
  editSearch: (body:any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search/edit_search';
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

export default search;
