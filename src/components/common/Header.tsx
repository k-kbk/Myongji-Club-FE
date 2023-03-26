import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  /** 현재 경로 */
  const curPath = router.pathname;
  const isAdmin = curPath.startsWith('/admin');

  return (
    <header className="fixed z-10 flex h-[3.75rem] w-full items-center justify-center bg-white px-3 shadow-sm sm:h-16 sm:px-4">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Link href="/" className="px-3">
          <Image
            src="/logo.png"
            width={800}
            height={180}
            quality={100}
            alt="myongji-club"
            priority
            className="w-32 sm:w-36"
          />
        </Link>
        {!isAdmin && (
          <div>
            <Link
              href="/"
              className={`rounded-lg px-2.5 py-4 font-semibold sm:px-3 ${
                curPath === '/' ? 'text-indigo-700' : 'text-gray-600'
              } mx-1 transition-colors hover:text-indigo-700`}
            >
              홈
            </Link>
            <Link
              href="/notice"
              className={`rounded-lg px-2.5 py-4 font-semibold sm:px-3 ${
                curPath.includes('notice') ? 'text-indigo-700' : 'text-gray-600'
              } mx-1 transition-colors hover:text-indigo-700`}
            >
              공지사항
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
