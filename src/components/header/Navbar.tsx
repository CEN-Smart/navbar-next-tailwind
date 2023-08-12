'use client'
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import classNames from 'classnames';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenu = useCallback((action: boolean) => {
    setIsMenuOpen(action);
  }, [])

  return (
    <header className={classNames(`flex bg-emerald-500 items-center justify-between md:px-4 lg:px-8`)} >

      {/* Logo to show on Desktop view */}
      <div className={classNames(`pl-2 py-5 `, {
      })}>Logo</div>

      {/* Mobile Menu */}
      <div className={classNames(`
      absolute z-[3] pt-6 md:pt-0 drop-shadow-2xl bg-rose-500 flex items-center justify-between md:hidden w-[70%] transform transition duration-300`, {
        '-translate-x-full': !isMenuOpen,
        'translate-x-0': isMenuOpen,
      })}>


        {/* Logo to show on mobile view */}
        <div className={classNames(`pb-5   pl-4`)}>Logo</div>
        <span onClick={
          () => handleMenu(false)
        } className={classNames(`pb-5   cursor-pointer pr-4`)} > <AiOutlineClose /> </span>
      </div>


      {/* OverLay */}
      <div onClick={
        () => handleMenu(false)
      } className={classNames(`absolute z-[2] bg-gray-500/50 inset-0 transform transition duration-300 md:hidden`, {
        'translate-x-0': isMenuOpen,
        '-translate-x-full': !isMenuOpen
      })}></div>


      {/* Nav Links */}
      <nav className={classNames(`flex flex-col pt-10 md:pt-0 absolute top-16 md:top-0 bottom-0 bg-emerald-300  md:bg-transparent z-[3] w-[70%] md:w-fit transform md:translate-x-0 transition duration-300 md:relative md:flex-row md:flex md:space-x-6`, {
        'translate-x-0': isMenuOpen,
        '-translate-x-full': !isMenuOpen
      })}>
        <Link className='nav__link' href="/">Home</Link>
        <Link className='nav__link' href="/about">About</Link>
        <Link className='nav__link' href="/contact">Contact</Link>
      </nav>

      {/* Hamburger Menu */}
      <span onClick={
        () => handleMenu(true)
      } className={classNames(`md:hidden cursor-pointer pr-2`, {
        'hidden': isMenuOpen,
      })}>
        <GiHamburgerMenu />
      </span>

    </header>
  )
}