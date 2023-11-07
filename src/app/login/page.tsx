"use client";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useForm } from "react-hook-form";
import PrimaryInput from "@/common_components/ui/primaryInput/primaryInput.component";
import Models from "@/imports/models.imports";
import PrimaryButton from "@/common_components/ui/primaryButton/primaryButton";
import { toastFailure, useSetState } from "@/utils/functions.utils";
import { Assets, Container, Validation } from "@/utils/import.utils";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
const LoginScreen = () => {
  const role: any = localStorage.getItem("role");
  // google client id
  let clientId = "715714877969-vis5bv19jkcdjo9pup05hvp22bhu2lh2.apps.googleusercontent.com";

  // state
  const [state, setState] = useSetState({
    email: "",
    password: "",
    passwordIcon: true,
  });
  
  // userlogin
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(Validation.loginScheme),
  });

  const { mutateAsync: userLogin } = useMutation({
    mutationFn: (body: Record<string, string>) => (body.email_verified ? Models.auth.socialSignIn(body) : Models.auth.login(body)),
    onSuccess: (res:  any | unknown) => {
      localStorage.setItem("id", res.data._id);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("token", res.token);
      window.location.href = "/home";
    },
  });

  const userGoogleLogin = async (e: Record<string, any>) => {
    let data: Record<string, any> = jwtDecode(e.credential);
    if (data.email_verified) {
      const body: Record<string, string> = {
        username: `${data.given_name} ${data.family_name}`,
        email: data.email,
        email_verified: data.email_verified,
      };
      userLogin(body);
    } else {
      toastFailure("Mail Doesn't exist");
    }
  };
  // useEffect(() => {
  //   if (Object.keys(state.loginData).length > 0) {
  //     if (role === "admin") {
  //       window.location.href = "/admin/dashboard";
  //     } else if (role === "user") {
  //       window.location.href = "/home";
  //     }
  //   }
  //   // eslint-disable-next-line
  // }, [state.loginData]);

  return (
    <Container>
      <div className="flex w-full justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center flex-col w-[50%]">
          <div className=" rounded-full bg-primary-green items-center justify-center flex h-[150px] w-[150px]">
            <Image src={Assets.logo} alt="" width={100} height={90} />
          </div>
          <div className="w-[420px] ">
            <div className="font-DMSans-bold text-[50px] text-center text-primary-green">Login</div>
            <form action="justify-center flex">
              <div className="justify-center flex-col">
                <label className="font-DMSans-regular text-lg text-primary-green ">Email</label>
                <div className=""></div>
                <PrimaryInput name="email" control={control} value={state.email} />
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
                  value={state.password}
                />
              </div>
              <div className="flex justify-end">
                <div className="font-DMSans-bold text-sm py-2  text-primary-green cursor-pointer">Forget Password</div>
              </div>
              <div className="login_btn">
                <PrimaryButton text={"LOG IN"} onClick={() => handleSubmit((e: Record<string, string>) => userLogin(e))} />
              </div>
              <div className="font-DMSans-regular text-sm text-primary-green my-4 text-center">OR</div>
              <div className="w-full justify-center flex">
                <GoogleOAuthProvider clientId={clientId}>
                  <GoogleLogin
                    onSuccess={userGoogleLogin}
                    onError={() => {
                      toastFailure("Login Failed");
                    }}
                    useOneTap
                    width={420}
                  />
                </GoogleOAuthProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginScreen;
