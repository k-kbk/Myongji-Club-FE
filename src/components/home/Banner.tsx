import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center rounded-lg bg-blue-100 px-8 text-center shadow-sm md:h-48 md:flex-row md:px-0 md:text-left">
      <Image
        src="/hearts.png"
        width={600}
        height={600}
        quality={100}
        alt="banner"
        priority
        className="mx-2 h-28 w-28 md:h-38 md:w-38"
      />
      <div className="mb-2 px-4 md:mx-4 md:mb-0 md:px-0">
        <p className="mb-0.5 text-2xl font-bold text-gray-900 md:text-4xl">
          명아리가 탄생했어요!
        </p>
        <p className="text-lg font-semibold leading-5 text-gray-900 md:text-xl">
          명지대학교 동아리의 모든 것을 명아리에서 확인해 보세요.
        </p>
      </div>
    </div>
  );
}
