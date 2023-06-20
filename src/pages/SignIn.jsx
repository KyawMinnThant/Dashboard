import React, { useEffect } from "react";
import { useForm } from "@mantine/form";

import { Anchor, Button, PasswordInput, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/api/authApi";
import { addUser } from "../redux/authSlice";
import { toast } from 'react-toastify';
import Cookies from "js-cookie";

const SignIn = () => {
  // const datas = useSelector((state) => state.auth)
  const token = Cookies.get('token');

  const notify =() => toast.success('Login successfuly!', {
    position: "bottom-right",
    autoClose: 100,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const notifyError =() => toast.error('Login Fail!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

  const form = useForm({
    initialValues: {
      email: "kyawkyaw@gmail.com",
      password: "kyaw2000",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value < 5 ? "Your password must be at least 5 cha" : null,
    },
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [login, {isLoading}] = useLoginMutation();
  const authToken = useSelector(state => state.authSlice.token);


  useEffect(() => {
    Cookies.remove('token');
  },[])
  // console.log(token);
  // console.log(authToken);
  return (
    <div className=" relative">
        <div className="w-full flex  lg:flex-row-reverse items-start z-30">
          <div className="  h-screen md:mt-10">
            <img src={"/Sign-In-color.svg"} className=" h-auto lg:h-screen  lg:absolute top-0 left-0 -z-30 hidden  lg:block" alt="" />
            <img src={"/bg-reg.svg"} className=" h-screen lg:h-screen absolute top-0 left-0 -z-40 block" alt="" />
          </div>
        <form
          className=" w-[350px] md:w-[400px] lg:w-[450px] mx-auto lg:mx-0 px-5 mt-10 lg:mt-5  py-14 rounded-xl"
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            try {
              const { data } = await login(values);
              console.log(data);
              if (data?.success) {
                dispatch(addUser({ user: data?.user, token: data?.token }));
                notify();
                nav(`/`);
              }
              if(data?.success === false){
                notifyError();
              }
            } catch (error) {
              console.log(error);
            }
          })}
        >
          <div className=" bg-slate-50 shadow-sm  p-5 flex flex-col gap-3 rounded-lg">
            <p className=" text-2xl text-sky-400 font-bold">
              Login Your Account
            </p>

            <TextInput
              mt="sm"
              label="Email"
              placeholder="Email"
              description="Put your email in a box "
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              description="Put your password in a box correctly "
              {...form.getInputProps("password")}
            />

            <div className=" flex gap-3">
            <Link to={"/signup"}>
              <Anchor
                disabled={isLoading}
                component="button"
                type="button"
                color="dimmed"
                size="xs"
              >
                Doesn't have an account? <span className=" text-blue-500">SignUp</span>
              </Anchor>
            </Link>
            </div>

            <button disabled={isLoading} className=" text-white p-2 bg-blue-500 text-center rounded flex justify-center w-full mt-5">
              {isLoading && <img src={"/Infinity-1s-200px.svg"} className=" w-10 h-5" />} Login
            </button>
          </div>
        </form>
        </div>

    
    </div>
  );
};

export default SignIn;