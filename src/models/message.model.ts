import {instance} from '@/utils/axios.utils';


const message = {
  createMessage: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'message/create_message';
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
  getMessage: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'message/get_message';
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
  getManyMessage: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'message/get_many_message';
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
  editMessage: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'message/edit_message';
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
  deleteMessage: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'message/delete_message';
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

export default message;
