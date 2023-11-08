"use client";
import { useForm } from "react-hook-form";
import PrimaryInput from "@/common_components/ui/primaryInput/primaryInput.component";
import Models from "@/imports/models.imports";
import PrimaryButton from "@/common_components/ui/primaryButton/primaryButton";
import { useSetState } from "@/utils/functions.utils";
import { Assets, Container, Functions, Validation } from "@/utils/import.utils";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
const ResetPasswordScreen = () => {
  const email: string | null = localStorage.getItem("email");
  // state
  const [state, setState] = useSetState({
    passwordIcon: true,
    confirmPasswordIcon: true,
    privacyPolicy: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(Validation.resetScheme),
  });

  const { mutateAsync: resetPassword } = useMutation({
    mutationFn: (query: Record<string, string>) => Models.auth.editPassword(query),
    onSuccess: (res: any) => {
      Functions.toastSuccess(res.message);
      Functions.navigate("/login");
      localStorage.clear();
    },
    onError: (err: Record<string, string>) => {
      Functions.toastFailure(err.message);
    },
  });

  return (
    <Container>
      <div className="flex w-full justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center flex-col w-[50%]">
          <div className="w-[420px] ">
            <div className="font-DMSans-bold text-[50px] text-center text-primary-green pb-4">Reset Password</div>
            <form
              onSubmit={handleSubmit((e: Record<string, string>) => {
                let query: Record<string, any> = {
                  password: e.password,
                  email,
                };
                resetPassword(query);
              })}
            >
              <div className="justify-center flex-col">
                <div className="font-DMSans-regular text-lg text-primary-green">Password</div>
                <PrimaryInput
                  control={control}
                  name="password"
                  securityPassword={state.passwordIcon}
                  icon={state.passwordIcon ? Assets.eyeInActive : Assets.eyeActive}
                  type={state.passwordIcon ? "password" : "text"}
                  iconOnPress={() => {
                    setState({ passwordIcon: !state.passwordIcon });
                  }}
                />
                <div className="font-DMSans-regular text-lg text-primary-green">Confirm Password</div>
                <PrimaryInput
                  control={control}
                  name="confirmPassword"
                  icon={state.confirmPasswordIcon ? Assets.eyeInActive : Assets.eyeActive}
                  type={state.passwordIcon ? "password" : "text"}
                  iconOnPress={() => {
                    setState({ confirmPasswordIcon: !state.confirmPasswordIcon });
                  }}
                />
              </div>
              <div className="login_btn mt-6">
                <PrimaryButton text={"Reset"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ResetPasswordScreen;
