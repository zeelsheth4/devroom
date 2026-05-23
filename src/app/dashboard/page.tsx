"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "@/lib/firebase";
import useAuth from "@/hooks/useAuth";

export default function DashboardPage() {
  const router = useRouter();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    await signOut(auth);

    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex items-center justify-between bg-zinc-900 p-5 rounded-xl border border-zinc-800">
        <h1 className="text-3xl font-bold">
          DevRoom Dashboard 🚀
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <div className="mt-10 bg-zinc-900 p-10 rounded-xl border border-zinc-800">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome {user.email}
        </h2>

        <p>
          Your protected dashboard is working
          successfully.
        </p>
      </div>
    </div>
  );
}