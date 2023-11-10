"use client";
import { Assets, PrimaryInput, SidebarComponent } from "@/utils/import.utils";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

const ChatScreen = () => {
  // hook
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-full h-full flex">
      <div className="w-[260px] h-full">
        <SidebarComponent />
      </div>
      <div className="h-[100vh] w-[300px] bg-input-bg">
        <div className="  h-[60px]  shadow-inset-custom flex justify-center items-center mb-6">
          <div className=" ">
            <PrimaryInput
              control={control}
              name="userSearch"
              icon={Assets.searchIcon}
              inputWrapperStyle="border-primary-green border-2 w-[250px] !bg-btn-white"
              inputStyle="!bg-btn-white"
            />
          </div>
          <div className=""></div>
        </div>
        <div className="h-full  flex flex-col space-y-2">
         
          <div className=" h-[50px]  flex  items-center space-x-4">
          {/* {!_.isEmpty(state.user?.profile_pic) ? (
            <Image
              src={state.user?.profile_pic}
              height={36}
              width={36}
              radius={100}
            />
          ) : ( */}
          <div className="ml-4">
            <Image src={Assets.userIcon} height={45} width={45} alt='' />
          </div>
            <div className="">
              <div className="font-DMSans-bold text-[16px]">Hari Krishna</div>
              <div className="font-DMSans-regular text-[14px]">Hari Krishna</div>
            </div>
          {/* )} */}
          </div>
          <div className=" h-[50px]  bg-primary-green flex  items-center space-x-4">
          {/* {!_.isEmpty(state.user?.profile_pic) ? (
            <Image
              src={state.user?.profile_pic}
              height={36}
              width={36}
              radius={100}
            />
          ) : ( */}
          <div className="ml-4">
            <Image src={Assets.userIcon} height={45} width={45} alt='' />
          </div>
            <div className="">
              <div className="font-DMSans-bold text-[16px]">Hari Krishna</div>
              <div className="font-DMSans-regular text-[14px]">Hari Krishna</div>
            </div>
          {/* )} */}
          </div>   <div className=" h-[50px]  flex  items-center space-x-4">
          {/* {!_.isEmpty(state.user?.profile_pic) ? (
            <Image
              src={state.user?.profile_pic}
              height={36}
              width={36}
              radius={100}
            />
          ) : ( */}
          <div className="ml-4">
            <Image src={Assets.userIcon} height={45} width={45} alt='' />
          </div>
            <div className="">
              <div className="font-DMSans-bold text-[16px]">Hari Krishna</div>
              <div className="font-DMSans-regular text-[14px]">Hari Krishna</div>
            </div>
          {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
