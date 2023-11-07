import {instance} from '@/utils/axios.utils';


const voucher = {
  getVoucher: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'voucher/get_voucher';
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
  getManyVoucher: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'voucher/get_many_voucher';
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
  editVoucher: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'voucher/edit_voucher';
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

export default voucher;
