"use client";
import { Assets, Functions, Models, PrimaryInput, SidebarComponent } from "@/utils/import.utils";
import Image from "next/image";
import React, { useEffect, useState, useOptimistic, useTransition, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import SocketIOClient from "socket.io-client";
import "./chat.scss";
import { customUseQuery } from "@/utils/reactQuery.utils";
import _ from "lodash";
import { useMutation } from "@tanstack/react-query";
import { useSetState } from "@/utils/functions.utils";
import ScrollComponent from "@/components/scroll/scroll.component";
const ChatScreen = () => {
  let auth: string | null = localStorage.getItem("user_id");
  const socket: any = SocketIOClient("http://localhost:8001", { withCredentials: false });

  const [state, setState] = useSetState({
    chatId: "",
    chatMessage: [],
    userData: {},
  });
  const [chatMessage, setChatMsg] = useState([]);
  // hook
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userSearch: "",
      message: "",
    },
  });

  const { data: chatData, isLoading, isError } = customUseQuery(["chatMessages"], Models.chat.getManyChat);

  const { mutateAsync: handleChat } = useMutation({
    mutationFn: (body: Record<string, string>) => Models.message.getManyMessage(body),
    onSuccess: (res: any | unknown) => {
      // setState({ chatMessage: res?.data });
      setChatMsg(res?.data);
    },
    onError: (err: any) => {
      Functions.toastFailure(err.message);
    },
  });

  const { mutateAsync: handleMessage } = useMutation({
    mutationFn: (body: Record<string, string>) => Models.message.createMessage(body),
    onSuccess: (res: any | unknown) => {
      socket.emit("senderMessage", res.data, state.chatId, auth);
    },
    onError: (err: any) => {
      Functions.toastFailure(err.message);
    },
  });
  useMemo(() => {
    if (!_.isEmpty(state.chatId)) {
      (async () => {
        socket.emit("join-room", state.chatId);
        console.log("state.chatId", state.chatId);
      })();
    }
  }, [state.chatId]);

  useEffect(() => {
    socket.on("receiveMessage", (payload: any) => {
      console.log("cheac", payload);
      setChatMsg((pre: any) => [...pre, payload]);
    });
  }, [socket]);

  const handleKeyDown = (event: Record<string, any>) => {
    if (event.key === "Enter") {
      let query: Record<string, unknown | any> = {
        content: watch().message,
        sender: auth,
        chat: state.chatId,
      };
      handleMessage(query);
    }
  };
  return (
    <div className={`w-[100vw] h-[100vh] flex overflow-hidden relative`}>
      <div className="w-[260px] h-full">
        <SidebarComponent />
      </div>
      <div className="flex w-full h-full">
        <div className=" w-[340px] ">
          <div className="   h-[8%]  shadow-inset-custom flex justify-center items-center mb-6">
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
            {chatData &&
              chatData?.data?.docs.map((data: Record<string, any>) =>
                data.users.map(
                  (item: Record<string, any>, index: number) =>
                    item._id !== auth && (
                      <div
                        className=" h-[50px]  flex  items-center space-x-4 cursor-pointer"
                        key={index}
                        onClick={() => {
                          socket.emit("join-room", data._id);
                          handleChat({ chat: data._id });
                          setState({ chatId: data._id, userData: item });
                        }}
                      >
                        <div className="ml-4">
                          {!_.isEmpty(item.profile_pic) ? (
                            <div className="rounded-lg w-[45px] h-[45px]">
                              <Image
                                src={item.profile_pic}
                                height={40}
                                width={40}
                                alt=""
                                style={{
                                  objectFit: "cover",
                                  borderRadius: "100px", //👈 and here you can select border radius
                                }}
                              />
                            </div>
                          ) : (
                            <Image src={Assets.userIcon} height={45} width={45} alt="" />
                          )}
                        </div>
                        <div className="">
                          <div className="font-DMSans-bold text-[16px]">{item.username}</div>
                        </div>
                        {/* )} */}
                      </div>
                    )
                )
              )}
          </div>
        </div>
        <div className=" w-full h-full ">
          <div className="  h-[8%] bg-input-bg w-full shadow-inset-custom  items-center  flex ">
            {/* {!_.isEmpty(state.user?.profile_pic) ? (
            <Image
              src={state.user?.profile_pic}
              height={36}
              width={36}
              radius={100}
            />
          ) : ( */}
            <div className="ml-4 flex gap-3 items-center ">
              {!_.isEmpty(state.userData?.profile_pic) ? (
                <div className="rounded-lg w-[45px] h-[45px]">
                  <Image
                    src={state.userData.profile_pic}
                    height={40}
                    width={40}
                    alt=""
                    style={{
                      objectFit: "cover",
                      borderRadius: "100px", //👈 and here you can select border radius
                    }}
                  />
                </div>
              ) : (
                <Image src={Assets.userIcon} height={45} width={45} alt="" />
              )}
              <div className="font-DMSans-bold text-[22px]">{state.userData?.username}</div>
            </div>
          </div>
          <div className="h-[80%] overflow-y-auto bg-light-green flex flex-col space-y-4  px-3 pt-4">
            {chatMessage &&
              chatMessage.map((item: any, index: number) => {
                return auth === item.sender ? (
                  <div className="flex gap-3 justify-end" key={index}>
                    <div className="inline-block my-auto px-4 py-0.5  rounded-l-lg rounded-tr-lg bg-primary-green  relative ">
                      <div className="right-bottom-triangle text-btn-white font-DMSans-regular text-[16px] max-w-[320px]">{item.content}</div>
                    </div>
                    <Image src={Assets.userIcon} height={40} width={40} alt="" />
                  </div>
                ) : (
                  <div className="flex gap-3" key={index}>
                    {!_.isEmpty(state.userData?.profile_pic) ? (
                      <div className="rounded-lg w-[45px] h-[45px]">
                        <Image
                          src={state.userData.profile_pic}
                          height={40}
                          width={40}
                          alt=""
                          style={{
                            objectFit: "cover",
                            borderRadius: "100px", //👈 and here you can select border radius
                          }}
                        />
                      </div>
                    ) : (
                      <Image src={Assets.userIcon} height={45} width={45} alt="" />
                    )}
                    <div className="inline-block my-auto px-4 py-0.5 rounded-r-lg rounded-tl-lg bg-light-mode  relative">
                      <div className="left-bottom-triangle  text-primary-green font-DMSans-regular text-[16px] max-w-[320px] ">{item.content}</div>
                    </div>
                  </div>
                );
              })}
            <ScrollComponent />
          </div>

          <div className="flex gap-2 pr-3 pt-3">
            <PrimaryInput
              control={control}
              name="message"
              inputWrapperStyle="border-primary-green border-2  !bg-light-mode"
              inputStyle="!bg-light-mode"
              onKeyDown={handleKeyDown}
            />
            <div
              className=" bg-primary-green rounded-lg h-[45px] w-[45px] flex items-center justify-center cursor-pointer"
              onClick={() => {
                let query: Record<string, unknown | any> = {
                  content: watch().message,
                  sender: auth,
                  chat: state.chatId,
                };
                handleMessage(query);
              }}
            >
              <Image src={Assets.sendBtn} height={35} width={35} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
