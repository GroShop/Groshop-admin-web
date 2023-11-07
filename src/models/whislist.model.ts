import {instance} from '@/utils/axios.utils';

const wishlist = {
  createWishlist: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'wishlist/create_wishlist';
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
  getWishlist: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'wishlist/get_wishlist';
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
  getManyWishlist: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'wishlist/get_many_wishlist';
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
  removeWishlist: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'wishlist/remove_wishlist';
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
  editWishlist: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'wishlist/edit_Wishlist';
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

export default wishlist;
