export default function ClubInfo() {
  return (
    <div className="mt-4 rounded-lg bg-white px-5 py-4 text-base font-semibold shadow-sm sm:mt-6 sm:px-6 sm:py-5 sm:text-lg">
      <div>
        <span className="mb-0.5 inline-block w-72">
          <span className="mr-3 inline-block w-14 text-gray-400 sm:w-18">
            회장
          </span>
          <span>박수환</span>
        </span>
        <span className="mb-0.5 inline-block">
          <span className="mr-3 inline-block w-14 text-gray-400 sm:w-18">
            연락처
          </span>
          <span>010-0807-4328</span>
        </span>
      </div>
      <div>
        <span className="mb-0.5 inline-block w-72">
          <span className="mr-3 inline-block w-14 text-gray-400 sm:w-18">
            동아리방
          </span>
          <span>S4018</span>
        </span>
        <span className="mb-0.5 inline-block">
          <span className="mr-3 inline-block w-14 text-gray-400 sm:w-18">
            정기모임
          </span>
          <span>매주 수요일 18시</span>
        </span>
      </div>
      <div>
        <span className="mr-3 inline-block w-14 text-gray-400 sm:w-18">
          모집기간
        </span>
        <span>3월 20일 ~ 3월 31일</span>
      </div>
    </div>
  );
}
