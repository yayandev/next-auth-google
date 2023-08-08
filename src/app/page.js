"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "@/app/page.module.css";
export default function Home() {
  const session = useSession();
  const router = useRouter();
  if (session.status === "unauthenticated") {
    router.push("/login");
  }
  return (
    <main className={style.container}>
      <div className={style.card}>
        <Image
          src={session.data && session.data.user.image}
          alt={session.data && session.data.user.name}
          width={200}
          height={200}
          className={style.image}
        />
        <h1 className={style.name}>{session.data && session.data.user.name}</h1>
        <h3 className={style.email}>
          {session.data && session.data.user.email}
        </h3>
        <button
          onClick={() => signOut("google")}
          className={style.button_logout}
        >
          Logout
        </button>
      </div>
    </main>
  );
}
