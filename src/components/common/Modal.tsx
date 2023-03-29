type ModalType = {
  children: React.ReactNode;
};

export default function Modal({ children }: ModalType) {
  return (
    <div className="fixed top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-20 tracking-tight">
      {children}
    </div>
  );
}
