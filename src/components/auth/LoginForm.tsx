"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful!");

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Welcome Back
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-5"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg outline-none focus:border-blue-500"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg outline-none focus:border-blue-500"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-4 rounded-lg font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}