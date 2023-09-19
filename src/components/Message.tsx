import { Icon } from '@iconify/react';
import { useState } from 'react';
import {
  LabeledInput,
  LabeledTextArea,
} from './custom.library';
import { SectionTitle } from './titles/SectionTitle';
import { Input } from './form/Input';
import { SubTitle } from './SubTitle';

export const Messenger = () => {
  const [open, setOpen] = useState<boolean>();
  const [sent, setSent] = useState<boolean>();
  return (
    <>
      {open ? (
        <div className="fixed top-0 flex h-full w-full flex-col items-center bg-gray-700">
          {sent ? (
            <div className="my-auto w-full">
              <SectionTitle className='text-center'>
                Hey, Thanks for reaching out
              </SectionTitle>
              <SubTitle className='text-center'>
                I'll get back to you at my earliest convenience!
              </SubTitle>
            </div>
          ) : (
            <div className="my-auto w-full">
              <SectionTitle className='text-center'>
                Send me a message
              </SectionTitle>
              <Input className="mx-auto block w-1/5 bg-blue-300" disabled />
              <div className="mx-auto my-4 rounded border p-4 md:w-1/2 [&>*]:my-2">
                <LabeledInput
                  className="rounded border"
                  placeholder="let me know who's there!"
                >
                  Name
                </LabeledInput>
                <LabeledInput
                  className="rounded border"
                  placeholder="so I can get back to you!"
                >
                  Email
                </LabeledInput>
                <LabeledTextArea
                  className="rounded border"
                  placeholder="hey Devin, "
                  rows="5"
                >
                  Message
                </LabeledTextArea>
                <button
                  className="mx-auto block rounded bg-blue-300 px-3 py-1 font-montserrat text-gray-700 hover:scale-105"
                  onClick={() => {
                    setSent(true);
                  }}
                >
                  send
                </button>
              </div>
            </div>
          )}
          <button
            className="fixed right-4 top-4 text-blue-300 hover:scale-105"
            onClick={() => {
              setOpen(false);
              setSent(false);
            }}
          >
            <Icon icon="mdi:close-box" width="50" />
          </button>
        </div>
      ) : (
        <div
          className="fixed bottom-1 right-1 scale-95 transform cursor-pointer transition-all hover:scale-100"
          onClick={() => setOpen(true)}
        >
          <Icon
            icon="uim:comment-message"
            className="text-blue-400"
            width="50"
          />
        </div>
      )}
    </>
  );
};
