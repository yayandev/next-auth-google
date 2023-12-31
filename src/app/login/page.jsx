"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import style from "../page.module.css";
const Login = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (session.status === "authenticated") {
    router.push("/");
    return <h1>authenticated</h1>;
  }
  if (session.status === "unauthenticated") {
    return (
      <div className={style.container}>
        <div className={style.card}>
          <h1 className={style.title}>Welcome Back!</h1>
          <button
            onClick={() => signIn("google")}
            className={style.button_google}
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }
};

export default Login;
