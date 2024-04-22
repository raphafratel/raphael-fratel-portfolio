"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from '@/lib/data'
import Link from 'next/link';
import './style.css'
import { motionNav, motionLink } from './motion';

export default function header() {
  return (
    <header className='header-style'>

      <motion.div
        className='navbar-bg-style'
        {...motionNav}
      >
      </motion.div>

      <nav className='navbar-style'>
        <ul className='nav-ul-style'>
          {links.map((link) => (
            <motion.li
              className='nav-li-style'
              key={link.hash}
              {...motionLink}
            >
              <Link className='nav-link-style' href={link.hash}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

    </header>
  )
}
