"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");

    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Dashboard</h2>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => window.location.href = '/agendamento'}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Agenda
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Botão 2
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Botão 3
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Botão 4
          </button>

          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
            Botão 5
          </button>
        </div>
      </div>
    </div>
  );
}
