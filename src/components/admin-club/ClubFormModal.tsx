import { Dispatch, SetStateAction } from 'react';
import Modal from '../common/Modal';
import ModalPortal from '../common/ModalPortal';

type ClubFormModalType = {
  setState: Dispatch<SetStateAction<boolean>>;
};

export default function ClubFormModal({ setState }: ClubFormModalType) {
  function handleClickModal() {
    setState((prev) => !prev);
  }

  return (
    <ModalPortal>
      <Modal>
        <div className="flex h-[40rem] w-[50rem] flex-col items-center justify-center rounded-lg bg-gray-50 px-10 tracking-tight shadow-sm">
          <form>
            <h1 className="mt-2 w-full text-left text-3xl font-bold">
              동아리 추가하기
            </h1>
            <div className="mt-18 grid w-full grid-cols-2 justify-items-center gap-5 text-base font-semibold sm:text-lg">
              <label htmlFor="category" className="w-[19rem] text-gray-500">
                분과
                <input
                  id="category"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
              <label htmlFor="club-name" className="w-[19rem] text-gray-500 ">
                동아리명
                <input
                  id="club-name"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
              <label htmlFor="club-leader" className="w-[19rem] text-gray-500">
                회장
                <input
                  id="club-leader"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
              <label htmlFor="club-room" className="w-[19rem] text-gray-500 ">
                동아리방
                <input
                  id="club-room"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
              <label htmlFor="club-room" className="w-[19rem] text-gray-500 ">
                아이디
                <input
                  id="club-id"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
              <label htmlFor="club-room" className="w-[19rem] text-gray-500 ">
                비밀번호
                <input
                  id="club-pw"
                  type="text"
                  className="rounded-lg px-4 py-2 text-gray-800 shadow-sm outline-none"
                />
              </label>
            </div>
            <div className="mt-18 flex w-full justify-end text-sm font-semibold sm:text-base">
              <button
                type="button"
                className="mr-1 rounded-lg bg-gray-200 bg-opacity-50 px-4 py-2 text-gray-600 hover:opacity-50"
                onClick={handleClickModal}
              >
                취소
              </button>
              <button
                type="button"
                className="ml-1 rounded-lg bg-blue-200 bg-opacity-50 px-4 py-2 font-bold text-blue-500 hover:opacity-50"
              >
                추가하기
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </ModalPortal>
  );
}
