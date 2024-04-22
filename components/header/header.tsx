"use client";

import React from 'react'
import { motion } from "framer-motion";
import { links } from '@/lib/data'
import Link from 'next/link';
import './style.css'

export default function header() {
  return (
    <header className='header-style'>

      <motion.div className='navbar-bg-style'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}>
      </motion.div>

      <nav className='navbar-style'>
        <ul className='nav-ul-style'>
          {links.map((link) => (
            <motion.li className='nav-li-style' key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
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
