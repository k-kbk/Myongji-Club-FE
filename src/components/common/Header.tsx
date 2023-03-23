import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  /** 현재 경로 */
  const curPath = router.pathname;

  return (
    <header className="fixed flex h-16 w-full items-center justify-center border-b bg-white px-4">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Link href="/" className="px-3">
          <Image src="/logo_main.svg" width={1} height={1} alt="myongji-club" />
        </Link>
        <div>
          <Link
            href="/"
            className={`rounded-lg px-3 py-3 font-semibold ${
              curPath === '/' ? 'text-blue-600' : 'text-gray-700'
            } mx-1 transition-colors hover:text-blue-600`}
          >
            홈
          </Link>
          <Link
            href="/notice"
            className={`rounded-lg px-3 py-3 font-semibold ${
              curPath === '/notice' ? 'text-blue-600' : 'text-gray-700'
            } mx-1 transition-colors hover:text-blue-600`}
          >
            공지사항
          </Link>
        </div>
      </div>
    </header>
  );
}
