import {instance} from '@/utils/axios.utils';


const product = {
  getProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'product/get_product';
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
  getManyProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'product/get_many_product';
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
  editProduct: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'product/edit_product';
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

export default product;
