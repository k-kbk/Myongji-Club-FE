import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = {
  user: [
    {
      id: 1,
      name: '홈',
      href: '/',
    },
    {
      id: 2,
      name: '공지사항',
      href: '/notice',
    },
  ],
  admin: [
    {
      id: 11,
      name: '동아리 관리',
      href: '/admin',
    },
    {
      id: 12,
      name: '공지사항',
      href: '/admin/notice',
    },
  ],
};

export default function Header() {
  const router = useRouter();
  /** 현재 경로 */
  const curPath = router.pathname;
  const isAdmin = curPath.startsWith('/admin') ? 'admin' : 'user';
  const isAdminLogin = curPath === '/admin/login';

  return (
    <header className="fixed z-10 flex h-[3.75rem] w-full items-center justify-center bg-white px-3 shadow-sm sm:h-16 sm:px-4">
      <div className="flex w-full max-w-screen-lg items-center justify-between">
        <Link href={navItems[isAdmin][0].href} className="px-3">
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
        <nav>
          {navItems[isAdmin].map(
            (item) =>
              !isAdminLogin && (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-4 font-semibold sm:px-3 ${
                    curPath === item.href ? 'text-indigo-700' : 'text-gray-600'
                  } mx-1 transition-colors hover:text-indigo-700`}
                >
                  {item.name}
                </Link>
              ),
          )}
        </nav>
      </div>
    </header>
  );
}
