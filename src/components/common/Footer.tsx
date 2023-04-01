export default function Footer() {
  return (
    <footer className="mt-4 flex w-full max-w-screen-lg flex-col py-12 px-8 md:px-6">
      <div className="text-xs font-medium text-gray-500 md:text-sm">
        Copyright ⓒ Myongji-Club. All Rights Reserved
      </div>
      <div className="mb-2 text-xs text-gray-400 md:text-sm">
        이메일: myongjiuniv.club@gmail.com
      </div>
      <div className="text-xs text-gray-400">
        <span>Illustration by </span>
        <a href="https://iconscout.com/contributors/iconscout">
          IconScout Store
        </a>
        <span> on </span>
        <a href="https://iconscout.com">IconScout</a>
      </div>
    </footer>
  );
}
