"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Dojo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay organized and productive. Sign in to manage your tasks
          efficiently.
        </p>

        <div className="mb-6">
          <button
            onClick={() => signIn("google", { callbackUrl: "/tasks" })}
            className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md flex items-center justify-center transition duration-150 ease-in-out"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m2 0a9 9 0 11-8.996-9 9 9 0 018.996 9z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
