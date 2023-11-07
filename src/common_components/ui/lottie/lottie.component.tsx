import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface ILottie {
  src: any;
  width?: number;
  height?: number;
}
const LottieComponent = (props: ILottie) => {
  return (
    <div className="w-full h-full justify-center items-center">
      <Player autoplay loop src={props.src} style={{ width: props.width || 300, height: props.height || 300 }}>
        <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
    </div>
  );
};

export default LottieComponent;
