import React, { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  label: React.ReactNode;
};

export const DropDown = ({ children, label }: Props) => {
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(
    (e: any) => {
      if (
        menu.current &&
        container.current &&
        open &&
        !(
          menu.current.contains(e.target) ||
          container.current.contains(e.target)
        )
      ) {
        setOpen(false);
      }
    },
    [open],
  );

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [menu, closeMenu]);

  return (
    <div ref={container} className="relative z-50 w-full">
      <div ref={menu} onClick={() => setOpen(!open)}>
        {label}
      </div>
      {open ? children : null}
    </div>
  );
};
