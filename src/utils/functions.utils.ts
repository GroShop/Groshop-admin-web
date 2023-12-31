import { useState,useOptimistic, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Compressor from 'compressorjs';

export const getBaseURL = () => {
  let baseURL = "http://localhost:8001";
  if (process.env.REACT_APP_NODE_ENV === "development") {
    baseURL = "http://localhost:8001";
    // baseURL = 'http://192.168.0.102:8001'
  } else if (process.env.REACT_APP_NODE_ENV === "stage") {
    baseURL = "https://askhugo-client.augmo.io";
  }
  return baseURL;
};

export const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState);

  const newSetState = (newState: any) => {
    setState((prevState: any) => ({ ...prevState, ...newState }));
  };
  return [state, newSetState];
};

// export const useSetOptimistic = (initialState:any) => {
//   const [state, setState] = useState(initialState);

//   const optimisticUpdate = (updateFunction:any, updateValue:any) => {
//     // Capture the current state
//     const currentState = state;

//     // Perform the optimistic update immediately
//     const optimisticResult = updateFunction(currentState, updateValue);

//     // Update the state with the optimistic result
//     setState(optimisticResult);

//     // Return a function to revert the optimistic update
//     const revertUpdate = () => setState(currentState);

//     // Return the optimistic result and the revert function
//     return [optimisticResult, revertUpdate];
//   };

//   return [state, optimisticUpdate];
// };


export const uploadFile = (
  file: any,
  signedRequest: any,
  url: any,
  cb: any
) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", signedRequest);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let data = {
          url: url,
        };
        cb(data);
      } else {
        cb({ error: "Upload failed" });
      }
    }
  };
  xhr.send(file);
};

export const useQuery = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const getDropdownData = (data: any) => {
  let array: any = [];
  data?.map((item: string) => array.push({ label: item, value: item }));
  return array;
};

export const getDataFromDropdown = (data: any) => {
  let array: any = [];
  data?.map((item: any) => array.push(item.value));
  return array;
};

export const gets3FileName = (file: any) => {
  let filename: string = file.split("/").pop();
  return filename.split("_").pop();
};

export const compressImage = function (file: any) {
  return new Promise(function (resolve, reject) {
    new Compressor(file, {
      quality: 0.8,
      maxWidth: 1024,
      success(result: any) {
        resolve(result);
      },
      error(result: any) {
        reject(result);
      },
    });
  });
};

export const toastSuccess = (success: string) => {
  toast.success(success, {
    id: "1",
  });
};

export const toastFailure = (failure: string) => {
  toast.error(failure, {
    id: "1",
  });
};

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const navigate = (path:string) => {
  window.location.href = path
}

