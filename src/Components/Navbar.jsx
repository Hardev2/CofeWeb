import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../Utils/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Gif from '../../public/Image/wordlogo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';

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
  {
    name: 'Store',
    href: '/store',
  },
];

const navbarVariant = {
  hidden: { y: -100, opacity: 1 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close the mobile menu when navigating to another page
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      variants={navbarVariant}
      initial='hidden'
      animate={visible ? 'visible' : 'hidden'}
      className='fixed w-full z-50 border-b-[1px] border-solid border-black-Color lg:px-6  bg-white-Color'>
      <div className='mx-auto lg:px-4 lg:py-2 '>
        <div className='flex items-center justify-between'>
          <nav className='hidden md:flex items-center justify-start gap-8 w-[200px]'>
            {navItem.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='relative group w-fit'>
                <Link
                  to={item.href}
                  key={index}
                  className={cn(
                    'text-[.8rem]',
                    location.pathname === item.href
                      ? 'text-black-Color font-bold'
                      : 'text-zinc-600'
                  )}>
                  {item.name}
                  <motion.span
                    className={cn(
                      'absolute left-0 bottom-0 h-[2px] bg-black-Color w-full origin-left transition-transform duration-300',
                      location.pathname === item.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className='brand-logo p-4 relative lg:right-14  md:block'>
            <Link to='/'>
              <h1 className='font-zodiak text-2xl lg:text-4xl font-extrabold '>
                BB
              </h1>
            </Link>
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
            <nav className='flex flex-col px-4 py-6 space-y-6 gap-2'>
              {navItem.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='relative w-fit group'
                  key={index}
                  variants={itemVariants}>
                  <Link
                    to={item.href}
                    className={cn(
                      'text-5xl font-custom font-bold relative pb-1 duration-300',
                      location.pathname === item.href
                        ? 'text-white-Color'
                        : 'text-zinc-600'
                    )}>
                    {item.name}
                  </Link>
                  <motion.span
                    className={cn(
                      'absolute left-0 bottom-0 h-[2px] bg-white-Color w-full origin-left transition-transform duration-300',
                      location.pathname === item.href
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                className='w-full flex items-end justify-center lg:justify-between '>
                <div>
                  <h1 className='text-zinc-400 text-lg w-[180px] relative bottom-14 select-none'>
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
