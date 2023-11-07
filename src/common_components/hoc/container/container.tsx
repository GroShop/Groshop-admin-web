"use client";
import React from "react";
import { LottieComponent } from "@/utils/import.utils";

interface IContainer {
  loading?: boolean;
  statusBarColor?: string;
  children?: any;
  backgroundColor?: string;
  lottie?: any;
}
const Container = (props: IContainer) => {
  return (
    <div>
      {props.loading ? (
        <div className="w-full h-full">
          <LottieComponent src={props.lottie} />
        </div>
      ) : (
        <div className="h-full w-full">{props.children}</div>
      )}
    </div>
  );
};

export default Container;
