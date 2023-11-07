import {instance} from '@/utils/axios.utils';


const cart = {
  createCart: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'cart/create_cart';
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
  getCart: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'cart/get_cart';
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
  getManyCart: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'cart/get_many_cart';
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
  editCart: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'cart/edit_cart';
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
  deleteCart: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'cart/delete_cart';
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

export default cart;
