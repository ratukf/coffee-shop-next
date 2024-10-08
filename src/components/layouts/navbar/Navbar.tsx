import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import image from 'coffee/images/nav-coffee-monster.png';
import Image from 'next/image';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: '/',
      name: 'Home',
    },
    {
      id: 2,
      link: '/about',
      name: 'About Us',
    },
    {
      id: 3,
      link: '/products',
      name: 'Products',
    },
  ];

  return (
    <div className="p-14 navbar-wrapper flex justify-between items-center w-full h-20 text-[#242424] bg-white nav z-50">
      <div>
        <h1>
          <Link
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            <Image
              src={image}
              alt="Coffee Monster Logo"
              width={300}
              quality={50}
            />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="font-Kanit nav-link-item px-4 cursor-pointer capitalize font-medium text-[#b2935b] hover:scale-105 hover:text-[#242424] duration-200 link-underline"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;