import Head from 'next/head';
import SearchBar from '@/components/home/SearchBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>명지클럽 | 동아리 통합시스템</title>
      </Head>
      <div className="mt-30 flex w-full max-w-screen-lg flex-col items-center px-6 tracking-tight text-gray-700 md:px-4">
        <SearchBar />
      </div>
    </>
  );
}
