'use client';
import { GoogleOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';
import DoubleHeader from '@/components/DoubleHeader';

export default function LoginScreen() {
  return (
    <div className="flex flex-col items-center max-w-xl p-4 py-6 mx-auto mt-8 text-center bg-white border border-b-4 border-blue-100 rounded-xl">
      <DoubleHeader preTitle="Welcome back" mainTitle="Login to your account" />
      <button
        onClick={() => signIn('google')}
        className="inline-flex items-center gap-2 px-6 py-2 my-6 text-white bg-indigo-500 border border-b-4 border-indigo-700 rounded-xl"
      >
        <GoogleOutlined className="w-4 h-4" /> Login with google
      </button>
    </div>
  );
}
