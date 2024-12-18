"use client";

import { InputFormField } from "@/components/shared/formfield/input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import "../globals.css";
import { signInSchema } from "./schemas";
import { TSignInForm } from "./types";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const form: UseFormReturn<TSignInForm> = useForm<TSignInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  const onSubmit = (data: TSignInForm) => {
    setLoading(true);
    if (data.username === "a@a.com" && data.password === "123456") {
      router.push("/home");
    } else {
      form.setError("password", {
        type: "manual",
        message: "Username or password is incorrect.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white h-screen w-screen font-kanit">
      <div className="relative flex flex-col justify-around items-center text-center bg-[url(../img/background-login.png)] bg-center bg-cover w-[22%] h-screen p-8">
        <div className="">
          <h1 className="text-4xl text-white">Login</h1>
        </div>
        <div className="">
          <h1 className="text-xl text-white">
            Log in to access expert legal assistance at any time.
          </h1>
        </div>
        <div className=""></div>
      </div>
      <div className="flex jusitfy-center items-center text-center w-full h-screen">
        <div className="flex flex-col justify-center items-center w-full h-full bg-white">
          <div className="mt-3">
            <h1 className="text-2xl text-black">
              WELCOME TO <b className="text-pink-600">BLACK</b>
              <b className="text-black">PINK</b>
            </h1>
          </div>
          <div className="mt-[5%] border-b-2 border-mainColor w-1/2">
            <h1 className="text-2xl font-semibold text-mainColor">Login</h1>
          </div>
          <div className="mt-2 w-[50%]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="mt-8">
                  <InputFormField
                    form={form}
                    label=""
                    fieldName="username"
                    isRequired
                    className="border text-black w-full border-black h-12 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div className="mt-8">
                  <InputFormField
                    form={form}
                    label=""
                    fieldName="password"
                    isRequired
                    className="border text-black w-full border-black h-12 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div className="text-left text-black mt-3">
                  User Agreement: By using this app, you agree to our terms and
                  conditions, including responsible use and compliance with all
                  applicable laws
                </div>
                <div className=" mt-3">
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="bg-mainColor text-white text-2xl p-3 font-bold w-full rounded-md outline-none transition focus:scale-90 duration-300 hover:bg-[#147D4C]"
                  >
                    {loading ? (
                      <Loader2Icon size={16} className="animate-spin" />
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="text-left w-[50%] text-black">
            {"Don't"} have an account ?{" "}
            <Link
              href="/signUp"
              className="text-mainColor border-b-2 border-mainColor"
            >
              Sign Up Here!
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[15%] h-full">
        <h1 className="text-4xl mt-[15%]">Logo</h1>
      </div>
    </div>
  );
}
