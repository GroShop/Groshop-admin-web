import {instance} from '@/utils/axios.utils';


const searchProduct = {
  createSearchProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search_product/create_search_product';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error.response.data);
        });
    });
    return promise;
  },
  getSearchProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search_product/get_search_product';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error.response.data);
        });
    });
    return promise;
  },
  getManySearchProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search_product/get_many_search_product';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error.response.data);
        });
    });
    return promise;
  },
  editSearchProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'search_product/edit_search_product';
      instance()
        .post(url, data)
        .then((res: any) => {
          resolve(res.data);
        })
        .catch((error: any) => {
          reject(error.response.data);
        });
    });
    return promise;
  },
};

export default searchProduct;
