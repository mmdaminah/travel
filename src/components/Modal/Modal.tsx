import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Modal = ({ children }: Props) => {
  return (
    <div className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-black bg-opacity-60">
      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
};
