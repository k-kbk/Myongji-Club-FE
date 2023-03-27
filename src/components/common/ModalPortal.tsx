import ReactDom from 'react-dom';

type ModalPortalType = {
  children: React.ReactNode;
};

export default function ModalPortal({ children }: ModalPortalType) {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  return ReactDom.createPortal(children, modalRoot);
}
