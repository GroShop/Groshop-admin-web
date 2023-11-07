import {instance} from '@/utils/axios.utils';


const chat = {
  createChat: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'chat/create_chat';
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
  getChat: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'chat/get_chat';
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
  getManyChat: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'chat/get_many_chat';
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
  editChat: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'chat/edit_chat';
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
  deleteChat: (data: any) => {
    let promise = new Promise((resolve, reject) => {
      let url = 'chat/delete_chat';
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

export default chat;
