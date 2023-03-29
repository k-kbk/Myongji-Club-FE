import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import isSamePath from '@/utils/isSamePath';
import MobileNav from './MobileNav';

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
      name: '홈',
      href: '/admin',
    },
    {
      id: 12,
      name: '동아리 관리',
      href: '/admin/club',
    },
    {
      id: 13,
      name: '공지사항 관리',
      href: '/admin/notice',
    },
  ],
};

export default function Header() {
  const router = useRouter();
  /** 현재 경로 */
  const curPath = router.pathname;
  const pathStartsWith = curPath.startsWith('/admin') ? 'admin' : 'user';
  const isPathAdminLogin = curPath === '/admin/login';

  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleMenuOpen() {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <header className="fixed z-10 flex h-[3.75rem] w-full items-center justify-center bg-white px-3 shadow-sm sm:h-16 sm:px-4">
        <div className="flex w-full max-w-screen-lg items-center justify-between">
          <Link href={navItems[pathStartsWith][0].href} className="px-3">
            <Image
              src="/logo_main.png"
              width={800}
              height={180}
              quality={100}
              priority
              alt="myongji-club"
              className="w-32 sm:w-36"
            />
          </Link>
          {!isPathAdminLogin && (
            <button
              type="button"
              className="block px-3 py-4 opacity-70 sm:hidden"
              onClick={handleMenuOpen}
            >
              <Image
                src={isClicked ? '/close.png' : '/menu.png'}
                width={96}
                height={96}
                quality={100}
                priority
                alt="menu"
                className="w-7"
              />
            </button>
          )}
          <nav className="hidden font-semibold sm:block sm:text-lg">
            {navItems[pathStartsWith].map(
              (item) =>
                !isPathAdminLogin && (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`rounded-lg px-2.5 py-4 sm:px-3 ${
                      isSamePath(curPath, item.href)
                        ? 'text-blue-600'
                        : 'text-gray-600'
                    } mx-1 transition-colors hover:text-blue-600`}
                  >
                    {item.name}
                  </Link>
                ),
            )}
          </nav>
        </div>
      </header>
      {isClicked && (
        <MobileNav
          router={router}
          pathStartsWith={pathStartsWith}
          isPathAdminLogin={isPathAdminLogin}
          setIsClicked={setIsClicked}
        />
      )}
    </>
  );
}
