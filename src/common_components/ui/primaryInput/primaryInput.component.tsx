"use client";
import { Controller } from "react-hook-form";
import Image from "next/image";
import React from "react";
import _ from "lodash";
interface IPrimaryInputProps {
  icon?: string;
  placeholder?: string;
  iconOnPress?: () => void;
  name: string;
  style?: string;
  inputStyle?: string;
  type?: string;
  inputWrapperStyle?: string;
  securityPassword?: boolean;
  isMultiLine?: boolean;
  value: string;
  rules?: unknown;
  control: Record<string, any>;
}

const PrimaryInput = (props: IPrimaryInputProps) => {
  return (
    <div className={`w-full ${props.style}`}>
      <Controller
        name={props.name}
        rules={props.rules || {}}
        control={props.control}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
          return (
            <>
              <div
                className={`flex items-center bg-input-bg justify-between  h-[42px] my-1 rounded-lg ${props.inputWrapperStyle} ${
                  error && "border-error border-[1px]"
                }`}
              >
                <input
                  className={`${props.inputStyle} text-secondary-black bg-input-bg font-DMSans-regular  rounded-lg outline-none h-full px-2 text-[14px] w-full`}
                  placeholder={props.placeholder}
                  type={props.type ? props.type : "text"}
                  autoCapitalize="none"
                  onChange={onChange}
                  value={value}
                />
                {props.icon && (
                  <div onClick={props.iconOnPress} className="pr-3 cursor-pointer">
                    <Image src={props.icon} height={20} width={22} alt="" />
                  </div>
                )}
              </div>
              {error && <div className="text-error text-[12px] px-1 pt-1">{error.message}</div>}
            </>
          );
        }}
      />
    </div>
  );
};

export default PrimaryInput;
