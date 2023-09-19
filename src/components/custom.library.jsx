import { Icon } from '@iconify/react';
import { useState } from 'react';

export const LabeledIcon = ({ children, className, icon, ...rest }) => {
  return (
    <p className={`flex cursor-pointer transition-all ${className}`} {...rest}>
      <Icon icon={icon} width="40" />
      <span className="my-auto pl-2 font-lato text-2xl font-light uppercase">
        {children}
      </span>
    </p>
  );
};



export const SectionContent = ({ children, className }) => {
  return <p className={`font-lato text-gray-200 ${className}`}>{children}</p>;
};


export const LabeledInput = ({ children, className, ...rest }) => {
  return (
    <div className={`p-2 font-montserrat text-white ${className}`}>
      <label className="">{children}</label>
      <input
        className="w-full bg-transparent outline-none ring-transparent"
        {...rest}
      />
    </div>
  );
};

export const LabeledTextArea = ({ children, className, ...rest }) => {
  return (
    <div className={`p-2 font-montserrat text-white ${className}`}>
      <label className="">{children}</label>
      <textarea
        className="w-full bg-transparent outline-none ring-transparent"
        {...rest}
      />
    </div>
  );
};

export const Accordion = ({ children, className, title }) => {
  const [open, setOpen] = useState();
  return (
    <div
      className={`h-fit ${className}`}
      onClick={() => (open ? setOpen() : setOpen(true))}
    >
      {title}
      <div
        className={`duration-900 overflow-hidden transition-all ${open ? 'h-56' : 'h-0'
          }`}
      >
        {children}
      </div>
    </div>
  );
};
