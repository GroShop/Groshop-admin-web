"use client";
import axios from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toastFailure } from "./functions.utils";

export const customUseQuery = (key: any, endPoint: any) => {
  let { isError, error, isLoading, data } = useQuery({ queryKey: key, queryFn: endPoint });
  if (isError) {
     toastFailure(error?.message);
  }
  return { isError, error, isLoading, data };
};
export const customUseMutation = ( endPoint: any,key?: any,) => {
  const queryClient = useQueryClient();
   useMutation({
    mutationFn: endPoint,
    onSuccess: () => {
      if(key){
        queryClient.invalidateQueries(key);
      }
    },
    onError: () => {
     toastFailure(error?.message);
    },
  });
};
