import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cx from 'classnames';

interface NavButtonProps {
  text: string;
  to: string;
  isMulti?: boolean;
  children?: React.ReactNode;
}
export const NavButton = ({
  text,
  to,
  isMulti = false,
  children,
}: NavButtonProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [show, setShow] = useState(pathname === to);

  useEffect(() => {
    if (pathname === to) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [pathname, to]);

  return (
    <>
      <div className='flex justify-between'>
        <button
          aria-label={`Navigate to page ${text}`}
          onClick={() => navigate(to)}
          className='flex p-2 text-left hover:underline'
        >
          {text}
        </button>
        {isMulti && (
          <button
            aria-label={`Toggle ${text} menu`}
            onClick={() => setShow(!show)}
          >
            <Icon
              icon='akar-icons:chevron-right'
              className={cx('my-auto ml-2 size-6', {
                'rotate-90 transform': show ?? pathname === to,
              })}
            />
          </button>
        )}
      </div>
      <div className='flex flex-col px-4'>
        {(show ?? pathname === to) && children}
      </div>
    </>
  );
};
