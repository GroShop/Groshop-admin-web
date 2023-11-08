"use client";
import { useForm } from "react-hook-form";
import Models from "@/imports/models.imports";
import PrimaryButton from "@/common_components/ui/primaryButton/primaryButton";
import { Container, Functions, OtpComponent, Validation } from "@/utils/import.utils";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
const OtpScreen = () => {
  const email: any = localStorage.getItem("email");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
    resolver: zodResolver(Validation.otpScheme),
  });

  const { mutateAsync: verifyOtp } = useMutation({
    mutationFn: (query: Record<string, string>) => Models.auth.verifyOtp(query),
    onSuccess: (res: any | unknown) => {
      Functions.navigate("/reset_password");
    },
    onError: (error: any | unknown) => {
      Functions.toastFailure(error.message);
    },
  });

  return (
    <Container>
      <div className="flex w-full justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center flex-col w-[50%]">
          <div className="w-[420px]  flex-col flex space-y-6">
            <div className="font-DMSans-bold text-[50px] text-center text-primary-green">Otp Verify</div>
            <form onSubmit={handleSubmit((e: Record<string, string>) => verifyOtp({ ...e, email }))}>
              <div className="justify-center flex-col">
                <OtpComponent name="otp" control={control} />
              </div>
              <div className="login_btn mt-5">
                <PrimaryButton text={"Otp Verify"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OtpScreen;
