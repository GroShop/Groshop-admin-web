"use client";
import { useForm } from "react-hook-form";
import PrimaryInput from "@/common_components/ui/primaryInput/primaryInput.component";
import Models from "@/imports/models.imports";
import PrimaryButton from "@/common_components/ui/primaryButton/primaryButton";
import { toastFailure, } from "@/utils/functions.utils";
import {  Container, Functions, Validation } from "@/utils/import.utils";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginScreen = () => {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(Validation.forgotScheme),
  });

  const { mutateAsync: userForgotPassword } = useMutation({
    mutationFn: (body: Record<string, string>) => Models.auth.sendOtp(body),
    onSuccess: (res: any | unknown) => {
      localStorage.setItem("email", res.data.email);
      Functions.navigate( "/otp_verify");
    },
    onError: (err: Record<string, any>) => {
      toastFailure(err?.message);
    },
  });

  return (
    <Container>
      <div className="flex w-full justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center flex-col w-[50%]">
          <div className="w-[420px]  flex-col flex space-y-6">
            <div className="font-DMSans-bold text-[50px] text-center text-primary-green">Forgot Password</div>
            <form onSubmit={handleSubmit((e: Record<string, string>) => userForgotPassword(e))}>
            <div className="justify-center flex-col">
              <div className="font-DMSans-regular text-lg text-primary-green ">Email</div>
              <PrimaryInput name="email" control={control}  />
            </div>
            <div className="login_btn mt-5">
              <PrimaryButton text={"Forgot Password"}  />
            </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginScreen;
