'use client';

import Link from 'next/link';

const NavLink = ({ href, children, active }) => {
  return (
    <Link
      href={href}
      className="font-medium transition-colors "
    >
      {children}
    </Link>
  );
};

export default NavLink;