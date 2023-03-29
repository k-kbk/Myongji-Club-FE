import isSamePath from '@/utils/isSamePath';
import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

type NavItemsType = {
  [index: string]: Array<{ id: number; name: string; href: string }>;
};

const navItems: NavItemsType = {
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

type MobileNavType = {
  router: NextRouter;
  pathStartsWith: string;
  isPathAdminLogin: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({
  router,
  pathStartsWith,
  isPathAdminLogin,
  setIsClicked,
}: MobileNavType) {
  const curPath = router.pathname;

  function handleMenuClick(href: string) {
    router.push(href);
    setIsClicked((prev) => !prev);
  }

  return (
    <nav className="fixed z-10 mt-[3.75rem] flex w-full flex-col border-b bg-white font-semibold sm:hidden">
      {navItems[pathStartsWith].map(
        (item) =>
          !isPathAdminLogin && (
            <button
              key={item.id}
              type="button"
              onClick={() => handleMenuClick(item.href)}
              className={`border-gray-100 px-6 py-5 text-left sm:px-3 ${
                isSamePath(curPath, item.href)
                  ? 'text-blue-500'
                  : 'text-gray-500'
              } transition-colors hover:text-blue-500`}
            >
              {item.name}
            </button>
          ),
      )}
    </nav>
  );
}
