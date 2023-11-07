import {instance} from '@/utils/axios.utils';


const booking = {
  createBooking: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'booking/create_booking';
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
  getBooking: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'booking/get_booking';
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
  getManyBooking: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'booking/get_many_booking';
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
  editBooking: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'booking/edit_booking';
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

export default booking;
