import Image from 'next/image';

export default function Banner() {
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center rounded-lg bg-indigo-100 px-8 text-center shadow-sm md:h-48 md:flex-row md:px-0 md:text-left">
      <Image
        src="/hearts.png"
        width={600}
        height={600}
        quality={100}
        alt="banner"
        priority
        className="mx-2 mb-3 h-24 w-24 md:mb-0 md:h-38 md:w-38"
      />
      <div className="mb-2 md:mx-4 md:mb-0">
        <p className="text-2xl font-bold text-gray-900 md:text-4xl">
          명지클럽이 탄생했어요!
        </p>
        <p className="text-base font-semibold text-gray-900 md:text-xl">
          명지대 동아리의 모든 것을 명지클럽에서 확인하세요.
        </p>
      </div>
    </div>
  );
}
