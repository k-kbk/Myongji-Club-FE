import Input from '@/components/common/Input';
import { useState } from 'react';

export default function Index() {
  const [adminId, setAdminId] = useState<string>('');
  const [adminPw, setAdminPw] = useState<string>('');

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="-mt-10 flex w-full flex-col items-center rounded-lg p-3 sm:mt-4 sm:p-0">
        <h1 className="w-full text-2xl font-bold sm:w-104 sm:text-3xl">
          어드민 로그인
        </h1>
        <form className="mt-14 w-full sm:mt-18 sm:w-104">
          <Input
            label="아이디"
            id="admin-id"
            type="text"
            value={adminId}
            onClick={setAdminId}
          />
          <Input
            label="비밀번호"
            id="admin-pw"
            type="password"
            value={adminPw}
            onClick={setAdminPw}
          />
          <button
            type="button"
            className="mt-14 w-full rounded-lg bg-blue-600 py-3 text-base font-bold text-white shadow-sm transition-opacity hover:opacity-70 sm:mt-20 sm:text-lg"
          >
            로그인하기
          </button>
        </form>
      </div>
    </div>
  );
}
