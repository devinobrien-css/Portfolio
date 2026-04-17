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
          className='fixed left-0 top-0 z-[1001] h-full w-screen bg-neutral-800/40 p-4 backdrop-blur-sm dark:bg-neutral-900/60'
          onClick={() => setModalOpen(false)}
        ></button>
        <div
          className={cx(
            'fixed left-1/2 top-1/2 z-[1002] mx-auto h-fit max-h-screen w-full -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-neutral-200 bg-white/95 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-800/95 dark:shadow-none md:w-1/2',
            className,
          )}
        >
          <button
            className='absolute right-2 top-2 z-[1005] my-auto w-min rounded-full bg-neutral-100/50 p-1 text-neutral-600 transition-all hover:scale-110 hover:bg-neutral-200/80 hover:text-neutral-900 dark:bg-neutral-700/50 dark:text-white dark:hover:bg-neutral-700 md:p-2'
            onClick={() => setModalOpen(false)}
          >
            <Icon icon='ic:round-close' className='size-8 dark:text-white' />
          </button>
          {children}
        </div>
      </>
    )
  );
};
