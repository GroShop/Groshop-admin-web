import { toastFailure, toastSuccess, useSetState } from "@/utils/functions.utils";
import { Models } from "@/utils/import.utils";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import OTPInput from "react-otp-input";

interface IOtpComponent {
  icon?: string;
  name: string;
  style?: string;
  inputStyle?: string;
  type?: string;
  inputWrapperStyle?: string;
  rules?: unknown;
  control: Record<string, any> | any;
}

const OtpComponent = (props: IOtpComponent) => {
  const email: any = localStorage.getItem("email");
  const [state, setState] = useSetState({
    counter: 60,
  });

  const { mutateAsync: handleResendOtp } = useMutation({
    mutationFn: (query: Record<string, string>) => Models.auth.sendOtp(query),
    onSuccess: (res:any) => {
      setState({ counter: 60 });
      toastSuccess(res.message);
    },
    onError: (error: any | unknown) => {
      toastFailure(error.message);
    },
  });

  useEffect(() => {
    if (state.counter > 0) {
      const id = setInterval(() => setState({ counter: state.counter - 1 }), 1000);
      return () => clearInterval(id);
    }
  }, [, state.counter]);

  return (
    <div className={`w-full ${props.style}`}>
      <Controller
        name={props.name}
        rules={props.rules || {}}
        control={props.control}
        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
          return (
            <>
              <OTPInput
                containerStyle={{ width: "100%", justifyContent: "center", gap: 20 }}
                value={value}
                onChange={onChange}
                numInputs={4}
                // renderSeparator={<span>-</span>}
                renderInput={(props: Record<string, any>) => (
                  <input {...props} className={`bg-input-bg !w-[50px] !h-[50px] border-2 ${error?'border-error':'border-primary-green'} rounded-lg `} />
                )}
              />
              {state.counter === 0 ? (
                <div onClick={() => handleResendOtp({ email })}>
                  <div className="font-merriweather-regular text-right text-xs text-primary-green my-1 mt-3 items-center justify-center cursor-pointer">
                    Resend Otp
                  </div>
                </div>
              ) : (
                <div className="font-merriweather-regular text-right text-xs text-verify my-1 mt-3 items-center justify-center">
                  Resend in 00:{state.counter}
                </div>
              )}
            </>
          );
        }}
      />
    </div>
  );
};
export default OtpComponent;
