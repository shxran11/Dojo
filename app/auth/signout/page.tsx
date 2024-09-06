"use client";

import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          Goodbye from Dojo
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We hope to see you again soon! Sign out to finish your session.
        </p>

        <div className="mb-6">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full py-3 px-6 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md flex items-center justify-center transition duration-150 ease-in-out"
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v-8"
              />
            </svg>
            Sign Out of Dojo
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-400">
            Thank you for using Dojo. We hope you achieved a lot today!{" "}
            <a href="/" className="text-indigo-600 hover:underline">
              Go back to homepage
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
