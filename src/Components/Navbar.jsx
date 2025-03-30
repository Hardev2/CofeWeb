import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../Utils/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Gif from '../../public/Image/coffeeGif.gif';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const navItem = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Menu',
    href: '/menu',
  },
];

const navbarVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

const menuVariant = {
  hidden: {
    opacity: 0,
    width: '0',
    x: '100vw',
  },
  visible: {
    opacity: 1,
    width: 'calc(100vw)',
    x: '0',
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    width: '0vw',
    x: '100vw',
    transition: {
      duration: 0.3,
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  return (
    <motion.header
      variants={navbarVariant}
      initial='hidden'
      animate='visible'
      className='fixed w-full z-50 border-b-[1px] border-solid border-black-Color lg:px-6  bg-white-Color'>
      <div className='mx-auto lg:px-4 lg:py-2 '>
        <div className='flex items-center justify-between'>
          <nav className='hidden md:flex items-center justify-center gap-10'>
            {navItem.map((item, index) => (
              <Link
                to={item.href}
                key={index}
                className={cn(
                  '',
                  location.pathname === item.href
                    ? 'text-black-Color'
                    : 'text-zinc-600'
                )}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className='brand-logo p-4 relative lg:right-14  md:block'>
            <h1 className='font-custom text-4xl font-extrabold '>
              byte & bean
            </h1>
          </div>
          <div className='hidden md:flex items-center justify-center gap-6 text-lg text-zinc-600'>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>

          <motion.button
            className='md:hidden inline-flex items-center justify-center bg-transparent z-30 text-right hover:bg-zinc-500 rounded-full h-9 w-9 duration-30 relative right-2'
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}>
            <AnimatePresence mode='wait' initial={false}>
              {isOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <FiX className='text-white-Color hover:text-white-Color duration-300 text-2xl' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  <FiMenu className='text-black-Color hover:text-white-Color duration-300 text-2xl' />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='md:hidden fixed left-0 top-0 inset-0 h-[110vh] bg-black-Color overflow-hidden'>
            <nav className='flex flex-col px-4 py-6 space-y-6 gap-8'>
              {navItem.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={item.href}
                    className={cn(
                      'text-5xl font-custom font-bold hover:text-white-Color duration-300',
                      location.pathname === item.href
                        ? ' text-white-Color'
                        : 'text-zinc-600'
                    )}>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className='w-full flex items-end justify-center lg:justify-between '>
                <div>
                  <h1 className='text-zinc-400 text-lg w-[180px]'>
                    Just brewed happiness in a cup!
                  </h1>
                </div>
                <img
                  src={Gif}
                  alt='Gif Image'
                  className='w-[200px] h-[270px] rounded-md'
                />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
