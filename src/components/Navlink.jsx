'use client';

import Link from 'next/link';

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-secondary font-medium hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

export default NavLink;