import React from "react";

interface IPrimaryButtonProps {
  icon?: string;
  onClick?: Function;
  text: string;
  btnStyle?: string;
  btnText?: string;
  iconHeight?: number;
  iconWidth?: number;
}

const PrimaryButton = (props: IPrimaryButtonProps) => {
  return (
    <button
      type="submit"
      className={`h-[40px] flex flex-row items-center justify-center ${
        props.btnStyle ? props.btnStyle : " bg-primary-green w-full "
      } cursor-pointer rounded-lg `}
    >
      {props.icon && (
        <div className="w-[33%] flex items-center justify-center">
          <img src={props.icon} height={props.iconHeight} width={props.iconWidth} />
        </div>
      )}
      <div className={`${props.icon && "w-[67%]"} `}>
        <div className={`text-lg  ${props.btnText ? props.btnText : " text-btn-white "}  font-Inter-bold`}>{props.text}</div>
      </div>
    </button>
  );
};

export default PrimaryButton;
