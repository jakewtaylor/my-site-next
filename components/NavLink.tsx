import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  children(active: boolean): React.ReactElement;
};

export const NavLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      {children(
        href === '/'
          ? href === router.pathname
          : router.pathname.startsWith(href),
      )}
    </Link>
  );
};
