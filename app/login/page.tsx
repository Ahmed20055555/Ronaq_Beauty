'use client';

import { FaEnvelope, FaLock } from "react-icons/fa6";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-5">

      {/* Card */}
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 shadow-2xl rounded-2xl p-8 animate-fadeIn">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide">
          تسجيل الدخول
        </h2>

        <form className="space-y-6">

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full bg-zinc-800 text-white placeholder-gray-500 rounded-xl py-3 pl-12 pr-4 outline-none border border-zinc-700 focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />
            <input
              type="password"
              placeholder="كلمة المرور"
              className="w-full bg-zinc-800 text-white placeholder-gray-500 rounded-xl py-3 pl-12 pr-4 outline-none border border-zinc-700 focus:border-blue-500 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            دخول
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 mt-6">
          ليس لديك حساب؟
          <span className="text-blue-500 cursor-pointer hover:underline ml-1">
            إنشاء حساب
          </span>
        </p>
      </div>

    </div>
  );
}
