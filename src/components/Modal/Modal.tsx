import { Icon } from '@iconify/react/dist/iconify.js';
import cx from 'classnames';
import { useEffect } from 'react';

interface ModalProps {
  className?: string;
  children: React.ReactNode;

  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const Modal = ({
  children,
  className,
  modalOpen = false,
  setModalOpen,
}: ModalProps) => {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  return (
    modalOpen && (
      <>
        <button
          className='fixed left-0 top-0 z-[1001] h-full w-screen bg-gray-700/50 p-4 backdrop-blur-sm'
          onClick={() => setModalOpen(false)}
        ></button>
        <div
          className={cx(
            'fixed left-1/2 top-1/2 z-[1002] mx-auto h-fit max-h-screen w-full -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white shadow-lg dark:bg-slate-800 md:w-1/2',
            className,
          )}
        >
          <button
            className='absolute right-2 top-2 z-[1005] my-auto w-min rounded transition-all hover:scale-110 hover:bg-moonstone/10 md:p-1'
            onClick={() => setModalOpen(false)}
          >
            <Icon icon='ic:round-close' className='size-10 dark:text-white' />
          </button>
          {children}
        </div>
      </>
    )
  );
};
